// querySelectors
var studyButton = document.querySelector(".study");
var studyButtonActive = document.querySelector(".study-active");
var meditateButton = document.querySelector(".meditate");
var meditateButtonActive = document.querySelector(".meditate-active");
var exerciseButton = document.querySelector(".exercise");
var exerciseButtonActive = document.querySelector(".exercise-active");
var userTask = document.querySelector(".user-task");
var userMinutes = document.querySelector(".user-minutes");
var userSeconds = document.querySelector(".user-seconds");
var startButton = document.querySelector(".start-button")
var errorNotComplete = document.querySelector(".error-not-complete")
var errorNotNumber = document.querySelector(".error-not-number")

// event listeners
studyButton.addEventListener("click", activateStudy);
studyButtonActive.addEventListener("click", deactivateStudy);
meditateButton.addEventListener("click", activateMeditate);
meditateButtonActive.addEventListener("click", deactivateMeditate);
exerciseButton.addEventListener("click", activateExercise);
exerciseButtonActive.addEventListener("click", deactivateExercise);
startButton.addEventListener("click", beginTimer);
// functions
function show(element) {
  element.classList.remove("hidden");
};
function hide(element) {
  element.classList.add("hidden");
};
function toggle(element) {
  element.toggleAttribute("hidden");
};
function activateStudy() {
  hide(studyButton);
  show(studyButtonActive);
};
function deactivateStudy(element) {
  show(studyButton);
  hide(studyButtonActive);
};
function activateMeditate(element) {
  hide(meditateButton);
  show(meditateButtonActive);
};
function deactivateMeditate(element) {
  show(meditateButton);
  hide(meditateButtonActive);
};
function activateExercise(element) {
  hide(exerciseButton);
  show(exerciseButtonActive);
};
function deactivateExercise(element) {
  show(exerciseButton);
  hide(exerciseButtonActive);
};

function beginTimer() {

};
function checkForNumber(value) {
  var inputValue = parseInt(value);
  if (typeof inputValue !== number) {
    show(errorNotNumber);
  } else {
    hide(errorNotNumber);
  }
};
function checkForCompleteForm() {
  if (!userTask && !userMinutes && !userSeconds) {
   show(errorNotComplete);
 }
};

// goal: togggle from active to inactive
// only one button can be active at a time
// event listener for click, invoke toggle for button
// check to see if other buttons activate
// if other button activated, disable activation on clicked button
//
