import BlogList from './components/BlogList';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="blogs" element={<BlogList/>}/>
        <Route path='blogs/:id' element={<h1>BLOG with id</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
