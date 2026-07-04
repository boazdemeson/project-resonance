import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createSession, listSessions, Session } from "../src/services/sessionsApi";

export default function SessionsPage() {
  // TEMP until auth exists:
  const ownerId = "cmr5zy0jp000011ic3p9ojcwk";

  const [sessions, setSessions] = useState<Session[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  async function refresh() {
    setError("");
    try {
      const data = await listSessions(ownerId);
      setSessions(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load sessions");
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function onCreate() {
    setError("");
    try {
      await createSession({ title, description: description || undefined, ownerId });
      setTitle("");
      setDescription("");
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create session");
    }
  }

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Sessions</h1>
        <p style={{ opacity: 0.8, marginTop: 6 }}>Capture first. Organize later.</p>
      </div>

      {error ? <div style={{ color: "#fca5a5" }}>{error}</div> : null}

      <section style={{ border: "1px solid #1f2937", borderRadius: 12, padding: 16, background: "#0f172a" }}>
        <div style={{ fontWeight: 600 }}>Create session</div>
        <div style={{ display: "grid", gap: 8, marginTop: 12 }}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Session title"
            style={{ padding: 10, borderRadius: 10, border: "1px solid #334155", background: "#020617", color: "#e5e7eb" }}
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optional)"
            style={{ padding: 10, borderRadius: 10, border: "1px solid #334155", background: "#020617", color: "#e5e7eb" }}
          />
          <button
            onClick={onCreate}
            disabled={!title.trim()}
            style={{ padding: 10, borderRadius: 10, border: "1px solid #2563eb", background: "#2563eb", color: "white", fontWeight: 600, opacity: !title.trim() ? 0.6 : 1 }}
          >
            Create
          </button>
        </div>
      </section>

      <section style={{ border: "1px solid #1f2937", borderRadius: 12, padding: 16, background: "#0f172a" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 600 }}>All sessions</div>
          <button
            onClick={refresh}
            style={{ padding: "8px 10px", borderRadius: 10, border: "1px solid #334155", background: "transparent", color: "#e5e7eb" }}
          >
            Refresh
          </button>
        </div>

        <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
          {sessions.length === 0 ? (
            <div style={{ opacity: 0.8 }}>No sessions yet.</div>
          ) : (
            sessions.map((s) => (
              <Link
                key={s.id}
                href={`/sessions/${s.id}`}
                style={{ textDecoration: "none", color: "#e5e7eb" }}
              >
                <div style={{ border: "1px solid #1f2937", borderRadius: 12, padding: 12, background: "#020617" }}>
                  <div style={{ fontWeight: 600 }}>{s.title}</div>
                  <div style={{ opacity: 0.75, marginTop: 4, fontSize: 14 }}>{s.description || "No description"}</div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}