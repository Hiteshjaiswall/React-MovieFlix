import React from "react";
//  we can use the classs componenet or the functional compoenent right now im using tht class compoenent later ill be using the functional componenet
class Navbar extends React.Component{

//  how we will design our nav bar 
//  first there woulld be wraper div 
//  one div for title 
//  one div for kart and icon and incide thta div we would have the cart count 
    render(){
        return(
            <>
            {/* <h1>NavBar</h1> */}
            {/* double curly bracket to provide th eobjectsindide theh inline css */}
            {/* thasts how we write the inline css in the react  */}
            {/* not a ideal way to style our app */}
            {/* inline styling will overwtite all the syling al the style so it is prefered for that just a quick note */}
            <div style={{width: "100%" ,
                        height:"50px", 
                        backgroundColor:"blue", 
                        display:"flex", 
                        justifyContent:"space-between"}}>
                <div className="title">
                Title
                </div>
                <div className="icon">
                    <img alt="Cart Icon" />
                    <span>0</span>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar; 
//  width: 100%;
//   height: 50px;
//   background-color: cornflowerblue;
//   display: flex;
//   justify-content: space-between;