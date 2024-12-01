import React, { useState } from "react";
import { QuestionCard } from "./components/QuestionCard";
import { ResultsCard } from "./components/ResultsCard";
import { ParticipantForm } from "./components/ParticipantForm";
import { IntroductionCard } from "./components/IntroductionCard";
import { questions } from "./data/questions";
import { calculateResults } from "./utils/scoring";
import { Answer } from "./types";
import { Brain } from "lucide-react";

function App() {
  const [started, setStarted] = useState(false);
  const [participantName, setParticipantName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [testDateTime, setTestDateTime] = useState("");

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers((prev) => {
      const existing = prev.find((a) => a.questionId === questionId);
      if (existing) {
        return prev.map((a) =>
          a.questionId === questionId ? { ...a, score } : a
        );
      }
      return [...prev, { questionId, score }];
    });
  };

  const handleSubmit = () => {
    if (
      answers.length === questions.length &&
      participantName.trim() &&
      birthDate
    ) {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTestDateTime(now.toLocaleString("id-ID", options));
      setShowResults(true);
    }
  };

  const handleButtonTest = () => {
    setStarted(true);
    setParticipantName("John Doe");
    setBirthDate("2000-01-01");
    setAnswers(questions.map((q) => ({ questionId: q.id, score: 2 })));
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    setTestDateTime(now.toLocaleString("id-ID", options));
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* <button onClick={handleButtonTest}>Test</button> */}
      <div className="max-w-3xl mx-auto px-4">
        {!started ? (
          <IntroductionCard onStart={() => setStarted(true)} />
        ) : (
          <>
            <div className="flex items-center justify-center mb-8">
              <Brain className="w-8 h-8 text-blue-500 mr-2" />
              <h1 className="text-3xl font-bold text-gray-900">
                Tes Kepribadian Big Five
              </h1>
            </div>
            {!showResults ? (
              <>
                <ParticipantForm
                  value={participantName}
                  onChange={setParticipantName}
                  birthDate={birthDate}
                  onBirthDateChange={setBirthDate}
                />
                <div className="space-y-6">
                  {questions.map((question) => (
                    <QuestionCard
                      key={question.id}
                      question={question}
                      value={
                        answers.find((a) => a.questionId === question.id)
                          ?.score || 0
                      }
                      onChange={(score) => handleAnswer(question.id, score)}
                    />
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={handleSubmit}
                    disabled={
                      answers.length !== questions.length ||
                      !participantName.trim() ||
                      !birthDate
                    }
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
                  >
                    Lihat Hasil
                  </button>
                </div>
              </>
            ) : (
              <ResultsCard
                data={{
                  participantName,
                  birthDate,
                  testDateTime,
                  results: calculateResults(answers),
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
