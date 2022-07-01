import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed'
import Widget from './components/Widget/Widget';
import { selectUser } from './data';
import { useSelector } from 'react-redux'
import Login from './components/Login/Login';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="App">
      <Header />
      {!user ? <Login /> :
        (<div className='body'>
          <Sidebar />
          <Feed />
          <Widget />
        </div>)}



    </div>
  );
}

export default App;
