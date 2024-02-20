import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import LandingPage from './store/pages/LandingPage'
import MobilePage from './store/pages/MobilePage'
import AcPage from './store/pages/AcPage'
import BookPage from './store/pages/BookPage'
import WomenPage from './store/pages/WomenPage'
import TvPage from './store/pages/TvPage'
import FridgePage from './store/pages/FridgePage'
import WatchPage from './store/pages/WatchPage'
import ComputerPage from './store/pages/ComputerPage'
import FurniturePage from './store/pages/FurniturePage'
import KitchenPage from './store/pages/KitchenPage'
import MenPage from './store/pages/MenPage'
import ProDataPage from './store/pages/ProDataPage'
import SpeakerPage from './store/pages/SpeakerPage'
import MobileSingle from './singles/MobileSingle'
import AcSingle from './singles/AcSingle'
import BookSingle from './singles/BookSingle'
import ComputerSingle from './singles/ComputerSingle'
import FridgeSingle from './singles/FridgeSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import KitchenSingle from './singles/KitchenSingle'
import WomenSingle from './singles/WomenSingle'
import MenSingle from './singles/MenSingle'
import ProDataSingle from './singles/ProDataSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import TvSingle from './singles/TvSingle'
import WatchSingle from './singles/WatchSingle'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route path='/ac' element={<AcPage />} />
        <Route path='/book' element={<BookPage />} />
        <Route path='/computer' element={<ComputerPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/furniture' element={<FurniturePage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/mobile' element={<MobilePage />} />
        <Route path='/prodata' element={<ProDataPage />} />
        <Route path='/speaker' element={<SpeakerPage />} />
        <Route path='watch' element={<WatchPage />} />
        <Route path='/women' element={<WomenPage />} />
        <Route path='/tv' element={<TvPage />} />
        <Route path='/mobiles/:id' element={<MobileSingle />} />
        <Route path='/ac/:id' element={<AcSingle />} />
        <Route path='/book/:id' element={<BookSingle />} />
        <Route path='/computer/:id' element={<ComputerSingle />} />
        <Route path='/fridge/:id' element={<FridgeSingle />} />
        <Route path='/furniture/:id' element={<FurnitureSingle />} />
        <Route path='/kitchen/:id' element={<KitchenSingle />} />
        <Route path='/women/:id' element={<WomenSingle />} />
        <Route path='/men/:id' element={<MenSingle />} />
        <Route path='/prodata/:id' element={<ProDataSingle />} />
        <Route path='/speaker/:id' element={<SpeakerSingle />} />
        <Route path='/tv/:id' element={<TvSingle />} />
        <Route path='/watch/:id' element={<WatchSingle />} />


      </Routes>
    </div>
  )
}

export default App
