import React from 'react'
import styles from './css/DownloadWallet.module.scss'
import MobileImg from '../../public/assets/Images/DownloadWallet.png'
import AppStore from '../../public/assets/Images/appstore.png'
import GoogleStore from '../../public/assets/Images/googleStore.png'
import Image from 'next/image'

const DownloadWallet = () => {
    return (
        <section className={styles.DownloadWalletSec}>
            <div className={styles.DownloadWalletMain}>
                <div className={styles.DownloadWalletTextInner}>
                    <h3 className={styles.DownloadWalletText}>Download Wallet</h3>
                    <p className={styles.DownloadWalletSubText}>Once you’ve entered into our ecosystem, you gain the ability to manage everything. Anyone with a smartphone and an internet connection can participate in global marketplace</p>
                </div>
                <div className={styles.bannerInner}>
                    <div className={styles.BannerTextsec}>
                        <div className={styles.bannerSub}>
                            <span>Wallet for the future of funding,</span>
                            <div>empowering data for the next generation of security tokens</div>
                        </div>
                        <p className={styles.bannertext}>
                            Experience the future of secure funding with our advanced wallet tailored for managing Security tokens.
                        </p>
                        <div className={styles.SecureStorage}>
                        <ul>
                            <li>Secure Storage</li>
                            <li>User-Friendly Interface</li>
                            <li>Multi-Token Support</li>
                            <li>Transaction Privacy</li>
                            <li>No more expensive fees</li>
                        </ul>
                        </div>
                        <div className={styles.mainButton}>
                            <Image src={AppStore} alt="AppStore"  className={styles.StoreImg} />
                            <Image src={GoogleStore} alt="GoogleStore" className={styles.StoreImg} />
                        </div>
                    </div>
                    <div className={styles.BannerImgSec}>
                        <Image src={MobileImg} alt="MobileImg" width={580} className={styles.BannerImg} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DownloadWallet
