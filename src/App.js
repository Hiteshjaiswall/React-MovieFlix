//  importing movie list from movie list it is a react componenet that we created 
import MovieList from "./MovieList";
//  importing ht navbar from the nav bar it s a react compoenent that we created 
import Navbar from "./Navbar";
import React from "react";
// function App() {
import { movies } from "./moviesdata";
class App extends React.Component {
    constructor() {
        super();
        //  weneedtostrorethedata baout the componenet in the state
        //  second feature it have is to update the componenet data wihtout redirecting
        this.state = {
            movies: movies,
            // i want to life state to navbar
            cartCount: 0,
        }
        // this.addstars=this.state.bind(this);
    }
    //  event handeler no will be differenet that we were using tin the initial 4
    //  even handeleer to handel the increasing of the stars 
    handleIncStar = (movie) => {
        const { movies } = this.state;
        const mid = movies.indexOf(movie)
        if (movies[mid].stars >= 5) {
            return;
        }
        movies[mid].stars += 0.5;
        this.setState({
            movies: movies
        })
    }
    //  evnet handeler to handele the decreasing of the stars
    handledecStar = (movie) => {
        const { movies } = this.state;
        const mid = movies.indexOf(movie)
        if (movies[mid].stars <= 0) {
            return;
        }
        movies[mid].stars -= 0.5;
        this.setState({
            movies: movies
        })
    }
    //  event handeler to handel the favurite and remove fron the fanourite
    handelFav = (movie) => {
        const { movies } = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].fav = !movies[mid].fav;
        this.setState({
            movies
        })
    }
    //  event handeler to handel the add to cart and remover form the cart
    handelkart = (movie) => {
        let { movies, cartCount } = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].kart = !movies[mid].kart;
        if(!movies[mid].kart){
            cartCount++;
        }
        else{
            cartCount--;
        }
        this.setState({
            movies,
            cartCount
        })
    }
    render() {
        const { movies, cartCount } = this.state
        return (
            // we can pass props in the parent to child using it like the attribut 
            // <studen stuname="hitesh" />
            //  like abouve 
            //  lets say that wwe forget to pass the props so it would show nothing but we sont wan that we want tthe ui to show somthig in its place so what can we so 
            //  we can pass the default props 
            // Student.defalultProps-{
            //  studentname:"Student",
            //  marks: N.A 
            //  }
            // so now if i dont pass anything to the props it would hsow us the default props so it is really good for us 
            <>
                <Navbar cartCount={cartCount}/>
                <MovieList movies={movies}
                    addStar={this.handleIncStar}
                    decStar={this.handledecStar}
                    fav={this.handelFav}
                    cart={this.handelkart}
                />
            </>
        );
    }
}
export default App;
