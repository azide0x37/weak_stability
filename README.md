# Weak_Stability

Weak_Stability is an innovative application designed to analyze the glide performance of aircraft under various conditions. It enables users, particularly pilots and aerospace engineers, to calculate and visualize the glide distance achievable from a given starting altitude with different starting speeds. The application emphasizes identifying weak stability boundary plots, thereby distinguishing between achievable and unachievable velocities for enhanced understanding of an aircraft's glide capabilities and limitations.

## Overview

The application is built on the Node/Express framework for the backend, with MongoDB serving as the database and Mongoose ORM for data management. The frontend utilizes EJS for templating and Bootstrap along with vanilla JavaScript for styling and dynamic interactions. Calculations are performed server-side, solving a system of differential equations to analyze glide performance, while plots are dynamically generated using JavaScript libraries like Chart.js or Plotly.js to visualize results.

## Features

- **User Input Form:** Allows users to input crucial flight parameters such as best glide ratio, drag polar coefficients, and aircraft weight among others.
- **Glide Analysis:** Solves a system of differential equations based on user inputs to calculate glide distances across a range of starting speeds.
- **Results Visualization:** Displays weak stability boundary plots that highlight the glide distances within achievable and unachievable velocities, aiding in understanding the stable and unstable manifolds.

## Getting started

### Requirements

- Node.js
- MongoDB
- A modern web browser

### Quickstart

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in the project root directory.
3. Set up your MongoDB database and ensure it is running.
4. Create a `.env` file in the project root directory following the `.env.example` template.
5. Start the application by running `npm start`. The server will be running on `http://localhost:3000` (or the port specified in your `.env` file).

### License

Copyright (c) 2024.