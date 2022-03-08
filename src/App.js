import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

import './App.css';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import Page from './Page';

function App()
{
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);
  const location = useLocation();
  function savePalette(newPalette)
  {
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

    <TransitionGroup>
      <CSSTransition classNames='page' timeout={500} key={location.key}>
        <Routes location={location}>
          <Route path='/'
            element={
              <Page>
                <PaletteList palettes={palettes} deletePalette={deletePalette} />
              </Page>} />
          <Route path='/palette/:id'
            element={
              <Page>
                <Palette palettes={palettes} />
              </Page>} />
          <Route path='/palette/:paletteId/:colorId'
            element={
              <Page>
                <SingleColorPalette palettes={palettes} showingFullPalette={false} />
              </Page>} />
          <Route path='/palette/new'
            element={
              <Page>
                <NewPaletteForm palettes={palettes} savePalette={savePalette} />
              </Page>
            } />
        </Routes>
      </CSSTransition>
    </TransitionGroup>

  );
}

export default App;
