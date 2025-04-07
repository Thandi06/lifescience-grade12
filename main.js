console.log("Site loaded! Ready to add interactive features.");

// ==== NOTES grouped by term ====
const notesByTerm = {
  "Term 1": [
    { title: "Term 1 Notes Pack", fileUrl: "https://example.com/term1.pdf" }
  ],
  "Term 2": [
    { title: "Term 2 Notes Pack", fileUrl: "https://example.com/term2.pdf" }
  ],
  "Term 3": [
    { title: "Term 3 Notes Pack", fileUrl: "https://example.com/term3.pdf" }
  ],
  "Term 4": [
    { title: "Term 4 Notes Pack", fileUrl: "https://example.com/term4.pdf" }
  ]
};

function loadNotes() {
  const container = document.getElementById("notes-container");

  for (let term in notesByTerm) {
    const termBlock = document.createElement("div");
    termBlock.className = "term-block";

    const heading = document.createElement("h3");
    heading.textContent = term;
    heading.className = "term-heading";
    termBlock.appendChild(heading);

    notesByTerm[term].forEach(note => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <p>${note.title}</p>
        <a href="${note.fileUrl}" target="_blank" download>Download</a>
      `;
      termBlock.appendChild(card);
    });

    container.appendChild(termBlock);
  }
}

// ==== TESTS grouped by term ====
const testsByTerm = {
  "Term 1": [
    { title: "Term 1 Test", fileUrl: "https://example.com/test-term1.pdf" }
  ],
  "Term 2": [
    { title: "Term 2 Test", fileUrl: "https://example.com/test-term2.pdf" }
  ],
  "Term 3": [
    { title: "Term 3 Test", fileUrl: "https://example.com/test-term3.pdf" }
  ],
  "Term 4": [
    { title: "Term 4 Test", fileUrl: "https://example.com/test-term4.pdf" }
  ]
};

function loadTests() {
  const container = document.getElementById("tests-container");

  for (let term in testsByTerm) {
    const termBlock = document.createElement("div");
    termBlock.className = "term-block";

    const heading = document.createElement("h3");
    heading.textContent = term;
    heading.className = "term-heading";
    termBlock.appendChild(heading);

    testsByTerm[term].forEach(test => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <p>${test.title}</p>
        <a href="${test.fileUrl}" target="_blank" download>Download</a>
      `;
      termBlock.appendChild(card);
    });

    container.appendChild(termBlock);
  }
}

// ==== EXAMS grouped by term ====
const examsByTerm = {
  "Term 1": [
    { title: "Term 1 Assessment", fileUrl: "https://example.com/exam-term1.pdf" }
  ],
  "Term 2": [
    { title: "Mid-Year Exam", fileUrl: "https://example.com/midyear.pdf" }
  ],
  "Term 3": [
    { title: "Term 3 Paper", fileUrl: "https://example.com/exam-term3.pdf" }
  ],
  "Term 4": [
    { title: "Final Exam Paper", fileUrl: "https://example.com/final.pdf" }
  ]
};

function loadExams() {
  const container = document.getElementById("exams-container");

  for (let term in examsByTerm) {
    const termBlock = document.createElement("div");
    termBlock.className = "term-block";

    const heading = document.createElement("h3");
    heading.textContent = term;
    heading.className = "term-heading";
    termBlock.appendChild(heading);

    examsByTerm[term].forEach(exam => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <p>${exam.title}</p>
        <a href="${exam.fileUrl}" target="_blank" download>Download</a>
      `;
      termBlock.appendChild(card);
    });

    container.appendChild(termBlock);
  }
}

// ==== MEMOS grouped by term ====
const memosByTerm = {
  "Term 1": [
    { title: "Term 1 Memo", fileUrl: "https://example.com/memo-term1.pdf" }
  ],
  "Term 2": [
    { title: "Mid-Year Memo", fileUrl: "https://example.com/midyear-memo.pdf" }
  ],
  "Term 3": [
    { title: "Term 3 Memo", fileUrl: "https://example.com/memo-term3.pdf" }
  ],
  "Term 4": [
    { title: "Final Exam Memo", fileUrl: "https://example.com/final-memo.pdf" }
  ]
};

function loadMemos() {
  const container = document.getElementById("memos-container");

  for (let term in memosByTerm) {
    const termBlock = document.createElement("div");
    termBlock.className = "term-block";

    const heading = document.createElement("h3");
    heading.textContent = term;
    heading.className = "term-heading";
    termBlock.appendChild(heading);

    memosByTerm[term].forEach(memo => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <p>${memo.title}</p>
        <a href="${memo.fileUrl}" target="_blank" download>Download</a>
      `;
      termBlock.appendChild(card);
    });

    container.appendChild(termBlock);
  }
}

// ==== QUIZZES grouped by term ====
const quizzesByTerm = {
  "Term 1": [
    { title: "Term 1 Quiz", fileUrl: "https://example.com/quiz-term1.pdf" }
  ],
  "Term 2": [
    { title: "Term 2 Quiz", fileUrl: "https://example.com/quiz-term2.pdf" }
  ],
  "Term 3": [
    { title: "Term 3 Quiz", fileUrl: "https://example.com/quiz-term3.pdf" }
  ],
  "Term 4": [
    { title: "Term 4 Quiz", fileUrl: "https://example.com/quiz-term4.pdf" }
  ]
};

function loadQuizzes() {
  const container = document.getElementById("quizzes-container");

  for (let term in quizzesByTerm) {
    const termBlock = document.createElement("div");
    termBlock.className = "term-block";

    const heading = document.createElement("h3");
    heading.textContent = term;
    heading.className = "term-heading";
    termBlock.appendChild(heading);

    quizzesByTerm[term].forEach(quiz => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <p>${quiz.title}</p>
        <a href="${quiz.fileUrl}" target="_blank" download>Download</a>
      `;
      termBlock.appendChild(card);
    });

    container.appendChild(termBlock);
  }
}

// === LOAD EVERYTHING ===
window.onload = () => {
  loadNotes();
  loadTests();
  loadExams();
  loadMemos();
  loadQuizzes();
};
