import React, { useState } from "react";

const InputField = ({ field, label, icon: Icon, formData, handleChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  // Helper function to generate input classes dynamically
  const getInputClasses = (isTextArea = false) => {
    const baseClasses = `
      w-full p-4 rounded-xl bg-white/10 text-white placeholder-transparent 
      focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 
      focus:ring-offset-[#030014] transition-all duration-300 peer
    `;

    return `${baseClasses} ${isTextArea ? "h-40 pt-4" : "pl-12"}`;
  };

  // Render input or textarea based on the field type
  const renderInputContent = () => {
    const commonProps = {
      id: field,
      name: field,
      placeholder: label,
      value: formData[field],
      onChange: handleChange,
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
      required: true,
    };

    if (field === "message") {
      return (
        <textarea
          {...commonProps}
          className={getInputClasses(true)}
        />
      );
    }

    return (
      <input
        {...commonProps}
        type={field === "email" ? "email" : "text"}
        className={getInputClasses()}
      />
    );
  };

  return (
    <div className="relative w-full group">
      <div 
        className={`absolute left-4 top-4 flex items-center transition-all duration-300 ${isFocused || formData[field] ? 'text-[#6366f1]' : 'text-gray-400'}`}
      >
        <Icon className="w-5 h-5" />
      </div>
      
      {/* Label with floating effect */}
      <label
        htmlFor={field}
        className={`absolute left-12 transition-all duration-300 pointer-events-none 
          ${isFocused || formData[field]
            ? 'top-2 text-xs text-[#6366f1]'
            : 'top-4 text-base text-gray-400'
          }`}
      >
        {label}
      </label>

      {renderInputContent()}
    </div>
  );
};

export default InputField;