# Sample User Data Generator

This script generates sample user data for the application, with locations distributed within a 1-20 mile radius around Charlottesville, VA (Latitude: 38.0321, Longitude: -78.5104).

## Usage

1. Ensure you have Node.js installed
2. From the project root, run:

```bash
# Create the scripts directory if it doesn't exist
mkdir -p scripts

# Run the script
node scripts/generateUsers.js
```

This will:
- Generate 30 sample users (you can modify NUM_USERS in the script to change this)
- Save the data to a file called `sampleUsers.json` in the current directory
- Output MongoDB commands you can use to insert the data directly into your database

## Generated Data

Each user includes:
- Random username (email format)
- Fixed password ("password123")
- Random blood group from the allowed options
- Random 10-digit phone number
- Location coordinates within 1-20 miles of the specified point
- Creation timestamp

## Modifying the Script

You can customize the script by modifying:
- `BASE_LATITUDE` and `BASE_LONGITUDE` to change the center point
- `minMiles` and `maxMiles` parameters in the function call to change the distance range
- `NUM_USERS` to generate more or fewer users
- `PASSWORD` to use a different password
- The random name generators to create different usernames

## Import to MongoDB

The data can be imported to MongoDB using the provided command in the output or via MongoDB tools:

```bash
mongoimport --db your_database_name --collection users --file sampleUsers.json --jsonArray
``` 