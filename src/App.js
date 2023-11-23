//  importing movie list from movie list it is a react componenet that we created 
import MovieList from "./MovieList";
//  importing ht navbar from the nav bar it s a react compoenent that we created 
import Navbar from "./Navbar";
function App() {
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
    <Navbar/>
    <MovieList/>
    </>
  );
}

export default App;
