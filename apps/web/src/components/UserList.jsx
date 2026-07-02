export default function UserList({ users, loading, onRefresh, onDelete }) {
  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">All users</h2>

        <button
          type="button"
          onClick={onRefresh}
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
                <p className="font-medium text-white">
                  {user.name || "Unnamed User"}
                </p>
                <p className="text-sm text-slate-400">{user.email}</p>
              </div>

              <button
                type="button"
                onClick={() => onDelete(user.id)}
                className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}