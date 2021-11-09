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
var startButton = document.querySelector(".start-button");
var errorNotComplete = document.querySelector(".error-not-complete");
var errorNotNumber1 = document.querySelector(".error-1");
var errorNotNumber2 = document.querySelector(".error-2");
var countdownTimer = document.querySelector(".countdown-timer");
var newActivityBox = document.querySelector(".new-activity-box");
var currentActivityBox = document.querySelector(".current-activity-box");
var startTimerButton = document.querySelector(".start-timer-button");
var userActivityInput = document.querySelector(".user-activity-input");

var activity = [];
var selected = "none";
var invalidCharacters = ["e", "E", ".", "+", "-", "=", "/", "%", "n"];

// event listeners
studyButton.addEventListener("click", activateStudy);
studyButtonActive.addEventListener("click", deactivateStudy);
meditateButton.addEventListener("click", activateMeditate);
meditateButtonActive.addEventListener("click", deactivateMeditate);
exerciseButton.addEventListener("click", activateExercise);
exerciseButtonActive.addEventListener("click", deactivateExercise);
startButton.addEventListener("click", startActivity);
startTimerButton.addEventListener("click", methodTime);
userMinutes.addEventListener("keydown", preventKey);
userSeconds.addEventListener("keydown", preventKey);

// functions
function showDisplay(element) {
  element.classList.remove("hidden");
};
function hideDisplay(element) {
  element.classList.add("hidden");
};
function hideVisibility(element) {
  element.classList.add("hide");
};
function showVisibility(element) {
  element.classList.remove("hide");
};

function padDigits(n) {
  if (n < 10) {
    return "0" + n;
  }
  else {
    return n;
  };
};

function methodTime() {
  activity[0].countdown();
};

function activateStudy(element) {
  hideDisplay(studyButton);
  showDisplay(studyButtonActive);
  hideDisplay(meditateButtonActive);
  showDisplay(meditateButton);
  hideDisplay(exerciseButtonActive);
  showDisplay(exerciseButton);
  selected = "study";
};

function activateMeditate(element) {
  hideDisplay(meditateButton);
  showDisplay(meditateButtonActive);
  hideDisplay(studyButtonActive);
  showDisplay(studyButton);
  hideDisplay(exerciseButtonActive);
  showDisplay(exerciseButton);
  selected = "meditate";
};

function activateExercise(element) {
  hideDisplay(exerciseButton);
  showDisplay(exerciseButtonActive);
  hideDisplay(studyButtonActive);
  showDisplay(studyButton);
  hideDisplay(meditateButtonActive);
  showDisplay(meditateButton);
  selected = "exercise";
};

function deactivateStudy(element) {
  showDisplay(studyButton);
  hideDisplay(studyButtonActive);
  selected = "none";
};

function deactivateMeditate(element) {
  showDisplay(meditateButton);
  hideDisplay(meditateButtonActive);
  selected = "none";
};

function deactivateExercise(element) {
  showDisplay(exerciseButton);
  hideDisplay(exerciseButtonActive);
  selected = "none";
};

function startActivity(value) {
  event.preventDefault();
  hideVisibility(errorNotComplete);
  hideVisibility(errorNotNumber1);
  hideVisibility(errorNotNumber2);
  checkForCompleteForm();
};

function checkForCompleteForm(value) {
  if (!userTask.value) {
   showVisibility(errorNotComplete);
  }
  if (!userMinutes.value) {
   showVisibility(errorNotNumber1);
  }
  if (!userSeconds.value) {
   showVisibility(errorNotNumber2);
  } else {
   checkForNumber1();
   checkForNumber2();
 };
};

function checkForNumber1(value) {
  var minutesValue = parseInt(userMinutes.value);
  if (isNaN(minutesValue)) {
    showVisibility(errorNotNumber1);
    return;
  };
  categoryAlert();
};

function checkForNumber2(value) {
  var secondsValue = parseInt(userSeconds.value);
  if (isNaN(secondsValue)) {
    showVisibility(errorNotNumber2);
    return;
  };
  categoryAlert();
};

function preventKey() {
  if(invalidCharacters.includes(event.key)) {
    event.preventDefault();
  };
};

function categoryAlert() {
  if (selected === "none") {
    window.alert("Please select a category");
  } else {
    gatherData();
  };
};

function gatherData(category, description, minutes, seconds) {
  var category = selected;
  var description = userTask.value;
  var minutes = userMinutes.value;
  var seconds = userSeconds.value;
  var newActivity = new Activity(category, description, minutes, seconds);
  activity.push(newActivity);
  changeColor();
};

function changeColor() {
  if (selected === "study") {
    document.querySelector(".start-timer-button").style.borderColor = "#B3FD78";
    goToTimer();
  };
  if (selected === "meditate") {
    document.querySelector(".start-timer-button").style.borderColor = "#C278FD";
    goToTimer();
  };
  if (selected === "exercise") {
    document.querySelector(".start-timer-button").style.borderColor = "#FD8078";
    goToTimer();
  };
};

function goToTimer(description, minutes, seconds) {
  hideDisplay(newActivityBox);
  showDisplay(currentActivityBox);
  userActivityInput.innerText = padDigits(activity[0].description);
  countdownTimer.innerText = `${padDigits(activity[0].minutes)}:${padDigits(activity[0].seconds)}`;
};

function markComplete() {
  window.alert("You completed your activity!");
};
