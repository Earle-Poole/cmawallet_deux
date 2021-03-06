import Layout from '@/components/layout/Layout'
import ContactUsTemplate from '@/components/templates/ContactUsTemplate'
import { NextPage } from 'next'
import Head from 'next/head'

const ContactUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>CMA Wallets, LLC - Contact Us</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <ContactUsTemplate />
      </Layout>
    </>
  )
}

export default ContactUs
