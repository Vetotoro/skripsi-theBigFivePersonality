import React from "react";

interface Props {
  value: string;
  onChange: (name: string) => void;
  birthDate: string;
  onBirthDateChange: (date: string) => void;
}

export const ParticipantForm: React.FC<Props> = ({
  value,
  onChange,
  birthDate,
  onBirthDateChange,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Masukkan nama Anda
        </label>
        <input
          type="text"
          id="name"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Nama Anda"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="birthDate"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Tanggal Lahir
        </label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => onBirthDateChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
    </div>
  );
};
