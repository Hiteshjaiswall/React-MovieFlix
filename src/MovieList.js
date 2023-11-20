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
            movies:[
                {
                    title:"Avengers Endgame",
                    plot:"Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
                    price:199,
                    rating:8.4,
                    stars:0,
                    poster:"https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_500x.jpg?v=1573652543",
                    fav:true,
                    kart:true,
                },
                {
                    title:"wolf of the wall street",
                    plot:"In 1987, Jordan Belfort (Leonardo DiCaprio) takes an entry-level job at a Wall Street brokerage firm. By the early 1990s, while still in his 20s, Belfort founds his own firm, Stratton Oakmont. Together with his trusted lieutenant (Jonah Hill) and a merry band of brokers, Belfort makes a huge fortune by defrauding wealthy investors out of millions.",
                    price:99,
                    rating:8.4,
                    poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZGAw5morH2uLBVRf7YmocGr-eBl98e5KWyUmkJw5E2mSZHoXs" , 
                    stars:0,
                    fav:true,
                    kart:true,
                },
                {
                    title:"The Perks of Being a Wallflower",
                    plot:"Socially awkward teen Charlie (Logan Lerman) is a wallflower, always watching life from the sidelines, until two charismatic students become his mentors. Free-spirited Sam (Emma Watson) and her stepbrother Patrick (Ezra Miller) help Charlie discover the joys of friendship, first love, music and more, while a teacher sparks Charlie's dreams of becoming a writer. ",
                    price:399,
                    rating:5.9,
                    poster:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTc-xATuBZZ6KkcQMh-0-HLs3O7SqV5m6a7lVotJOvMlKds3Qx3" , 
                    stars:0,
                    fav:true,
                    kart:true,
                }
            ]
            
        }
        // this.addstars=this.state.bind(this);
    }
    //  event handeler no will be differenet that we were using tin the initial 4

    handleIncStar= (movie) => {
        const{movies}=this.state;
        const mid= movies.indexOf(movie)
        if(movies[mid].stars>=5){
            return;
        }
        movies[mid].stars+=0.5;
        this.setState({
            movies:movies
        })
    }
    handledecStar= (movie) => {
        const{movies}=this.state;
        const mid= movies.indexOf(movie)
        if(movies[mid].stars<=0){
            return;
        }
        movies[mid].stars-=0.5;
        this.setState({
            movies:movies
        })
    }
    render() {
        // const{title, plot, price, rating , stars, fav, kart}=this.state;
        const {movies}=this.state;
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
            {movies.map((movie) => <MovieCard movies={movie}
            addStar={this.handleIncStar}   decStar={this.handledecStar}         />)}
            </>
            
        )
    }
}
export default MovieList;