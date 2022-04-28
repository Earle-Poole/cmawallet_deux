import Logo from '../Logo'
import NavList from '../NavList'
import { NavItem } from '../NavList/types'

const headerNavItems: NavItem[] = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'LEO/Military',
    route: '/leo-military',
  },
  {
    label: 'Safety & Use',
    route: '/safety-use',
  },
  {
    label: 'Buy It Now',
    href: 'https://shoppy.gg/product/hfRLCkS',
  },
  {
    label: 'Forms & Links',
    route: '/forms-links',
  },
  {
    label: 'Scenarios',
    route: '/scenarios',
  },
  {
    label: 'Compatibility List',
    route: '/compatibility-list',
  },
]

const Header: React.FC = () => {
  return (
    <div className='z-10'>
      <Logo />
      <NavList items={headerNavItems} />
    </div>
  )
}

export default Header
