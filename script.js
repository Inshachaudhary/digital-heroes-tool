const textInput = document.getElementById("textInput");

textInput.addEventListener("input", () => {
  updateStats();
  localStorage.setItem("savedText", textInput.value);
});

window.onload = () => {
  textInput.value = localStorage.getItem("savedText") || "";
  updateStats();
};

function updateStats() {
  const text = textInput.value;

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const chars = text.length;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;
  const readTime = Math.ceil(words / 200);

  document.getElementById("wordCount").innerText = words;
  document.getElementById("charCount").innerText = chars;
  document.getElementById("sentenceCount").innerText = sentences;
  document.getElementById("readTime").innerText = readTime;
}

/* CLEAR */
function clearText() {
  textInput.value = "";
  updateStats();
  localStorage.removeItem("savedText");
}

/* COPY */
function copyText() {
  navigator.clipboard.writeText(textInput.value);
  alert("Copied!");
}

/* DOWNLOAD */
function downloadText() {
  const blob = new Blob([textInput.value], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "text.txt";
  a.click();
}

/* THEME TOGGLE */
function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}