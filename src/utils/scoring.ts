import { Answer, Result } from "../types";

const calculateExtroversion = (answers: Answer[]): number => {
  // E = 20 + (1) - (6) + (11) - (16) + (21) - (26) + (31) - (36) + (41) - (46)
  const formula = [1, -6, 11, -16, 21, -26, 31, -36, 41, -46];
  return (
    20 +
    formula.reduce((sum, qId) => {
      const answer = answers.find((a) => a.questionId === Math.abs(qId));
      return sum + (answer ? (qId < 0 ? -answer.score : answer.score) : 0);
    }, 0)
  );
};

const calculateAgreeableness = (answers: Answer[]): number => {
  // A = 14 - (2) + (7) - (12) + (17) - (22) + (27) - (32) + (37) + (42) + (47)
  const formula = [-2, 7, -12, 17, -22, 27, -32, 37, 42, 47];
  return (
    14 +
    formula.reduce((sum, qId) => {
      const answer = answers.find((a) => a.questionId === Math.abs(qId));
      return sum + (answer ? (qId < 0 ? -answer.score : answer.score) : 0);
    }, 0)
  );
};

const calculateConscientiousness = (answers: Answer[]): number => {
  // C = 14 + (3) - (8) + (13) - (18) + (23) - (28) + (33) - (38) + (43) + (48)
  const formula = [3, -8, 13, -18, 23, -28, 33, -38, 43, 48];
  return (
    14 +
    formula.reduce((sum, qId) => {
      const answer = answers.find((a) => a.questionId === Math.abs(qId));
      return sum + (answer ? (qId < 0 ? -answer.score : answer.score) : 0);
    }, 0)
  );
};

const calculateNeuroticism = (answers: Answer[]): number => {
  // N = 38 - (4) + (9) - (14) + (19) - (24) - (29) - (34) - (39) - (44) - (49)
  const formula = [-4, 9, -14, 19, -24, -29, -34, -39, -44, -49];
  return (
    38 +
    formula.reduce((sum, qId) => {
      const answer = answers.find((a) => a.questionId === Math.abs(qId));
      return sum + (answer ? (qId < 0 ? -answer.score : answer.score) : 0);
    }, 0)
  );
};

const calculateOpenness = (answers: Answer[]): number => {
  // O = 8 + (5) - (10) + (15) - (20) + (25) - (30) + (35) + (40) + (45) + (50)
  const formula = [5, -10, 15, -20, 25, -30, 35, 40, 45, 50];
  return (
    8 +
    formula.reduce((sum, qId) => {
      const answer = answers.find((a) => a.questionId === Math.abs(qId));
      return sum + (answer ? (qId < 0 ? -answer.score : answer.score) : 0);
    }, 0)
  );
};

export const calculateResults = (answers: Answer[]): Result[] => {
  return [
    {
      factor: "Extroversion",
      score: calculateExtroversion(answers),
      description:
        "Extroversion (Ekstroversi) mencerminkan kecenderungan untuk mencari kepuasan dari sumber di luar diri atau dalam komunitas. Orang dengan skor tinggi cenderung sangat sosial sementara yang skornya rendah lebih suka mengerjakan proyeknya sendiri.",
    },
    {
      factor: "Agreeableness",
      score: calculateAgreeableness(answers),
      description:
        "Agreeableness (Keramahan) mencerminkan seberapa besar individu menyesuaikan perilaku mereka untuk menyenangkan orang lain. Orang dengan skor tinggi biasanya sopan dan menyukai orang lain. Orang dengan skor rendah cenderung 'berbicara apa adanya'.",
    },
    {
      factor: "Conscientiousness",
      score: calculateConscientiousness(answers),
      description:
        "Conscientiousness (Kehati-hatian) adalah sifat kepribadian yang jujur dan pekerja keras. Orang dengan skor tinggi cenderung mengikuti aturan dan lebih suka rumah yang bersih. Orang dengan skor rendah mungkin berantakan dan cenderung menipu orang lain.",
    },
    {
      factor: "Neuroticism",
      score: calculateNeuroticism(answers),
      description:
        "Neuroticism (Neurotisisme) adalah sifat kepribadian yang emosional. Orang dengan skor tinggi cenderung memiliki reaksi emosional yang kuat terhadap stres. Orang dengan skor rendah cenderung lebih stabil secara emosional dan tidak terlalu reaktif terhadap stres.",
    },
    {
      factor: "Openness to Experience",
      score: calculateOpenness(answers),
      description:
        "Openness to Experience (Keterbukaan terhadap Pengalaman) adalah sifat kepribadian yang mencari pengalaman baru dan kegiatan intelektual. Orang dengan skor tinggi mungkin sering melamun. Orang dengan skor rendah mungkin lebih realistis dan praktis.",
    },
  ];
};
