import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar.js';
import Header from './Header.js';
import Section from './Section.js';
import Form from './Form.js';
import Footer from './Footer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
