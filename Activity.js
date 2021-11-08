class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.isCompleted = false;
    // this.id = id;
<<<<<<< HEAD

=======
    // console.log(this.minutes, this.seconds)
>>>>>>> b151fdf623a8105cf3cf9823066257f347f51c73
  }
  countdown() {
    var minutes = this.minutes
    var seconds = this.seconds
    var int = 
    setInterval(function() {

<<<<<<< HEAD
      if(seconds > 0) {
        seconds--;
      } else if(minutes > 0) {
        minutes--;
        seconds+=59;
      } else{
        clearInterval(int);
       markComplete();
      }

    countdownTimer.innerText = `${padDigits(minutes)}:${padDigits(seconds)}`
    }, 1000)
    }
=======
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
>>>>>>> b151fdf623a8105cf3cf9823066257f347f51c73




  
    
  

//   saveToStorage() {
//   }
};
<<<<<<< HEAD
=======
//var activity = [];
var selected = "none";
var invalidCharacters = ["e", "+", "-"];
// module.exports = Activity;
>>>>>>> b151fdf623a8105cf3cf9823066257f347f51c73
