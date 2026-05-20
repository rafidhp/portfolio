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
    { name: "PHP", level: 92 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "C++", level: 75 },
    { name: "SQL", level: 80 },
  ],
  frameworks: [
    { name: "Laravel", level: 92 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Inertia.js", level: 78 },
  ],
  tools: [
    { name: "Git", level: 92 },
    { name: "Docker", level: 78 },
    { name: "AWS", level: 70 },
    { name: "Railway", level: 82 },
    { name: "Figma", level: 75 },
  ],
};

export const projects: Project[] = [
  {
    id: "p1",
    name: "LaraCommerce",
    descriptionEn:
      "A multi-vendor e-commerce platform with real-time order tracking, Stripe checkout and an admin analytics dashboard.",
    descriptionId:
      "Platform e-commerce multi-vendor dengan pelacakan pesanan real-time, pembayaran Stripe dan dasbor analitik admin.",
    roleEn: "Lead Full-stack Developer",
    roleId: "Lead Developer Full-stack",
    stack: ["Laravel", "React", "MySQL", "Stripe", "Docker"],
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&q=80",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "p2",
    name: "StudyFlow",
    descriptionEn:
      "A focus & task app for students with Pomodoro, spaced-repetition flashcards and weekly progress insights.",
    descriptionId:
      "Aplikasi fokus & tugas untuk pelajar dengan Pomodoro, flashcard spaced-repetition dan ringkasan progres mingguan.",
    roleEn: "Solo Developer & Designer",
    roleId: "Developer & Desainer Tunggal",
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "p3",
    name: "DevPulse API",
    descriptionEn:
      "REST + WebSocket API powering a developer activity dashboard with GitHub & GitLab webhooks.",
    descriptionId:
      "API REST + WebSocket yang memberdayakan dasbor aktivitas developer dengan webhook GitHub & GitLab.",
    roleEn: "Backend Engineer",
    roleId: "Backend Engineer",
    stack: ["Laravel", "Redis", "PostgreSQL", "Docker"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    github: "https://github.com",
  },
  {
    id: "p4",
    name: "Campus Portal",
    descriptionEn:
      "Internal academic portal serving 5k+ students with role-based access and live class schedules.",
    descriptionId:
      "Portal akademik internal yang melayani 5k+ mahasiswa dengan akses berbasis peran dan jadwal kuliah real-time.",
    roleEn: "Full-stack Developer",
    roleId: "Developer Full-stack",
    stack: ["Laravel", "Inertia", "Vue", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    demo: "https://example.com",
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