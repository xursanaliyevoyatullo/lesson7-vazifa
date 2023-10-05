
import { NavLink } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className='pageNotFound-container'>
            <h1 className='text-center py-3 font-medium'>👇PageNotFound👇</h1>
            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias rem corporis veritatis sint, velit at nobis eum consectetur, autem odio numquam tempora vel sunt, possimus atque non amet libero! Doloribus voluptates porro unde non soluta. Quibusdam voluptas laborum optio ducimus, a minus debitis amet sit accusamus, ad reiciendis, quos quis.</p>
            <NavLink className="block text-center pt-5 font-medium text-lime-600" to="/">
                Home Page
            </NavLink>
        </div>
    )
}

export default PageNotFound