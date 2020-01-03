import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {store} from "./redux/store";
import {Counter} from "./counter/Counter";

// This is the main part of the application that will run as soon as the cef is ready
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>
            LUA world will update my value every seconds
          </p>
          <Counter />
          <button>
            Reset Me
          </button>
        </header>
      </div>
    </Provider>
  );
}

export default App;
