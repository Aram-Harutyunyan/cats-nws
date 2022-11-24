import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getItems } from '../../features/items/itemsSlice'
import CardItem from '../CardItem'

import './Card.scss'

const Card = () => {
  const cardItems = useAppSelector(state => state.card?.items)
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(getItems({page,id}))
  },[page,id])

  return (
    <div>
      <div className='Card'>
        {cardItems.map((item:any) => (
          <CardItem key={item.id} {...item} />
        ))}
      </div>
      <button
        className='Card-Button'
        onClick={() => setPage(page+1)}
      >
        Load More
      </button>
    </div>
  )
}

export default Card