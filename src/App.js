import React ,{useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Components/MainSec/Main';
import './css/main.css';

export const stickyContext=React.createContext()

function App() {
  const [Sticky,SetSticky]=useState(false);

  return (
    <div className="App">
      <stickyContext.Provider value={({'Sticky':Sticky,'SetSticky':SetSticky})}>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
        <Main/>
      </stickyContext.Provider>
    </div>
  );
}

export default App;
