import React from 'react';
import JoinBlock from './components/joinBlock';
import socket from './socket';


function App() {
  return (
    <div className="wrapper">
      <JoinBlock socket={socket}/>
    </div>
  );
}

export default App;