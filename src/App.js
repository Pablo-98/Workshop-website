import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



import Container from 'react-bootstrap/Container';
import BasicExample from './components/Navbar/Navbar';

import car from './Assets/sample.jpg'

import './App.css';




class App extends Component{
  render(){
    return(




  <Container className="p-1" styles={{ backgroundImage: `url(${car})`}} >
    <BasicExample>

    </BasicExample>
  </Container>
);
    }
  }
  export default App