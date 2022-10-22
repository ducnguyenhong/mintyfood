import type { NextPage } from 'next'
import Head from 'next/head'
import HomeCategory from './category'
import ProductList from './product-list'
import HomeSlider from './slider'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Minty Food - Đồ Ăn & Thức Uống Dinh Dưỡng</title>
      </Head>

      <HomeSlider />

      <HomeCategory />

      <ProductList />
    </div>
  )
}

export default Home
