import { Result } from "../types";

interface EducationRecommendation {
  majors: string[];
  explanation: string;
}

const getTopTraits = (results: Result[]): string[] => {
  const sortedResults = [...results].sort((a, b) => b.score - a.score);
  return sortedResults.slice(0, 3).map((r) => r.factor);
};

// Helper function to normalize trait combinations
const normalizeTraits = (traits: string[]): string => {
  return [...traits].sort().slice(0, 2).join("-");
};

export const getEducationRecommendations = (
  results: Result[]
): EducationRecommendation => {
  const topTraits = getTopTraits(results);
  const normalizedTraits = normalizeTraits(topTraits);

  console.log(normalizedTraits);

  const recommendations: Record<string, EducationRecommendation> = {
    "Agreeableness-Extroversion": {
      majors: [
        "Pendidikan Guru Sekolah Dasar",
        "Pendidikan",
        "Ilmu Komunikasi",
        "Pekerjaan Sosial",
        "Manajemen SDM",
        "Psikologi Sosial",
        "Bimbingan Konseling",
      ],
      explanation:
        "Kombinasi Ekstroversi dan Keramahan Anda menunjukkan bahwa Anda akan unggul dalam bidang yang melibatkan bekerja dengan dan membantu orang lain. Jurusan ini menekankan keterampilan interpersonal, komunikasi efektif, dan dampak sosial positif.",
    },
    "Conscientiousness-Extroversion": {
      majors: [
        "Manajemen",
        "Manajemen Bisnis",
        "Entrepreneurship",
        "Kepemimpinan Organisasi",
        "Project Management",
        "Manajemen Operasional",
        "Administrasi Bisnis",
      ],
      explanation:
        "Kombinasi Ekstroversi dan Kesadaran membuat Anda cocok untuk peran kepemimpinan dan manajemen. Jurusan ini memadukan keterampilan organisasi dengan kemampuan mempengaruhi dan memimpin orang lain.",
    },
    "Extroversion-Neuroticism": {
      majors: [
        "Manajemen Olahraga",
        "Seni Teater",
        "Manajemen Event",
        "Public Relations",
        "Psikologi",
        "Broadcasting",
        "Manajemen Hiburan",
      ],
      explanation:
        "Kombinasi Ekstroversi dan Neurotisisme menunjukkan kemampuan untuk memahami emosi sambil tetap berinteraksi dengan orang lain. Jurusan ini memungkinkan Anda menggunakan kepekaan emosional dalam konteks sosial yang dinamis.",
    },
    "Extroversion-Openness to Experience": {
      majors: [
        "Seni Pertunjukan",
        "Studi Media",
        "Hubungan Internasional",
        "Pemasaran",
        "Jurnalistik",
        "Industri Kreatif",
        "Digital Marketing",
      ],
      explanation:
        "Dengan Ekstroversi dan Keterbukaan yang tinggi, Anda akan berkembang dalam bidang kreatif yang melibatkan keterlibatan publik. Jurusan ini menggabungkan ekspresi kreatif dengan interaksi sosial dan inovasi.",
    },
    "Agreeableness-Conscientiousness": {
      majors: [
        "Keperawatan",
        "Administrasi Kesehatan",
        "Administrasi Bisnis",
        "Kebijakan Publik",
        "Ilmu Lingkungan",
        "Manajemen Pelayanan Kesehatan",
        "Administrasi Pendidikan",
      ],
      explanation:
        "Sifat terorganisir dan kepedulian Anda terhadap orang lain membuat Anda cocok untuk jurusan yang menggabungkan pemikiran sistematis dengan dampak sosial positif dan pelayanan masyarakat.",
    },
    "Agreeableness-Neuroticism": {
      majors: [
        "Konseling",
        "Terapi Okupasi",
        "Pekerja Sosial Klinis",
        "Psikologi Klinis",
        "Pendidikan Khusus",
        "Terapi Fisik",
        "Kesehatan Mental",
      ],
      explanation:
        "Keramahan dan Neurotisisme Anda menciptakan kombinasi yang ideal untuk profesi membantu dengan pemahaman mendalam tentang kesulitan emosional dan kebutuhan manusia.",
    },
    "Agreeableness-Openness to Experience": {
      majors: [
        "Kesehatan Masyarakat",
        "Psikologi",
        "Ilmu Gizi",
        "Pengembangan Masyarakat",
        "Humaniora",
        "Studi Budaya",
        "Pelestarian Lingkungan",
      ],
      explanation:
        "Keramahan dan Keterbukaan Anda menunjukkan bakat untuk memahami berbagai perspektif sambil membantu orang lain. Jurusan ini menggabungkan kreativitas dengan kepedulian sosial dan pemahaman budaya.",
    },
    "Conscientiousness-Neuroticism": {
      majors: [
        "Akuntansi",
        "Farmasi",
        "Kebidanan",
        "Teknologi Laboratorium Medis",
        "Audit",
        "Keselamatan Kerja",
        "Manajemen Risiko",
      ],
      explanation:
        "Kesadaran dan Neurotisisme Anda menghasilkan perhatian yang tinggi pada detail dan standar kualitas. Jurusan ini membutuhkan ketelitian, kontrol kualitas yang ketat, dan manajemen risiko yang efektif.",
    },
    "Conscientiousness-Openness to Experience": {
      majors: [
        "Informatika",
        "Sistem Informasi",
        "Arsitektur",
        "Pendidikan Komputer",
        "Teknik",
        "Ilmu Komputer",
        "Teknik Robotika",
      ],
      explanation:
        "Kesadaran Anda dikombinasikan dengan Keterbukaan menunjukkan kesuksesan dalam bidang yang membutuhkan presisi dan inovasi. Jurusan ini memadukan pemikiran analitis dengan pemecahan masalah kreatif dan inovatif.",
    },
    "Neuroticism-Openness to Experience": {
      majors: [
        "Penulisan Kreatif",
        "Seni Rupa",
        "Musik",
        "Film dan Media",
        "Filosofi",
        "Sastra",
        "Desain Grafis",
      ],
      explanation:
        "Neurotisisme dan Keterbukaan Anda menciptakan potensi untuk ekspresi kreatif yang mendalam dan bermakna. Jurusan ini memungkinkan Anda mengeksplorasi dan mengekspresikan kompleksitas emosional melalui berbagai medium artistik.",
    },
  };

  const defaultRecommendation: EducationRecommendation = {
    majors: [
      "Ilmu Komunikasi",
      "Psikologi",
      "Manajemen",
      "Studi Liberal Arts",
      "Interdisciplinary Studies",
    ],
    explanation:
      "Berdasarkan kombinasi unik dari sifat-sifat utama Anda, kami merekomendasikan jurusan-jurusan yang paling sesuai dengan kekuatan Anda. Rekomendasi ini mempertimbangkan berbagai aspek kepribadian Anda untuk memberikan pilihan karir yang lebih komprehensif.",
  };

  // Try to find recommendation using normalized traits
  return recommendations[normalizedTraits] || defaultRecommendation;
};
