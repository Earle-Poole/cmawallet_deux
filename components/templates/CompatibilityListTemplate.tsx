import Glock42 from '@/assets/glock-42.png'
import P3AT from '@/assets/p3at.png'
import LCP1 from '@/assets/lcp-1.png'
import LCP2 from '@/assets/lcp-2.png'
import ExportedImage from 'next-image-export-optimizer'

const compatibilityList = [
  { label: 'LCP', image: LCP1 },
  { label: 'LCP2', image: LCP2 },
  { label: 'Glock 42', image: Glock42 },
  { label: 'P3AT', image: P3AT },
]

const CompatibilityListTemplate = () => {
  return (
    <div>
      <h1 className='text-5xl text-center pb-8'>List of compatible firearms</h1>
      <section className='flex flex-wrap justify-center'>
        {compatibilityList.map(({ label, image }) => (
          <div key={label} className='flex flex-col items-center p-6'>
            <ExportedImage
              src={image.src}
              alt={label}
              width='250'
              height='200'
            />
            <label className='text-2xl font-bold'>{label}</label>
          </div>
        ))}
      </section>
    </div>
  )
}

export default CompatibilityListTemplate
