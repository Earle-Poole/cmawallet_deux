import ImageGallery from 'react-image-gallery'
import GunWallet1 from '@/assets/gun-wallet-1.png'
import GunWallet2 from '@/assets/gun-wallet-2.png'
import GunWallet3 from '@/assets/gun-wallet-3.png'
import GunWallet4 from '@/assets/gun-wallet-4.png'

const images = [
  {
    original: GunWallet1.src,
    thumbnail: GunWallet1.src,
    originalAlt:
      'CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster',
  },
  {
    original: GunWallet2.src,
    thumbnail: GunWallet2.src,
    originalAlt:
      'CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster',
  },
  {
    original: GunWallet3.src,
    thumbnail: GunWallet3.src,
    originalAlt:
      'CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster',
  },
  {
    original: GunWallet4.src,
    thumbnail: GunWallet4.src,
    originalAlt:
      'CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster',
  },
]

const HomeTemplate = () => {
  return (
    <div className='flex flex-col'>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        autoPlay
        onClick={() =>
          window.open('https://shoppy.gg/product/hfRLCkS', '_blank')
        }
        slideDuration={700}
        lazyLoad={false}
      />
    </div>
  )
}

export default HomeTemplate
