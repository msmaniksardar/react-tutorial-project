
import {BrowserRouter , Routes, Route} from "react-router-dom"
import HomePage from "./pages/home-page.jsx";
import AboutPage from "./pages/about-page.jsx";
import ContactPage from "./pages/contact-page.jsx";

const App = ()=>{
 return(
  <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
        </BrowserRouter>
  </>
 )
}

export default App