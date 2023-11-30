import React from 'react'
import styles from './css/somitoken.module.scss'
import Image from 'next/image'
import SomiTokenImg from '../../public/assets/Images/somitoken.png'

const SomiToken = () => {
    return (
        <section className={styles.SomiTokenSection}>
            <div className={styles.mainSomiToken}>
                <div className={styles.SomiTokenInner}>
                    <div className={styles.SomiTokenImgSec}>
                        <Image src={SomiTokenImg} alt="SomiTokenImg" width={509} height={490} className={styles.SomiTokenImg} />
                    </div>
                    <div className={styles.SomiTokenTextsec}>
                        <h1 className={styles.SomiTokentext}>
                            SOMI Token
                        </h1>
                        <div className={styles.SomiTokenSubtext}>
                            <p>The SOMI token, aligned with Imperial Asset's vision, spearheads a revolutionary approach by offering a blockchain-based platform that broadens accessibility for a diverse range of investors. This inclusivity allows individuals from various backgrounds to become stakeholders in prestigious properties.</p>
                            <p>
                                It empowers potential investors who might not have had the opportunity to participate in high-value real estate ventures. By reducing the barriers to entry, the SOMI token broadens the spectrum of investment opportunities, fostering a more equitable and accessible investment environment.</p>
                        </div>
                    </div>
                    <div className={styles.SomiTokenMobileImgSec}>
                        <Image src={SomiTokenImg} alt="SomiTokenImg" className={styles.OwenershipImg} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SomiToken
