let wordsSerach = [
  "Html",
  "Java",
  "Javascript",
  "Python",
  "css",
  "c++",
  "HTML",
  "How To create a Website",
  "Wehere to lernen web desgin",
  "Wehere to lernen web online",
  "Easy Tutorials",
  "css",
];

//  result-box
const resultBos = document.querySelector(".result-box");
// input -box
let inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;

  if (input.length) {
    result = wordsSerach.filter((e) => {
      return e.toLowerCase().includes(input.toLowerCase());
    });
  }

  dispaly(result);
};

function dispaly(result) {
  let content = result.map((list) => {
    return "<li onclick=main(this)>" + list + "</li>";
  });
  resultBos.innerHTML = "<ul>" + content.join(" ") + "</ul>";
}
function main(list) {
  inputBox.value = list.innerHTML;
}
