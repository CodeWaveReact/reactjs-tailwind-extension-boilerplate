import React from 'react';

const ErrorPage = () => {
  const goToYoutube = () => {
    chrome.tabs.create({ url: 'https://www.youtube.com' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-red-600 text-xl font-bold mb-4">
          This extension only works on YouTube
        </h2>
        <p className="text-gray-600 mb-4">
          Please navigate to YouTube.com to use this extension
        </p>
        <button
          onClick={goToYoutube}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Go to YouTube
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
