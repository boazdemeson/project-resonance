import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import { fetchUsers, createUser, deleteUser } from "../services/usersApi";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadUsers() {
    try {
      setLoading(true);
      setError("");
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleUserCreated(userData) {
    try {
      setError("");
      await createUser(userData);
      await loadUsers();
    } catch (err) {
      throw err;
    }
  }

  async function handleDeleteUser(id) {
    try {
      setError("");
      await deleteUser(id);
      await loadUsers();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Users</h1>

        {error ? (
          <div className="mt-4 rounded-lg border border-red-800 bg-red-950 px-4 py-3 text-red-300">
            {error}
          </div>
        ) : null}

        <UserForm onUserCreated={handleUserCreated} setError={setError} />

        <UserList
          users={users}
          loading={loading}
          onRefresh={loadUsers}
          onDelete={handleDeleteUser}
        />
      </div>
    </div>
  );
}