import React from "react";
import { Briefcase } from "lucide-react";

interface Props {
  careers: string[];
  explanation: string;
}

export const CareerRecommendations: React.FC<Props> = ({
  careers,
  explanation,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <div className="flex items-center mb-4">
        <Briefcase className="w-6 h-6 text-blue-500 mr-2" />
        <h3 className="text-xl font-bold">Rekomendasi Karir</h3>
      </div>

      <p className="text-gray-600 mb-4">{explanation}</p>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Karir yang Direkomendasikan:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {careers.map((career, index) => (
            <div
              key={index}
              className="bg-white p-2 rounded border border-blue-100 shadow-sm"
            >
              {career}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
