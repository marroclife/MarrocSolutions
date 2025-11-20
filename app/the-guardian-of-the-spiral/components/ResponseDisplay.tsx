
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ResponseDisplayProps {
  isLoading: boolean;
  content: string | null;
  error: string | null;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ isLoading, content, error }) => {
  if (isLoading) {
    return (
      <div className="mt-8 flex justify-center items-center flex-col text-center">
        <LoadingSpinner />
        <p className="font-serif-display text-xl text-teal-200/80 mt-4">Weaving the threads of inspiration...</p>
      </div>
    );
  }

  if (error && !content) {
    return (
        <div className="mt-8 p-4 bg-red-900/30 border border-red-500/50 text-red-300 rounded-lg">
            <p>{error}</p>
        </div>
    );
  }

  if (!content) {
    return null;
  }

  return (
    <div className="mt-8 animate-fade-in-up">
      <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-teal-500/10 shadow-lg">
        <h3 className="font-serif-display text-2xl text-teal-200 mb-4">A Whisper from the Spiral</h3>
        <div className="text-gray-300 whitespace-pre-wrap leading-relaxed prose prose-invert prose-p:text-gray-300">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ResponseDisplay;
