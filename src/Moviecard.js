import React from "react";


class MovieCard extends React.Component {
    //  use render function 
    render() {
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flipkart.com%2Fmarvel-avengers-wall-poster-room-gloss-lamination-m87-paper-print%2Fp%2Fitm83aceafd50963&psig=AOvVaw17Ka-LM1UsOSdb1tA33SEn&ust=1700112163900000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMDX2L6hxYIDFQAAAAAdAAAAABAE"/>
                    </div>
                    <div className="right">
                        <div className="title"> The Avenegers</div>
                        <div className="plot"> fighting to save world</div>
                        <div className="price"> Rs. 199 </div>
                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="stars">star </div>
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