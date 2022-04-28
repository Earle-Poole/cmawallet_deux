const LEOMilitaryTemplate = () => {
  return (
    <div className='text-xl indent-3 leading-relaxed'>
      <p>
        <b>Government Agencies:</b> If you are a law enforcement officer,
        Military Member or government services professional (See the list
        below). There will be an additional $10.00 off the purchase price. This
        will need to be verified via an email with proof of service, such as an
        ID card.
      </p>
      <p>
        Please email{' '}
        <a
          href='mailto:questions@cmawallets.com'
          className='font-bold hover:underline'>
          questions@cmawallets.com
        </a>{' '}
        with a copy of your ID (please cover over all information except your
        service type and name) along with a copy of the receipt. We will then
        issue a $10 refund.
      </p>
      <ul className='list-disc p-7 leading-loose'>
        <li>
          <b>
            Law Enforcement Officers/ Corrections Officers, Active or Retired
          </b>{' '}
          - Must provide a sanitized<b>¹</b> copy of LE Picture ID
        </li>
        <li>
          <b>Law Enforcement Cadets</b> - Sanitized<b>¹</b> documentation of
          Academy Enrollment
        </li>
        <li>
          <b>Military Personnel: Active, Reserve, Guard, or Retired</b> - Must
          provide a sanitized<b>¹</b> copy of Military Picture ID, Drivers
          License with the word Veteran on it, or DD214
        </li>
        <li>
          <b>Court Judges</b> - Must provide a sanitized<b>¹</b> copy of your
          Department ID
        </li>
        <li>
          <b>Fire Fighters, EMT&apos;s &amp; Paramedics</b> - Must provide a
          sanitized<b>¹</b> copy of your Department ID
        </li>
        <li>
          <b>State Licensed Security Companies</b> - Must provide a sanitized
          <b>¹</b>
          copy of your Department ID.
        </li>
      </ul>
      <b>¹</b>
      <sub>
        Sanitized means that you do not send any personal information to
        include, but not limited to Social Security, Address, Employee ID, etc.
        We basically just need to see your name, your picture and the
        organizations name on the card.
      </sub>
    </div>
  )
}

export default LEOMilitaryTemplate
