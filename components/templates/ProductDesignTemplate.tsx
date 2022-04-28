import Link from 'next/link'

const ProductDesignTemplate = () => {
  return (
    <div className='px-12 text-xl'>
      <ol className='list-decimal'>
        <li className='mb-6'>
          <p>
            <b>Materials</b> - The Curveball Wallet Holster&apos;s outer shell
            is made of real leather. The inner shell is a smooth plastic to help
            reduce friction that the firearm&apos;s slide would normally have
            against an all leather-like holster. There is a foam insert that
            helps keep the firearm in place.
          </p>
        </li>
        <li className='mb-6'>
          <p>
            <b>Design</b> - The Curveball Wallet Holster is shaped, cut and sewn
            together by hand. This is done to ensure that the firearm functions
            properly as if it were not holstered. Because of this you will find
            a few imperfect cuts and areas of the holster ground down. Please
            understand that we at CMA Wallets feel it is more important to
            ensure smooth, unhindered operation of the firearm rather than
            visual aesthetics.
          </p>
          <p>
            If your Curveball Wallet Holster has seam separation, please review
            the warranty section of the{' '}
            <Link href='/terms-conditions'>
              <a className='underline decoration-dotted hover:decoration-solid'>
                Terms and Conditions
              </a>
            </Link>{' '}
            of sale to see whether your Wallet Holster is covered by our limited
            warranty.
          </p>
        </li>
        <li className='mb-6'>
          <b>Hand Dominance</b> - The Curveball Wallet Holster is not designed
          for ambidexterity, but specifically for a right-handed <b>OR</b>{' '}
          left-handed person. The hole for the trigger determines whether the
          Curveball Wallet Holster is right-handed or left-handed. This design
          feature ensures that, when placed in the back pocket and drawn out,
          based on the shooting hand of the owner the trigger would be hidden.
          This would prevent an attacker from knowing you&apos;ve drawn a
          firearm.
        </li>
      </ol>
    </div>
  )
}

export default ProductDesignTemplate
