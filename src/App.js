import './App.css';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App()
{
  const [palettes, setPalettes] = useState(seedColors)
  function savePalette(newPalette)
  {
    // console.log(newPalette);
    setPalettes([...palettes, newPalette]);
  }

  return (
    <>
      <Routes>
        <Route path='/'
          element={<PaletteList palettes={palettes} />} />
        <Route path='/palette/:id'
          element={<Palette palettes={palettes} />} />
        <Route path='/palette/:paletteId/:colorId'
          element={<SingleColorPalette palettes={palettes} />} />
        <Route path='/palette/new'
          element={<NewPaletteForm palettes={palettes} savePalette={savePalette} />} />
      </Routes>
      {/* <div className="App">
        <Palette palette={myPalette} />
      </div> */}
    </>
  );
}

export default App;
