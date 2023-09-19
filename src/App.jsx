import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Counter from './Counter'
import Layout from './Layout'
import Home from './Home'
import NoPage from './NoPage'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
