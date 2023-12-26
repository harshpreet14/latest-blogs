import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
        <Route path="blogs" element={<BlogList/>}/>
        <Route path='blogs/:id' element={<h1>BLOG with id</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
