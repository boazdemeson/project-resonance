import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { listSnapshots, Snapshot, createSnapshot } from "../../src/services/snapshotsApi";

export default function SessionDetailPage() {
  const router = useRouter();

  // stable sessionId state
  const [sessionId, setSessionId] = useState<string>("");

  // derive id from router when ready, otherwise fallback to window pathname
  useEffect(() => {
    if (sessionId) return; // already set

    if (router?.isReady && router?.query?.id) {
      setSessionId(String(router.query.id));
      return;
    }

    if (typeof window !== "undefined") {
      const parts = window.location.pathname.split("/").filter(Boolean);
      // expecting /sessions/<id>
      const maybeId = parts[parts.length - 1];
      if (maybeId) setSessionId(maybeId);
    }
  }, [router, sessionId]);

  // TEMP until auth exists:
  const createdBy = "cmr5zy0jp000011ic3p9ojcwk";

  const [snapshots, setSnapshots] = useState<Snapshot[]>([]);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function refresh() {
    if (!sessionId) return;
    setError("");
    try {
      const data = await listSnapshots(sessionId);
      setSnapshots(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load snapshots");
    }
  }

  useEffect(() => {
    if (sessionId) refresh();
  }, [sessionId]);

  async function onCreateSnapshot() {
    if (!sessionId) {
      setError("sessionId is not ready yet. Try again in a moment.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const payload = {
        sessionId,
        createdBy,
        note: note || undefined,
        data: { createdAt: new Date().toISOString(), note },
      };
      await createSnapshot(payload);
      setNote("");
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create snapshot");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Session</h1>
        <div style={{ opacity: 0.75, marginTop: 6 }}>ID: {sessionId || "loading..."}</div>
      </div>

      {error ? <div style={{ color: "#fca5a5" }}>{error}</div> : null}

      <section style={{ border: "1px solid #1f2937", borderRadius: 12, padding: 16, background: "#0f172a" }}>
        <div style={{ fontWeight: 600 }}>Create snapshot (immutable)</div>
        <div style={{ display: "grid", gap: 8, marginTop: 12 }}>
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Snapshot note (optional)"
            style={{ padding: 10, borderRadius: 10, border: "1px solid #334155", background: "#020617", color: "#e5e7eb" }}
          />
          <button
            onClick={onCreateSnapshot}
            disabled={!sessionId || submitting}
            style={{
              padding: 10,
              borderRadius: 10,
              border: "1px solid #16a34a",
              background: "#16a34a",
              color: "white",
              fontWeight: 600,
              opacity: !sessionId || submitting ? 0.6 : 1,
            }}
          >
            {submitting ? "Saving..." : "Save snapshot"}
          </button>
          <button
            onClick={refresh}
            style={{ padding: 10, borderRadius: 10, border: "1px solid #334155", background: "transparent", color: "#e5e7eb" }}
          >
            Refresh snapshots
          </button>
        </div>
      </section>

      <section style={{ border: "1px solid #1f2937", borderRadius: 12, padding: 16, background: "#0f172a" }}>
        <div style={{ fontWeight: 600 }}>Snapshots</div>
        <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
          {snapshots.length === 0 ? (
            <div style={{ opacity: 0.8 }}>No snapshots yet.</div>
          ) : (
            snapshots.map((s) => (
              <div key={s.id} style={{ border: "1px solid #1f2937", borderRadius: 12, padding: 12, background: "#020617" }}>
                <div style={{ fontWeight: 600 }}>{s.note || "Snapshot"}</div>
                <pre style={{ marginTop: 6, whiteSpace: "pre-wrap" }}>{JSON.stringify(s.data, null, 2)}</pre>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}