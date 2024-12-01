import React from "react";
import { GraduationCap } from "lucide-react";

interface Props {
  majors: string[];
  explanation: string;
}

export const EducationRecommendations: React.FC<Props> = ({
  majors,
  explanation,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <div className="flex items-center mb-4">
        <GraduationCap className="w-6 h-6 text-green-500 mr-2" />
        <h3 className="text-xl font-bold">Rekomendasi Jurusan Pendidikan</h3>
      </div>

      <p className="text-gray-600 mb-4">{explanation}</p>

      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Jurusan yang Direkomendasikan:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {majors.map((major, index) => (
            <div
              key={index}
              className="bg-white p-2 rounded border border-green-100 shadow-sm"
            >
              {major}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
