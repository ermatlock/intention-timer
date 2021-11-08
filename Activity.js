class Activity{
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.isCompleted = false;
    // this.id = id;
    // console.log(this.minutes, this.seconds)
  }
  countdown() {
  //  var time =
    var minutes = this.minutes
    var seconds = this.seconds

    console.log(minutes, seconds)
    setInterval(function() {

      if(seconds > 0) {
        seconds--
      } else if(minutes > 0) {
        minutes--
        seconds+=59
      } else{
        // clearInterval()
      }

    countdownTimer.innerText = `${minutes}:${seconds}`
    }, 1000)



    // activity[0].minutes * 60 + activity[0].seconds;
    // console.log(time)
    // setInterval(function(time) {
    // var mins = Math.floor(minutes / 60);
    // var secs = seconds % 60;
    //
    //
    //     time--;
    //   } , 1000)
  }

  markComplete() {
  }
  saveToStorage() {
  }
};
//var activity = [];
var selected = "none";
var invalidCharacters = ["e", "+", "-"];
// module.exports = Activity;
