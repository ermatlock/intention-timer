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
var invalidCharacters = ["e", "+", "-"];


// event listeners
studyButton.addEventListener("click", activateStudy);
studyButtonActive.addEventListener("click", deactivateStudy);
meditateButton.addEventListener("click", activateMeditate);
meditateButtonActive.addEventListener("click", deactivateMeditate);
exerciseButton.addEventListener("click", activateExercise);
exerciseButtonActive.addEventListener("click", deactivateExercise);
startButton.addEventListener("click", startActivity);
startTimerButton.addEventListener("click", methTime);
<<<<<<< HEAD
=======
// categoryButtons.addEventListener("click", checkButtons);
>>>>>>> b151fdf623a8105cf3cf9823066257f347f51c73

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
  }
};

function activateStudy(element) {
  hideDisplay(studyButton);
  showDisplay(studyButtonActive);
  hideDisplay(meditateButtonActive)
  showDisplay(meditateButton)
  hideDisplay(exerciseButtonActive)
  showDisplay(exerciseButton)
  selected = "study";
};

function activateMeditate(element) {
  hideDisplay(meditateButton);
  showDisplay(meditateButtonActive);
  hideDisplay(studyButtonActive)
  showDisplay(studyButton)
  hideDisplay(exerciseButtonActive)
  showDisplay(exerciseButton)
  selected = "meditate";
};

function activateExercise(element) {
  hideDisplay(exerciseButton);
  showDisplay(exerciseButtonActive);
  hideDisplay(studyButtonActive)
  showDisplay(studyButton)
  hideDisplay(meditateButtonActive)
  showDisplay(meditateButton)
  selected = "exercise";
};

function deactivateStudy(element) {
  showDisplay(studyButton);
  hideDisplay(studyButtonActive);
  selected = "none"
};

function deactivateMeditate(element) {
  showDisplay(meditateButton);
  hideDisplay(meditateButtonActive);
  selected = "none"
};

function deactivateExercise(element) {
  showDisplay(exerciseButton);
  hideDisplay(exerciseButtonActive);
  selected = "none"
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
   checkForNumber();
 }
};

function checkForNumber(value) {
  var minutesValue = parseInt(userMinutes.value);
  var secondsValue = parseInt(userSeconds.value);
  if (isNaN(minutesValue)) {
    showVisibility(errorNotNumber1);
  }
  if (isNaN(secondsValue)) {
    showVisibility(errorNotNumber2);
  }
  categoryAlert();
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
  console.log(activity);
  changeColor();
};

function methTime() {
activity[0].countdown()
};
function methTime() {
activity[0].countdown()
}

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
<<<<<<< HEAD
  userActivityInput.innerText = padDigits(activity[0].description);
  countdownTimer.innerText = `${padDigits(activity[0].minutes)}:${padDigits(activity[0].seconds)}`;
=======
  timerFormat(activity[0].minutes, activity[0].seconds);
  userActivityInput.innerText = activity[0].description;
  countdownTimer.innerText = `${activity[0].minutes.padStart(2, "0")}:${activity[0].seconds.padStart(2, "0")}`;
  //console.log(newActivity[0].minutes);
//  setInterval();
>>>>>>> b151fdf623a8105cf3cf9823066257f347f51c73
};
// function padThat(minutes, seconds) {
//   return `${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
//
// }

<<<<<<< HEAD
function markComplete() {
  window.alert("You completed your activity!");
=======
function timerFormat(minutes, seconds) {
  if (minutes < 10) {
    minutes = `0${minutes}`
  };
  if (seconds < 10) {
    seconds = `0${seconds}`
  };
>>>>>>> b151fdf623a8105cf3cf9823066257f347f51c73
};
