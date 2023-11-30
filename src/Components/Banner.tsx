import React from 'react'
import styles from './css/banner.module.scss'
import BannerImg from '../../public/assets/Images/banner.png'
import MobileBannerImg from '../../public/assets/Images/MobileBanner.png'
import RightArrow from '../../public/assets/Images/rightArrow.png'
import RightArrowBlack from '../../public/assets/Images/rightarrowblack.png'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className={styles.BannerSection}>
      <div className={styles.mainBanner}>
        <div className={styles.bannerInner}>
          <div className={styles.BannerTextsec}>
            <div className={styles.bannerSubButton}>The Property invest platform</div>
            <h1 className={styles.bannertext}>
              Realize your
              Property Dreams
              with Imperial Assets
            </h1>
            <p className={styles.bannerSubtext}>Say goodbye to the complexities of traditional property ownership, hello to a seamless and inclusive experience</p>
            <div className={styles.mainButton}>
              <button className={styles.BannerBuyButton}>Buy SOMI <Image src={RightArrow} alt="RightArrow" /></button>
              <button className={styles.BannerWhitepaperButton}>Whitepaper 1.00 <Image src={RightArrowBlack} alt="RightArrowBlack" /></button>
            </div>
          </div>
          <div className={styles.BannerImgSec}>
            <Image src={BannerImg} alt="Banner" width={637} height={656} className={styles.BannerImg} />
            <Image src={MobileBannerImg} alt='MobileBannerImg' className={styles.MobileBannerImg}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
