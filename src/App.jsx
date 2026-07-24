import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Schools from './pages/Schools'
import SchoolDetail from './pages/SchoolDetail'
import Innovation from './pages/Innovation'
import MapView from './pages/MapView'
import Docs from './pages/Docs'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="schools" element={<Schools />} />
        <Route path="schools/:id" element={<SchoolDetail />} />
        <Route path="innovation" element={<Innovation />} />
        <Route path="map" element={<MapView />} />
        <Route path="docs" element={<Docs />} />
      </Route>
    </Routes>
  )
}
