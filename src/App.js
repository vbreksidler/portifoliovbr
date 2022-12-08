import React from 'react';

import Footer from './pages/Footer';
import Header from './pages/Header';
import Body from './pages/Body';
import styles from './components/styles.module.scss';

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <div className={styles.body_page}>
          <Body />
        </div>
        <Footer />
      </div>);
  }
}

export default App;
