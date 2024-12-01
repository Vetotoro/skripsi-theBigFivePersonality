import React from "react";
import { Question } from "../types";

interface Props {
  question: Question;
  value: number;
  onChange: (score: number) => void;
}

export const QuestionCard: React.FC<Props> = ({
  question,
  value,
  onChange,
}) => {
  const options = [
    { label: "Tidak Setuju", value: 1 },
    { label: "Agak Tidak Setuju", value: 2 },
    { label: "Netral", value: 3 },
    { label: "Agak Setuju", value: 4 },
    { label: "Setuju", value: 5 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <p className="text-lg font-medium mb-4">
        {question.id}. {question.text}
      </p>
      <div className="grid grid-cols-5 gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`p-2 rounded ${
              value === option.value
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
