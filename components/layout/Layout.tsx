import { ReactNode } from 'react'
import Footer from '../molecules/Footer'
import Header from '../molecules/Header'
import styles from '@/styles/layout.module.css'
import classNames from 'classnames'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className={classNames(
        'flex flex-col min-h-screen items-center',
        styles.layout
      )}>
      <Header />
      <div className='flex-1 w-full justify-center max-w-7xl z-10'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
