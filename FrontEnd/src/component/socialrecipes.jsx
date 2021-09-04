import React, { Component } from 'react'
import '../css/homepage.css'
import Navbar from './navbar';
class SocialRecipes extends Component {
    state = {}
    componentDidMount() {
        localStorage.clear();
    }
    render() {
        return (
            <div>
                <Navbar />




                <img className="image" src="https://res.cloudinary.com/dhjwc5jsq/image/upload/v1630599930/image4_rz6edc.jpg" />

            </div>







        );
    }
}

export default SocialRecipes;

