import React from 'react'
import styles from './css/TokenIssuancePlan.module.scss'
import Image from 'next/image'
import TokenCard from '../../public/assets/Images/tokenIssuecard.png'
import ProjectAssets from '../../public/assets/Images/projetAsset.png'
import PieImg from '../../public/assets/Images/Piechart.png'
import PieImg1 from '../../public/assets/Images/pieBorder1.png'
import PieImg2 from '../../public/assets/Images/pieBorder2.png'
import PieImg3 from '../../public/assets/Images/pieBorder3.png'
import PieImg4 from '../../public/assets/Images/pieBorder4.png'
import PieImg5 from '../../public/assets/Images/pieBorder5.png'


const TokenIssuancePlan = () => {

    return (
        <section className={styles.TokenIssuancePlanSec}>
            <div className={styles.TokenIssuancePlanMain}>
                <div className={styles.TokenIssuancePlan}>
                    <div className={styles.TokenIssuancePlancard}>
                        <Image src={TokenCard} alt='TokenCard' width={510} />
                        <div className={styles.TokenIssuance}>
                            <div className={styles.TokenIssuanceCard}>
                                <Image src={ProjectAssets} alt='ProjectAssets' width={60} height={60} />
                                <h2 className={styles.ProjectAssetsText}>Project Name Imperial Assets</h2>
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
                {/* <div className={styles.TokenIssuancePlanChart}>
                    <div>
                        <Image src={PieImg} alt='PieImg' />
                    </div>
                    <div>
                        <div className={styles.arrow_to_discription}>
                            <div className={styles.discription_sub_div1}>
                                <span className={styles.piecircle}>
                                    <Image src={PieImg1} alt="" className={styles.pieBorder1} />
                                        <p className={styles.Governance}>
                                            <p className={styles.p}>Governance (10%)</p>
                                            <span className={styles.span}>100,000,000 SOMI</span>
                                        </p> 
                                    </span>
                            </div>
                            <div className={styles.discription_sub_div2}>
                                <span className={styles.piecircle}><Image src={PieImg2} alt="" className={styles.pieBorder1} /></span>
                            </div>
                            <div className={styles.discription_sub_div3}>
                                <span className={styles.piecircle}><Image src={PieImg3} alt="" className={styles.pieBorder1} /></span>
                            </div>
                            <div className={styles.discription_sub_div4}>
                                <span className={styles.piecircle}><Image src={PieImg4} alt="" className={styles.pieBorder1} /></span>
                            </div>
                            <div className={styles.discription_sub_div5}>
                                <span className={styles.piecircle}><Image src={PieImg5} alt="" className={styles.pieBorder1} /></span>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className={styles.TokenIssuancePlanChart}>
                    <div>
                        <Image src={PieImg} alt='PieImg' />
                    </div>
                    <div>
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
                </div>
            </div>
        </section>
    )
}


export default TokenIssuancePlan
