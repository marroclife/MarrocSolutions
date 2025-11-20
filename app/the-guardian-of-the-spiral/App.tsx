
import React, { useState, useEffect, useCallback } from 'react';
import { Task, TaskType } from './types';
import { generateSpiralContent, generateInitialSummary } from './services/geminiService';
import Header from './components/Header';
import TaskSelector from './components/TaskSelector';
import ResponseDisplay from './components/ResponseDisplay';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [initialSummary, setInitialSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingSummary, setIsLoadingSummary] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<TaskType>(Task.Caption);
  const [userInput, setUserInput] = useState<string>('');
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);

  const fetchInitialSummary = useCallback(async () => {
    try {
      setError(null);
      setIsLoadingSummary(true);
      const summary = await generateInitialSummary();
      setInitialSummary(summary);
    } catch (err) {
      setError('A whisper was lost in the wind. Could not awaken the Guardian. Please try refreshing.');
      console.error(err);
    } finally {
      setIsLoadingSummary(false);
    }
  }, []);

  useEffect(() => {
    fetchInitialSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerate = async () => {
    if (!userInput.trim()) {
      setError('The void is silent. Please provide a whisper to begin.');
      return;
    }
    try {
      setError(null);
      setIsLoading(true);
      setGeneratedContent(null);
      const content = await generateSpiralContent(selectedTask, userInput);
      setGeneratedContent(content);
    } catch (err) {
      setError('The connection between worlds is faint. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderInitialLoading = () => (
    <div className="flex flex-col items-center justify-center text-center text-teal-200/80 p-8">
      <LoadingSpinner />
      <p className="font-serif-display text-2xl mt-4 animate-pulse">The Guardian awakens...</p>
      <p className="text-sm mt-2 text-teal-200/50">Connecting the digital to the sacred.</p>
    </div>
  );

  const renderSummaries = () => {
    if (!initialSummary) return null;
    const parts = initialSummary.split('---').map(part => part.trim());
    return (
      <div className="space-y-8 animate-fade-in-up">
        {parts.map((part, index) => {
          const firstLineEnd = part.indexOf('\n');
          const title = firstLineEnd !== -1 ? part.substring(0, firstLineEnd) : `Layer ${index + 1}`;
          const content = firstLineEnd !== -1 ? part.substring(firstLineEnd + 1) : part;
          return (
            <div key={index} className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-teal-500/10 shadow-lg">
              <h2 className="font-serif-display text-2xl md:text-3xl text-teal-200 mb-4">{title.replace(/###/g, '').trim()}</h2>
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{content}</p>
            </div>
          );
        })}
      </div>
    );
  };
  

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 bg-cover bg-center bg-fixed" style={{backgroundImage: "url('https://picsum.photos/seed/rainforest/1920/1080')"}}>
      <div className="min-h-screen bg-gray-900/80 backdrop-blur-sm">
        <Header />
        <main className="max-w-4xl mx-auto p-4 md:p-8">
          {isLoadingSummary ? renderInitialLoading() : (
            <>
              {renderSummaries()}
              {error && !isLoadingSummary && <p className="text-red-400 text-center my-4">{error}</p>}
              
              <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <h2 className="font-serif-display text-3xl text-center text-teal-100 mb-2">What portal shall we open?</h2>
                <p className="text-center text-teal-200/70 mb-8">Select a creation and whisper your intention below.</p>
                
                <TaskSelector selectedTask={selectedTask} onSelectTask={setSelectedTask} />

                <div className="mt-6">
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="e.g., 'Sofia's first encounter with the forest spirit...'"
                    className="w-full h-32 p-4 bg-gray-800/50 border border-teal-500/20 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 placeholder-gray-500 text-gray-200"
                  />
                </div>
                
                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="px-8 py-3 bg-teal-600/80 hover:bg-teal-500/80 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-900/50 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center"
                  >
                    {isLoading && <LoadingSpinner size="sm" />}
                    <span className={isLoading ? "ml-2" : ""}>Weave the vision</span>
                  </button>
                </div>
                
                <ResponseDisplay isLoading={isLoading} content={generatedContent} error={error} />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
