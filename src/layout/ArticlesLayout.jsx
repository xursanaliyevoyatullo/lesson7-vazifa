import { Outlet } from "react-router-dom"

function ArticlesLayout() {
  return (
    <div>
        <h2 className="font-medium text-center pt-12 pb-3 cursor-pointer text-2xl text-lime-600">My Articles</h2>
        <hr/>
        <Outlet/>
    </div>
  )
}

export default ArticlesLayout