/*import logo from './logo.svg';*/
import './App.css';
import React from "react";
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';

function App() {
  return (
    <MDBContainer align='center' className= "App-header">
        <MDBRow>
          <MDBCol className="App">
          <br></br>
            <MDBCol className="innerTxt" align='center'>
            
              <MDBRow>
                <p className="h5 text-center mb-4"><strong>Text</strong></p>
              </MDBRow>

              <MDBRow className= "text-left">
                  <p className="text-justify">It is a long establish fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                  It is a long establish fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  <br></br>
                  <br></br>
              </MDBRow>

            
            </MDBCol>
            
          </MDBCol>
        </MDBRow>
    </MDBContainer>

  /* 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
