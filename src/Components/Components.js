import React from "react"

function About(props){
    
    const {About} = props;
    console.log(props.About)
    return <p> {About} </p>
    }
  
  
      // Set components Date
  
  function Date (props){
    const {Date} = props;
    return <h2>{Date}</h2>
  }
  
    //Set components Button
    function Button(props) {
      const { next } = props;
      return <button onClick={next}> Next Planet</button>;
    }



export {About,Date,Button} 