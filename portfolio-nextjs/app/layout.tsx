import "./globals.css";

export const metadata = {
  title: "Portfolio | Frontend Developer & UI/UX Designer",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
