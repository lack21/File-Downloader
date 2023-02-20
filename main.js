// lear
// File Downloader

window.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.querySelector(".download-btn");
  const inputValue = document.querySelector(".url-input");

  // Download File
  downloadBtn.addEventListener("click", (e) => {
    // To prevent form from submitting
    e.preventDefault();

    fetch(inputValue.value)
      .then((item) => item.blob())
      .then((file) => {
        // Creating a new file
        let urlLink = URL.createObjectURL(file);

        // Creating an anchor tag
        let anchorTag = document.createElement("a");

        // Adding url link to anchor tag
        anchorTag.href = urlLink;

        // Naming anchor tag original url link content's name
        anchorTag.download = inputValue.value.replace(/^.*[\\\/]/, "");

        // Adding anchor tag to the body
        document.body.appendChild(anchorTag);

        // Clicking anchor tag to download file
        anchorTag.click();

        // Once file is downloaded removing anchor tag
        anchorTag.remove();
      });
  });
});
