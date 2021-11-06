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
var errorNotNumber1 = document.querySelector(".error-1")
var errorNotNumber2 = document.querySelector(".error-2")


// event listeners
studyButton.addEventListener("click", activateStudy);
studyButtonActive.addEventListener("click", deactivateStudy);
meditateButton.addEventListener("click", activateMeditate);
meditateButtonActive.addEventListener("click", deactivateMeditate);
exerciseButton.addEventListener("click", activateExercise);
exerciseButtonActive.addEventListener("click", deactivateExercise);
startButton.addEventListener("click", beginTimer);
// functions
function showDisplay(element) {
  element.classList.remove("hidden");
};
function hideDisplay(element) {
  element.classList.add("hidden");
};
function hideVisibility(element) {
  element.classList.add("hide");
}
function showVisibility(element) {
  element.classList.remove("hide");
}
function toggle(element) {
  element.toggleAttribute("hidden");
};


function activateStudy(element) {
  hideDisplay(studyButton);
  showDisplay(studyButtonActive);
  hideDisplay(meditateButtonActive)
  showDisplay(meditateButton)
  hideDisplay(exerciseButtonActive)
  showDisplay(exerciseButton)
};

function activateMeditate(element) {
  hideDisplay(meditateButton);
  showDisplay(meditateButtonActive);
  hideDisplay(studyButtonActive)
  showDisplay(studyButton)
  hideDisplay(exerciseButtonActive)
  showDisplay(exerciseButton)
};

function activateExercise(element) {
  hideDisplay(exerciseButton);
  showDisplay(exerciseButtonActive);
  hideDisplay(studyButtonActive)
  showDisplay(studyButton)
  hideDisplay(meditateButtonActive)
  showDisplay(meditateButton)
};

function deactivateStudy(element) {
  showDisplay(studyButton);
  hideDisplay(studyButtonActive);
};

function deactivateMeditate(element) {
  showDisplay(meditateButton);
  hideDisplay(meditateButtonActive);
};

function deactivateExercise(element) {
  showDisplay(exerciseButton);
  hideDisplay(exerciseButtonActive);
};

function beginTimer(value) {
  event.preventDefault();
  checkForNumber(value);
  checkForCompleteForm(value);
};

function checkForNumber(value) {
  var minutesValue = parseInt(userMinutes.value);
  var secondsValue = parseInt(userSeconds.value)

  if (isNaN(minutesValue)) {
    showVisibility(errorNotNumber1);
  }
  if (isNaN(secondsValue)) {
    showVisibility(errorNotNumber2);
  }
};

function checkForCompleteForm(value) {
  if (!userTask.value) {
   showVisibility(errorNotComplete);
 } else if (!userMinutes.value) {
   showVisibility(errorNotNumber1);
 } else if (!userSeconds.value) {
   showVisibility(errorNotNumber2)
 }
};
