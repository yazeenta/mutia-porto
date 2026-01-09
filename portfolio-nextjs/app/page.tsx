"use client";
import { useEffect, useState } from "react";
import { SiNextdotjs, SiJavascript, SiHtml5, SiVuedotjs, SiCplusplus, SiPython, SiFigma, SiPhp } from "react-icons/si";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const aboutImages = [
    "/img/muti-foto.jpeg",
    "/img/mutia.jpeg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  useEffect(() => {
  const anchors =
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

  const handler = (e: Event) => {
    const anchor = e.currentTarget as HTMLAnchorElement;
    const href = anchor.getAttribute("href");

    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    e.preventDefault();

    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: "smooth",
    });
  };

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", handler);
  });

  return () => {
    anchors.forEach((anchor) => {
      anchor.removeEventListener("click", handler);
    });
  };
}, []);

  return (
    <main>
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Navigation */}
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#tech">Tech</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-label">
            FRONTEND DEVELOPER & UI/UX DESIGNER
          </div>
          <h1>
            Mutia Yasinta's <br />
            <span className="gradient-text">Portfolio</span>
          </h1>
          <p>
            Mahasiswa Rekayasa Perangkat Lunak yang passionate dalam
            menciptakan antarmuka modern, fungsional, dan user-friendly
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">Lihat Portfolio</a>
            <a href="#about" className="btn-secondary">Tentang Saya</a>
          </div>
        </div>
        <div className="scroll-indicator" />
      </section>

      {/* About */}
      <section id="about">
        <div className="section-header">
          <div className="section-number">01 — INTRODUCTION</div>
          <h2 className="section-title">Tentang Saya</h2>
          <p className="section-subtitle">
            Berkenalan dengan passion dan keahlian saya
          </p>
        </div>

        <div className="about-grid">
          <div className="about-carousel">
            <div className="carousel-container">
              <img 
                src={aboutImages[currentSlide]} 
                alt="Mutia Yasinta" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '20px'
                }} 
              />
            </div>
            <button 
              className="carousel-button carousel-prev" 
              onClick={prevSlide}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="carousel-button carousel-next" 
              onClick={nextSlide}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            <div className="carousel-dots">
              {aboutImages.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="about-content">
            <p>
              Saya adalah mahasiswa<span className="highlight"> Rekayasa Perangkat Lunak</span> Universitas Pendidikan Indonesia yang fokus pada pengembangan <span className="highlight">Frontend</span> serta perancangan <span className="highlight">UI/UX</span>.
            </p>
            <p>
              Saya mengutamakan desain modern, struktur komponen yang rapi, dan pengalaman pengguna yang optimal. Dengan komitmen untuk terus belajar dan berkembang, saya siap menghadapi tantangan dalam industri teknologi.
            </p>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section id="tech">
        <div className="section-header">
          <div className="section-number">02 — EXPERTISE</div>
          <h2 className="section-title">Keahlian</h2>
          <p className="section-subtitle">
            Teknologi yang saya gunakan dalam pengembangan web
          </p>
        </div>

        <div className="tech-grid">
          <div className="tech-card">
            <SiNextdotjs className="tech-icon-component" />
            <h3>Next.js</h3>
            <p>Framework React modern untuk aplikasi web cepat dan SEO-friendly</p>
          </div>

          <div className="tech-card">
            <SiJavascript className="tech-icon-component" />
            <h3>JavaScript</h3>
            <p>Bahasa utama untuk membangun interaksi web modern</p>
          </div>

          <div className="tech-card">
            <SiHtml5 className="tech-icon-component" />
            <h3>HTML & CSS</h3>
            <p>Fondasi struktur dan styling web yang responsif</p>
          </div>

          <div className="tech-card">
            <SiVuedotjs className="tech-icon-component" />
            <h3>Vue.js</h3>
            <p>Framework JavaScript progresif untuk membangun UI interaktif</p>
          </div>

          <div className="tech-card">
            <SiCplusplus className="tech-icon-component" />
            <h3>C++</h3>
            <p>Bahasa pemrograman untuk aplikasi performa tinggi</p>
          </div>

          <div className="tech-card">
            <SiPython className="tech-icon-component" />
            <h3>Python</h3>
            <p>Bahasa pemrograman serbaguna untuk berbagai aplikasi</p>
          </div>

          <div className="tech-card">
            <SiFigma className="tech-icon-component" />
            <h3>Figma</h3>
            <p>Tool desain kolaboratif untuk UI/UX design</p>
          </div>

          <div className="tech-card">
            <SiPhp className="tech-icon-component" />
            <h3>PHP</h3>
            <p>Bahasa pemrograman server-side untuk web development</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="section-header">
          <div className="section-number">03 — PORTFOLIO</div>
          <h2 className="section-title">Proyek</h2>
          <p className="section-subtitle">
            Proyek yang pernah saya kerjakan selama magang, freelance dan akademik projek.
          </p>
        </div>

        <div className="projects-container">
          <div className="project-item">
            <div className="project-content">
              <div className="project-number">01</div>
              <div className="project-details">
                <h3>BaléTani</h3>
                <div className="project-role">
                  FRONTEND DEVELOPER & UI/UX DESIGNER
                </div>
                <p className="project-description">
                  Mengembangkan dan merancang antarmuka platform pertanian
                  digital menggunakan Next.js.
                </p>
                <a href="https://www.baletani.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  Lihat Proyek →
                </a>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-content">
              <div className="project-number">02</div>
              <div className="project-details">
                <h3>Finova</h3>
                <div className="project-role">FRONTEND DEVELOPER</div>
                <p className="project-description">
                  Membangun tampilan aplikasi manajemen keuangan yang modern
                  dan intuitif menggunakan Vue.js.
                </p>
                <a href="https://github.com/DikDns/finova.git" target="_blank" rel="noopener noreferrer" className="project-link">
                  Lihat Proyek →
                </a>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-content">
              <div className="project-number">03</div>
              <div className="project-details">
                <h3>Argana Rental Camping Lembang</h3>
                <div className="project-role">Frontend Developer</div>
                <p className="project-description">
                  Membangun dan mengembangkan sebuah platform penyewaan alat camping menggunakan Next.js.
                </p>
                <a href="https://github.com/athanabhanmuslim/ARGANA.git" target="_blank" rel="noopener noreferrer" className="project-link">
                  Lihat Proyek →
                </a>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-content">
              <div className="project-number">04</div>
              <div className="project-details">
                <h3>Wise</h3>
                <div className="project-role">UI/UX Designer</div>
                <p className="project-description">
                  Desain aplikasi pencarian destinasi wisata dengan fokus
                  pengalaman pengguna.
                </p>
                <a href="https://www.figma.com/proto/kTGRoTMVrNmhLWsrJazKyp/RKPL-KELOMPOK-4?node-id=688-12011&starting-point-node-id=688%3A12011&t=wjb3eBqpq7JMmcgZ-1" target="_blank" rel="noopener noreferrer" className="project-link">
                  Lihat Proyek →
                </a>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-content">
              <div className="project-number">05</div>
              <div className="project-details">
                <h3>Laparaga</h3>
                <div className="project-role">UI/UX Designer</div>
                <p className="project-description">
                  Redesain aplikasi berdasarkan prinsip Human Computer
                  Interaction (HCI).
                </p>
                <a href="https://www.figma.com/design/EleKtMnowMWJpw2bqh49XF/redesign-Laparaga?node-id=175-1044&t=Hz3e6B6qAyLbnWiM-1" target="_blank" rel="noopener noreferrer" className="project-link">
                  Lihat Proyek →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <div className="section-header">
          <div className="section-number">04 — BACKGROUND</div>
          <h2 className="section-title">Pengalaman Organisasi</h2>
          <p className="section-subtitle">
            Organisasi dan pengalaman pendukung
          </p>
        </div>

        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-image">
              <img 
                src="/img/himarpl.jpeg" 
                alt="HIMARPL" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }} 
              />
            </div>
            <div className="experience-content">
              <h3 className="experience-title">Staff Ekonomi Kreatif</h3>
              <div className="experience-org">Himpunan Mahasiswa Rekayasa Perangkat Lunak</div>
              <p className="experience-description">
                Berkontribusi dalam semua program kerja EKRAF, dan diamanahi sebagaim Penanggung Jawab Bazar.
              </p>
            </div>
          </div>
        </div>

        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-image">
              <img 
                src="/img/pasjaru.jpeg" 
                alt="Organisasi" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }} 
              />
            </div>
            <div className="experience-content">
              <h3 className="experience-title">Anggota Pasjaru 2023</h3>
              <div className="experience-org">Pasukan Ucap Janji Mahasiswa Baru</div>
              <p className="experience-description">
                Mewakili program studi Rekayasa Perangkat Lunak dalam menyambut mahasiswa baru Universitas Pendidikan Indonesia.
              </p>
            </div>
          </div>
        </div>

        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-image">
              <img 
                src="/img/kou.jpeg" 
                alt="Organisasi" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }} 
              />
            </div>
            <div className="experience-content">
              <h3 className="experience-title">Koordinator Lapangan</h3>
              <div className="experience-org">Kegiatan Opstimasi dan Upgrading</div>
              <p className="experience-description">
                Bertanggung jawab mengoordinasikan kegiatan di lapangan, mengatur teknis pelaksanaan, serta menjadi penghubung antara panitia inti dan tim di lapangan.
              </p>
            </div>
          </div>
        </div>

        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-image">
              <img 
                src="/img/gradu.jpeg" 
                alt="Organisasi" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'  
                }} 
              />
            </div>
            <div className="experience-content">
              <h3 className="experience-title">Humas</h3>
              <div className="experience-org">Gradu Parade Wisudawan RPL</div>
              <p className="experience-description">
                Bertanggungjawab dalam menjadi penghubung komunikasi antara panitia/organisasi dengan sponsor, media, dan pihak terkait
              </p>
            </div>
          </div>
        </div>

        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-image">
              <img 
                src="/img/mc.jpg" 
                alt="Organisasi" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'  
                }} 
              />
            </div>
            <div className="experience-content">
              <h3 className="experience-title">Manajemen Acara</h3>
              <div className="experience-org">Masa Bimbingan Mahasiswa Baru RPL 2025</div>
              <p className="experience-description">
                Bertanggungjawab dalam menjadi MC(Master of Ceremony) dalam acara Technical Meeting masa bimbingan mahasiswa baru.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <h2 className="footer-title gradient-text">Mari Terhubung</h2>
          <p className="footer-text" style={{ marginBottom: '2rem', fontSize: '1rem' }}>
            Saya terbuka untuk peluang baru dan kolaborasi menarik
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/mutia-yasinta-717758244"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/yazeenta"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:mutiayasinta18@gmail.com"
              className="social-link"
              title="Email"
            >
              <MdEmail />
            </a>

            <a
              href="https://www.instagram.com/mutiayasinta_"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          <p className="footer-text">
            © 2025 — Designed & Developed with love by Mutia Yasinta
          </p>
        </div>
      </footer>
    </main>
  );
}
