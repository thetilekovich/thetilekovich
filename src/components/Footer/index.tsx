import * as React from 'react';
import './style.css'
import SocialMedias from '../SocialMedias';
import { useSelector } from 'react-redux';


const Footer: React.FC = () =>  {
    const { language } = useSelector((s: { language: { language: string } }) => s.language)

    return ( 
        <footer id='footer'>
            <div className='container'>
                <div className='footer'>
                    <h1 className='mb-5 font-bold text-xl'>{language === 'ru' ? 'Подпишись' : 'Follow me'}</h1>
                    <SocialMedias position='flex' margin='0 10px'/>
                </div>
            </div>
        </footer>
     );
}

export default Footer;