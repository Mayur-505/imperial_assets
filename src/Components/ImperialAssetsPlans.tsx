import React from 'react'
import styles from './css/ImperialAssetsPlans.module.scss'
import ImperialImg from '../../public/assets/Images/imperialplateform.png'
import SOMIImg from '../../public/assets/Images/Subscription.png'
import CraftingImg from '../../public/assets/Images/Crafting.png'
import SmartContractImg from '../../public/assets/Images/SmartContract.png'
import MarketAccessImg from '../../public/assets/Images/MarketAccess.png'
import CommunityBuildingImg from '../../public/assets/Images/CommunityBuilding.png'
import Image from 'next/image'

const ImperialAssetsPlans = () => {
    return (
        <section className={styles.ImperialAssetsPlansSec}>
            <div className={styles.ImperialAssetsPlansMain}>
                <div className={styles.ImperialAssetsPlansTextInner}>
                    <h3 className={styles.ImperialAssetsPlansText}>Imperial Assets Plans</h3>
                    <p className={styles.ImperialAssetsPlansSubText}>Imperial Assets anticipates outlinig and executing the following developmental plans for its services in each field.</p>
                </div>
                <div className={styles.ImperialAssetsPlansInner}>
                    <div className={styles.ImperialAssetsPlansCard}>
                        <Image src={ImperialImg} alt="ImperialImg" width={200} height={150} className={styles.Img}/>
                        <div className={styles.CardInner}>
                            <h3 className={styles.CardText}>Imperial Assets Platform</h3>
                            <p className={styles.CardSubText}>Development of property subscription services aimed at offering accessible opportunities for individuals to easily own property.</p>
                        </div>
                    </div>
                    <div className={styles.ImperialAssetsPlansCard}>
                        <Image src={SOMIImg} alt="SOMIImg" width={200} height={150} className={styles.Img}/>
                        <div className={styles.CardInner}>
                            <h3 className={styles.CardText}>Subscription with SOMI</h3>
                            <p className={styles.CardSubText}>The distinctive feature within the Imperial Assets STO Platform enables SOMI token holders to actively engage in real estate subscriptions. This feature is designed to empower investors by combining the benefits of real estate investments with the flexibility afforded by blockchain technology.</p>
                        </div>
                    </div>
                    <div className={styles.ImperialAssetsPlansCard}>
                        <Image src={CraftingImg} alt="CraftingImg" width={200} height={150} className={styles.Img}/>
                        <div className={styles.CardInner}>
                            <h3 className={styles.CardText}>Crafting Imperial Portfolios</h3>
                            <p className={styles.CardSubText}>Curate a diverse portfolio encompassing residential to commercial properties. Establish a transparent tokenization process, clearly defining how each property will be represented as a security token on the platform</p>
                        </div>
                    </div>
                    <div className={styles.ImperialAssetsPlansCard}>
                        <Image src={SmartContractImg} alt="SmartContractImg" width={200} height={150} className={styles.Img}/>
                        <div className={styles.CardInner}>
                            <h3 className={styles.CardText}>Smart Contract Implementation</h3>
                            <p className={styles.CardSubText}>Integrate smart contract technology to facilitate secure and automated transactions. Clearly articulate the ways in which smart contracts enhance transparency, minimize transacation friction, and provide investors with a high level of security. Implement through testing and audits to ensure the robust reliability of the smart contract system.</p>
                        </div>
                    </div>
                    <div className={styles.ImperialAssetsPlansCard}>
                        <Image src={MarketAccessImg} alt="MarketAccessImg" width={200} height={150} className={styles.Img}/>
                        <div className={styles.CardInner}>
                            <h3 className={styles.CardText}>Market Access and Trading</h3>
                            <p className={styles.CardSubText}>Unveil the Imperial Exchange, the platform's dedicated marketplace for buying, selling, and trading real estate-backed security tokens. Offer users with a user-friendly interface, real-time market data, and liquidity options. Implement robust security measures to protect investors' assets and transactions.</p>
                        </div>
                    </div>
                    <div className={styles.ImperialAssetsPlansCard}>
                        <Image src={CommunityBuildingImg} alt="CommunityBuildingImg" width={200} height={150} className={styles.Img}/>
                        <div className={styles.CardInner}>
                            <h3 className={styles.CardText}>Community Building and Expansion</h3>
                            <p className={styles.CardSubText}>Establish communication channels such as forums, and newsletters to foster a sense of community among investors. Organize virtual and in-person events, including webinars, meetups, and conferences, to facilitate networking and knowledge sharing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImperialAssetsPlans
