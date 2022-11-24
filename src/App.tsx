import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import LayoutWrapper from './components/Layout/LayoutWrapper'

function App() {

  return (
    <Routes>
      <Route path='category/:id' element={<LayoutWrapper />} />
      <Route path='/' element={<Layout />} />
    </Routes>
  )
}

export default App
