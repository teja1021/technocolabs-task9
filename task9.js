// Generate a random race number between 0 and 999
let raceNumber = Math.floor(Math.random() * 1000);

// Set participant details for testing
let registeredEarly = true;
let age = 20;

// Add 1000 to race number for adults who registered early
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Determine race time based on age and registration status
if (age > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  // Special case: participant is exactly 18 years old
  console.log('Please see the registration desk.');
}
