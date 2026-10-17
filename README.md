# Week 2 Node & Express API Assignment

A simple Express.js backend application built as part of Week 2 assignments.

## Features
* Express app configured with environment variables (`dotenv`)
* JSON parsing middleware
* Custom request logging middleware
* Static file serving support
* Robust error handling (returns status 400 for missing required data)

## Endpoints
* **GET `/`** - Returns a welcome message ("My Week 2 API!").
* **POST `/user`** - Accepts JSON body `{ "name", "email" }` and returns a greeting.
* **GET `/user/:id`** - Returns the user profile for the given ID.

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amadtechhq-svg/week2-node-express.git
   cd week2-node-express
   npm install
   ```