import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaOdnoklassniki,
    FaTiktok,
    FaVk,
    FaYoutube
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconsLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Kirill pipl</SocialLogo>
                        <SocialIcons>
                            <SocialIconsLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink
                                href="/"
                                target="_blank"
                                aria-label="Instagram"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink
                                href="/"
                                target="_blank"
                                aria-label="YouTube"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink
                                href="/"
                                target="_blank"
                                aria-label="VK"
                                rel="noopener noreferrer"
                            >
                                <FaVk />
                            </SocialIconsLink>
                            <SocialIconsLink
                                href="/"
                                target="_blank"
                                aria-label="OK"
                                rel="noopener noreferrer"
                            >
                                <FaOdnoklassniki />
                            </SocialIconsLink>
                            <SocialIconsLink
                                href="/"
                                target="_blank"
                                aria-label="TikTok"
                                rel="noopener noreferrer"
                            >
                                <FaTiktok />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
