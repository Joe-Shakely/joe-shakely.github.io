import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import jsonData from './data.json';

function App() {
  return (
    <div className="App">
      <Header />
      <About data={jsonData.main} />
      <Resume data={jsonData.resume} />
      <Portfolio data={jsonData.portfolio} />
      {/* <Contact data={jsonData.main} /> */}
      <Footer data={jsonData.main} />
    </div>
  );
}

export default App;
