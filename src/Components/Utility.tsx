"use client";
import React from "react";
import Image from "next/image";
import styles from "./css/Utility.module.scss";
import SomiCircle from "../../public/assets/Images/somicircle.svg";
import MoneySend from "../../public/assets/Images/money-send.svg";
import VotingImg from "../../public/assets/Images/tick-square.svg";
import DepositImg from "../../public/assets/Images/wallet-add.svg";
import RealImg from "../../public/assets/Images/dollar-circle.svg";
import DividendImg from "../../public/assets/Images/percentage-square.svg";
import DividendBorder from "../../public/assets/Images/dividentBorder.svg";
import VotingBorder from "../../public/assets/Images/votingBorder.svg";
import RealBorder from "../../public/assets/Images/realBorder.svg";
import DepositBorder from "../../public/assets/Images/depositBorder.svg";
import InvesmentBorder from "../../public/assets/Images/invesmentBorder.svg";
import StarightBorder from "../../public/assets/Images/starightBorder.svg";
import Slider from "react-slick";

const Utility = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={styles.UtilitySec} id="service">
      <div className={styles.UtilityMain}>
        <div className={styles.UtilityCases}>Utility and Use Cases</div>

        <div className={styles.UtilityUseCases}>
          <div className={styles.UtilityUseCasesOuter}>
            <div className={styles.UtilitySomiImg}>
              <Image src={SomiCircle} alt="SomiCircle" />
            </div>
            <div
              className={`${styles.UtilityUseCasesCard} ${styles.InvestmentCard}`}
            >
              <div className={styles.UtilityUseCasesSubCard}>
                <Image src={MoneySend} alt="MoneySend" />
                <div className={styles.UtilityUseCasesCardInner}>
                  <h3 className={styles.UtilityUseCasesCardText}>
                    Investment Reservation{" "}
                  </h3>
                  <div className={styles.UtilityUseCasesCardSubText}>
                    Utilize SOMI tokens to secure an investment spot in property
                    projects overseen by Korea Sotheby’s International Realty
                  </div>
                </div>
                <div className={styles.InvesmentBorder}>
                  <Image src={InvesmentBorder} alt="InvesmentBorder" />
                </div>
              </div>
            </div>
            <div
              className={`${styles.UtilityUseCasesCard} ${styles.VotingCard}`}
            >
              <div className={styles.UtilityUseCasesSubCard}>
                <Image src={VotingImg} alt="VotingImg" />
                <div className={styles.UtilityUseCasesCardInner}>
                  <h3 className={styles.UtilityUseCasesCardText}>
                    Voting Rights{" "}
                  </h3>
                  <div className={styles.UtilityUseCasesCardSubText}>
                    The “Voting Rights” bestowed upon SOMI token holders
                    constitute a fundamental aspect of the token’s utility
                  </div>
                </div>
                <div className={styles.VotingBorder}>
                  <Image src={VotingBorder} alt="VotingBorder" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.UtilityUseCasesOuter}>
            <div
              className={`${styles.UtilityUseCasesCard} ${styles.DepositCard}`}
            >
              <div className={styles.UtilityUseCasesSubCard}>
                <Image src={DepositImg} alt="DepositImg" />
                <div className={styles.UtilityUseCasesCardInner}>
                  <h3 className={styles.UtilityUseCasesCardText}>
                    Deposit Requirement
                  </h3>
                  <div className={styles.UtilityUseCasesCardSubText}>
                    Within the SOMI ecosystem, the “Deposit Requirement” plays a
                    crucial role, functioning as both a commitment mechanism and
                    a safeguard against speculative investments
                  </div>
                </div>
                <div className={styles.DepositBorder}>
                  <Image src={DepositBorder} alt="DepositBorder" />
                </div>
              </div>
            </div>
            <div className={`${styles.UtilityUseCasesCard} ${styles.RealCard}`}>
              <div className={styles.UtilityUseCasesSubCard}>
                <Image src={RealImg} alt="RealImg" />
                <div className={styles.UtilityUseCasesCardInner}>
                  <h3 className={styles.UtilityUseCasesCardText}>
                    Real Investment{" "}
                  </h3>
                  <div className={styles.UtilityUseCasesCardSubText}>
                    The “Real Investment” stage marks the realization of the
                    commitment made through SOMI toekns into tangible financial
                    participation. In this phase, the investment process
                    transitions from the use of SOMI tokens to major
                    cryptocurrencies such as BNB(Binance coin)
                  </div>
                  <div className={styles.RealBorder}>
                    <Image src={RealBorder} alt="RealBorder" />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.UtilityUseCasesCard} ${styles.Dividend}`}>
              <div className={styles.UtilityUseCasesSubCard}>
                <Image src={DividendImg} alt="DividendImg" />
                <div className={styles.UtilityUseCasesCardInner}>
                  <h3 className={styles.UtilityUseCasesCardText}>
                    Dividend Distribution
                  </h3>
                  <div className={styles.UtilityUseCasesCardSubText}>
                    The “Dividend Distribution” mechanism stands out as a
                    pivotal feature, rewarding property holders based on their
                    investment and active participation{" "}
                  </div>
                </div>
                <div className={styles.DividendBorder}>
                  <Image src={DividendBorder} alt="DividendBorder" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.MobileView}>
          <div className={styles.UtilitySomiImg}>
            <Image src={SomiCircle} alt="SomiCircle" />
          </div>
          <div className={styles.StarightBorder}>
            <Image src={StarightBorder} alt="StarightBorder" />
          </div>

          <Slider {...settings} className={styles.SlickSlider}>
            <div className={styles.sliderCard}>
              <div className={`${styles.UtilityUseCasesCard}`}>
                <div className={styles.MobileImg}>
                  <Image src={MoneySend} alt="MoneySend" />
                </div>
                <div className={styles.UtilityUseCasesCardInner}>
                  <h3 className={styles.UtilityUseCasesCardText}>
                    Investment Reservation
                  </h3>
                  <div className={styles.UtilityUseCasesCardSubText}>
                    Utilize SOMI tokens to secure an investment spot in property
                    projects overseen by Korea Sotheby’s International Realty
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sliderCard}>
              <div className={`${styles.UtilityUseCasesCard}`}>
                <div className={styles.MobileImg}>
                  <Image src={VotingImg} alt="VotingImg" />
                </div>
                <div className={styles.UtilityUseCasesCardInner}>
                  <h3 className={styles.UtilityUseCasesCardText}>
                    Voting Rights{" "}
                  </h3>
                  <div className={styles.UtilityUseCasesCardSubText}>
                    The “Voting Rights” bestowed upon SOMI token holders
                    constitute a fundamental aspect of the token’s utility
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sliderCard}>
              <div className={`${styles.UtilityUseCasesCard}`}>
                <div className={styles.MobileImg}>
                  <Image src={DepositImg} alt="DepositImg" />
                </div>
                <div className={styles.UtilityUseCasesCardInner}>
                  <h3 className={styles.UtilityUseCasesCardText}>
                    Deposit Requirement
                  </h3>
                  <div className={styles.UtilityUseCasesCardSubText}>
                    Within the SOMI ecosystem, the “Deposit Requirement” plays a
                    crucial role, functioning as both a commitment mechanism and a
                    safeguard against speculative investments
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sliderCard}>
              <div className={`${styles.UtilityUseCasesCard}`}>
                <div className={styles.MobileImg}>
                  <Image src={RealImg} alt="RealImg" />
                </div>
                <div className={styles.UtilityUseCasesCardInner}>
                  <h3 className={styles.UtilityUseCasesCardText}>
                    Real Investment{" "}
                  </h3>
                  <div className={styles.UtilityUseCasesCardSubText}>
                    The “Real Investment” stage marks the realization of the
                    commitment made through SOMI toekns into tangible financial
                    participation. In this phase, the investment process
                    transitions from the use of SOMI tokens to major
                    
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sliderCard}>
              <div className={`${styles.UtilityUseCasesCard}`}>
                <div className={styles.MobileImg}>
                  <Image src={DividendImg} alt="DividendImg" />
                </div>
                <div className={styles.UtilityUseCasesCardInner}>
                  <h3 className={styles.UtilityUseCasesCardText}>
                    Dividend Distribution
                  </h3>
                  <div className={styles.UtilityUseCasesCardSubText}>
                    The “Dividend Distribution” mechanism stands out as a pivotal
                    feature, rewarding property holders based on their investment
                    and active participation{" "}
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Utility;
