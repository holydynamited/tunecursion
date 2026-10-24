
import { Route, Routes } from "react-router"

import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home/Home"
import AlbumPage from "../pages/Album/AlbumPage"

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="*" element={<div className="p-tc-64 text-text-primary">404 — Page not found</div>} />
      </Route>
    </Routes>
  )
}
