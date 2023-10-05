import { Link, useLocation } from 'react-router-dom'

function BreadCrumps() {

  const location = useLocation()

  const currentLink = []

  const crumbs = location.pathname.split('/')
   .filter((crumb) => crumb != '')
   .map((crumb) => {
      currentLink.push(`/${crumb}`)
      return (
        <div className="crumb align-element" key={crumb }>
            <Link to={currentLink.join('')}>{crumb}</Link>
        </div>
      )
   })

  return (
    <div className='font-medium pt-3 '>{crumbs}</div>
  )
}

export default BreadCrumps