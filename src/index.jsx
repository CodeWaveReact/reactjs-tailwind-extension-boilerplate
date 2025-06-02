import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./pages/home";
import ErrorPage from "./pages/error";

const App = () => {
  const [isYouTube, setIsYouTube] = useState(false);

  useEffect(() => {
    // Check current tab URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentUrl = tabs[0]?.url || '';
      setIsYouTube(currentUrl.includes('youtube.com'));
    });
  }, []);

  return isYouTube ? <Home /> : <ErrorPage />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
