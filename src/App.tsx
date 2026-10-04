import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/layout/Navbar"
import Home from "./pages/Home"
import ProjectDetail from "./pages/ProjectDetail"
import NotFound from "./pages/NotFound"
import { Footer } from "./components/layout/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App