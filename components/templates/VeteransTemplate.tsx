/* eslint-disable @next/next/no-img-element */
import veteranGuide from '@/assets/va-guide-thumb.png'
import Link from 'next/link'

const VeteransTemplate = () => {
  return (
    <div className='flex flex-1 flex-col items-center'>
      <h1 className='text-center text-5xl mb-8'>VA Form Guidance</h1>
      <Link href={'/assets/va-forms.pdf'} passHref>
        <a className='font-bold underline decoration-dotted hover:decoration-solid underline-offset-2'>
          PDF Download
        </a>
      </Link>
      <Link href={'/assets/va-forms.pdf'}>
        <a target={'_blank'} className='rounded-lg shadow-lg lg:mx-72 m-8'>
          <img src={veteranGuide.src} alt='VA Benefits Guide' />
        </a>
      </Link>
      <Link href={'/assets/va-forms.pdf'} passHref>
        <a className='font-bold underline decoration-dotted hover:decoration-solid underline-offset-2'>
          PDF Download
        </a>
      </Link>
    </div>
  )
}

export default VeteransTemplate
