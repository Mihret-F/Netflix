import React from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import Banner from '../../Component/Banner/Banner'

import Rowlist from '../../Component/Rows/Rowlist/Rowlist'
export default function Home() {
  return (
    <div><>
      <Header/>
      <Banner/>
      <Rowlist/>
      <Footer/></>
    </div>
  )
}
