import type { AppProps } from "next/app";
import AppShell from "../src/components/AppShell";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}