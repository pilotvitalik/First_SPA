import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';


function App(props){

  return (
    <div className = 'wrapper'>
	    <Header />
     	<Main state = {props.state}/>
    </div>
  );
}

export default App;
