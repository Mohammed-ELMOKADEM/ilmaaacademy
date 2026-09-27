import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">
            <Image
              src="/logo.png"
              alt="أكاديمية إلماع للتكوين الحديثي"
              className="logo-img-footer"
              width={180}
              height={90}
            />
          </div>
          <p>أكاديمية إلكترونية متخصصة في الحديث النبوي الشريف وعلومه.</p>
        </div>
        <div className="footer-links">
          <h4>روابط سريعة</h4>
          <ul>
            <li>
              <Link href="/">الرئيسية</Link>
            </li>
            <li>
              <Link href="/#levels">المستويات</Link>
            </li>
            <li>
              <Link href="/#tracks">المسارات</Link>
            </li>
            <li>
              <Link href="/contact">تواصل معنا</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>تواصل معنا</h4>
          <p>
            البريد الإلكتروني:{" "}
            <a
              href="mailto:contact@ilmaaacademy.site"
              className="text-white"
            >
              contact@ilmaaacademy.site
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          جميع الحقوق محفوظة &copy; أكاديمية إلماع للتكوين الحديثي 2026
        </p>
      </div>
    </footer>
  );
}
