export interface Member {
  name: string
  memberNumber: string
  localGroup: string
  region: string
}

export interface Notification {
  slug: string
  title: string
  shortDescription: string
  body: readonly string[]
  status: 'unread' | 'read' | 'archived'
  author: Organization
}

export interface Organization {
  name: string
  avatar: string
}

export interface Event {
}

export interface Scoutmedia {
}

export interface MembershipBenefit {
}

const metsankavijat: Organization = {
  name: 'Metsänkävijät',
  avatar: 'http://metsänkävijät.fi/wp-content/uploads/cropped-kilpi-lapinakyva2valkoinen-1.png',
}

const sp: Organization = {
  name: 'Suomen Partiolaiset',
  avatar: '',
}

export const member: Member = {
  name: 'Matti Meikäläinen',
  memberNumber: '12345678',
  localGroup: 'Metsänkävijät',
  region: 'Pohjanmaan Partiolaiset',
}

export const notifications: readonly Notification[] = [
  {
    slug: 'adventtikalenterien-myynti-on-alkanut',
    title: 'Adventtikalenterien myynti on alkanut!',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget pharetra velit. Nulla nibh neque, porta id pulvinar quis, condimentum sed ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed viverra massa, nec finibus nunc. Sed a elit tellus. Aliquam nisi ipsum, molestie a auctor vel, efficitur non tortor. Donec efficitur ligula nec sem bibendum egestas a et arcu. Donec facilisis elit nec nisl tincidunt mattis. Suspendisse auctor neque et sem lobortis, sit amet bibendum sem aliquam. Duis vulputate metus ac suscipit rhoncus. In at maximus mauris. In elit magna, cursus sed nibh at, posuere laoreet lectus.',
      ' In fermentum et purus et vehicula. Praesent tortor elit, volutpat in elementum at, semper vel orci. Integer id felis tincidunt, bibendum neque ac, posuere orci. Donec porttitor libero facilisis tellus posuere, vel euismod est tristique. Quisque magna nibh, facilisis non dolor sit amet, laoreet ultricies orci. Praesent ut feugiat mi. Donec lacinia id turpis sed convallis. Nulla dolor ligula, posuere a rhoncus gravida, dapibus ac odio. Aliquam non purus erat. Suspendisse pretium volutpat nunc, sit amet pulvinar nisl semper ut. Proin sagittis pharetra lacus, ut elementum orci maximus nec. Donec ac ipsum et nisi bibendum pulvinar interdum nec enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus facilisis, eros quis varius suscipit, arcu lectus varius eros, lacinia tincidunt ex leo sit amet nunc. Nam urna purus, pharetra cursus mi at, accumsan fringilla tortor. Suspendisse non risus velit.',
    ],
    shortDescription: 'On taas se aika vuodesta kun kisaillaan tonttumerkeistä. Tässä ohjeet adventtikalenterien myyntiin.',
    status: 'read',
    author: metsankavijat,
  },
  {
    slug: 'unelmien-finnjamboree-2022',
    title: 'Unelmien finnjamboree 2022',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget pharetra velit. Nulla nibh neque, porta id pulvinar quis, condimentum sed ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed viverra massa, nec finibus nunc. Sed a elit tellus. Aliquam nisi ipsum, molestie a auctor vel, efficitur non tortor. Donec efficitur ligula nec sem bibendum egestas a et arcu. Donec facilisis elit nec nisl tincidunt mattis. Suspendisse auctor neque et sem lobortis, sit amet bibendum sem aliquam. Duis vulputate metus ac suscipit rhoncus. In at maximus mauris. In elit magna, cursus sed nibh at, posuere laoreet lectus.',
      ' In fermentum et purus et vehicula. Praesent tortor elit, volutpat in elementum at, semper vel orci. Integer id felis tincidunt, bibendum neque ac, posuere orci. Donec porttitor libero facilisis tellus posuere, vel euismod est tristique. Quisque magna nibh, facilisis non dolor sit amet, laoreet ultricies orci. Praesent ut feugiat mi. Donec lacinia id turpis sed convallis. Nulla dolor ligula, posuere a rhoncus gravida, dapibus ac odio. Aliquam non purus erat. Suspendisse pretium volutpat nunc, sit amet pulvinar nisl semper ut. Proin sagittis pharetra lacus, ut elementum orci maximus nec. Donec ac ipsum et nisi bibendum pulvinar interdum nec enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus facilisis, eros quis varius suscipit, arcu lectus varius eros, lacinia tincidunt ex leo sit amet nunc. Nam urna purus, pharetra cursus mi at, accumsan fringilla tortor. Suspendisse non risus velit.',
    ],
    shortDescription: 'Finnjamboree 2022 vastavalitut leirinjohtajat pyytävät kaikilta ideoita parhaan finnjamboreen toteuttamiseksi.',
    status: 'unread',
    author: sp,
  },
]

export const events: readonly Event[] = [
]

export const scoutmedia: readonly Scoutmedia[] = [
]

export const membershipBenefits: readonly MembershipBenefit[] = [
]
