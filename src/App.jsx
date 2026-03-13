
// import './App.css'

// import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Demo from "./components/Demo"
import Hero from "./components/Hero"
// import Home from "./pages/Home"
// import AddBlog from './pages/AddBlog'
// import BlogDetail from "./pages/BlogDetail"
// import EditBlog from "./pages/EditBlog"
// import NotFound from "./pages/NotFound"

// import Comments from './components/Comments'
import ErrorBoundary from "./components/ErrorBoundary"

function App() {

  return (
    <>
    <Navbar />
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AddBlog" element={<AddBlog />}/>
      <Route path="blogs/:id" element={<BlogDetail />}/>
      <Route path="/edit/:id" element={<EditBlog />} />
      <Route path="*" element={<NotFound />}/>
    </Routes> */}
    {/* <Demo /> */}
    <ErrorBoundary>
      <Hero heroName="Batman" />
    </ErrorBoundary>
    <ErrorBoundary>
      <Hero heroName="SuperMan" /> 
    </ErrorBoundary>
    <ErrorBoundary >
      <Hero heroName="Joker" />
    </ErrorBoundary>
    
    <Footer />  
    {/* <Comments /> */}
    </>
  )
}

export default App
