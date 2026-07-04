import { useEffect, useState } from "react";
import { getUsers } from "../src/services/usersApi";

type User = {
  id: string;
  email: string;
  name: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch((e) => setError(e instanceof Error ? e.message : "Unknown error"));
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Resonance (Next.js) — Users</h1>

      {error ? <p style={{ color: "crimson" }}>{error}</p> : null}

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.email} {u.name ? `— ${u.name}` : ""}
          </li>
        ))}
      </ul>
    </main>
  );
}