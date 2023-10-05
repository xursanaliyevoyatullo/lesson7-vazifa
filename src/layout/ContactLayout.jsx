import { NavLink, Outlet } from "react-router-dom"
function ContactLayout() {
  return (
    <div>
        <h1 className="font-medium text-center py-10 cursor-pointer text-2xl text-lime-600">Contact</h1>
        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sapiente architecto natus quidem vel, saepe omnis maxime impedit perferendis quos ab dicta error provident beatae nemo eum fugiat labore id reprehenderit in incidunt rem? Voluptate illum, sit et, praesentium, in expedita natus quibusdam beatae dolorum soluta reiciendis voluptatem tempora laudantium.</p>

        <nav className="flex justify-center font-medium text-xl pt-10 gap-7">
            <NavLink className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300" to='faq'>Faq</NavLink>
            <NavLink className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300" to='form'>Form</NavLink>
        </nav>

        <Outlet/>
    </div>
  )
}

export default ContactLayout