import { termsConditionsCopy } from '@/constants/index'
import Link from 'next/link'

const termsConditionsLink =
  'http://cmawallets.com/static/media/CMA%20Terms%20and%20Conditions.96ed0566.pdf'

const TermsConditionsTemplate = () => {
  return (
    <div>
      <h1 className='text-center text-5xl'>Terms & Conditions</h1>
      <Link href={termsConditionsLink}>
        <a className='flex justify-center font-bold underline decoration-dotted hover:decoration-solid underline-offset-2 p-8'>
          PDF Download
        </a>
      </Link>
      <div className='text-xs whitespace-pre-line p-8 m-6 bg-slate-50 rounded-lg shadow-lg flex flex-col items-center'>
        {termsConditionsCopy}
      </div>
      <Link href={termsConditionsLink}>
        <a className='flex justify-center font-bold underline decoration-dotted hover:decoration-solid underline-offset-2 p-8'>
          PDF Download
        </a>
      </Link>
    </div>
  )
}

export default TermsConditionsTemplate
