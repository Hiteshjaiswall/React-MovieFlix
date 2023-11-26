import React from "react";
import MovieCard from "./Moviecard";
// importing the externaldata that we createad to manage our code well

// import { movies } from "./moviesdata";
class MovieList extends React.Component {
    // to pass differrent movies in the card we will use props it is like a agrument 
    // we can pass any value in the argument 
    // props use in the compponent 
    //  it should always be from parent to child 
//     constructor(){
//         super();
//         //  weneedtostrorethedata baout the componenet in the state
//         //  second feature it have is to update the componenet data wihtout redirecting
//         this.state={
//             movies:movies,
//             // i want to life state to navbar
//             cartCount:0,
            
//         }
//         // this.addstars=this.state.bind(this);
//     }
//     //  event handeler no will be differenet that we were using tin the initial 4
// //  even handeleer to handel the increasing of the stars 
//     handleIncStar= (movie) => {
//         const{movies}=this.state;
//         const mid= movies.indexOf(movie)
//         if(movies[mid].stars>=5){
//             return;
//         }
//         movies[mid].stars+=0.5;
//         this.setState({
//             movies:movies
//         })
//     }
//     //  evnet handeler to handele the decreasing of the stars
//     handledecStar= (movie) => {
//         const{movies}=this.state;
//         const mid= movies.indexOf(movie)
//         if(movies[mid].stars<=0){
//             return;
//         }
//         movies[mid].stars-=0.5;
//         this.setState({
//             movies:movies
//         })
//     }
// //  event handeler to handel the favurite and remove fron the fanourite
//     handelFav=(movie)=>{
//         const{movies}=this.state;
//         const mid =movies.indexOf(movie);
//         movies[mid].fav= !movies[mid].fav;
//         this.setState({
//             movies
//         })
//     }
//     //  event handeler to handel the add to cart and remover form the cart
//     handelkart=(movie)=>{
//         const{movies}=this.state;
//         const mid =movies.indexOf(movie);
//         movies[mid].kart= !movies[mid].kart;
//         this.setState({
//             movies
//         })
//     }
    render() {
        // const{title, plot, price, rating , stars, fav, kart}=this.state;
        const {movies, addStar, decStar, fav, cart}=this.props;
        return (
            <>
            {/* passing props from set state to the moviecard */}
            
            {/* <MovieCard title={title}
                        plot={plot}
                        price={price}
                        rating={rating }
                        stars={stars}
                        fav={fav}
                        kart={kart}
                        />
            </> */}
            {/* {movies.map((movie) => <MovieCard movies={movie}
            addStar={this.handleIncStar}   
            decStar={this.handledecStar}         
            Fav={this.handelFav}
            Kart={this.handelkart}
            key = {movie.id}
            />)} */}
            {movies.map((movie) => <MovieCard movies={movie}
            addStar={addStar}
            decStar={decStar}
            Fav={fav}
            Kart={cart}
            key = {movie.id}
            />)}
            </>
            
        )
    }
}
export default MovieList;