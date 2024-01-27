import './App.css';
import Header from './header/header';
import AboutMe from './about-me/about-me';
import Experience from './experience/experience';
import Education from './education/education';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route index path="" element={<AboutMe />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
