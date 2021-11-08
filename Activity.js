class Activity{
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.isCompleted = false;
    // this.id = id;
    console.log(this.minutes, this.seconds)
  }
  countdown() {
  //  var time =
    var minutes = this.minutes
    var seconds = this.seconds

    activity[0].minutes * 60 + activity[0].seconds;
    console.log(time)
    setInterval(function(time) {
    var mins = Math.floor(minutes / 60);
    var secs = seconds % 60;
      countdownTimer.innerText = `${minutes}:${seconds}`;

        time--;
      } , 1000)
  }

  markComplete() {
  }
  saveToStorage() {
  }
};
//var activity = [];
var selected = "none";
var invalidCharacters = ["e", "+", "-"];
module.exports = Activity;
