import React from 'react'
import styles from './css/ PropertySubscription.module.scss'
import Image from 'next/image'
import MaskMobile from '../../public/assets/Images/Maskgroup.png'

const PropertySubscription = () => {
    return (
        <section className={styles.SubscriptionSection}>
            <div className={styles.mainSubscription}>
                <div className={styles.SubscriptionInnerText}>
                    <h3 className={styles.SubscriptionSub}>Imperial Assets</h3>
                    <p className={styles.SubscriptionSubtextpara}>Immerse yourself in a realm of smooth transactions, dependable dividends, and uncomplicated property ownership with the innovative platform of Imperial Assets.</p>
                </div>
                <div className={styles.SubscriptionInner}>
                    <div className={styles.SubscriptionTextsec}>
                        <div className={styles.step}>
                            <div>
                                <div className={styles.FirstCircle}></div>
                            </div>
                            <div>
                                <div className={styles.FirstTitle}>Step 1: Property Subscription </div>
                                <div className={styles.FirstCaption}>Embark on a groundbreaing real estate journey! Experience property ownership with Imperial Assets. Subscribe, trade, and earn dividends effortlessly.</div>
                                <Image src={MaskMobile} alt="SubscriptionImg" width={240} height={310} className={styles.SubscriptionStepImg} />
                            </div>
                        </div>
                        <div className={`${styles.step} ${styles.step_active}`}>
                            <div>
                                <div className={styles.circle}></div>
                            </div>
                            <div>
                                <div className={styles.title}>Step 2: Real-time Trading</div>
                                <div className={styles.caption}>Experience the real estate investment in the blink of an eye! Real-time Trading at Imperial Assets ensures instant, dynamic transactions.</div>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div>
                                <div className={styles.circle}></div>
                            </div>
                            <div>
                                <div className={styles.title}>Step 3: Portfolio Management</div>
                                <div className={styles.caption}>Effortlessly manage your investments. From tracking reall estate tokens to optimizing dividens, our intuitive platform empowers you to curate and navigate your property portfolio with ease, ensuring a strategic and rewarding investment experience.</div>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div>
                                <div className={styles.circle}></div>
                            </div>
                            <div>
                                <div className={styles.title}>Step 4: Exercise of voting rights</div>
                                <div className={styles.caption}>Your vote, your influence! Empower your voice in property decisions with SOMI. the exercise of voting rights lets you actively participate in shaping the future of your real estate investments.</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.SubscriptionImgSec}>
                        <Image src={MaskMobile} alt="SubscriptionImg" width={537} height={630} className={styles.SubscriptionImg} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertySubscription
