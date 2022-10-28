import type { NextPage } from 'next';
import Head from 'next/head';
import HomeCategory from './category';
import HomeIntro from './introduction';
import HomeNews from './news';
import ProductList from './product-list';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Minty Food - Đồ Ăn, Thức Uống & Thực Phẩm Dinh Dưỡng</title>
      </Head>

      <HomeIntro />

      <HomeCategory />

      <ProductList />

      <HomeNews />
    </div>
  );
};

export default Home;
