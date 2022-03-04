import './App.css';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App()
{
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors)
  function savePalette(newPalette)
  {
    // console.log(newPalette);
    setPalettes([...palettes, newPalette]);
  }
  function syncLocalStorage()
  {
    localStorage.setItem('palettes', JSON.stringify(palettes));
  }
  function deletePalette(e, id)
  {
    e.stopPropagation();
    // console.log(id);
    setPalettes(palettes.filter(palette => palette.id !== id));
  }
  useEffect(() =>
  {
    syncLocalStorage();
  }, [palettes])

  return (
    <>
      <Routes>
        <Route path='/'
          element={<PaletteList palettes={palettes} deletePalette={deletePalette} />} />
        <Route path='/palette/:id'
          element={<Palette palettes={palettes} />} />
        <Route path='/palette/:paletteId/:colorId'
          element={<SingleColorPalette palettes={palettes} showingFullPalette={false} />} />
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
