import './App.css';
import Header from './header/header';
import AboutMe from './about-me/about-me';
import Experience from './experience/experience';
import Education from './education/education';
import ContactMe from './contact-me/contact-me';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route index path="about-me" element={<AboutMe />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="contact-me" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
