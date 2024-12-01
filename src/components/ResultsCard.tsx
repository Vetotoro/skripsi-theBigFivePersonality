import React from "react";
import { Result, TestData } from "../types";
import { getCareerRecommendations } from "../utils/careerRecommendations";
import { getEducationRecommendations } from "../utils/educationRecommendations";
import { generatePDF } from "../utils/pdfExport";
import { CareerRecommendations } from "./CareerRecommendations";
import { EducationRecommendations } from "./EducationRecommendations";
import { Download } from "lucide-react";

interface Props {
  data: {
    participantName: string;
    birthDate: string;
    testDateTime: string;
    results: Result[];
  };
}

export const ResultsCard: React.FC<Props> = ({ data }) => {
  const careerRecommendations = getCareerRecommendations(data.results);
  const educationRecommendations = getEducationRecommendations(data.results);

  const handleDownloadPDF = async () => {
    await generatePDF(data);
  };

  return (
    <div className="results-container space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Hasil untuk {data.participantName}
            </h2>
            <div className="text-gray-600 space-y-1">
              <p>
                Tanggal Lahir:{" "}
                {new Date(data.birthDate).toLocaleDateString("id-ID")}
              </p>
              <p>Waktu Tes: {data.testDateTime}</p>
              <p className="mt-2">
                Terima kasih telah menyelesaikan Tes Kepribadian Big Five!
              </p>
            </div>
          </div>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <Download className="w-4 h-4 mr-2" />
            Simpan sebagai PDF
          </button>
        </div>

        {data.results.map((result) => (
          <div key={result.factor} className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{result.factor}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
              <div
                className="bg-blue-600 h-2.5 rounded-full relative"
                style={{
                  width: `${(result.score / 40) * 100}%`,
                  minWidth: "10px",
                }}
              ></div>
            </div>
            <p className="text-gray-600 mb-2">Score: {result.score}/40</p>
            <p className="text-sm text-gray-500">{result.description}</p>
          </div>
        ))}
      </div>

      <EducationRecommendations
        majors={educationRecommendations.majors}
        explanation={educationRecommendations.explanation}
      />

      <CareerRecommendations
        careers={careerRecommendations.careers}
        explanation={careerRecommendations.explanation}
      />
    </div>
  );
};
