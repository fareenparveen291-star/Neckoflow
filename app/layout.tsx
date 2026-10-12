export const metadata = { title: "Necko Flow - Face Lock" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0a0a0a", fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
    }
