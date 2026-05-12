import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Lurker Purge Scheduler – Auto-remove inactive members",
  description: "Automatically remove inactive Discord members based on inactivity rules. Keep your server clean and engaged."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6d7b52c7-513c-4430-8b91-b30f9b12ed2d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
