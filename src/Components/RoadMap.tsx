import React from 'react'
import styles from './css/RoadMap.module.scss'
import Arrow from '../../public/assets/Images/arrow.png'
import Stepper from '../../public/assets/Images/stepper.png'
import Image from 'next/image'

const RoadMap = () => {
    return (
        <section className={styles.RoadMapSec}>
            <div className={styles.RoadMapMain}>
                <div className={styles.RoadMapTextInner}>
                    <h3 className={styles.RoadMapText}>Road Map</h3>
                    <p className={styles.RoadMapSubText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                </div>
            </div>
            <div className={styles.RoadMapStepper}>
                <div className={styles.wrapper}>
                    <ol className={styles.c_timeline}>
                        <li className={styles.c_timeline__item}>
                            <div className={`${styles.content_card} ${styles.content_card_left}`}>
                                <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Whitepaper 1.0</p>
                                <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Imperial Assets Wallet release</p>
                                <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Imperial Assets Platform Development</p>
                                <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Private Sale </p>
                            </div>
                            <div className={styles.timeLineYear}>
                                <span>2023 4Q</span>
                                <Image src={Stepper} alt='Stepper' className={styles.stepperImg} />
                            </div>
                        </li>
                        {/* <li className={styles.c_timeline__item}>
                            <div className={styles.c_timeline__content}>
                                <div className={styles.content_card}>
                                    <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Whitepaper 1.0</p>
                                    <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Imperial Assets Wallet release</p>
                                    <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Imperial Assets Platform Development</p>
                                    <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Private Sale </p>
                                </div>
                            </div>
                            <time>2023 4Q</time>
                        </li> */}
                        {/* <li className={styles.c_timeline__item}>
                            <div className={styles.c_timeline__content}>
                                <div className={styles.content_card}>
                                    <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Whitepaper 1.0</p>
                                    <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Imperial Assets Wallet release</p>
                                    <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Imperial Assets Platform Development</p>
                                    <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Private Sale </p>
                                </div>
                            </div>
                            <time>10:03</time>
                        </li> */}
                        {/* <li className={styles.c_timeline__item}>
                            <div className={styles.c_timeline__content}>
                                <div className={styles.content_card}>
                                    <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Whitepaper 1.0</p>
                                    <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Imperial Assets Wallet release</p>
                                    <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Imperial Assets Platform Development</p>
                                    <p className={styles.c_timeline__desc}><Image src={Arrow} alt='Arrow' className={styles.arrowImg} /> Private Sale </p>
                                </div>
                            </div>
                            <time>10:03</time>
                        </li> */}
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default RoadMap
