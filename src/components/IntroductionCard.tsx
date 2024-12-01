import React from "react";
import { Brain, Clock, Users, BarChart, Lightbulb } from "lucide-react";

export const IntroductionCard: React.FC<{ onStart: () => void }> = ({
  onStart,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-6">
        <Brain className="w-10 h-10 text-blue-500 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">
          Tes Kepribadian Big Five
        </h1>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <div className="flex items-start">
            <Users className="w-6 h-6 text-blue-500 mr-2 mt-1" />
            <div>
              <h3 className="font-semibold">Peserta</h3>
              <p className="text-gray-600">
                Anak-anak yang lebih tua dan dewasa
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="w-6 h-6 text-blue-500 mr-2 mt-1" />
            <div>
              <h3 className="font-semibold">Waktu</h3>
              <p className="text-gray-600">20 menit</p>
            </div>
          </div>

          <div className="flex items-start">
            <BarChart className="w-6 h-6 text-blue-500 mr-2 mt-1" />
            <div>
              <h3 className="font-semibold">Mengukur</h3>
              <ul className="text-gray-600 list-disc list-inside ml-2">
                <li>Ekstroversi</li>
                <li>Keramahan</li>
                <li>Kehati-hatian</li>
                <li>Neurotisisme</li>
                <li>Keterbukaan terhadap Pengalaman</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Cara Penilaian</h3>
            <p className="text-gray-600">
              Terdiri dari 50 pertanyaan dengan skala 1-5:
            </p>
            <ul className="text-gray-600 mt-2">
              <li>1 = Tidak Setuju</li>
              <li>2 = Agak Tidak Setuju</li>
              <li>3 = Netral</li>
              <li>4 = Agak Setuju</li>
              <li>5 = Setuju</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Lightbulb className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="font-semibold">Manfaat</h3>
            </div>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Mengidentifikasi aktivitas yang sesuai dengan kepribadian</li>
              <li>Memahami tipe kepribadian yang mempengaruhi perilaku</li>
              <li>Memantau perubahan tipe kepribadian</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Mulai Tes
        </button>
      </div>
    </div>
  );
};
