import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import BasicExample from './components/Navbar/Navbar';

import './App.css';



const App = () => (



  <Container className="p-3">
    <BasicExample id="navbar">

    </BasicExample>
    
      <h1 className="header">Coding doesnt have to be hard</h1>
      </Container>
);

export default App;
