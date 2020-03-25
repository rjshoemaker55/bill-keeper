# Bill Keeper.

![Bill Keeper Screenshot](https://i.ibb.co/rsWSPqP/Screen-Shot-2020-03-24-at-9-54-46-PM.png)

## A simple, elegant bill tracker.
### Bill Keeper offers a more simplistic approach to tracking finances. This app is designed for people who don't need complex functionality that others offer.

## Get Started
### To run Bill Keeper on your machine, follow these steps (PostgreSQL must be installed): 
 1. Clone the repo: `git clone git@github.com:rjshoemaker55/bill-tracker.git`
 2. Install the dependencies using the package manager of your choice.
 3. Copy the path for the `server > sql > schema.sql ` file, and run the query to insert the starting tables and dummy data.
 4. Navigate to `server > schema > pgSchema.js`
 5. Edit the PostgreSQL client information to match your own (username, password, database, etc.)
 ![Edit this](https://i.ibb.co/xhdv3Rg/Screen-Shot-2020-03-24-at-10-03-37-PM.png)
 6. Save the changes, then head back to the terminal and run `yarn server` or `npm run server` to spin up the server.
6. In a separate terminal, run `yarn client`or `npm run client`to start the React client.
7. Navigate to [http://localhost:3000](http://localhost:3000) to open the app!

## What's to come:

 - Login validation
 - Update feature for bills
 - Fix suffixes for due dates
 - Calendar selection for due dates
 - Text/email notifications
