import React from 'react';
import './App.css';
import 'office-ui-fabric-react/dist/css/fabric.css';
import Navigation from './Navigation.js';


function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm-1 ms-xl1">
        <Navigation />
      
      </div>
      </div>
    </div>
  );
}

export default App;
