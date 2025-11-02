export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <header style={{ padding: "12px 16px", borderBottom: "1px solid #e5e5e5" }}>
          <a href="/" style={{ marginRight: 12 }}>Főoldal</a>
          <a href="/apple" style={{ marginRight: 12 }}>Alma</a>
          <a href="/pear" style={{ marginRight: 12 }}>Körte</a>
          <a href="/banan">banán</a>

        </header>
        <main style={{ maxWidth: 800, margin: "0 auto", padding: "24px" }}>
          {children}
        </main>
        <footer style={{ padding: "12px 16px", borderTop: "1px solid #e5e5e5", textAlign: "center" }}>
          © {new Date().getFullYear()} Next.js példa
        </footer>
      </body>
    </html>
  );
}