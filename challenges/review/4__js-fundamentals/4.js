// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.
function minutesFromMidnight(){
  let midnight = new Date();
  const minutes = (midnight.getHours() * 60)+ midnight.getMinutes();
  // console.log((midnight.getHours() * 60)+ midnight.getMinutes());
  return "It has been " + minutes + " minutes from midnight."
}
console.log(minutesFromMidnight());