import { useEffect, useState } from 'react';
import Link from 'next/link';
import AppShell from '../src/components/AppShell';
import {
  listSessions,
  createSession,
  updateSession,
  deleteSession,
  Session,
} from '../src/services/sessionsApi';

export default function SessionsPageWrapper() {
  return (
    <AppShell>
      <SessionsPage />
    </AppShell>
  );
}

function SessionsPage() {
  // TODO: replace with auth when available
  const ownerId = 'cmr5zy0jp000011ic3p9ojcwk';

  const [sessions, setSessions] = useState<Session[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  async function refresh() {
    setLoading(true);
    setError('');
    try {
      const data = await listSessions(ownerId);
      setSessions(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load sessions');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function onCreate() {
    if (!title.trim()) return;
    setCreating(true);
    setError('');
    try {
      await createSession({
        title: title.trim(),
        description: description.trim() || undefined,
        ownerId,
      });
      setTitle('');
      setDescription('');
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to create session');
    } finally {
      setCreating(false);
    }
  }

  async function onDelete(id: string, sessionTitle: string) {
    const confirmed = window.confirm(
      `Delete "${sessionTitle}"? This action cannot be undone.`
    );

    if (!confirmed) return;

    setDeletingId(id);
    setError('');

    try {
      await deleteSession(id);

      if (editingId === id) {
        setEditingId(null);
        setEditTitle('');
        setEditDescription('');
      }

      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to delete session');
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Sessions</h1>
        <p style={{ marginTop: 6, color: '#9FB6C9' }}>Capture first. Organize later.</p>
      </div>

      {error ? (
        <div
          style={{
            padding: 12,
            background: '#3F1E1E',
            color: '#FFDADA',
            borderRadius: 10,
          }}
        >
          {error}
        </div>
      ) : null}

      <section
        style={{
          padding: 14,
          borderRadius: 12,
          background: '#071827',
          border: '1px solid #102233',
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Create session</div>
        <div style={{ display: 'grid', gap: 8 }}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            style={{
              padding: 10,
              borderRadius: 8,
              border: '1px solid #16313f',
              background: '#02121A',
              color: '#E6EEF8',
            }}
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optional)"
            style={{
              padding: 10,
              borderRadius: 8,
              border: '1px solid #16313f',
              background: '#02121A',
              color: '#E6EEF8',
            }}
          />
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={onCreate}
              disabled={creating || !title.trim()}
              style={{
                padding: '8px 12px',
                borderRadius: 8,
                background: '#0EA5A4',
                color: '#042022',
                fontWeight: 700,
                border: 'none',
                opacity: creating || !title.trim() ? 0.6 : 1,
              }}
            >
              {creating ? 'Creating...' : 'Create'}
            </button>
            <button
              onClick={refresh}
              style={{
                padding: '8px 12px',
                borderRadius: 8,
                background: 'transparent',
                color: '#E6EEF8',
                border: '1px solid #16313f',
              }}
            >
              Refresh
            </button>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: 14,
          borderRadius: 12,
          background: '#071827',
          border: '1px solid #102233',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 600 }}>All sessions</div>
          <div style={{ color: '#9FB6C9', fontSize: 13 }}>
            {loading ? 'Loading...' : `${sessions.length} items`}
          </div>
        </div>

        <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
          {sessions.length === 0 && !loading ? <div style={{ opacity: 0.8 }}>No sessions yet.</div> : null}

          {sessions.map((s) => (
            <div
              key={s.id}
              style={{
                padding: 12,
                borderRadius: 10,
                background: '#02121A',
                border: '1px solid #102233',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {editingId === s.id ? (
                <div style={{ flex: 1, display: 'flex', gap: 8, alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      placeholder="Title"
                      style={{
                        width: '100%',
                        padding: 8,
                        borderRadius: 8,
                        border: '1px solid #16313f',
                        background: '#02121A',
                        color: '#E6EEF8',
                      }}
                    />
                    <input
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      placeholder="Description (optional)"
                      style={{
                        width: '100%',
                        padding: 8,
                        borderRadius: 8,
                        border: '1px solid #16313f',
                        background: '#02121A',
                        color: '#E6EEF8',
                        marginTop: 8,
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      onClick={async () => {
                        if (!editTitle.trim()) return setError('Title is required');
                        setError('');
                        try {
                          await updateSession(s.id, {
                            title: editTitle.trim(),
                            description: editDescription.trim() || undefined,
                          });
                          setEditingId(null);
                          await refresh();
                        } catch (e) {
                          setError(e instanceof Error ? e.message : 'Failed to update session');
                        }
                      }}
                      style={{
                        padding: '8px 10px',
                        borderRadius: 8,
                        background: '#0EA5A4',
                        color: '#042022',
                        fontWeight: 700,
                        border: 'none',
                      }}
                    >
                      Save
                    </button>

                    <button
                      onClick={() => {
                        setEditingId(null);
                      }}
                      style={{
                        padding: '8px 10px',
                        borderRadius: 8,
                        background: 'transparent',
                        color: '#E6EEF8',
                        border: '1px solid #16313f',
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 12 }}>
                  <Link href={`/sessions/${s.id}`} style={{ textDecoration: 'none', color: '#E6EEF8', flex: 1 }}>
                    <div>
                      <div style={{ fontWeight: 700 }}>{s.title}</div>
                      <div style={{ marginTop: 6, opacity: 0.75 }}>{s.description || 'No description'}</div>
                    </div>
                  </Link>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
                    <div style={{ fontSize: 12, opacity: 0.75 }}>
                      {new Date(s.updatedAt).toLocaleString()}
                    </div>

                    <div style={{ display: 'flex', gap: 8 }}>
                      <button
                        onClick={() => {
                          setEditingId(s.id);
                          setEditTitle(s.title);
                          setEditDescription(s.description || '');
                        }}
                        style={{
                          padding: '6px 10px',
                          borderRadius: 8,
                          background: 'transparent',
                          color: '#E6EEF8',
                          border: '1px solid #16313f',
                        }}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => onDelete(s.id, s.title)}
                        disabled={deletingId === s.id}
                        style={{
                          padding: '6px 10px',
                          borderRadius: 8,
                          background: 'transparent',
                          color: '#FFB4B4',
                          border: '1px solid #5A2323',
                          opacity: deletingId === s.id ? 0.6 : 1,
                        }}
                      >
                        {deletingId === s.id ? 'Deleting...' : 'Delete'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}