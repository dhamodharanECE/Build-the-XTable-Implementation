import './App.css'
import React, { useState } from 'react'

const App = () => {
  const [val, setVal] = useState(
    
[
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);
  function handleDate(){
    setVal([...val].sort((a, b) => new Date(b.date) - new Date(a.date)));
  }
  function handleViews(){
    setVal([...val].sort((a, b)=> b.views - a.views)); 
  }

   return (
     <div>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={handleDate}>Sort by Date</button>
        <button onClick={handleViews}>Sort by Views</button>
      </div>
      <table
        border="1"
        cellPadding="5"
        style={{ marginLeft: '25%', textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {val.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App

