import KhaslanaImage from "@/assets/projects/khaslana.png";
import SmartGarden from "@/assets/projects/smart-garden-1.png";
import ApiHimarpl from "@/assets/projects/api-himarpl.png";
import Sihuma from "@/assets/projects/sikawan.png";

export type Project = {
  id: string;
  name: string;
  descriptionEn: string;
  descriptionId: string;
  roleEn: string;
  roleId: string;
  stack: string[];
  image: string;
  github?: string;
  demo?: string;
};

export type Experience = {
  id: string;
  org: string;
  roleEn: string;
  roleId: string;
  period: string;
  bulletsEn: string[];
  bulletsId: string[];
};

export type Achievement = {
  id: string;
  titleEn: string;
  titleId: string;
  issuer: string;
  year: string;
};

export const skills = {
  languages: [
    { name: "PHP", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 90 },
    { name: "SQL", level: 85 },
    { name: "C++", level: 75 },
  ],
  frameworks: [
    { name: "Laravel", level: 97 },
    { name: "React", level: 92 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Inertia.js", level: 88 },
  ],
  devops: [
    { name: "Docker", level: 80 },
    { name: "Railway", level: 92 },
    { name: "AWS Lightsail", level: 70 },
    { name: "Apache", level: 80 },
    { name: "Linux", level: 85 },
  ],
  tools: [
    { name: "Git", level: 92 },
    { name: "GitHub", level: 92 },
    { name: "Postman", level: 90 },
    { name: "Figma", level: 78 },
    { name: "Scratch", level: 85 },
  ],
  databases: [
    { name: "MySQL", level: 90 },
    { name: "SQLite", level: 87 },
    { name: "Redis", level: 75 },
  ],
  integrations: [
    { name: "Midtrans", level: 85 },
    { name: "Cloud Storage", level: 80 },
    { name: "Third-Party APIs", level: 88 },
    { name: "Google OAuth", level: 90 },
  ],
};

export const projects: Project[] = [
  {
    id: "p1",
    name: "Khaslana",
    descriptionEn:
      "A marketplace platform for local MSMEs featuring Stay Point, a real-time location tracking system that allows customers to find and monitor mobile merchants nearby. The platform also includes online ordering, digital payments, merchant management, AI assistance, and interactive maps.",
    descriptionId:
      "Platform marketplace untuk UMKM lokal dengan fitur unggulan Stay Point, sistem pelacakan lokasi real-time yang memungkinkan pelanggan menemukan dan memantau keberadaan pedagang keliling di sekitar mereka. Dilengkapi dengan pemesanan online, pembayaran digital, manajemen toko, asisten AI, dan peta interaktif.",
    roleEn: "Project Manager, Lead and Full-stack Developer",
    roleId: "Manajer Proyek, Pemimpin dan Developer Full-stack",
    stack: ["Laravel", "React", "Inertia JS", "Tailwindcss", "Shadcn", "MySQL", "Docker", "Leaflet", "Open Street Map", "Midtrans", "Framer Motion", "Gemini API", "Google OAuth", "Railway", "ReChart"],
    image: KhaslanaImage,
    github: "https://github.com/rafidhp/khaslana",
    demo: "https://khaslana.up.railway.app",
  },
  {
    id: "p2",
    name: "Smart Garden",
    descriptionEn:
      "An IoT-powered smart hydroponics system integrated with a web platform for real-time monitoring and environmental control. The system helps users grow plants more efficiently through automated tracking of temperature, humidity, lighting, and other key growing conditions, enabling sustainable and space-efficient urban farming.",
    descriptionId:
      "Sistem hidroponik pintar berbasis IoT yang terintegrasi dengan platform web untuk monitoring dan pengendalian lingkungan secara real-time. Sistem ini membantu pengguna membudidayakan tanaman dengan lebih efisien melalui pemantauan otomatis suhu, kelembapan, pencahayaan, dan berbagai parameter penting lainnya, sehingga mendukung pertanian modern yang berkelanjutan dan hemat ruang.",
    roleEn: "Lead and Full-Stack Web Developer",
    roleId: "Ketua dan Developer Web Full-Stack",
    stack: ["Laravel", "IoT Integration", "Bootstrap", "Plotly JS", "JQuery", "Blade", "Eloquent ORM", "MySQL"],
    image: SmartGarden,
    github: "https://github.com/rafidhp/smart_garden",
    // demo: "https://example.com",
  },
  {
    id: "p3",
    name: "HIMARPL API",
    descriptionEn:
      "A centralized backend API powering the HIMARPL website ecosystem. Built to manage organizational data, member information, news, events, and other digital services while providing secure, scalable, and well-documented endpoints.",
    descriptionId:
      "API backend terpusat yang mendukung ekosistem website HIMARPL. Dikembangkan untuk mengelola data organisasi, informasi anggota, berita, kegiatan, dan berbagai layanan digital lainnya melalui endpoint yang aman, terstruktur, dan mudah dikembangkan.",
    roleEn: "Backend Developer",
    roleId: "Backend Developer",
    stack: ["Next JS", "Drizzle ORM", "Swagger", "Github Actions", "Vercel", "Turso Database", "Redis", "tRPC"],
    image: ApiHimarpl,
    github: "https://github.com/himarplupi/api-himarpl",
    demo: "https://api.himarpl.org",
  },
  {
    id: "p4",
    name: "SIHUMA",
    descriptionEn:
      "A digital housing information system designed to support sustainable residential and settlement management. The platform centralizes area data, enabling government agencies and communities to access accurate information for planning, monitoring, and improving livable neighborhoods.",
    descriptionId:
      "Sistem informasi hunian berbasis digital yang dirancang untuk mendukung pengelolaan kawasan perumahan dan permukiman secara berkelanjutan. Platform ini mengintegrasikan data kawasan sehingga instansi pemerintah dan masyarakat dapat mengakses informasi yang akurat untuk perencanaan, pemantauan, dan peningkatan kualitas lingkungan hunian.",
    roleEn: "Junior Full-stack Developer",
    roleId: "Developer Full-stack Junior",
    stack: ["Laravel", "Inertia JS", "React", "SQLite", "Docker", "Leaflet", "Carto", "Open Street Map", "Tailwindcss", "Shadcn",],
    image: Sihuma,
    demo: "https://sihuma.muaraenim.site/",
  },
];

export const experiences: Experience[] = [
  {
    id: "e1",
    org: "Indonesia University of Education",
    roleEn: "Lab Assistant - RPL Student Club",
    roleId: "Asisten Laboratorium - RPL Student Club",
    period: "2026",
    bulletsEn: [
      "Maintained laboratory safety, cleanliness, and operational standards to ensure a productive learning environment.",
      "Monitored and inspected laboratory equipment to ensure all facilities were functioning properly and ready to support academic activities.",
      "Managed laboratory and equipment loan requests, including scheduling, documentation, and usage monitoring.",
      "Planned laboratory resource requirements and prepared budget proposals to support the procurement and availability of essential equipment."
    ],
    bulletsId: [
      "Menjaga keamanan, kebersihan, dan ketertiban laboratorium untuk menciptakan lingkungan pembelajaran yang kondusif.",
      "Memastikan seluruh perangkat dan fasilitas laboratorium berfungsi dengan baik sehingga dapat mendukung kegiatan praktikum dan pembelajaran secara optimal.",
      "Mengelola peminjaman laboratorium dan inventaris, termasuk penjadwalan, pendataan, serta pemantauan penggunaan fasilitas.",
      "Menyusun kebutuhan sarana laboratorium dan merancang RAB untuk mendukung pengadaan serta ketersediaan peralatan yang dibutuhkan program studi."
    ],
  },
  {
    id: "e2",
    org: "HIMARPL",
    roleEn: "Staff of KOMINFO Department",
    roleId: "Staff Departemen KOMINFO",
    period: "2024 — 2025",
    bulletsEn: [
      "Led the development and maintenance of HIMARPL's digital ecosystem, including the public website, admin dashboard, backend API, and technical documentation platform.",
      "Built modern web applications using React, Next.js, tRPC, Drizzle ORM, Redis, and Turso Database while implementing CI/CD pipelines with GitHub Actions and Vercel.",
      "Managed domains, hosting, deployment, and infrastructure operations to ensure secure, reliable, and continuously available services.",
      "Produced social media designs and digital content to support organizational branding, communication, and student engagement initiatives."
    ],
    bulletsId: [
      "Memimpin pengembangan dan pemeliharaan ekosistem digital HIMARPL yang mencakup website utama, dashboard administrasi, API backend, dan platform dokumentasi teknis.",
      "Membangun aplikasi web modern menggunakan React, Next.js, tRPC, Drizzle ORM, Redis, dan Turso Database serta menerapkan pipeline CI/CD dengan GitHub Actions dan Vercel.",
      "Mengelola domain, hosting, deployment, dan operasional infrastruktur untuk memastikan layanan yang aman, andal, dan selalu tersedia.",
      "Membuat desain media sosial dan konten digital untuk mendukung branding organisasi, komunikasi, dan keterlibatan mahasiswa."
    ],
  },
  {
    id: "e3",
    org: "Indonesia University of Education",
    roleEn: "Staff of Media Visual - Dies Natalis",
    roleId: "Staff Media Visual - Dies Natalis",
    period: "2025",
    bulletsEn: [
      "Designed official posters and promotional materials for the Software Engineering Anniversary Event.",
      "Created certificates for all organizing committee members with consistent branding and accurate participant information.",
      "Collaborated with the media and event teams to ensure timely delivery of visual assets for publications and event activities."
    ],
    bulletsId: [
      "Merancang poster resmi dan materi promosi untuk kegiatan Dies Natalis Rekayasa Perangkat Lunak.",
      "Membuat sertifikat untuk seluruh panitia dengan menjaga konsistensi identitas visual dan ketepatan data.",
      "Berkolaborasi dengan tim media dan kepanitiaan untuk memastikan seluruh kebutuhan desain tersedia tepat waktu."
    ],
  },
  {
    id: "e4",
    org: "Indonesia University of Education",
    roleEn: "Staff of Media Visual and Operator - RPL Goes To School",
    roleId: "Staff Media Visual dan Operator - RPL Goes To School",
    period: "2025",
    bulletsEn: [
      "Designed visual assets for the event, including Instagram highlight icons and live report templates for social media coverage.",
      "Created certificates for all organizing committee members while ensuring consistent branding and accurate participant information.",
      "Collaborated with the media team to maintain a cohesive visual identity across digital event publications.",
      "Served as an event operator, supporting technical and operational activities to ensure the program ran smoothly."
    ],
    bulletsId: [
      "Merancang aset visual untuk kegiatan, termasuk ikon highlight Instagram dan template live report untuk kebutuhan publikasi media sosial.",
      "Membuat sertifikat untuk seluruh panitia dengan memastikan konsistensi identitas visual dan ketepatan data peserta.",
      "Berkolaborasi dengan tim media untuk menjaga keseragaman desain dan identitas visual pada berbagai materi publikasi acara.",
      "Berperan sebagai operator selama kegiatan berlangsung dengan mendukung kebutuhan teknis dan operasional agar acara berjalan lancar."
    ],
  },
  {
    id: "e5",
    org: "Indonesia University of Education",
    roleEn: "Staff of Media Visual - MABIM RPL",
    roleId: "Staff Media Visual - MABIM RPL",
    period: "2025",
    bulletsEn: [
      "Designed and generated certificates for participants, speakers, moderators, and organizing committee members.",
      "Created Instagram feed templates for appreciation posts and event-related social media publications.",
      "Developed visual templates for content showcases, sponsor acknowledgements, and other event branding materials.",
      "Designed personalized name tag templates for all MABIM participants to support event administration and identity management."
    ],
    bulletsId: [
      "Merancang dan membuat sertifikat untuk peserta, pemateri, moderator, serta seluruh panitia kegiatan.",
      "Membuat template feed Instagram untuk unggahan apresiasi dan berbagai kebutuhan publikasi media sosial acara.",
      "Mengembangkan template visual untuk penampilan konten, publikasi sponsor, serta materi pendukung branding acara lainnya.",
      "Merancang template name tag bagi seluruh peserta MABIM guna mendukung administrasi dan identitas peserta selama kegiatan."
    ],
  },
  {
    id: "e6",
    org: "PT Logisklik Gemilang Indonesia",
    roleEn: "Quality Assurance",
    roleId: "Quality Assurance",
    period: "2022",
    bulletsEn: [
      "Performed manual testing and quality assurance activities across development, staging, and production environments to ensure software reliability.",
      "Created and executed test scenarios, identified bugs, and collaborated with developers to validate fixes and improve application quality.",
      "Develop web application development using React.js and Flask while working within Agile and Scrum-based workflows.",
      "Presented project progress and completed features during sprint reviews and stakeholder meetings, strengthening technical communication skills.",
    ],
    bulletsId: [
      "Melakukan pengujian manual dan aktivitas quality assurance pada lingkungan development, staging, dan production untuk memastikan kualitas perangkat lunak.",
      "Menyusun serta menjalankan skenario pengujian, mengidentifikasi bug, dan berkolaborasi dengan developer dalam proses validasi perbaikan aplikasi.",
      "Membangun aplikasi web menggunakan React.js dan Flask dengan menerapkan metodologi Agile dan Scrum.",
      "Mempresentasikan progres proyek dan fitur yang telah dikembangkan kepada tim serta stakeholder selama proses pengembangan.",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "a1",
    titleEn: "10.000 AIdeas — Top 300 Semifinalist",
    titleId: "10.000 AIdeas — Top 300 Semifinalist",
    issuer: "Amazon Web Services",
    year: "2026",
  },
  {
    id: "a2",
    titleEn: "STEAM InFest — Top 15 Finalist",
    titleId: "STEAM InFest — Top 15 Finalist",
    issuer: "Prestasi Junior Indonesia (Member of JA Worldwide)",
    year: "2023",
  },
  {
    id: "a3",
    titleEn: "Cloud Computing Club Competition (C4) — 2nd Place Winner",
    titleId: "Cloud Computing Club Competition (C4) — Juara 2",
    issuer: "Yayasan Sagasitas Indonesia (AWS Community)",
    year: "2023",
  },
  {
    id: "a4",
    titleEn: "Lomba Kompetensi Siswa (LKS) — 3rd Place Winner",
    titleId: "Lomba Kompetensi Siswa (LKS) — Juara 3",
    issuer: "Dinas Pendidikan",
    year: "2023",
  },
  {
    id: "a5",
    titleEn: "Lomba Karya Inovasi Generative AI — Innovation Award",
    titleId: "Lomba Karya Inovasi Generative AI — Innovation Award",
    issuer: "Yayasan Sagasitas Indonesia (AWS Community)",
    year: "2025",
  },
];

export const socials = {
  email: "rafiislamipasha27@gmail.com",
  github: "https://github.com/rafidhp",
  linkedin: "https://www.linkedin.com/in/rafi-islami-pasha/",
};