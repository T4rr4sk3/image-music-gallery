import type { NextPage } from 'next'
import BaseLayout1 from '../components/common/BaseLayout1'
import Capa from '../components/IndexContainer/Capa'
import Galeria from '../components/IndexContainer/Galeria'

const Home: NextPage = () => {
  return(

    <BaseLayout1>
      <Capa />
      <Galeria />
    </BaseLayout1>

  )
}

export default Home
