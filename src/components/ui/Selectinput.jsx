import React from "react";

const Selectinput = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error,
  className = "",
}) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="inline-block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2
        ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-300 focus:ring-blue-500"
        }
        ${className}`}
      >
        <option disabled hidden>
          {placeholder}
        </option>

        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default Selectinput;