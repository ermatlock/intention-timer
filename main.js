


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
var coundownTimer = document.querySelector(".countdown-timer");





// event listeners
studyButton.addEventListener("click", activateStudy);
studyButtonActive.addEventListener("click", deactivateStudy);
meditateButton.addEventListener("click", activateMeditate);
meditateButtonActive.addEventListener("click", deactivateMeditate);
exerciseButton.addEventListener("click", activateExercise);
exerciseButtonActive.addEventListener("click", deactivateExercise);
startButton.addEventListener("click", startActivity);
//startTimerButton.addEventListener("click", timer);
// categoryButtons.addEventListener("click", checkButtons);

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

function activateStudy(element) {
  hideDisplay(studyButton);
  showDisplay(studyButtonActive);
  hideDisplay(meditateButtonActive)
  showDisplay(meditateButton)
  hideDisplay(exerciseButtonActive)
  showDisplay(exerciseButton)
  selected = "study";
  // console.log(selected);
};

function activateMeditate(element) {
  hideDisplay(meditateButton);
  showDisplay(meditateButtonActive);
  hideDisplay(studyButtonActive)
  showDisplay(studyButton)
  hideDisplay(exerciseButtonActive)
  showDisplay(exerciseButton)
  selected = "meditate";
  // console.log(selected);
};

function activateExercise(element) {
  hideDisplay(exerciseButton);
  showDisplay(exerciseButtonActive);
  hideDisplay(studyButtonActive)
  showDisplay(studyButton)
  hideDisplay(meditateButtonActive)
  showDisplay(meditateButton)
  selected = "exercise";
  // console.log(selected);
};

function deactivateStudy(element) {
  showDisplay(studyButton);
  hideDisplay(studyButtonActive);
  selected = "none"
  // console.log(selected);
};

function deactivateMeditate(element) {
  showDisplay(meditateButton);
  hideDisplay(meditateButtonActive);
  selected = "none"
  // console.log(selected);
};

function deactivateExercise(element) {
  showDisplay(exerciseButton);
  hideDisplay(exerciseButtonActive);
  selected = "none"
  // console.log(selected);
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
  // event.preventDefault();
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
  console.log(newActivity);
  changeColor();
  // goToTimer();
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
  timerFormat();
  userActivityInput.innerText = activity[0].description;
  coundownTimer.innerText = `${activity[0].minutes}:${activity[0].seconds}`;
  console.log(newActivity[0].minutes);

};

function timerFormat() {
  if (activity[0].minutes < 10) {
    activity[0].minutes = `0${activity[0].minutes}`
  };
  if (activity[0].seconds < 10) {
    activity[0].seconds = `0${activity[0].seconds}`
  };
};

// function timer () {
// var mins = activity[0].minutes
// var sec = activity[0].seconds
//   if (mins === "minutes") {
//     mins = mins * 60000;
//   } else if (sec === "seconds") {
//     sec = sec * 1000;
//   }
//
//   var now = Date.now();
//   endTime = now + (mins + sec);
// timer(endTime);
// interval = setInterval(() => {
//   timer(endTime);
// }, 1000);
// }



///practice clock
// function initializeClock(id, endtime) {
//   var clock = document.querySelector(id);
//   var minutesSpan = clock.querySelector('.user-minutes')
//   var secondsSpan = clock.querySelector('.user-seconds');
//
//   function updateClock() {
//     var t = getTimeRemaining(endtime);
//
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//
//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }
//
//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }
//
// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// initializeClock('clockdiv', deadline);
