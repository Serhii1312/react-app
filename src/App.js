import React from "react";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";




function App(props) {

  return ( 
      <div className="App">
        <Header/>
        <Main productsData={props.state.productsData}/>
        <Footer/>   
      </div>
  );
}

export default App;
 