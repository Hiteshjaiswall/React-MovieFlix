import React from "react";


class MovieCard extends React.Component {
    //  use render function 
    render() {
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src="https://rukminim2.flixcart.com/image/850/1000/jxhv1jk0/poster/c/x/v/medium-thor-avengers-endgame-new-poster-for-room-office-endgame-original-imafgyfefdnvuvjh.jpeg?q=90"/>
                    </div>
                    <div className="right">
                        <div className="title"> The Avenegers</div>
                        <div className="plot"> fighting to save world</div>
                        <div className="price"> Rs. 199 </div>
                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decarease" src="https://t3.ftcdn.net/jpg/04/22/93/56/240_F_422935625_gTnXZMO6EZZgjOvFDVNMfUFosiMNIppp.jpg"/>
                                <img className="stars" alt ="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png"/>
                            <span>0</span>
                            </div>
                            <button className="favourite-btn">Favourtie</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default MovieCard;