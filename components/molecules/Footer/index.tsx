import Link from 'next/link'
import NavList from '../NavList'
import { NavItem } from '../NavList/types'

const footerNavItems: NavItem[] = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Contact Us',
    route: '/contact-us',
  },
  {
    label: 'Terms & Conditions',
    route: '/terms-conditions',
  },
  {
    label: 'Safety & Use',
    route: '/safety-use',
  },
  {
    label: 'Product Design',
    route: '/product-design',
  },
  {
    label: 'Forms & Links',
    route: '/forms-links',
  },
]

const Footer: React.FC = () => {
  return (
    <div className='flex flex-col z-10'>
      <NavList items={footerNavItems} />
      <div className='flex flex-col items-center text-sm leading-none pb-2'>
        <div>
          Copyright <b>&copy;</b> {new Date().getFullYear()} CMA Wallets, LLC
        </div>
        <div>
          Website by{' '}
          <Link href='https://github.com/Earle-Poole' passHref>
            <a target='_blank' className='font-semibold hover:underline'>
              Earle Poole
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
