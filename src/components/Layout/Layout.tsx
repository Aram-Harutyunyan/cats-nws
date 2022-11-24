import Card from '../Card'
import Sidebar from '../Sidebar/Sidebar'

import './Layout.scss'

const Layout = () => {
  return (
    <div className='Layout'>
      <Sidebar />
      <Card />
    </div>
  )
}

export default Layout