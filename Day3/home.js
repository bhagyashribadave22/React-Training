import React from "react"
import Navbar from "../../component/navbar/navar"


const Home=()=>{
  return(
    <div className="Home-container">
      <div className="Home-wrapper">
     <Navbar/>
     <h1>Fun facts about React</h1>
      <br></br>
      
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by jorden walke</li>
        <li>Has well over 100k strts on GitHub</li>
      </ul>
     
      </div>
    </div>
  )
}

export default Home
