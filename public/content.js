function getAllVideoTitles() {
  const titles = [];
  const videoTitleElements = document.querySelectorAll("#video-title-link");
  videoTitleElements.forEach((el) => {
    if (el.textContent) {
      titles.push(el.textContent.trim());
    }
  });
  return titles;
}

// Listen for message from popup
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "get_titles") {
    const titles = getAllVideoTitles();
    sendResponse({ titles });
  }
});
