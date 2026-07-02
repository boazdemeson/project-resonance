import "dotenv/config";
import express from "express";
import cors from "cors";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const app = express();
const PORT = Number(process.env.PORT ?? 4000);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

app.use(cors());
app.use(express.json());

function getPrismaErrorCode(error: unknown) {
  if (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof (error as { code: unknown }).code === "string"
  ) {
    return (error as { code: string }).code;
  }

  return null;
}

app.get("/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true, service: "api", database: "connected" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      service: "api",
      database: "disconnected",
    });
  }
});

app.get("/users", async (_req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { id: "asc" },
    });

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ error: "Invalid user id" });
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "Valid email is required" });
    }

    if (name !== undefined && typeof name !== "string") {
      return res.status(400).json({ error: "Name must be a string" });
    }

    const user = await prisma.user.create({
      data: {
        email: email.trim(),
        name: typeof name === "string" ? name.trim() : null,
      },
    });

    return res.status(201).json(user);
  } catch (error) {
    console.error(error);

    if (getPrismaErrorCode(error) === "P2002") {
      return res.status(409).json({ error: "Email already exists" });
    }

    return res.status(500).json({ error: "Internal server error" });
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { email, name } = req.body;

    if (Number.isNaN(id)) {
      return res.status(400).json({ error: "Invalid user id" });
    }

    if (email !== undefined && typeof email !== "string") {
      return res.status(400).json({ error: "Email must be a string" });
    }

    if (name !== undefined && name !== null && typeof name !== "string") {
      return res.status(400).json({ error: "Name must be a string or null" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const data: { email?: string; name?: string | null } = {};

    if (email !== undefined) {
      const trimmedEmail = email.trim();

      if (!trimmedEmail) {
        return res.status(400).json({ error: "Email cannot be empty" });
      }

      data.email = trimmedEmail;
    }

    if (name !== undefined) {
      data.name = name === null ? null : name.trim();
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data,
    });

    return res.json(updatedUser);
  } catch (error) {
    console.error(error);

    if (getPrismaErrorCode(error) === "P2002") {
      return res.status(409).json({ error: "Email already exists" });
    }

    return res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ error: "Invalid user id" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    await prisma.user.delete({
      where: { id },
    });

    return res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});