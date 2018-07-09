import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Cases',
    icon: 'fa fa-gavel',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Active',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Past',
        link: '/pages/ui-features/grid',
      }
    ],
  },
  {
    title: 'Contract Templates',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'My Settings',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  }
];
