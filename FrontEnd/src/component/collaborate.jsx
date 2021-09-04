import React, { Component } from 'react'
import '../css/collaborate.css'
import Navbar from './navbar';
class Collaborate extends Component {
    state = {}
    componentDidMount() {
        localStorage.clear();
    }
    render() {
        return (
            <div>
                <Navbar />
                <div class="card">
                    <div class="card-header">

                    </div>
                    <div class="card-body">
                        <h5 class="card-title">So happy that you're choosing to collaborate with us!</h5>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-outline-info btn-sm">fill our form</a>
                    </div>
                </div>

                <img className="image2" src="https://res.cloudinary.com/dhjwc5jsq/image/upload/v1630599695/image2_noh8as.jpg" />



            </div>







        );
    }
}

export default Collaborate;

