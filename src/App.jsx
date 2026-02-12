
import { Route, Routes } from 'react-router-dom';
import './App.css'

function HomePage() {
  return<h1>Home Page</h1>
}

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>

  )
}

export default App;
