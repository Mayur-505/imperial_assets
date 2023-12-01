import { ReactNode } from "react";
import styles from './css/footer.module.scss'
import FooterLogo from '../../public/assets/Images/footerLogo.svg'
import Image from "next/image";
import TeleGramWhite from '../../public/assets/Images/telegramWhite.svg'
import Email from '../../public/assets/Images/email.svg'
import TeleGramWBlack from '../../public/assets/Images/telegramBlack.svg'
import Twitter from '../../public/assets/Images/Twitter.svg'

const Footer = () => {
    return (
        <>
            <footer className={styles.FooterSec}>
                <div className={styles.FooterBorder}>
                    <div className={styles.footerMain}>
                        <div className={styles.FooterImg}>
                            <a href="/#">
                                <Image
                                    src={FooterLogo}
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <LinkGroup header={'QUICK LINKS'}>
                            <NavLink link="/#" label={'About us'} />
                            <NavLink link="/#" label={'Service'} />
                            <NavLink link="/#" label={'Plan'} />
                            <NavLink link="/#" label={'Token'} />
                            <NavLink link="/#" label={'Roadmap'} />
                        </LinkGroup>
                        <LinkGroup header={'CONTACT US'}>
                            <NavLink link="/#" label={'@imperialsto'} img={TeleGramWhite} />
                            <NavLink link="/#" label={'Help@imperialsto.com'} img={Email} />
                        </LinkGroup>
                        <LinkGroup header={'CONNECT WITH US'}>
                            <NavLink link="/#" img={TeleGramWBlack} img1={Twitter}/>
                            {/* <NavLink link="/#" img={TeleGramWBlack} /> */}
                        </LinkGroup>
                    </div>
                </div>
                <div className={styles.FooterImperial}>
                    <span className="text-lg font-normal leading-[26px] text-[#ffffff66]">
                        © 2023 Imperial Assets | All Rights Reserved
                    </span>
                </div>
            </footer>
        </>
    );
};
export default Footer;
const LinkGroup = ({
    children,
    header,
}: {
    children: ReactNode;
    header: string;
}) => {
    return (
        <>
            <div className={styles.FooterHeaderTextInner}>
                <h4 className={styles.FooterheaderText}>
                    {header}
                </h4>
                <ul className={styles.FooterSubtext}>{children}</ul>
            </div>
        </>
    );
};
const NavLink = ({ link,img, label,img1 }: { link: string; label?: string,img?:any ,img1?:any}) => {
    return (
        <li>
            <a
                href={link}
                className={styles.NavLinkText}
            >
                <Image src={img} alt={img} className={`${img && styles.NavLinkImg}`}/> <Image src={img1} alt={img1} className={`${img1 && styles.NavLinkImg}`}/> {label}
            </a>
        </li>
    );
};