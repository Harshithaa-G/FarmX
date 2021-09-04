import React, { Component } from 'react'
import '../css/collaborate.css'
import Navbar from './navbar';
class Adopt extends Component {
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
                        <h5 class="card-title">Adopting option is only for those interested in making regular bulk orders (hotels,office canteens etc.)</h5>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-outline-info btn-sm">fill our form</a>
                    </div>
                </div>

                <img className="image2" src="https://res.cloudinary.com/dhjwc5jsq/image/upload/v1630599855/image3_dywt5n.jpg" />



            </div>







        );
    }
}

export default Adopt;

