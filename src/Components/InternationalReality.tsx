import React from 'react'
import styles from './css/InternationalReality.module.scss'
import Image from 'next/image'
import KoreaTextImg from '../../public/assets/Images/koreaText.svg'

const InternationalReality = () => {
  return (
    <section className={styles.InternationalRealitySec}>
        <div className={styles.InternationalRealityWrapper}>
            <div className={styles.InternationalRealityInner}>
                <div className={styles.InternationalRealityTitle}>Who We Are</div>
                <Image src={KoreaTextImg} alt='KoreaTextImg' className={styles.KoreaTextImg}/>
                <p className={styles.InternationalRealitySubTitle}>Imperial Assets is backed by Korea Sotheby’s International Realty. We build tangible STO platform where properties are sold in pieces.</p>
            </div>
        </div>
    </section>
  )
}

export default InternationalReality
