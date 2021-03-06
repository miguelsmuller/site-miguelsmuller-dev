import Head from 'next/head'
import React, { useRef } from 'react'
import { GetServerSideProps } from 'next'

import { getAllContentForHome } from '../services/lib/graphcms'

import Header from '../components/header/header'
import Hero from '../components/header/hero'
import Overview from '../components/overview'
import Study from '../components/study'
import Services from '../components/services'
import Principles from '../components/principles'
import Portifolio from '../components/portifolio'
import GoodChoice from '../components/goodChoice'
import Testimonies from '../components/testimonies'
import Footer from '../components/footer/footer'

const DataFromCMS = React.createContext([])
export const State = () => React.useContext(DataFromCMS)

export default function Home(props: any) {
  const refHero = useRef<HTMLDivElement>(null)

  const data = props.data

  return (
    <DataFromCMS.Provider value={data}>
      <Head>
        <title>Miguel Müller</title>;
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Hero ref={refHero} />
      <Header refHero={refHero} />
      <Overview />
      <Services />
      <Study />
      <Principles />
      <Portifolio />
      <GoodChoice />
      <Testimonies />
      <Footer />
    </DataFromCMS.Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const data = (await getAllContentForHome()) || []
  return {
    props: { data }
  }
}
