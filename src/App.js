import './App.css';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

function App()
{
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);
  const location = useLocation();
  console.dir(location);
  function savePalette(newPalette)
  {
    // console.log(newPalette);
    setPalettes([...palettes, newPalette]);
  }
  function syncLocalStorage()
  {
    localStorage.setItem('palettes', JSON.stringify(palettes));
  }
  function deletePalette(id)
  {
    setPalettes(palettes.filter(palette => palette.id !== id));
  }
  useEffect(() =>
  {
    syncLocalStorage();
  }, [palettes])

  return (
    <>
      <TransitionGroup>
        <CSSTransition classNames='fade-route' timeout={500} key={location.key}>
          <Routes location={location}>
            <Route path='/'
              element={
                <div className='page'>
                  <PaletteList palettes={palettes} deletePalette={deletePalette} />
                </div>} />
            <Route path='/palette/:id'
              element={
                <div className='page'>
                  <Palette palettes={palettes} />
                </div>} />
            <Route path='/palette/:paletteId/:colorId'
              element={
                <div className='page'>
                  <SingleColorPalette palettes={palettes} showingFullPalette={false} />
                </div>} />
            <Route path='/palette/new'
              element={
                <div className='page'>
                  <NewPaletteForm palettes={palettes} savePalette={savePalette} />
                </div>
              } />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {/* <div className="App">
        <Palette palette={myPalette} />
      </div> */}
    </>
  );
}

export default App;
