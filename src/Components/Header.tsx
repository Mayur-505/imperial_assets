"use client"

import React, { useState } from 'react'
import Logo from '../../public/assets/Images/logo.svg'
import LogoMobile from '../../public/assets/Images/logomobile.svg'
import Menu from '../../public/assets/Images/menu.png'
import styles from './css/header.module.scss'
import Image from 'next/image'
import Drawer from '@mui/material/Drawer';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.header}>
            <Drawer
            anchor={"right"}
            open={open}
            onClose={() => setOpen(false)}
          >
            <div className={styles.mobileMenu}>
                <a onClick={() => setOpen(false)} className={styles.active} href="#home">About us</a>
                <a onClick={() => setOpen(false)} href="#service">Service</a>
                <a onClick={() => setOpen(false)} href="#plan">Plan</a>
                <a onClick={() => setOpen(false)} href="#token">Token</a>
                <a onClick={() => setOpen(false)} href="#roadmap">Roadmap</a>
            </div>
          </Drawer>
            <Image src={Logo} alt="Logo" className={styles.logo}/>
            <Image src={LogoMobile} alt="Logo" className={styles.logoMobile}  />
            <div className={styles.headerRight}>
                <a className={styles.active} href="#home">About us</a>
                <a href="#service">Service</a>
                <a href="#plan">Plan</a>
                <a href="#token">Token</a>
                <a href="#roadmap">Roadmap</a>
            </div>
            <div></div>
            <Image src={Menu} alt="Menu" className={styles.mobilemenu} onClick={() => setOpen(true)} />
        </div>
    )
}

export default Header
