import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Horoscope from "./components/Horoscope"
import Navbar from './components/Navbar'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head>
        <title>Horoscops</title>
        {/*         <link rel="icon" href="./alamo.png" />
 */}        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
      </Head>
      <Navbar />

      <main className={`${styles.main}`}>
        <h1>Horoscopes</h1>
        <div className='image-container'>
        </div>
        <div className="map-container">
          <Horoscope />
        </div>

      </main>
    </>
  )
}
