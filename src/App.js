import React from 'react';

import Footer from './pages/Footer';
import Header from './pages/Header';
import Body from './pages/Body';

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
