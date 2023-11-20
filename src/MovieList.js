import React from "react";
import MovieCard from "./Moviecard";
class MovieList extends React.Component {
    // to pass differrent movies in the card we will use props it is like a agrument 
    // we can pass any value in the argument 
    // props use in the compponent 
    //  it should always be from parent to child 
    constructor(){
        super();
        //  weneedtostrorethedata baout the componenet in the state
        //  second feature it have is to update the componenet data wihtout redirecting
        this.state={
            title:"the avengers",
            plot:"fighting to save the world ",
            price:199,
            rating:8.9,
            stars:0,
            fav:true,
            kart:true,
        }
        // this.addstars=this.state.bind(this);
    }
    render() {
        const{title, plot, price, rating , stars, fav, kart}=this.state;
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
            <MovieCard movies={this.state}
                        />
            </>
            
        )
    }
}
export default MovieList;