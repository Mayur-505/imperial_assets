"use client"
import React, { useState } from 'react'
import styles from './css/ PropertySubscription.module.scss'
import Image from 'next/image'
import MaskMobile from '../../public/assets/Images/Maskgroup.png'
import activeStepIcon from "../../public/assets/icons/activeStep.svg"
import stepIcon from "../../public/assets/icons/step.svg"
import step1Image from "../../public/assets/Images/step1.png"
import step2Image from "../../public/assets/Images/step2.png"
import step3Image from "../../public/assets/Images/step3.png"
import step4Image from "../../public/assets/Images/step4.png"

const PropertySubscription = () => {
    const [activStep, setActivStep] = useState(1)
    const stepImages = [
        step1Image,
        step2Image,
        step3Image,
        step4Image,
    ]
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
                            <div className={styles.circle}>
                                <Image src={activStep === 1 ? activeStepIcon : stepIcon} alt="activeStep" />
                            </div>
                            <div onClick={() => setActivStep(1)} className={`${styles.content} ${activStep === 1 ? styles.active : ""}`}>
                                <div className={styles.title}>Step 1: Property Subscription </div>
                                <div className={styles.caption}>Embark on a groundbreaing real estate journey! Experience property ownership with Imperial Assets. Subscribe, trade, and earn dividends effortlessly.</div>
                                {activStep === 1 && <div className={styles.imageWrapper}>
                                    <Image src={stepImages[activStep-1]} alt="SubscriptionImg" width={135} className={styles.SubscriptionStepImg} />
                                </div>}
                            </div>
                        </div>
                        <div className={`${styles.step}`}>
                            <div>
                                <div className={styles.circle}>
                                    <Image src={activStep === 2 ? activeStepIcon : stepIcon} alt="activeStep" />
                                </div>
                            </div>
                            <div onClick={() => setActivStep(2)} className={`${styles.content} ${activStep === 2 ? styles.active : ""}`}>
                                <div className={styles.title}>Step 2: Real-time Trading</div>
                                <div className={styles.caption}>Experience the real estate investment in the blink of an eye! Real-time Trading at Imperial Assets ensures instant, dynamic transactions.</div>
                                {activStep === 2 && <div className={styles.imageWrapper}>
                                    <Image src={stepImages[activStep-1]} alt="SubscriptionImg" width={135} className={styles.SubscriptionStepImg} />
                                </div> }
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div>
                                <div className={styles.circle}>
                                    <Image src={activStep === 3 ? activeStepIcon : stepIcon} alt="activeStep" />
                                </div>
                            </div>
                            <div onClick={() => setActivStep(3)} className={`${styles.content} ${activStep === 3 ? styles.active : ""}`}>
                                <div className={styles.title}>Step 3: Portfolio Management</div>
                                <div className={styles.caption}>Effortlessly manage your investments. From tracking reall estate tokens to optimizing dividens, our intuitive platform empowers you to curate and navigate your property portfolio with ease, ensuring a strategic and rewarding investment experience.</div>
                                {activStep === 3 && <div className={styles.imageWrapper}>
                                    <Image src={stepImages[activStep-1]} alt="SubscriptionImg" width={135} className={styles.SubscriptionStepImg} />
                                </div>}
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div>
                                <div className={styles.circle}>
                                    <Image src={activStep === 4 ? activeStepIcon : stepIcon} alt="activeStep" />
                                </div>
                            </div>
                            <div onClick={() => setActivStep(4)} className={`${styles.content} ${activStep === 4 ? styles.active : ""}`}>
                                <div className={styles.title}>Step 4: Exercise of voting rights</div>
                                <div className={styles.caption}>Your vote, your influence! Empower your voice in property decisions with SOMI. the exercise of voting rights lets you actively participate in shaping the future of your real estate investments.</div>
                                {activStep === 4 && <div className={styles.imageWrapper}>
                                    <Image src={stepImages[activStep-1]} alt="SubscriptionImg" width={135} className={styles.SubscriptionStepImg} />
                                </div>}
                            </div>
                        </div>
                    </div>

                    <div className={styles.SubscriptionImgSec}>
                        <Image src={stepImages[activStep - 1] || ""} alt="SubscriptionImg"  className={styles.SubscriptionImg} />
                        {/* <Image src={MaskMobile} alt="SubscriptionImg" width={537} height={630} className={styles.SubscriptionImg} /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertySubscription
