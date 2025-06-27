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
      <div><h1>Date and Views Table</h1></div>
     <div>
      <span >
        <button  onClick={handleDate}>Sort by Date</button>
        <button  onClick={handleViews}>Sort by Views</button>
      </span>
      <div>
        <table border="1" cellPadding="5" style={{  marginLeft:'10%', textAlign:"center" }}>
          <thead>
            <tr className='tv'>
              <th className='ta'>Date</th>
              <th className='tb'>Views</th>
              <th className='tc'>Article</th>
            </tr>
          </thead>
        </table>
      </div>
      <table border="1" cellPadding="5" style={{ marginLeft:'10%', textAlign:"center" }}>
        <thead>
            {val.map((items, index) =>(  
          <tr key={index} style={{ textOverflow:'ellipsis' }}>
           <th style={{ padding: '10px 30px'}} >{items.date}</th>
           <th style={{ padding: '10px 25px'}}>{items.views}</th>
           <th style={{ padding: '10px 30px'}}>{items.article}</th>
          </tr>
            ))}
        </thead>
      </table>
     </div>
    </div>
  )
}

export default App

