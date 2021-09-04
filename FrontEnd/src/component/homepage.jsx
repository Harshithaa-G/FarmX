import React, { Component } from 'react'
import '../css/homepage.css'
import Navbar from './navbar';
class HomePage extends Component {
  state = {}
  componentDidMount() {
    localStorage.clear();
  }
  render() {
    return (
      <div>
        <Navbar />



        <img className="image" src="https://res.cloudinary.com/dhjwc5jsq/image/upload/v1630599567/image_iaza52.jpg" />

      </div>






    );
  }
}

export default HomePage;

