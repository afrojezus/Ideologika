import React from 'react';
import AppBar from './appbar.jsx';
import Context from './context.jsx';
import { BrowserRouter } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className='frame'>
    <AppBar />
    <Context />
  </div>
</BrowserRouter>);
  }
}
