import { useParams } from 'react-router-dom';
import Layout from './Layout';

const LayoutWrapper = () => {
  const { id } = useParams();

  return <Layout key={id} />
}

export default LayoutWrapper