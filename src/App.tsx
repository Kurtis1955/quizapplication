import { Route, Routes } from "react-router-dom"
import Quiz from "./pages/Quiz"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

import { AppStyle} from "./app.style"
import { AppContextProvider } from "./context/Appcontext"
import AppWrapper from "./components/AppWrapper"


export default function App() {

  return (
    <AppContextProvider>
     <AppWrapper>
      <AppStyle>
      <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/quiz/:name" element={<Quiz />} />
       </Routes>
      </AppStyle>
     </AppWrapper>
    </AppContextProvider>
  )
}
