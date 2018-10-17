import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import Query from 'react-redux-json-api';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Provider store={store}>
          <Query endpoint="/users" enableCache>
            {({ loading, links, resources }) => {
              if (loading) return 'Loading';
              console.log(links);

              return (
                <div>
                  <h1>Users</h1>
                  {resources.map(({ id, attributes: { name } }) => (
                    <div key={id}>{name}</div>
                  ))}
                  {links.prev && <button onClick={links.prev.load}>Prev</button>}
                  {links.next && <button onClick={links.next.load}>Next</button>}
                </div>
              );
            }}
          </Query>
        </Provider>
      </div>
    );
  }
}

export default App;
