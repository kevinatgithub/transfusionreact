import React, { Component , Fragment} from 'react';
import NavBar from './components/system/NavBar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="container-fluid">
          <div className="content">
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
