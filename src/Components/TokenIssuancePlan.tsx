import React from 'react'
import styles from './css/TokenIssuancePlan.module.scss'
import Image from 'next/image'
import TokenCard from '../../public/assets/Images/tokenIssuecard.svg'
import MobileTokenCard from '../../public/assets/Images/mobiletokencard.svg'
import ProjectAssets from '../../public/assets/Images/projetAsset.svg'
import PieImg from '../../public/assets/Images/Piechart.svg'
import PieImg1 from '../../public/assets/Images/pieBorder1.png'
import PieImg2 from '../../public/assets/Images/pieBorder2.png'
import PieImg3 from '../../public/assets/Images/pieBorder3.png'
import PieImg4 from '../../public/assets/Images/pieBorder4.png'
import PieImg5 from '../../public/assets/Images/pieBorder5.png'
import BlueRec from '../../public/assets/Images/BlueRectangle.svg'
import PurpleRec from '../../public/assets/Images/PurpleRectangle.svg'
import SkyRec from '../../public/assets/Images/SkyRectangle.svg'
import SkyBlue from '../../public/assets/Images/skyBlueRec.svg'
import SkyPinkRec from '../../public/assets/Images/skyPink.svg'


const TokenIssuancePlan = () => {

    return (
        <section className={styles.TokenIssuancePlanSec}>
            <div className={styles.TokenIssuancePlanMain}>
                <div className={styles.TokenIssuancePlan}>
                    <div className={styles.TokenIssuancePlancard}>
                        <Image src={TokenCard} alt='TokenCard' width={510} className={styles.TokenCardImg} />
                        <div className={styles.TokenIssuance}>
                            <div className={styles.TokenIssuanceCard}>
                                <Image src={ProjectAssets} alt='ProjectAssets' width={60} height={60} />
                                <h2 className={styles.ProjectAssetsText}>Imperial Assets</h2>
                            </div>
                            <div className={styles.TokenIssuanceCard}>
                                <Image src={ProjectAssets} alt='ProjectAssets' width={60} height={60} />
                                <h2 className={styles.ProjectAssetsText}>SOMI</h2>
                            </div>
                            <div className={styles.TokenIssuanceBEPCard}>
                                <h2 className={styles.BepText}>BEP-20</h2>
                                <p className={styles.SpecificationText}>TOKEN Specification</p>
                            </div>
                            <div className={styles.TokenIssuanceBEPCard}>
                                <h2 className={styles.BepText}>1,000,000,000 SOMI</h2>
                                <p className={styles.SpecificationText}>Total CAP</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.MobileToken}>
                    <div className={styles.MobileTokenCardImg}>
                        <Image src={MobileTokenCard} alt='MobileTokenCard' className={styles.MobileTokenCard} />
                    </div>
                    <div className={styles.MobileCard}>
                        <div className={styles.mobilecardMain}>
                            <div className={styles.MobilecardInner}>
                                <Image src={ProjectAssets} alt='ProjectAssets' />
                                <h3 className={styles.text}>Imperial Assets</h3>
                            </div>
                        </div>
                        <div className={styles.mobilecardMain}>
                            <div className={styles.MobilecardInner}>
                                <Image src={ProjectAssets} alt='ProjectAssets' />
                                <h3 className={styles.text}>SOMI</h3>
                            </div>
                        </div>
                        <div className={`${styles.mobilecardMain} ${styles.Specification}`}>
                            <div className={styles.MobilecardInner}>
                                <h3 className={styles.mobileText}>BEP-20</h3>
                                <p className={styles.mobileSubText}>TOKEN Specification</p>
                            </div>
                        </div>
                        <div className={`${styles.mobilecardMain} ${styles.Specification}`}>
                            <div className={styles.MobilecardInner}>
                                <h3 className={styles.mobileText}>1,000,000,000 SOMI</h3>
                                <p className={styles.mobileSubText}>Total CAP</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.TokenIssuancePlanChart}>
                    <div className={styles.PieChartImg}>
                        <Image src={PieImg} alt='PieImg' />
                    </div>
                    <div className={styles.PieArrowMain}>
                        <div className={styles.arrow_to_discription}>
                            <div className={styles.discription_sub_div1}>
                                <div className={styles.piecircle}>
                                    <Image src={PieImg1} alt="" className={styles.pieBorder1} />
                                    <div className={`${styles.Governance1} ${styles.GovernanceColor}`}>
                                        <span className={styles.title}>Governance (10%)</span>
                                        <span className={styles.description}>100,000,000 SOMI</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.discription_sub_div2}>
                                <div className={styles.piecircle}>
                                    <Image src={PieImg2} alt="" className={styles.pieBorder2} />
                                    <div className={`${styles.Governance2} ${styles.GovernanceColor}`}>
                                        <span className={styles.title}>Team & Advisor (10%)</span>
                                        <span className={styles.description}>100,000,000 SOMI</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.discription_sub_div3}>
                                <div className={styles.piecircle}>
                                    <Image src={PieImg3} alt="" className={styles.pieBorder3} />
                                    <div className={`${styles.Governance3} ${styles.GovernanceColor}`}>
                                        <span className={styles.title}>Community & Partnership (20%)</span>
                                        <span className={styles.description}>200,000,000 SOMI</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.discription_sub_div4}>
                                <div className={styles.piecircle}>
                                    <Image src={PieImg4} alt="" className={styles.pieBorder4} />
                                    <div className={`${styles.Governance4} ${styles.GovernanceColor}`}>
                                        <span className={styles.title}>Reserve Fund (20%)</span>
                                        <span className={styles.description}>200,000,000 SOMI</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.discription_sub_div5}>
                                <div className={styles.piecircle}>
                                    <Image src={PieImg5} alt="" className={styles.pieBorder5} />
                                    <div className={`${styles.Governance5} ${styles.GovernanceColor}`}>
                                        <span className={styles.title}>Initial Token Sale (40%)</span>
                                        <span className={styles.description}>400,000,000 SOMI</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.PiechartMobileview}>
                        <div className={styles.PieChartTextMain}>
                            <Image src={BlueRec} alt='BlueRec'/>
                            <div className={styles.PieMainText}>
                                <p className={styles.text}>Initial Token Sale (40%)</p>
                                <div className={styles.subtext}>400,000,000 SOMI</div>
                            </div>
                        </div>
                        <div className={styles.PieChartTextMain}>
                            <Image src={PurpleRec} alt='PurpleRec'/>
                            <div className={styles.PieMainText}>
                                <p className={styles.text}>Reserve Fund (20%)</p>
                                <div className={styles.subtext}>200,000,000 SOMI</div>
                            </div>
                        </div>
                        <div className={styles.PieChartTextMain}>
                            <Image src={SkyRec} alt='SkyRec'/>
                            <div className={styles.PieMainText}>
                                <p className={styles.text}>Community & Partnership (20%)</p>
                                <div className={styles.subtext}>200,000,000 SOMI</div>
                            </div>
                        </div>
                        <div className={styles.PieChartTextMain}>
                            <Image src={SkyBlue} alt='SkyBlue'/>
                            <div className={styles.PieMainText}>
                                <p className={styles.text}>Team & Advisor (10%)</p>
                                <div className={styles.subtext}>100,000,000 SOMI</div>
                            </div>
                        </div>
                        <div className={styles.PieChartTextMain}>
                            <Image src={SkyPinkRec} alt='SkyPinkRec'/>
                            <div className={styles.PieMainText}>
                                <p className={styles.text}>Governance (10%)</p>
                                <div className={styles.subtext}>100,000,000 SOMI</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default TokenIssuancePlan
