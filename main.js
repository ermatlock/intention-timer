var studyButton = document.querySelector(".study");
var studyButtonActive = document.querySelector(".study-active");
var meditateButton = document.querySelector(".meditate");
var meditateButtonActive = document.querySelector(".meditate-active");
var exerciseButton = document.querySelector(".exercise");
var exerciseButtonActive = document.querySelector(".exercise-active");
studyButton.addEventListener("click", activateStudy);
meditateButton.addEventListener("click", activateMeditate);
exerciseButton.addEventListener("click", activateExercise);
function show(element) {
  element.classList.remove("hidden");
};
function hide(element) {
  element.classList.add("hidden");
};
function toggle(element) {
  element.toggle("hidden");
}
function activateStudy(element) {
  hide(studyButton);
  show(studyButtonActive);
}
function activateMeditate(element) {
  hide(meditateButton);
  show(meditateButtonActive);
}
function activateExercise(element) {
  hide(exerciseButton);
  show(exerciseButtonActive);
}
