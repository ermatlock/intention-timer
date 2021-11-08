class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.isCompleted = false;
    // this.id = id;

  }
  countdown() {
    var minutes = this.minutes
    var seconds = this.seconds
    var int =
    setInterval(function() {
      if(seconds > 0) {
        seconds--;
      } else if(minutes > 0) {
        minutes--;
        seconds+=59;
      } else{
        clearInterval(int);
       markComplete();
      };

    countdownTimer.innerText = `${padDigits(minutes)}:${padDigits(seconds)}`
    }, 1000)
  };

//   saveToStorage() {
  // }
};



//var activity = [];
var selected = "none";
var invalidCharacters = ["e", "+", "-"];
// module.exports = Activity;
