import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './CardItem.scss'

type CardItemProps = {
  url: string
}

const CardItem = ({url}:CardItemProps) => {
  return (
    <div className='CardItem'>
      <LazyLoadImage
        effect='blur'
        className='CardItem-Image'
        width='220px'
        height='350px'
        src={url}
        placeholderSrc='/img/loading.png'
      />
    </div>
  )
}

export default CardItem