// Background script for Chrome extension
chrome.runtime.onInstalled.addListener(() => {
  console.log('YouTube Extension installed');
});

// Only activate the extension on YouTube.com
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url?.includes('youtube.com')) {
    // You can send a message to your content script here
    chrome.tabs.sendMessage(tabId, {
      type: 'NEW_YOUTUBE_VIDEO',
      url: tab.url
    });
  }
});
