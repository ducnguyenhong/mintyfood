import type { NextPage } from 'next'
import Head from 'next/head'
import HomeCategory from './category'
import HomeNews from './news'
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

      <HomeNews />
    </div>
  )
}

export default Home
