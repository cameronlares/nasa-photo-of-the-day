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
      console.log(setPlanet.url);
    })
    .catch((error) => console.error(error));

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
        <p>
          Muffin bear claw cheesecake powder jelly-o cake lemon drops gummi
          bears. Liquorice chocolate cake donut sweet roll cotton candy chupa
          chups. Gingerbread icing halvah apple pie jelly sesame snaps. Gummies
          macaroon marzipan icing apple pie. Chocolate dessert dragée tart bear
          claw pudding carrot cake sweet. Soufflé cake dessert chocolate bar
          jelly-o chocolate cheesecake. Tootsie roll croissant pie brownie bear
          claw cupcake jelly-o sweet roll ice cream. Jujubes cheesecake dragée
          cheesecake icing lemon drops. Chupa chups tiramisu gummies halvah
          liquorice cheesecake ice cream. Cake sweet cake sesame snaps dragée
          sugar plum candy fruitcake. Soufflé apple pie caramels gummi bears
          chocolate cake caramels sweet roll jelly beans dessert. Jelly-o gummi
          bears cotton candy candy bear claw danish dessert.{" "}
        </p>
        <h3>
          Date: <p>March, 11,2019</p>
        </h3>
        <Button next={photoOfPlanet} />
      </div>
    </div>
  );
}

export default App;
