import { Route, Routes } from "react-router";
import { MainPage } from "@/pages/main-page/MainPage.tsx";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </>
  )
}

export default App
