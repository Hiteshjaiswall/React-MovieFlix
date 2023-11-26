import React from "react";
//  now lets inport the syle componenet since we wat to use that 
import styled from "styled-components";
//  we can use the classs componenet or the functional compoenent right now im using tht class compoenent later ill be using the functional componenet
const Nav = styled.div`
background: linear-gradient(to left, #4267b2,  #ff0000);
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
`
const Title = styled.div`
font-size: 30px;
        color: #fff;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        text-transform: "uppercase";
        margin-Left: 20;
        
`
const CartContainer = styled.div`
position: relative;
cursor: pointer;
`
const CartIcon = styled.img`
height: 30px;
    margin-right: 20px;
`
const CartCount = styled.span`
background-color: ${(props) => props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
    visibility: ${(props) => props.show ? "visible" : "hidden"}

`
class Navbar extends React.Component {
    //  how we will design our nav bar 
    //  first there woulld be wraper div 
    //  one div for title 
    //  one div for kart and icon and incide thta div we would have the cart count 
    render() {
        const {cartCount}= this.props;
        return (
            <>
                {/* <h1>NavBar</h1> */}
                {/* double curly bracket to provide th eobjectsindide theh inline css */}
                {/* thasts how we write the inline css in the react  */}
                {/* not a ideal way to style our app */}
                {/* inline styling will overwtite all the syling al the style so it is prefered for that just a quick note */}
                {/* <div style={Styles.nav}> */}
                <Nav>
                    {/* <div style={Styles.title}> */}
                    <Title>
                        MOVIE-FLIX
                    </Title>
                    {/* </div> */}
                    {/* <div style={Styles.cartContainer}> */}
                    <CartContainer>
                        <CartIcon alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/726/726496.png" />
                        {/*  now i want this cart count should increase lets see how we can do it  */}
                        {/* initially it is hard coded no we need to use even handelers but theres a problem in using the event handelers */}
                        {/* i want new state to increase the count the state is set in the movie list i want to count in the navbar wee can pass data from parent to child we cant pass the data in siblings now we have to think of the solution */}

                        <CartCount color="yellow" show={true}>{cartCount}</CartCount>
                    </CartContainer>
                    {/* <img alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/726/726496.png" style={Styles.cartIcon} />
                        <span style={Styles.cartCount}>0</span> */}
                    {/* </div> */}
                </Nav>
                {/* </div> */}
            </>
        )
    }
}
// one good thing about sing inline file is 
//  css file has a global scope having the gloal scope has manydisadvantage 
// if many developer are involve names of class might clash 
//  so it is good to use the local scope 
// i can also crete a sylt object an put it in the navbar to give style
// in here we have to use the camelcase 
//  using the styling css we can write the css in javascript 
// style compnenet is the libary so as you kno it is lib we need to install in the system 
//  benifts of using the syle componene tso it is the css in the javascript so it is like the css 
// it is controlling your scope so normal css fileprovides the global scope but style copponenets has the local scope 
// no class name clashes happening in the 
// const Styles = {
//     nav: {
//         height: 70,
//         background: "#4267b2",
//         display: "flex",
//         justifyContent: "space-between" ,
//         alignItems: "center",
//         position: "relative",
//     }
//     ,
//     title: {
//         fontSize: 30,
//         color: '#fff',
//         fontWeight: 600,
//         fontFamily: '"Montserrat", sans-serif',
//         textTransform: "uppercase",
//         marginLeft: 20
//     }, cartIconContainer: {
//         position: "relative",
//         cursor: "pointer",
//     },
//     cartCount: {
//         background: "orange",
//         borderRadius: "50%",
//         padding: "4px 8px",
//         position: "absolute",
//         right: 10,
//         top: -5,
//         fontSize: 12,
//     }, cartIcon: {

//         height: 30,
//         marginRight: 20,
//     },
//     cartContainer: {
//         position: "relative",
//         cursor: "pointer",
//     }
// }
export default Navbar;
//  width: 100%;
//   height: 50px;
//   background-color: cornflowerblue;
//   display: flex;
//   justify-content: space-between;