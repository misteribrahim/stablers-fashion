import React from 'react'
import Benefits from '../components/benefits'
import MainLayout from '../Layout/mainLayout'
import ProductDetails from '../components/ProductDetails'

const product = () => {
  return (
    <>
      <MainLayout>
        <Benefits />
        <ProductDetails />
      </MainLayout>
    </>
  )
}

export default product


