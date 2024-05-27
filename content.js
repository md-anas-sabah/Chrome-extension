// Function to change profile pictures
function changeProfilePictures() {
  const profileImages = document.querySelectorAll('img[alt*="profile photo"]');
  profileImages.forEach((img) => {
    img.src = "./icon.jpeg";
  });
}

// Observer to handle dynamically loaded content
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      changeProfilePictures();
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

changeProfilePictures();
