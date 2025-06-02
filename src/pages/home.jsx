import React from 'react'

export const Home = () => {
   const [titles, setTitles] = useState([]);

  useEffect(() => {
    // Active tab se video titles lo
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
      chrome.tabs.sendMessage(tabId, { action: 'get_titles' }, (response) => {
        if (chrome.runtime.lastError) {
          console.error('Error:', chrome.runtime.lastError);
        } else {
          setTitles(response?.titles || []);
        }
      });
    });
  }, []);

  return (
    <div style={{ padding: 10, width: 300 }}>
      <h3>YouTube Video Titles</h3>
      <ul>
        {titles.map((title, index) => (
          <li key={index} style={{ fontSize: 14, marginBottom: 4 }}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
