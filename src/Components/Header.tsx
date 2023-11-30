import React from 'react'
import Logo from '../../public/assets/Images/logo.png'
import LogoMobile from '../../public/assets/Images/logomobile.png'
import Menu from '../../public/assets/Images/menu.png'
import styles from './css/header.module.scss'
import Image from 'next/image'

const Header = () => {
    return (
        <div className={styles.header}>
            <Image src={Logo} alt="Logo" className={styles.logo}/>
            <Image src={LogoMobile} alt="Logo" className={styles.logoMobile}/>
            <div className={styles.headerRight}>
                <a className={styles.active} href="#home">About us</a>
                <a href="#contact">Service</a>
                <a href="#about">Plan</a>
                <a href="#about">Token</a>
                <a href="#about">Roadmap</a>
            </div>
            <div></div>
            <Image src={Menu} alt="Menu" className={styles.mobilemenu}/>
        </div>
    )
}

export default Header
