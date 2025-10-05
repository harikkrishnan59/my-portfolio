import React, { useState } from 'react';
import { Eye, ArrowRight, ExternalLink } from 'lucide-react';

const ProjectCardModal = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-colors duration-200"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-sm">Details</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-lg bg-gray-900 p-6 text-white shadow-lg mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Eye className="h-5 w-5 text-gray-400" />
            </button>
            <h2 className="mb-4 text-2xl font-bold">{title}</h2>
            <p className="mb-6 text-gray-400">{description}</p>
            <div className="flex justify-end space-x-4">
               <button
                className="rounded-md bg-gray-800 px-4 py-2 font-medium hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Live Demo <ExternalLink className="inline-block h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCardModal;