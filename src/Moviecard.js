import React from "react";
class MovieCard extends React.Component {
    // we are uding state to make the program easy so thet we dont have to hard code evertime we are taking a use of the state that is the build in object in the react 
    // single sourse of truth coming soon we will use the signgle sourse

    constructor(){
        super();
        this.state={
            title:"the avengers",
            plot:"fighting to save the world ",
            price:199,
            rating:8.9,
        }
    }
    //  use render function 
    render() {
//  important here we are destructuring the object 
        const {title, plot, rating, price}=this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src="https://rukminim2.flixcart.com/image/850/1000/jxhv1jk0/poster/c/x/v/medium-thor-avengers-endgame-new-poster-for-room-office-endgame-original-imafgyfefdnvuvjh.jpeg?q=90"/>
                    </div>
                    <div className="right">
                        <div className="title"> {title}</div>
                        <div className="plot"> {plot}</div>
                        <div className="price"> {price} </div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
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