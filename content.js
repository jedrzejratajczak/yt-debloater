chrome.storage.sync.get(["extensionEnabled"], (result) => {
  const youtubeHost =
    window.location.hostname === "www.youtube.com" ||
    window.location.hostname === "youtube.com";
  const extensionEnabled = result.extensionEnabled ?? true;

  if (youtubeHost && extensionEnabled) {
    function removeNavItems(itemName) {
      const item = Array.from(
        document.querySelectorAll("ytd-guide-entry-renderer")
      ).find(
        (element) =>
          element.querySelector("yt-formatted-string")?.textContent === itemName
      );
      if (item) {
        item.remove();
        return true;
      }
      return false;
    }

    const shortsObserver = new MutationObserver(() => {
      if (removeNavItems("Shorts")) {
        shortsObserver.disconnect();
      }
    });

    shortsObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const homeObserver = new MutationObserver(() => {
      if (removeNavItems("Home")) {
        homeObserver.disconnect();
      }
    });

    homeObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const yourClipsObserver = new MutationObserver(() => {
      if (removeNavItems("Your clips")) {
        yourClipsObserver.disconnect();
      }
    });

    yourClipsObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const yourVideosObserver = new MutationObserver(() => {
      if (removeNavItems("Your videos")) {
        yourVideosObserver.disconnect();
      }
    });

    yourVideosObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const subscriptionsObserver = new MutationObserver(() => {
      if (removeNavItems("Subscriptions")) {
        subscriptionsObserver.disconnect();
      }
    });

    subscriptionsObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    function removeGuideSection(sectionName) {
      const section = Array.from(
        document.querySelectorAll("ytd-guide-section-renderer")
      ).find(
        (element) =>
          element.querySelector("yt-formatted-string")?.textContent ===
          sectionName
      );
      if (section) {
        section.remove();
        return true;
      }
      return false;
    }

    const exploreSectionObserver = new MutationObserver(() => {
      if (removeGuideSection("Explore")) {
        exploreSectionObserver.disconnect();
      }
    });

    exploreSectionObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const moreFromYouTubeSectionObserver = new MutationObserver(() => {
      if (removeGuideSection("More from YouTube")) {
        moreFromYouTubeSectionObserver.disconnect();
      }
    });

    moreFromYouTubeSectionObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const settingsSectionObserver = new MutationObserver(() => {
      const settingsSection = Array.from(
        document.querySelectorAll("ytd-guide-section-renderer")
      ).find(
        (element) => element.querySelector("a[title='Settings']") !== null
      );
      if (settingsSection) {
        settingsSection.remove();
        settingsSectionObserver.disconnect();
      }
    });

    settingsSectionObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const feedObserver = new MutationObserver(() => {
      const feed = document.querySelector(
        "ytd-two-column-browse-results-renderer[page-subtype='home']"
      );
      if (feed) {
        feed.remove();
        feedObserver.disconnect();
      }
    });

    feedObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const footerObserver = new MutationObserver(() => {
      const footer = document.querySelector("div#footer");
      if (footer) {
        footer.remove();
        footerObserver.disconnect();
      }
    });

    footerObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const shortsSectionObserver = new MutationObserver(() => {
      const shortsSection = Array.from(
        document.querySelectorAll("ytd-rich-section-renderer")
      ).find(
        (element) =>
          element.querySelector("span#title")?.textContent.trim() === "Shorts"
      );
      if (shortsSection) {
        shortsSection.remove();
        shortsSectionObserver.disconnect();
      }
    });

    shortsSectionObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const relatedVideosObserver = new MutationObserver(() => {
      const relatedVideosSection = document.querySelector(
        "#columns #secondary #related"
      );
      if (relatedVideosSection) {
        relatedVideosSection.remove();
        relatedVideosObserver.disconnect();
      }
    });

    relatedVideosObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const commentObserver = new MutationObserver(() => {
      const commentsSection = document.querySelector("ytd-comments");
      if (commentsSection) {
        commentsSection.remove();
        commentObserver.disconnect();
      }
    });

    commentObserver.observe(document.body, { childList: true, subtree: true });
  }
});
