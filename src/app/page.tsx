import Header from '@/Components/Header'
import styles from './page.module.css'
import "./globals.css"
import Banner from '@/Components/Banner'
import Ownership from '@/Components/Ownership'
import PropertySubscription from '@/Components/ PropertySubscription'
import SomiToken from '@/Components/SomiToken'
import ImperialAssetsPlans from '@/Components/ImperialAssetsPlans'
import TokenIssuancePlan from '@/Components/TokenIssuancePlan'
import DownloadWallet from '@/Components/DownloadWallet'
import Footer from '@/Components/Footer'
import Utility from '@/Components/Utility'
import RoadMap from '@/Components/RoadMap'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  return (
    <main className={styles.main}>
        <Header />
        <Banner />
        <Ownership />
        <PropertySubscription />
        <SomiToken />
        <Utility />
        <ImperialAssetsPlans />
        <TokenIssuancePlan />
        <RoadMap />
        <DownloadWallet />
        <Footer />
    </main>
  )
}
