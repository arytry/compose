import React from 'react';
import logo from './logo.svg';
import './App.css';
import Copyright from './Copyright';
import Favorite from './Favorite';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />喵了个咪
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div className='container'>
        <p>
          个人创作展示
        </p>
        <p>
          直观、简约、高效，支持多语言
        </p>
        <p>
          内容完全自定义，可控性100%
        </p>
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ margin: "0px 0px 0.35em", fontWeight: 300 }}>项目展示</h1>
          <h2 style={{ margin: "0px 0px 0.35em", fontWeight: 400 }}>
            Pin a footer to the bottom of the viewport.The footer will move as the main element of the page grows.
          </h2>
          <p style={{ margin: "0px", fontWeight: 400 }}>
            Sticky footer placeholder.
          </p>
        </div>
        <button>test</button>
      </div>
      <footer className='App-footer'>
        <Copyright />
        <Favorite />
        <Favorite />
        <Favorite flag={false} />
      </footer>
    </div>
  );
}

export default App;
