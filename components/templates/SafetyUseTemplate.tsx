import styles from '@/styles/safetyUse.module.css'

const SafetyUseTemplate = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl lg:text-5xl bg-yellow-400 leading-snug'>
        PLEASE WATCH THIS VIDEO
      </h1>
      <p className='text-2xl'>
        This video provides guidance on how to properly handle your weapon with
        the holster.
      </p>
      <div className={styles.wrapper}>
        <iframe
          className='m-8'
          title='CMAWallets, LLC'
          src='https://www.youtube.com/embed/5XZPO3oE0MY?rel=0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>
      </div>
      <p className='italic'>
        Thanks to{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='http://www.g2grange.com/'
          className='cursor-pointer underline decoration-dotted hover:decoration-solid underline-offset-2'>
          G2G Shooting Range
        </a>{' '}
        in Rosenberg, TX for allowing us to record this video in their facility.
      </p>
    </div>
  )
}

export default SafetyUseTemplate
