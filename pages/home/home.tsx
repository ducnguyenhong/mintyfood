import type { NextPage } from 'next'
import Head from 'next/head'
import HomeCategory from './category'
import HomeSlider from './slider'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Minty Food - Đồ Ăn & Thức Uống Dinh Dưỡng</title>
      </Head>

      <HomeSlider />

      <HomeCategory />

      <footer >

      </footer>
    </div>
  )
}

export default Home
