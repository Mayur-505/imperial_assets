import React from 'react'
import styles from './css/ownership.module.scss'
import Image from 'next/image'
import OwenershipImg from '../../public/assets/Images/paradigm.svg'
import mobileOwenershipImg from '../../public/assets/Images/Mombileparadigm.svg'

const Ownership = () => {
  return (
    <section className={styles.OwenershipSection}>
      <div className={styles.mainOwenership}>
        <div className={styles.OwenershipInner}>
          <div className={styles.OwenershipImgSec}>
            <Image src={OwenershipImg} alt="OwenershipImg" width={509} height={497} className={styles.OwenershipImg} />
          </div>
          <div className={styles.OwenershipTextsec}>
            <div className={styles.OwenershipSubButton}>The Property investment platform</div>
            <h1 className={styles.Owenershiptext}>
            A new paradigm of property ownership
            </h1>
            <p className={styles.OwenershipSubtext}>Investing in property shares paves the way for stable dividends. Say goodbye to the uncertainties of traditional property investments and embrace the predictability and security offered by Imperial Assets.</p>
          </div>
          <div className={styles.OwenershipMobileImgSec}>
            <Image src={mobileOwenershipImg} alt="mobileOwenershipImg" className={styles.OwenershipMobileImgSec} />
          </div>
        </div>
        </div>
    </section>
  )
}

export default Ownership
