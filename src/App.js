import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Character from './components/Character';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes 
    `
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    `
const Rotate = styled.div  
    `
    display: inline-block;
    animation: ${rotate} 5s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
    `
const StyledImg = styled.img 
    `
    width: 10%;
    height: 10%;
    `
const SecondStyledButton = styled.button
  `
    transition: all .5s ease;
    color: blue;
    border: 3px solid white;
    font-family:'Montserrat', sans-serif;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
    font-size: 17px;
    background-color : transparent grey;
    padding: 10px;
    outline: none;
    border-radius: 4px;
  :hover {
    color: #001F3F;
    background-color: #fff;
  }
  `

const App = () => {
  // const [showObjects, setShowObjects] = useState([]);
  const [chars, setChar] = useState(null)
  const [currentChar, setCurrentChar] = useState('1')
  // const [moviesOrChars, setMoviesOrChars] = useState(false)
  // const [movies, setMovies] = useState(null)

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const openDetails = id => {
    setCurrentChar(id)
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setChar(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  // useEffect(() => {
  //   axios.get('https://swapi.dev/api/films')
  //   .then(res => {
  //     setMovies(res.data)
  //     console.log(res.data)
  //   })
  // }, [])

  // function toggle() {
  //   setMoviesOrChars(wasVisible => ! wasVisible);
  // }

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters List</h1>
      <Rotate><StyledImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"></StyledImg></Rotate>
      {/* <SecondStyledButton onClick={toggle}> { moviesOrChars ? 'Characters' : 'Movies' } </SecondStyledButton> */}
      {
        chars
        ?
        chars.map(char => {
          return <Character key={char.id} info={char} action={openDetails} />
        })
        : <p>Loading...</p>
      }
    </div>
  );
}

export default App;