# Database Seeding Script

This script imports the sample user data into your MongoDB database.

## Prerequisites

1. Make sure you have MongoDB running locally or have a MongoDB connection string set in your environment variables.
2. Ensure you have installed all required dependencies:
   ```
   npm install mongoose dotenv
   ```

## Usage

Run the script from the project root:

```bash
node scripts/seedDatabase.js
```

## What it does

1. Connects to your MongoDB database (using MONGODB_URI environment variable or defaults to localhost)
2. Clears any existing users from the database
3. Inserts 55 sample users with:
   - Random usernames (email format)
   - Same password ("password123") for all users
   - Random blood groups (A+, A-, B+, B-, AB+, AB-, O+, O-)
   - Random 10-digit phone numbers
   - Location coordinates within a 1-20 mile radius of Charlottesville, VA (38.0321, -78.5104)

## Sample Data

The sample data is stored in `src/constant/sampleUsers.js` and can be used in your application for testing or development purposes:

```javascript
const sampleUsers = require('./src/constant/sampleUsers');
```

## Environmental Variables

The script uses the following environment variables:

- `MONGODB_URI`: MongoDB connection string (defaults to 'mongodb://localhost:27017/hoohacks_db')

Create a `.env` file in your project root if you need to customize these variables.

## Warnings

- This script will **delete all existing users** in your database before importing the sample data
- All sample users have the same password, which is not secure for production 