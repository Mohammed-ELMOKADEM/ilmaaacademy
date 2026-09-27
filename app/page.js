import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>
              أكاديمية إلماع <br />
              للتكوين الحديثي
            </h1>
            <p className="lead">
              أكاديمية إلكترونية، تقدِّم برامج تعليمية وتربوية (عن بعد)
              للرَّاغبين في تحصيل الكفاءة في الحديث النبوي الشريف وعلومه،
              بإشراف وتأطير ثُلَّة من المتخصِّصين.
            </p>
            <div className="hero-buttons">
              <Link href="#levels" className="btn btn-primary">
                اكتشف المزيد
              </Link>
              <Link href="#tracks" className="btn btn-secondary">
                تصفح البرامج
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder animate-float">
              <div className="decorative-circle"></div>
              <div className="decorative-book"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Levels Section */}
      <section id="levels" className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>مستويات التكوين</h2>
            <p>رحلة علمية متدرجة تبني قدراتك في علوم الحديث</p>
          </div>
          <div className="grid cards-3">
            <div className="card level-card">
              <div className="card-number">1</div>
              <h3>أساس</h3>
              <p>ضبط المصطلحات واستيعاب سياقات توظيفها.</p>
            </div>
            <div className="card level-card">
              <div className="card-number">2</div>
              <h3>بناء</h3>
              <p>مراكمة المعارف، وترسيخ القواعد وإحكامها.</p>
            </div>
            <div className="card level-card">
              <div className="card-number">3</div>
              <h3>مِراس</h3>
              <p>التدريب على ممارسة البحث الحديثي رواية ودراية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="section">
        <div className="container">
          <div className="section-header">
            <h2>مسارات التكوين</h2>
            <p>مسارات متكاملة لتكوين علمي رصين</p>
          </div>
          <div className="grid cards-3">
            <div className="card track-card">
              <div className="card-icon track-1">
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
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <h3>مسار الحفظ</h3>
              <p>
                حفظ الطالب لجملة من مهمات النصوص والأصول التي يبنى عليها العلم
                بالحديث النبوي رواية ودراية.
              </p>
            </div>
            <div className="card track-card">
              <div className="card-icon track-2">
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3>مسار الفهم</h3>
              <p>
                فهم مسائل العلم وإدراك أصوله إدراكا يُمكن الطالب من الممارسة
                العملية التطبيقية لقواعده.
              </p>
            </div>
            <div className="card track-card">
              <div className="card-icon track-3">
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
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3>مسار القراءة</h3>
              <p>
                اكتساب مخزون قرائي مهم، يمكن الطالب من توسعة مداركه، والاطلاع
                على حركة التأليف في الحديث النبوي وما يتصل به.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
