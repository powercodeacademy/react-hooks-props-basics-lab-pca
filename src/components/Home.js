import React from "react"

const Home = ({ color, city, username }) => (
  <div id="home">
    <h1 style={{ color: color }}>
      {username} is a Web Developer from {city}
    </h1>
  </div>
)

export default Home
