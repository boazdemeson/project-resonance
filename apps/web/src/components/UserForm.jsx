import { useState } from "react";

export default function UserForm({ onUserCreated, setError }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setSubmitting(true);
      setError("");

      await onUserCreated({ email, name });

      setEmail("");
      setName("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6"
    >
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
        {submitting ? "Creating..." : "Create user"}
      </button>
    </form>
  );
}