import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getCategories } from '../../features/categories/categoriesSlice'
import './Sidebar.scss'

const Sidebar = () => {
  const dispatch= useAppDispatch()
  const categoriesList = useAppSelector(state => state.categories.list)
  useEffect(() => {
    dispatch(getCategories()) 
  }, [])
  
  return (
    <div className='Sidebar'>
      <ul className='Sidebar-List'>
        {categoriesList.map((item:any)=> (
          <li
            className='Sidebar-ListItem'
            key={item?.id}
          >
            <Link to={`/category/${item.id}`}>
              <p className='Sidebar-Text'>
                {item.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar