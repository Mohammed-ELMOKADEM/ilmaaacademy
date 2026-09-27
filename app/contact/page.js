"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      `[تواصل من الموقع]: ${formData.subject || "استفسار"}`
    );
    const body = encodeURIComponent(
      `الاسم: ${formData.name}\nالبريد الإلكتروني: ${formData.email}\n\nنص الرسالة:\n${formData.message}`
    );
    return `mailto:contact@ilmaaacademy.site?subject=${subject}&body=${body}`;
  };

  const getGmailUrl = () => {
    const su = encodeURIComponent(
      `[تواصل من الموقع]: ${formData.subject || "استفسار"}`
    );
    const body = encodeURIComponent(
      `الاسم: ${formData.name}\nالبريد الإلكتروني: ${formData.email}\n\nنص الرسالة:\n${formData.message}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=contact@ilmaaacademy.site&su=${su}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("opened");

    // Launch default email client
    window.location.href = getMailtoUrl();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@ilmaaacademy.site");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <Navbar />

      <header className="page-header">
        <div className="container">
          <h1>تواصل معنا</h1>
          <p className="lead">
            يسعدنا تواصلك معنا للإجابة على جميع استفساراتك حول برامج الأكاديمية.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container contact-container">
          <div className="contact-info">
            <h3>معلومات التواصل المباشر</h3>
            <p>
              يمكنك مراسلتنا مباشرة عبر البريد الإلكتروني أو تعبئة النموذج،
              وسيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
            </p>

            <div className="info-card">
              <div className="info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="info-content">
                <h4>البريد الإلكتروني المباشر</h4>
                <a
                  href="mailto:contact@ilmaaacademy.site"
                  className="contact-link"
                >
                  contact@ilmaaacademy.site
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="btn btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                marginTop: "10px",
                padding: "8px 16px",
                fontSize: "14px",
              }}
            >
              {copied ? (
                <>
                  <span>✓</span> تم نسخ البريد بنجاح!
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  نسخ عنوان البريد الإلكتروني
                </>
              )}
            </button>
          </div>

          <div className="contact-form-wrapper">
            <h3>أرسل رسالة مباشرة</h3>

            {status === "opened" && (
              <div
                className="success-message"
                style={{
                  backgroundColor: "#e8f5e9",
                  color: "#1b5e20",
                  border: "1px solid #a5d6a7",
                  padding: "16px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              >
                <p style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>
                  ✓ تم تجهيز الرسالة وفتح تطبيق البريد لديك!
                </p>
                <p style={{ margin: "0 0 12px 0", fontSize: "14px" }}>
                  إذا لم يفتح التطبيق تلقائياً، يمكنك إرسالها مباشرة بالضغط على أحد
                  الخيارات:
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <a
                    href={getMailtoUrl()}
                    className="btn btn-primary"
                    style={{ fontSize: "13px", padding: "8px 14px" }}
                  >
                    فتح في تطبيق البريد (Outlook / Mail)
                  </a>
                  <a
                    href={getGmailUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: "13px", padding: "8px 14px" }}
                  >
                    فتح في بريد Gmail مباشرة
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">الاسم الكريم</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="أدخل اسمك"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">الموضوع</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="عنوان الرسالة"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="اكتب رسالتك هنا..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                إرسال عبر البريد الإلكتروني المباشر
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
