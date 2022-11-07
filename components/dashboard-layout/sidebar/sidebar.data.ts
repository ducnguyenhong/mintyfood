import { faCirclePlus, faGauge, faList, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface SideBarItem {
  route: string;
  title: string;
  icon: IconDefinition;
}

interface SideBarBlock {
  title: string;
  routes: SideBarItem[];
}

export const SIDE_BAR_DATA: SideBarBlock[] = [
  {
    title: 'Bảng điều khiển',
    routes: [
      {
        route: '/bang-dieu-khien',
        title: 'Bảng điều khiển',
        icon: faGauge
      }
    ]
  },
  {
    title: 'Bài viết',
    routes: [
      {
        route: '/bai-viet/tao-moi',
        title: 'Viết bài mới',
        icon: faCirclePlus
      },
      {
        route: '/bai-viet/danh-sach',
        title: 'Danh sách bài viết',
        icon: faList
      }
    ]
  },
  {
    title: 'Chuyên mục',
    routes: [
      {
        route: '/chuyen-muc/tao-moi',
        title: 'Tạo chuyên mục',
        icon: faCirclePlus
      },
      {
        route: '/chuyen-muc/danh-sach',
        title: 'Danh sách chuyên mục',
        icon: faList
      }
    ]
  },
  {
    title: 'Đơn hàng',
    routes: [
      {
        route: '/don-hang/tao-moi',
        title: 'Tạo đơn hàng',
        icon: faCirclePlus
      },
      {
        route: '/don-hang/danh-sach',
        title: 'Danh sách đơn hàng',
        icon: faList
      }
    ]
  }
];

export const SIDE_BAR_ROUTES = SIDE_BAR_DATA.map((item) => item.routes.flat())
  .flat()
  .map((item) => item.route);
