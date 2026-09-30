import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "أكاديمية إلماع للتكوين الحديثي",
  description:
    "أكاديمية إلكترونية تقدم برامج تعليمية وتربوية عن بعد في الحديث النبوي الشريف وعلومه.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
