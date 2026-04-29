// Teaching Philosophy Text Split into Two Paragraphs
const philosophyText1 = `I am a freshman attending Mater Dei graduating at the class of 2029. My prevous school was St. Cecilia. I enjot llearning a lot lol. `;

const philosophyText2 = `Some service hour projects I do are coaching at my old schools for sports or academics. I also help with food drives to increase my hours and help the community.`;

const para1 = document.getElementById("philosophy-text-1");
const para2 = document.getElementById("philosophy-text-2");

let index1 = 0;
let index2 = 0;

// Type first paragraph
function typePhilosophy1() {
  if (index1 < philosophyText1.length) {
    para1.textContent += philosophyText1.charAt(index1);
    index1++;
    setTimeout(typePhilosophy1, 50);
  } else {
    // Start second paragraph after a short delay
    setTimeout(typePhilosophy2, 500);
  }
}

// Type second paragraph
function typePhilosophy2() {
  if (index2 < philosophyText2.length) {
    para2.textContent += philosophyText2.charAt(index2);
    index2++;
    setTimeout(typePhilosophy2, 50);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  typePhilosophy1();
});