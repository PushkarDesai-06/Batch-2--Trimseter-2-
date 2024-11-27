const correctAns = ["D", "B", "C", "B", "D"];
let questions = document.querySelectorAll(".question");
const result = document.querySelector(".result");

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userAns = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];
  let score = 0;
  userAns.forEach(function (answer, index) {
    if (answer === correctAns[index]) {
      score = score + 1;
      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("wrong");
    }
  });

  result.classList.remove("hide");
  result.querySelector("p").innerText = `You Scored ${score}/5`;
});
