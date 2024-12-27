document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(["extensionEnabled"], (result) => {
    const extensionEnabled = result.extensionEnabled ?? true;
    if (extensionEnabled) {
      document.getElementById("enable").classList.add("selected");
      document.getElementById("disable").classList.remove("selected");
    } else {
      document.getElementById("enable").classList.remove("selected");
      document.getElementById("disable").classList.add("selected");
    }
  });

  document.getElementById("enable").addEventListener("click", () => {
    chrome.storage.sync.set({ extensionEnabled: true }, () => {
      document.getElementById("enable").classList.add("selected");
      document.getElementById("disable").classList.remove("selected");
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.reload(tabs[0].id);
      });
    });
  });

  document.getElementById("disable").addEventListener("click", () => {
    chrome.storage.sync.set({ extensionEnabled: false }, () => {
      document.getElementById("enable").classList.remove("selected");
      document.getElementById("disable").classList.add("selected");
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.reload(tabs[0].id);
      });
    });
  });
});
