import TanstackProvider from "./tanstackProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head />
      <body>
        <div className="prose w-full w-min-none">
          <TanstackProvider>{children}</TanstackProvider>
        </div>
      </body>
    </html>
  );
}
