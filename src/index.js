import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import {BrowserRouter,NavLink,Switch,Route} from 'react-router-dom';
import './App.css';
import { Navbar,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QRCode from "qrcode.react";

function App(){
  return(
    <div>
       <Navbar bg="primary" variant="light">
    <Navbar.Brand href="#home">Reataurants</Navbar.Brand>
   
  </Navbar>
      {/* <h2>Reataurants</h2>
       */}<ul>
           <Row> 
      <li><NavLink to ="Mazo" target="_blank"> Mazzo - Marriott Executive Apartments<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></NavLink> </li>
        <QRCode value="https://www.zomato.com/hyderabad/mazzo-marriott-executive-apartments-gachibowli/menu" />
        </Row>
        <br/>
        <br/>
        <Row> 
        <li> <NavLink to = "PunjabiAffair" target="_blank"> Punjabi Affair<span>&nbsp;&nbsp;&nbsp;&nbsp;</span> </NavLink></li>
        <QRCode value="https://www.zomato.com/hyderabad/punjabi-affair-kondapur/menu" />
        </Row>
        <br/>
        <br/>
        <Row>  
        <li> <NavLink to = "Norfest" target = "_blank"> Norfest - The Dhaba<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </NavLink></li>
        <QRCode value="https://www.zomato.com/hyderabad/norfest-the-dhaba-gachibowli?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1/menu" />
        </Row>
        </ul>
      <Switch>
      <Route exact path="/PunjabiAffair" render= {() => (window.location = "https://www.zomato.com/hyderabad/punjabi-affair-kondapur/menu")} ></Route>
      <Route exact path="/Mazo" render= {() => (window.location = "https://www.zomato.com/hyderabad/mazzo-marriott-executive-apartments-gachibowli/menu")} ></Route>
      <Route exact path="/Norfest" render = { ()=>(window.location = "https://www.zomato.com/hyderabad/norfest-the-dhaba-gachibowli?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1/menu")}></Route>
      </Switch>
    </div>
  )
}
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);



