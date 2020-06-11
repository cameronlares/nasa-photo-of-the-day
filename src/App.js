import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import axios from "axios";

//I want to increase the index by 1
//When I click on Next Photo, axios will give me the second index of .url

function App() {
  const [photoOfPlanet, setPlanet] = useState([]);

  //Set components Photo
  function PhotoOfTheDay(props) {
    const { onPhotoChange } = props;

    return <img src={onPhotoChange}></img>;
  }

  // Set components Paragraph

  function About(props){
  const {About} = props;
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
  useEffect (() => {

  // const nextPhoto = () => {
  //   setPlanet(photoOfPlanet + 1);
  // }; //I want the index to increase by 1

  //Get Api
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=dYW3dAwKqlNyFV1KZsuGazJM6P8YnmgvWIM14yeS"
    )
    .then((response) => {
      setPlanet(response.data) ;
  
    })
    .catch((error) => console.error(error));

    console.log("Use Effect is activated")
  // Axios End
  },[]);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <div className="borders">
        <h1>Photo Of The Day</h1>
        <PhotoOfTheDay onPhotoChange={photoOfPlanet.url} />

        {/* Img will be passed in */}
        {/* <img src="https://cdn.mos.cms.futurecdn.net/XKRX6MbwHQEbqhvqjMPyAa-1200-80.jpg"></img> */}

        <h2>About</h2>
        <p className= "About">

<About About = {photoOfPlanet.explanation} />
        </p>
        <h3>
          Date: <Date Date= {photoOfPlanet.date} />
        </h3>
        <Button next={photoOfPlanet} />
      </div>
    </div>
  );
}

export default App;
