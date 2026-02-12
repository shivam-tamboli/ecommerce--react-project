
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'

function HomePage() {
  return<h1>Home Page</h1>
}

function AboutPage() {
  return<h1>About Page</h1>
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes> 
        <Route path='/' element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <div>Footer</div>
    </div>

  )
}

export default App;
