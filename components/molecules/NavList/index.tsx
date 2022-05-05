import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavItem } from './types'

const NavList: React.FC<{ items: NavItem[] }> = ({ items }) => {
  const { pathname } = useRouter()
  return (
    <div className='flex justify-center font-semibold pb-8 whitespace-nowrap flex-wrap'>
      {items.map((item) => {
        const href = (item.route || item.href)!
        return (
          <Link href={href} key={item.label} passHref>
            <a
              className={classNames(
                'p-2 xl:p-5 text-base xl:text-xl hover:underline cursor-pointer',
                {
                  underline: pathname === href,
                }
              )}
              target={item.href ? '_blank' : undefined}>
              {item.label}
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default NavList
