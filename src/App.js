import './App.css';
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import RichTextEditor from './components/RichTectEditor/RichTextEditor';

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
                <RichTextEditor />
                  <br></br>
                  <br></br>
              </MDBRow>            
            </MDBCol>
          </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}

export default App;
