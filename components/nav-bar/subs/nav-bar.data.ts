export interface NavBarItem {
  id: number;
  title: string;
  route: string;
}

export const NAVBAR_DATA: NavBarItem[] = [
  {
    id: 1,
    title: 'Trang chủ',
    route: '/'
  },
  // {
  //   id: 2,
  //   title: 'Giới thiệu',
  //   route: '/introduction'
  // },
  {
    id: 3,
    title: 'Đồ ăn',
    route: '/website-services'
    // subs: [
    //   {
    //     id: 2.1,
    //     title: 'Thiết kế web',
    //     route: '/thiet-ke-web'
    //   },
    //   {
    //     id: 2.2,
    //     title: 'Quản trị web',
    //     route: '/quan-tri-web'
    //   },
    //   {
    //     id: 2.3,
    //     title: 'Chỉnh sửa web',
    //     route: '/chinh-sua-web'
    //   }
    // ]
  },
  {
    id: 4,
    title: 'Thức uống',
    route: '/mobile-app-services'
    // subs: [
    //   {
    //     id: 3.1,
    //     title: 'Thiết kế app',
    //     route: '/thiet-ke-app'
    //   },
    //   {
    //     id: 3.2,
    //     title: 'Clone app',
    //     route: '/clone-app'
    //   },
    //   {
    //     id: 3.3,
    //     title: 'Chỉnh sửa app',
    //     route: '/chinh-sua-app'
    //   }
    // ]
  },
  {
    id: 5,
    title: 'Thực phẩm',
    route: '/mobile-app-services'
  },
  {
    id: 6,
    title: 'Liên hệ',
    route: '/contact'
    // subs: [
    //   {
    //     id: 4.1,
    //     title: 'Giới thiệu',
    //     route: '/gioi-thieu'
    //   },
    //   {
    //     id: 4.2,
    //     title: 'Liên hệ',
    //     route: '/lien-he'
    //   },
    //   {
    //     id: 4.3,
    //     title: 'Thanh toán',
    //     route: '/thanh-toan'
    //   }
    // ]
  }
];
