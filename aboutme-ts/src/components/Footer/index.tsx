import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import fb from '../../assets/Icons/icon-Union.svg'
import gmail from '../../assets/Icons/icon-gmail.svg'
import instagram from '../../assets/Icons/icon-instagram.svg'
import linkedin from '../../assets/Icons/icon-linkedin.svg'
import slack from '../../assets/Icons/icon-slack.svg'


const Footer: React.FC = () =>  {
    return ( 
        <footer id='footer'>
            <div className='container'>
                <div className='footer'>
                    <h1 className='mb-5 font-bold text-xl'>Follow me</h1>
                    <nav className='flex'>
                        <Link className='footer_link' to='/'>
                            <img src={fb} alt="" />
                        </Link>
                        <Link className='footer_link'  to='/'>
                            <img src={gmail} alt="" />
                        </Link>
                        <Link className='footer_link'  to='/'>
                            <img src={instagram} alt="" />
                        </Link>
                        <Link className='footer_link'  to='/'>
                            <img src={linkedin} alt="" />
                        </Link>
                        <Link className='footer_link'  to='/'>
                            <img src={slack} alt="" />
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
     );
}

export default Footer;