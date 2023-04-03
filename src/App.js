import React from 'react';
import { AboutUs } from './pages/AboutUs';

const App = () => {
  const text = {title: 'hello', subtitle: 'lorem lorem lorem'}

  return (
    <div>
      <AboutUs text = {text}/>
    </div>
  )
}

export default App;