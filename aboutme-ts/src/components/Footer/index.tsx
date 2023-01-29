import * as React from 'react';
import './style.css'
import SocialMedias from '../SocialMedias';



const Footer: React.FC = () =>  {
    return ( 
        <footer id='footer'>
            <div className='container'>
                <div className='footer'>
                    <h1 className='mb-5 font-bold text-xl'>Follow me</h1>
                    <SocialMedias position='flex' margin='0 10px'/>
                </div>
            </div>
        </footer>
     );
}

export default Footer;