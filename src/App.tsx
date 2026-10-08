import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import Home from "./pages/Home"
import ProjectDetail from "./pages/ProjectDetail"
import NotesIndex from "./pages/NotesIndex"
import NoteDetail from "./pages/NoteDetail"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/notes" element={<NotesIndex />} />
          <Route path="/notes/:slug" element={<NoteDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App