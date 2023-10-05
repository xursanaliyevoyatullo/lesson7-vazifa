import { NavLink, Outlet } from "react-router-dom"
import BreadCrumps from '../components/BreadCrumps'

function RootLayout() {
  return (
    <>
      <header>
        <nav className="bg-slate-200 py-5">
          <div className="align-element flex justify-between">
            <h1 className="text-3xl">My Articles</h1>
            <div className="flex items-center gap-5">
              <NavLink className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300" to="/">Home</NavLink>

              <NavLink className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300" to="/articles">Articles
              </NavLink>

              <NavLink className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300" to="/about">About</NavLink>

              <NavLink className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300" to="/contact">Contact</NavLink>
            </div>
          </div>
        </nav>
        <BreadCrumps />
      </header>
      <main className="align-element">
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default RootLayout