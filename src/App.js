import data from './data';
import React, { useState } from 'react';
import Tours from './components/Tours';

const App = () => {
  const [tours , setTour] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTour(newTours);
  }
  if (tours.length === 0){
    return(
      <div className='refresh'>
        <h2>
          No Tour Left
        </h2>
        <button className="btn-white" onClick={() => setTour(data)}>
          Refresh
        </button>
      </div>
    )
  }
  return(
    <div className='App'>
      <h2 className="title">Plan with love</h2>
      <Tours tours = {tours} removeTour = {removeTour}></Tours>
    </div>
  )
}

export default App;
