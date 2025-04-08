// Function to load content for a specific category
function loadContent(category) {
  const uploads = JSON.parse(localStorage.getItem('uploads') || '{}');
  const container = document.getElementById(`${category}-container`);
  container.innerHTML = ''; // Clear any existing content

  const terms = ["Term 1", "Term 2", "Term 3", "Term 4"];
  
  terms.forEach(term => {
    const termBlock = document.createElement("div");
    termBlock.className = "term-block";

    const heading = document.createElement("h3");
    heading.textContent = term;
    heading.className = "term-heading";
    termBlock.appendChild(heading);

    const hasUploads = uploads[category] && uploads[category][term];

    // Create the clickable "Files Uploaded" message
    const statusCard = document.createElement("div");
    statusCard.className = "card file-status-card";
    const link = document.createElement("a");
    link.href = "#"; // Don't navigate anywhere
    link.textContent = "Files Uploaded";
    statusCard.appendChild(link);

    // Check if there are uploads for the given category and term
    if (hasUploads) {
      // If there are files, link to the view page
      link.href = `view.html?category=${encodeURIComponent(category)}&term=${encodeURIComponent(term)}`;
    } else {
      // If there are no uploads, show an alert on click
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent navigation
        alert("No files uploaded yet.");
      });
    }

    termBlock.appendChild(statusCard);
    container.appendChild(termBlock);
  });
}

// Load all categories on page load
window.onload = () => {
  loadContent('notes');
  loadContent('quizzes');
  loadContent('tests');
  loadContent('exams');
  loadContent('memos');
};

