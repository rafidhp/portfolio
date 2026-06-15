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
    org: "Faculty of Computer Science",
    roleEn: "Lab Assistant — Web Programming",
    roleId: "Asisten Lab — Pemrograman Web",
    period: "2024 — Present",
    bulletsEn: [
      "Mentored 60+ students through weekly Laravel & JavaScript labs.",
      "Authored 12 hands-on lab modules now reused across two cohorts.",
      "Improved average lab grade by 18% through targeted code reviews.",
    ],
    bulletsId: [
      "Membimbing 60+ mahasiswa lewat lab Laravel & JavaScript mingguan.",
      "Menyusun 12 modul lab praktikum yang dipakai di dua angkatan.",
      "Meningkatkan rata-rata nilai lab 18% lewat review kode terarah.",
    ],
  },
  {
    id: "e2",
    org: "Freelance",
    roleEn: "Full-stack Web Developer",
    roleId: "Developer Web Full-stack",
    period: "2023 — Present",
    bulletsEn: [
      "Shipped 8+ production projects for SMBs across retail and education.",
      "Cut average page load by 42% via Vite, image optimization and CDN.",
      "Maintained a 100% on-time delivery record across all engagements.",
    ],
    bulletsId: [
      "Merilis 8+ proyek produksi untuk UKM di sektor retail dan edukasi.",
      "Memangkas waktu muat halaman 42% lewat Vite, optimasi gambar & CDN.",
      "Menjaga rekam jejak 100% pengiriman tepat waktu di semua proyek.",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "a1",
    titleEn: "Gemastik — National Finalist (Software Development)",
    titleId: "Gemastik — Finalis Nasional (Pengembangan Perangkat Lunak)",
    issuer: "Kemendikbud RI",
    year: "2024",
  },
  {
    id: "a2",
    titleEn: "AWS Cloud Practitioner",
    titleId: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    id: "a3",
    titleEn: "Meta Front-End Developer Specialization",
    titleId: "Spesialisasi Meta Front-End Developer",
    issuer: "Coursera",
    year: "2023",
  },
  {
    id: "a4",
    titleEn: "Hackathon Winner — Best Backend",
    titleId: "Pemenang Hackathon — Backend Terbaik",
    issuer: "DevFest Local",
    year: "2023",
  },
];

export const socials = {
  email: "rafiislamipasha27@gmail.com",
  github: "https://github.com/rafidhp",
  linkedin: "https://www.linkedin.com/in/rafi-islami-pasha/",
};