const fs = require('fs');

// Base coordinates (Charlottesville, VA)
const BASE_LATITUDE = 38.0321;
const BASE_LONGITUDE = -78.5104;

// Constants
const PASSWORD = "password123"; // Same password for all users
const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const NUM_USERS = 30; // Number of users to generate

// Function to generate a random email username
function generateUsername() {
  const firstNames = ['John', 'Jane', 'Alex', 'Emma', 'Michael', 'Sarah', 'David', 'Lisa', 'Robert', 'Mary', 'Daniel', 'Emily'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez', 'Anderson'];
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com', 'mail.com'];
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  const randomNum = Math.floor(Math.random() * 1000);
  
  return `${firstName.toLowerCase()}${lastName.toLowerCase()}${randomNum}@${domain}`;
}

// Function to generate a random phone number
function generatePhoneNumber() {
  let phoneNumber = '';
  for (let i = 0; i < 10; i++) {
    phoneNumber += Math.floor(Math.random() * 10);
  }
  return phoneNumber;
}

// Function to generate a random location within a specified radius (in miles)
function generateLocationInRadius(baseLat, baseLng, minMiles, maxMiles) {
  // Convert miles to degrees (rough approximation)
  // 1 degree of latitude is approximately 69 miles
  // 1 degree of longitude varies, but at this latitude it's roughly 53 miles
  const milesInLatDegree = 69;
  const milesInLngDegree = 53;
  
  // Generate a random distance between minMiles and maxMiles
  const distanceMiles = minMiles + Math.random() * (maxMiles - minMiles);
  
  // Generate a random angle in radians
  const angle = Math.random() * 2 * Math.PI;
  
  // Calculate the change in latitude and longitude
  const latChange = (Math.sin(angle) * distanceMiles) / milesInLatDegree;
  const lngChange = (Math.cos(angle) * distanceMiles) / milesInLngDegree;
  
  // Add the change to the base coordinates
  const newLat = baseLat + latChange;
  const newLng = baseLng + lngChange;
  
  return {
    type: 'Point',
    coordinates: [newLng, newLat] // Note: GeoJSON uses [longitude, latitude] format
  };
}

// Generate users
const users = [];
for (let i = 0; i < NUM_USERS; i++) {
  const user = {
    username: generateUsername(),
    password: PASSWORD,
    location: generateLocationInRadius(BASE_LATITUDE, BASE_LONGITUDE, 1, 20),
    bloodGroup: BLOOD_GROUPS[Math.floor(Math.random() * BLOOD_GROUPS.length)],
    phoneNumber: generatePhoneNumber(),
    createdAt: new Date()
  };
  
  users.push(user);
}

// Write the generated users to a JSON file
fs.writeFileSync('sampleUsers.json', JSON.stringify(users, null, 2));

console.log(`Generated ${NUM_USERS} users within a 1-20 mile radius of ${BASE_LATITUDE}, ${BASE_LONGITUDE}`);
console.log('Data saved to sampleUsers.json');

// Print sample MongoDB insertion script
console.log('\nTo insert these users with MongoDB, you can use:');
console.log('```');
console.log('db.users.insertMany(' + JSON.stringify(users, null, 2) + ')');
console.log('```'); 