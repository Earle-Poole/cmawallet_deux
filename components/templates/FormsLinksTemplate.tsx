/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import atfFormThumb from '@/assets/atf-form-thumb.png'

const formLinks = {
  tips: 'http://cmawallets.com/static/media/ATF%20Form%201%20Tips.bb4eb5ec.pdf',
  prefilledForms: [
    {
      label: 'Form 1 Individual Exempt¹',
      links: [
        {
          label: 'LCP',
          href: 'http://cmawallets.com/static/media/1%20LCP.d8385e46.pdf',
        },
        {
          label: 'Glock42',
          href: 'http://cmawallets.com/static/media/1%20Glock42.6983ae1c.pdf',
        },
        {
          label: 'P3AT',
          href: 'http://cmawallets.com/static/media/1%20P3AT.084b3cd3.pdf',
        },
      ],
    },
    {
      label: 'Form 1 Individual Non-Exempt²',
      links: [
        {
          label: 'LCP',
          href: 'http://cmawallets.com/static/media/2%20LCP.f833acf4.pdf',
        },
        {
          label: 'Glock42',
          href: 'http://cmawallets.com/static/media/2%20Glock42.03256dc2.pdf',
        },
        {
          label: 'P3AT',
          href: 'http://cmawallets.com/static/media/2%20P3AT.3e154f48.pdf',
        },
      ],
    },
    {
      label: 'Form 1 Trust Exempt',
      links: [
        {
          label: 'LCP',
          href: 'http://cmawallets.com/static/media/3%20LCP.84f1a01c.pdf',
        },
        {
          label: 'Glock42',
          href: 'http://cmawallets.com/static/media/3%20Glock42.91282c3b.pdf',
        },
        {
          label: 'P3AT',
          href: 'http://cmawallets.com/static/media/3%20P3AT.8e51405e.pdf',
        },
      ],
    },
    {
      label: 'Form 1 Trust Non-Exempt',
      links: [
        {
          label: 'LCP',
          href: 'http://cmawallets.com/static/media/4%20LCP.4dec3928.pdf',
        },
        {
          label: 'Glock42',
          href: 'http://cmawallets.com/static/media/4%20Glock42.dbb65c2f.pdf',
        },
        {
          label: 'P3AT',
          href: 'http://cmawallets.com/static/media/4%20P3AT.a94d0a1d.pdf',
        },
      ],
    },
  ],
}

const FormsLinksTemplate = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex flex-1 flex-col mb-12 lg:mb-0 lg:border-r items-center  border-black'>
          <p className='text-2xl mb-8'>
            For your convenience, we&apos;ve provided some partially filled out
            forms here
          </p>
          <ul className='list-disc text-xl font-normal'>
            {formLinks.prefilledForms.map((form) => {
              return (
                <li key={form.label}>
                  <div>
                    <b>{form.label}</b>
                    <div className='py-4'>
                      {form.links.map((link) => {
                        return (
                          <Link key={link.label} href={link.href}>
                            <a className='p-4 underline decoration-dotted hover:decoration-solid underline-offset-2 cursor-pointer'>
                              {link.label}
                            </a>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className='flex flex-col'>
            <span>
              <b>¹ : Applies to most Law Enforcement</b>
            </span>
            <span>
              <b>² : Applies to most Citizens</b>
            </span>
          </div>
        </div>
        <div className='flex flex-1 flex-col items-center'>
          <div className='text-2xl'>
            Here are some tips for filling out your ATF form 1
          </div>
          <Link href={formLinks.tips} passHref>
            <a className='p-8'>
              <img
                src={atfFormThumb.src}
                alt='ATF form tips'
                width={520}
                height={360}
                style={{ width: 520, height: 360 }}
              />
            </a>
          </Link>
          <Link href={formLinks.tips} passHref>
            <a className='font-bold underline decoration-dotted hover:decoration-solid underline-offset-2'>
              PDF Download
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FormsLinksTemplate
