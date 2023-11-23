import React from "react";
class MovieCard extends React.Component {
    // we are uding state to make the program easy so thet we dont have to hard code evertime we are taking a use of the state that is the build in object in the react 
    // single sourse of truth coming soon we will use the signgle sourse
    // event handeler for the stars
    // addStars=()=>{
    //     // console.log("stars are added int his shit ")
    // //  this here is undefined now hwy is that because it gets lost 
    // //  we need to bind it to instance of class 
    //     console.log("this state:", this.state);
    // //  no we want to increase the stars counter so lets see how e sill do it 
    // // this.state.stars+=0.5;
    // //  for the bouve to work e have to call the rerender function again an agian 
    // //  we wll use the set state function to do it that the react provide us on it own 
    // //  this is form one 
    // //  this will work fine 
    // // this.setState({
    // //     stars:this.state.stars+=0.5,
    // // })
    // // second form
    // this.setState((previousState)=>{
    //     if(previousState.stars<=4.5){
    //     return {
    //         stars: previousState.stars+=0.5,
    //     }
    // }
    // })
    // //  now we have two forms which to use we require previous state to change 
    // //  so we should use the second form
    // }
    // handelfav=()=>{
    //     this.setState({
    //         fav:!this.state.fav
    //     })
    // }
    // decstars=(()=>{
    //     this.setState((previousState)=>{
    //         if(previousState.stars >= 0.5){
    //         return {
                
    //             stars:previousState.stars-+0.5
                
    //         }}
    //     })
    // })
    // handelkart=()=>{
    //     this.setState({
    //         kart:!this.state.kart
    //     })
    // }
    //  use render function 
    render() {
//  important here we are destructuring the object 
        // const {title, plot, rating, price, stars, fav, kart}=this.state;
        //  now we are getting our state from the props 
        //  this is the one way to pass we can pas individually 
        // const {title, plot, rating, price, stars, fav, kart}=this.props;
        // im accesing props direct i passed as the object so thats wh imm using this 
        const {title, plot, rating, price, stars, fav, kart, poster}=this.props.movies;
        const {movies, addStar, decStar, Fav, Kart}=this.props;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src={poster}/>
                    </div>
                    <div className="right">
                        <div className="title"> {title}</div>
                        <div className="plot"> {plot}</div>
                        <div className="price"> Rs.{price} </div>
                        <div className="footer">
                            <div className="rating">IMDb:{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" onClick={()=>{decStar(movies)}} alt="decarease" src="https://t3.ftcdn.net/jpg/04/22/93/56/240_F_422935625_gTnXZMO6EZZgjOvFDVNMfUFosiMNIppp.jpg"/>
                                <img className="stars" alt ="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                                <img onClick= {()=>{addStar(movies)}} className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png"/>
                            <span className="starsCount">{stars}</span>
                            </div>
                            {/* // conditional rendering for the fav and unfav buttpn  */}
                            {fav?<button className="favourite-btn" onClick={()=> {Fav(movies)}}>Favourtie</button> :  <button className="unfavourite-btn" onClick={()=> {Fav(movies)}}>Un-Favourtie</button>}
                            {kart?<button className="cart-btn" onClick={()=> {Kart(movies)}}>Add to cart</button> :  <button className="unfavourite-btn" onClick={()=> {Kart(movies)}}>Remove From Cart</button>}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieCard;

//  props cannot be modiied int he clild 
// states can be modifieed in the child componenet 
// using the props int he function componenet 
//  we need to pass props here 
// function Studenet (props){
//     we wont use this. props bbecause we are not in the class wight now 
// const { stdentname, marks}=props
//     return (
//         <>
//         <h1>Name , {Studentname}</h1> 
//         </>
//     )
// }
// styling in react we can use four methods in the css 
//  1. Css Stylesheet 
//  2. inline Styling 
//  3. styled component 
//  4. Css module 