# Build-the-XTable-Implementation
📊 Understand Application Requirements
Build XTable by building a table that can be sorted on the basis of date and views. Use your ReactJS skills to achieve this.

📊 You must use the following data in your state to be displayed in the table:

[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]

**Upon initial render:**

📊 After clicking on the Sort by Date button, the data must get sorted in such a way that the rows with latest dates must be on the top and as we go down the dates must be older.

📊 In case multiple rows have the same date, they are further sorted on the basis of Views, such that the rows with higher number of views are on the top and the view count decreases as we go down. Below image shows the required output after clicking on the Sort by Date button.

📊 After clicking on the Sort by Views button, the data must get sorted in such a way that the rows with higher numbers must be on the top and as we go down the views must be lesser i.e. sorted as per decreasing order of views.

📊 In case multiple rows have the same views, they are further sorted on the basis of Date, such that the rows with latest dates are on the top and the dates get older as we go down. Below image shows the required output after clicking on the Sort by Views button.


NOTE:

📊 You must have the heading as "Date and Views Table" created using an h1 element only.

📊 You must not use any external UI library. You must create the table from scratch using table element.

📊 You must create the Sort by Date button by using button element and it must contain the text "Sort by Date". Similarly, the Sort by Views button must be created by using button element and it must contain the text “Sort by Views”.
