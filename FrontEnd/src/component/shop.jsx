import React, { Component } from 'react'
import '../css/shop.css'
import Navbar from './navbar';
class Shop extends Component {
    state = {}
    componentDidMount() {
        localStorage.clear();
    }
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <div class="card">
                        <div class="card-header">

                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Organic Hub!</h5>
                            <p class="card-text">According to your location selection, we have found a few more healthy sites you could check out!</p>
                            <a href="https://andhragreens.com/" class="btn btn-outline-info btn-sm">check em out!</a>
                        </div>
                    </div>

                </div>
                <div class="container d-flex justify-content-center mt-50 mb-50">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="card card-body">
                                <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                                    <div class="mr-2 mb-3 mb-lg-0"> <img src="https://chicken.org.au/wp-content/uploads/2018/03/Ingham-Produce-21-8-06-014905-Drumsticks-22-600x400.jpg" width="150" height="150" alt="" /> </div>
                                    <div class="media-body">
                                        <h6 class="media-title font-weight-semibold"> <a href="#" data-abc="true">FarmX Organic Chicken Drumsticks</a> </h6>
                                        <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                                            <li class="list-inline-item"><a href="/socialrecipe" class="text-muted" data-abc="true">Recipes</a></li>
                                            <li class="list-inline-item"><a href="/" class="text-muted" data-abc="true">FarmX</a></li>
                                        </ul>
                                        <p class="mb-3">Farm Fresh | Antibiotic-free | Partnering with farmers | Checkout our recipe section </p>
                                        <ul class="list-inline list-inline-dotted mb-0">
                                            <li class="list-inline-item">All items from <a href="/" data-abc="true">FarmX</a></li>
                                            <li class="list-inline-item">Add to <a href="#" data-abc="true">wishlist</a></li>
                                        </ul>
                                    </div>
                                    <div class="mt-3 mt-lg-0 ml-lg-3 text-center">
                                        <h3 class="mb-0 font-weight-semibold">$ Price</h3>
                                        <div> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        <div class="text-muted">1985 reviews</div> <button type="button" class="btn btn-info mt-4 text-white"><i class="icon-cart-add mr-2"></i> Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-body mt-3">
                                <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                                    <div class="mr-2 mb-3 mb-lg-0"> <img src="https://chicken.org.au/wp-content/uploads/2018/03/Ingham-Produce-21-8-06-014905-Thighs-25-600x400.jpg" width="150" height="150" alt="" /> </div>
                                    <div class="media-body">
                                        <h6 class="media-title font-weight-semibold"> <a href="#" data-abc="true">FarmX Organic Chicken Thighs </a> </h6>
                                        <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                                            <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">Recipes</a></li>
                                            <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">Farmx</a></li>
                                        </ul>
                                        <p class="mb-3">Farm Fresh | Antibiotic-free | Partnering with farmers | Checkout our recipe section </p>
                                        <ul class="list-inline list-inline-dotted mb-0">
                                            <li class="list-inline-item">All items from <a href="#" data-abc="true">FarmX</a></li>
                                            <li class="list-inline-item">Add to <a href="#" data-abc="true">wishlist</a></li>
                                        </ul>
                                    </div>
                                    <div class="mt-3 mt-lg-0 ml-lg-3 text-center">
                                        <h3 class="mb-0 font-weight-semibold">$ Prize </h3>
                                        <div> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        <div class="text-muted">2349 reviews</div> <button type="button" class="btn btn-info mt-4 text-white"><i class="icon-cart-add mr-2"></i> Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-body mt-3">
                                <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                                    <div class="mr-2 mb-3 mb-lg-0"> <img src="https://www.chicken.org.au/wp-content/uploads/2018/03/Quay-comms-Chickens_whole-chicken_6318_0774-800x534.jpg" width="150" height="150" alt="" /> </div>
                                    <div class="media-body">
                                        <h6 class="media-title font-weight-semibold"> <a href="#" data-abc="true">Farmx Organic Whole Chicken</a> </h6>
                                        <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                                            <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">Recipes</a></li>
                                            <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">Farmx</a></li>
                                        </ul>
                                        <p class="mb-3">Farm Fresh | Antibiotic-free | Partnering with farmers | Checkout our recipe section </p>
                                        <ul class="list-inline list-inline-dotted mb-0">
                                            <li class="list-inline-item">All items from <a href="#" data-abc="true">FarmX</a></li>
                                            <li class="list-inline-item">Add to <a href="#" data-abc="true">wishlist</a></li>
                                        </ul>
                                    </div>
                                    <div class="mt-3 mt-lg-0 ml-lg-3 text-center">
                                        <h3 class="mb-0 font-weight-semibold">$Price</h3>
                                        <div> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        <div class="text-muted">1985 reviews</div> <button type="button" class="btn btn-info mt-4 text-white"><i class="icon-cart-add mr-2"></i> Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-body mt-3">
                                <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                                    <div class="mr-2 mb-3 mb-lg-0"> <img src="https://chicken.org.au/wp-content/uploads/2018/04/Wings-600x400.jpg" width="150" height="150" alt="" />
                                        <div class="media-body">
                                            <h6 class="media-title font-weight-semibold"> <a href="#" data-abc="true">Farmx Organic Chicken Wings</a> </h6>
                                            <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                                                <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">Recipes</a></li>
                                                <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">FarmX</a></li>
                                            </ul>
                                            <p class="mb-3">Farm Fresh | Antibiotic-free | Partnering with farmers | Checkout our recipe section </p>
                                            <ul class="list-inline list-inline-dotted mb-0">
                                                <li class="list-inline-item">All items from <a href="#" data-abc="true">FarmX</a></li>
                                                <li class="list-inline-item">Add to <a href="#" data-abc="true">wishlist</a></li>
                                            </ul>
                                        </div>
                                        <div class="mt-3 mt-lg-0 ml-lg-3 text-center">
                                            <h3 class="mb-0 font-weight-semibold">$Price</h3>
                                            <div> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                            <div class="text-muted">2349 reviews</div> <button type="button" class="btn btn-info mt-4 text-white"><i class="icon-cart-add mr-2"></i> Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>






        );

    }
}

export default Shop;

