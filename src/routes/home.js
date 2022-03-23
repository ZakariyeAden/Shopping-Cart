import React, { useEffect } from 'react'
import '../style/Home.css'
import { Link } from "react-router-dom";
function Home() {
  useEffect(() => {
    document.title = "Home"
  });
  return (
    <div className="home">
      <h1>Naruto Shippuden</h1>
      <Link to="/shop">See out Shop {">"}</Link>
    </div>
  );
}

export default Home