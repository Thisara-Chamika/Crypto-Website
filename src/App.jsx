import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { CoinDetail } from "./pages/CoinDetail"
function App() {

  return (
    <BrowserRouter basename="/Crypto-Website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coin/:id" element={<CoinDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
