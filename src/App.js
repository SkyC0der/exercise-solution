import React from 'react'
import './App.scss';
import Search from './components/Search/Search';
import DataItem from './components/DataItem/DataItem';

function App() {
  return (
    <div className="App">
      <Search/>
      <DataItem/>
    </div>
  );
}

export default App;
