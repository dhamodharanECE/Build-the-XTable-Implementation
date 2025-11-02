# XTable – React Sortable Table
🧾# Overview

XTable is an interactive ReactJS application that displays a data table of articles with their date and view count.
It allows users to sort the data dynamically by Date or Views, implementing multi-level sorting using React state and logic — all without any external UI libraries.

✨# Features

✅ Displays a table of articles with Date, Views, and Article Title
✅ Sort by Date (latest first)
✅ Sort by Views (highest first)
✅ Implements secondary sorting when values are equal
✅ Clean, responsive layout using only HTML and CSS
✅ Uses React Hooks for state management

📂# Data Used

The application uses the following static data stored in the component state:

[
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
]

🧠# Application Behavior
🖥️# Initial Render

The app displays:

A heading: “Date and Views Table” 

A table showing all articles with their date, views, and title

Two buttons:

Sort by Date

Sort by Views

📅# Sort by Date

When the Sort by Date button is clicked:

The table is sorted in descending order of dates (latest first).

If multiple rows have the same date, they are further sorted by views (descending).

Example Output:

Date	Views	Article

2023-09-02	150	Article 2

2023-09-02	120	Article 3

2023-09-01	100	Article 1

2022-09-01	100	Article 1

2020-09-03	200	Article 4

👁️ Sort by Views

When the Sort by Views button is clicked:

The table is sorted in descending order of views (highest first).

If multiple rows have the same views, they are further sorted by date (descending).

Example Output:

Views	Date	Article
200	2020-09-03	Article 4
150	2023-09-02	Article 2
120	2023-09-02	Article 3
100	2023-09-01	Article 1
100	2022-09-01	Article 1
⚙️ Implementation Details

Built using React Functional Components

Used useState() hook to manage data and re-render table after sorting

Used Array.sort() with custom comparator logic:

For Sort by Date → Compare dates first, then views

For Sort by Views → Compare views first, then dates

Created buttons using the <button> HTML element only

Built table using pure HTML table elements
🧰# Tech Stack
Technology	Purpose
ReactJS	UI creation and sorting logic
HTML5	Table structure
CSS3	Styling
JavaScript (ES6+)	Sorting functionality

🧩# Installation and Setup

Follow these steps to run the app locally:

Clone the Repository

git clone https://github.com/dhamodharanECE/Build-the-XTable-Implementation.git

cd project

Install Dependencies

npm install


Start the Application

npm start


Open your browser and visit:

http://localhost:3000

🧠# Learnings

Implementing custom sort logic with multiple conditions

Managing and updating component state efficiently in React

Working with date comparisons and nested sorting

Building structured layouts using semantic HTML without external UI libraries.

# UI figure:

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/6ca14a48-0b52-42f0-896d-20da0b2da084" />

Development Link:
```base
https://build-the-x-table-implementation.vercel.app/
