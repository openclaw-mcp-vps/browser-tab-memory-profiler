import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TabMemory – Find Memory-Hogging Browser Tabs Automatically",
  description: "Chrome extension that profiles tab memory usage and suggests closures. Stop browser slowdowns caused by memory-hungry tabs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="62cb44b3-9a9b-4674-b2c6-fcdfd20531c7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
