import Layout from '@/components/layout/Layout'
import ProductDesignTemplate from '@/components/templates/ProductDesignTemplate'
import Head from 'next/head'

const ProductDesign = () => {
  return (
    <>
      <Head>
        <title>CMA Wallets, LLC - Product Design</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <ProductDesignTemplate />
      </Layout>
    </>
  )
}

export default ProductDesign
