var time = new Date().getHours();
// time = 23;
// console.log(time);

var greeting = "Guten abend";
var name = "Alex";

// Your conditional statements here
if (time < 12) {
  greeting = "Good morning";
} else if (time < 18) {
  greeting = "Good afternoon";
} else if (time < 22) {
  greeting = "Good evening";
} else {
  greeting = "Why are you still up? Go to bed :)";
}

// alert()
alert(`${greeting}, ${name}!`);
