const ContactUsTemplate = () => {
  const contactCardClassName =
    'flex-1 p-8 m-6 bg-slate-100 rounded-lg shadow-lg text-xl flex justify-center'
  const contactCardContentsClassName = 'flex flex-col items-center'
  const contactCardHeaderClassName = 'text-3xl mb-4'

  return (
    <div>
      <h1 className='text-5xl text-center pb-8'>Contact Us</h1>
      <div className='flex flex-wrap whitespace-nowrap'>
        <div className={contactCardClassName}>
          <div className={contactCardContentsClassName}>
            <h2 className={contactCardHeaderClassName}>Email</h2>
            <div className='flex-1'>
              <p>questions@cmawallets.com</p>
            </div>
          </div>
        </div>
        <div className={contactCardClassName}>
          <div className={contactCardContentsClassName}>
            <h2 className={contactCardHeaderClassName}>Phone</h2>
            <div className='flex-1'>
              <p>(832) 528-2973</p>
            </div>
          </div>
        </div>
        <div className={contactCardClassName}>
          <div className={contactCardContentsClassName}>
            <h2 className={contactCardHeaderClassName}>Address</h2>
            <div className='flex-1'>
              <p>CMA Wallets</p>
              <p>P.O. Box 19881</p>
              <p>Sugar Land, TX 77496</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsTemplate
