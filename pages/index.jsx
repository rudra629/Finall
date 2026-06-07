import Head from 'next/head'
import Header from '../components/Header'
import HeroCarousel from '../components/HeroCarousel'
import VideoSection from '../components/VideoSection'
import StoreAmazonBanner from '../components/StoreAmazonBanner'
import ProductCarousel from '../components/ProductCarousel'
import GoesGreatWith from '../components/GoesGreatWith'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bazana!: Healthy Roasted Snacks. Not fried! No Oil Snacks!</title>
      </Head>

      <Header />

      <main>
        {/* Hero image carousel */}
        <HeroCarousel />

        {/* About / video section */}
        <VideoSection />

        {/* Kirana + Amazon banners */}
        <StoreAmazonBanner />

        {/* Product slider */}
        <ProductCarousel />

        {/* "Goes Great With" icons */}
        <GoesGreatWith />
      </main>

      <Footer />
    </>
  )
}
