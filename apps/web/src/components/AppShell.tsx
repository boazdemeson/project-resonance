import Link from "next/link";
import { ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0b1220", color: "#e5e7eb" }}>
      <aside style={{ width: 240, borderRight: "1px solid #1f2937", padding: 16 }}>
        <div style={{ fontWeight: 700, letterSpacing: 0.4 }}>Resonance</div>

        <nav style={{ marginTop: 16, display: "grid", gap: 8 }}>
          <Link href="/" style={{ color: "#e5e7eb", textDecoration: "none" }}>Dashboard</Link>
          <Link href="/sessions" style={{ color: "#e5e7eb", textDecoration: "none" }}>Sessions</Link>
          <Link href="/projects" style={{ color: "#e5e7eb", textDecoration: "none" }}>Music Projects</Link>
        </nav>
      </aside>

      <div style={{ flex: 1 }}>
        <header style={{ height: 56, borderBottom: "1px solid #1f2937", display: "flex", alignItems: "center", padding: "0 16px", justifyContent: "space-between" }}>
          <div style={{ opacity: 0.9 }}>Workspace</div>
          <div style={{ opacity: 0.7 }}>Ctrl+K (later)</div>
        </header>

        <main style={{ padding: 16, maxWidth: 960 }}>{children}</main>
      </div>
    </div>
  );
}