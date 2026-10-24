
import { Outlet } from "react-router"

import Header from "../shared/ui/Header/Header"
import Footer from "../shared/ui/Footer/Footer"
export default function MainLayout() {
  return (
    <div className="min-h-screen bg-canvas">
      <header>
        <Header />
      </header>

      <main className="relative min-h-screen overflow-x-hidden">
        <Outlet />
      </main>

      <footer className="flex w-full justify-center">
        <Footer />
      </footer>
    </div>
  )
}
