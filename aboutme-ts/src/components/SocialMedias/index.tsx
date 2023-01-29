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
                <Link  style={{margin: margin}} to='/'>
                    <img className='w-8' src={fb} alt="" />
                </Link>
                <Link style={{margin: margin}}  to='/'>
                    <img  className='w-8'  src={gmail} alt="" />
                </Link>
                <Link  style={{margin: margin}} to='/'>
                    <img  className='w-8'  src={instagram} alt="" />
                </Link>
                <Link  style={{margin: margin}} to='/'>
                    <img  className='w-8'  src={linkedin} alt="" />
                </Link>
                <Link style={{margin: margin}}  to='/'>
                    <img  className='w-8'  src={slack} alt="" />
                </Link>
            </nav>
    );
}

export default SocialMedias;