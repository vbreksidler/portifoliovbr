import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Body />
        <Footer />
      </div>);
  }
}

export default App;
