import { Result } from "../types";

interface CareerRecommendation {
  careers: string[];
  explanation: string;
}

const getTopTraits = (results: Result[]): string[] => {
  const sortedResults = [...results].sort((a, b) => b.score - a.score);
  return sortedResults.slice(0, 3).map((r) => r.factor);
};

const normalizeTraits = (traits: string[]): string => {
  return [...traits].sort().slice(0, 2).join("-");
};

export const getCareerRecommendations = (
  results: Result[]
): CareerRecommendation => {
  const topTraits = getTopTraits(results);
  const normalizedTraits = normalizeTraits(topTraits);

  const recommendations: Record<string, CareerRecommendation> = {
    "Agreeableness-Extroversion": {
      careers: [
        "Manajer Penjualan",
        "Guru/Pendidik",
        "Spesialis Hubungan Masyarakat",
        "Manajer SDM",
        "Perwakilan Layanan Pelanggan",
        "Pelatih/Coach",
        "Konsultan Pengembangan Organisasi",
        "Pekerja Sosial",
        "Event Planner",
      ],
      explanation:
        "Nilai tinggi Anda dalam Ekstroversi dan Keramahan menunjukkan bahwa Anda berkembang dalam lingkungan sosial dan memiliki keterampilan interpersonal yang kuat. Karir ini memanfaatkan kemampuan Anda untuk terhubung dengan orang lain, membangun hubungan, dan memberikan dampak positif pada kehidupan orang lain.",
    },
    "Conscientiousness-Extroversion": {
      careers: [
        "CEO/Eksekutif Perusahaan",
        "Manajer Proyek",
        "Pengusaha",
        "Direktur Operasional",
        "Business Development Manager",
        "Konsultan Manajemen",
        "Sales Director",
        "Corporate Trainer",
        "Account Executive",
      ],
      explanation:
        "Kombinasi Ekstroversi dan Kesadaran membuat Anda ideal untuk peran kepemimpinan dan manajemen. Anda memiliki kemampuan untuk mengorganisir dan mengarahkan orang lain sambil membangun hubungan yang kuat dan mencapai tujuan bisnis.",
    },
    "Extroversion-Neuroticism": {
      careers: [
        "Pembawa Acara/MC",
        "Aktor/Aktris",
        "Motivator",
        "Sales Trainer",
        "Social Media Manager",
        "Brand Ambassador",
        "Pengajar Drama/Teater",
        "Event Host",
        "Community Manager",
      ],
      explanation:
        "Kombinasi unik dari Ekstroversi dan Neurotisisme memberi Anda kemampuan untuk menghubungkan emosi dengan audiens. Karir ini memanfaatkan kepekaan emosional Anda dalam konteks publik dan performatif.",
    },
    "Extroversion-Openness to Experience": {
      careers: [
        "Entrepreneur Kreatif",
        "Marketing Director",
        "Jurnalis",
        "Diplomat",
        "Produser TV/Film",
        "Konsultan Inovasi",
        "Creative Director",
        "International Business Developer",
        "Public Speaker",
      ],
      explanation:
        "Ekstroversi dan Keterbukaan Anda menciptakan kombinasi yang ideal untuk peran yang membutuhkan kreativitas dan kepemimpinan. Anda mampu menginspirasi orang lain sambil mengeksplorasi ide-ide baru dan peluang inovatif.",
    },
    "Agreeableness-Conscientiousness": {
      careers: [
        "Manajer Pelayanan Kesehatan",
        "Administrator Sekolah",
        "Quality Assurance Manager",
        "Koordinator Program Sosial",
        "Spesialis Kepatuhan",
        "Manajer Operasional NGO",
        "Healthcare Administrator",
        "Koordinator Relawan",
        "Specialist CSR",
      ],
      explanation:
        "Keramahan dan Kesadaran Anda membuat Anda cocok untuk peran yang membutuhkan perhatian pada detail sambil melayani kebutuhan orang lain. Karir ini menggabungkan efisiensi organisasi dengan kepedulian sosial.",
    },
    "Agreeableness-Neuroticism": {
      careers: [
        "Konselor",
        "Terapis",
        "Psikolog Klinis",
        "Pekerja Sosial Klinis",
        "Spesialis Kesehatan Mental",
        "Konselor Adiksi",
        "Terapis Okupasi",
        "Konselor Keluarga",
        "Perawat Psikiatri",
      ],
      explanation:
        "Kombinasi Keramahan dan Neurotisisme memberi Anda pemahaman mendalam tentang pengalaman emosional orang lain. Karir ini memanfaatkan empati dan kepekaan Anda untuk membantu orang yang membutuhkan.",
    },
    "Agreeableness-Openness to Experience": {
      careers: [
        "Art Therapist",
        "Pengembang Komunitas",
        "Aktivis Lingkungan",
        "Konselor Seni",
        "Antropolog",
        "Pekerja Kemanusiaan",
        "Facilitator Workshop",
        "Mediator Budaya",
        "Pengajar Seni",
      ],
      explanation:
        "Keramahan dan Keterbukaan Anda menciptakan kombinasi yang ideal untuk peran yang menggabungkan kreativitas dengan kepedulian sosial. Anda mampu memahami perspektif beragam sambil menciptakan dampak positif.",
    },
    "Conscientiousness-Neuroticism": {
      careers: [
        "Auditor",
        "Risk Manager",
        "Financial Controller",
        "Quality Control Specialist",
        "Compliance Officer",
        "Health and Safety Manager",
        "Data Analyst",
        "Research Administrator",
        "Clinical Research Coordinator",
      ],
      explanation:
        "Kesadaran dan Neurotisisme Anda menghasilkan perhatian yang tinggi pada detail dan manajemen risiko. Karir ini memanfaatkan kecermatan dan kehati-hatian Anda dalam pengambilan keputusan.",
    },
    "Conscientiousness-Openness to Experience": {
      careers: [
        "Arsitek",
        "Peneliti",
        "Software Developer",
        "Data Scientist",
        "Insinyur R&D",
        "Product Manager",
        "UX Designer",
        "Technical Director",
        "Research Scientist",
      ],
      explanation:
        "Kesadaran dan Keterbukaan Anda menciptakan keseimbangan antara inovasi dan implementasi yang terstruktur. Karir ini memungkinkan Anda mengeksplorasi ide-ide baru sambil mempertahankan standar kualitas tinggi.",
    },
    "Neuroticism-Openness to Experience": {
      careers: [
        "Seniman",
        "Penulis Kreatif",
        "Musisi",
        "Desainer Grafis",
        "Film Director",
        "Komposer",
        "Fashion Designer",
        "Game Designer",
        "Visual Artist",
      ],
      explanation:
        "Neurotisisme dan Keterbukaan Anda menciptakan potensi untuk ekspresi kreatif yang mendalam. Karir ini memungkinkan Anda mengeksplorasi dan mengekspresikan kompleksitas emosional melalui berbagai bentuk seni dan media kreatif.",
    },
  };

  const defaultRecommendation: CareerRecommendation = {
    careers: [
      "Pelatih Karir",
      "Konsultan Independen",
      "Pengusaha",
      "Pekerja Lepas",
      "Spesialis Komunikasi",
      "Content Creator",
      "Digital Marketer",
      "Project Manager",
      "Business Analyst",
    ],
    explanation:
      "Berdasarkan kombinasi unik dari sifat-sifat utama Anda, kami merekomendasikan karir yang paling sesuai dengan kekuatan Anda. Rekomendasi ini mempertimbangkan berbagai aspek kepribadian Anda untuk memberikan pilihan karir yang lebih komprehensif dan fleksibel.",
  };

  return recommendations[normalizedTraits] || defaultRecommendation;
};
