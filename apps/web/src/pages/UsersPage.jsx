import React, { useEffect, useState } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function loadUsers() {
    try {
      setLoading(true);
      setError('');
      const response = await fetch('http://localhost:4000/users');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to load users');
      }

      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setSubmitting(true);
      setError('');

      const response = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create user');
      }

      setEmail('');
      setName('');
      await loadUsers();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id) {
    try {
      setError('');
      const response = await fetch(`http://localhost:4000/users/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete user');
      }

      await loadUsers();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="mt-2 text-sm text-slate-300">Connected to your Express + Prisma API at http://localhost:4000.</p>

        <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Create user</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none"
              required
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white disabled:opacity-50"
          >
            {submitting ? 'Creating...' : 'Create user'}
          </button>
        </form>

        {error ? (
          <div className="mt-6 rounded-lg border border-red-800 bg-red-950 px-4 py-3 text-red-200">
            {error}
          </div>
        ) : null}

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">All users</h2>
            <button
              type="button"
              onClick={loadUsers}
              className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-200"
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <p className="mt-4 text-slate-300">Loading users...</p>
          ) : users.length === 0 ? (
            <p className="mt-4 text-slate-300">No users yet.</p>
          ) : (
            <div className="mt-4 space-y-3">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 px-4 py-4"
                >
                  <div>
                    <p className="font-medium text-white">{user.name || 'Unnamed User'}</p>
                    <p className="text-sm text-slate-400">{user.email}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(user.id)}
                    className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}