import * as React from 'react';
import { Link } from 'react-router-dom';
import fb from '../../assets/Icons/icon-Union.svg'
import gmail from '../../assets/Icons/icon-gmail.svg'
import instagram from '../../assets/Icons/icon-instagram.svg'
import linkedin from '../../assets/Icons/icon-linkedin.svg'
import slack from '../../assets/Icons/icon-slack.svg'


interface ISocialMediaProps{
    position: string,
    margin: string
}



const SocialMedias: React.FC<ISocialMediaProps>= ({position, margin}) => {
    return (
            <nav className={position + ' social_items'}>
                <a target='_blank' style={{margin: margin}} href='/https://twitter.com/izat_it'>
                    <img className='w-8' src={fb} alt="" />
                </a>
                <a target='_blank' style={{margin: margin}}  href='https://mail.google.com/mail/u/0/#inbox?compose=sJwlqXSnzXdFvzvzvJbXJNSHBXPWTFLrdWSXtQXZZvFSnwxGBnvFvCWKhwqDpzjlnXHfvLQNcHSFnnSswRZqfmmTPSpkHhhdBfgpczNqFKbDxFCjVbdWfjFPDLcLBlGTKpqqpGMkxmGdrMzBmFWpbjcblTNFGWdLQ'>
                    <img  className='w-8'  src={gmail} alt="" />
                </a>
                <a  target='_blank' style={{margin: margin}} href='https://www.instagram.com/izat.it/'>
                    <img  className='w-8'  src={instagram} alt="" />
                </a>
                <a  target='_blank' style={{margin: margin}} href='https://www.linkedin.com/in/izat-tilekovich-a1592a24a'>
                    <img  className='w-8'  src={linkedin} alt="" />
                </a>
                <a target='_blank' style={{margin: margin}} href='https://t.me/pleceofme'>
                    <img  className='w-8'  src={slack} alt="" />
                </a>
            </nav>
    );
}

export default SocialMedias;