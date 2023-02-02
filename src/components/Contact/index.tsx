import * as React from 'react';
import img from '../../assets/Images/footer.png'
import { Link } from 'react-router-dom';
import arrow from '../../assets/Icons/vuesax-linear-vuesax-linear-arrow-right.svg'
import effectimg from '../../assets/Images/Effect.svg'
import { useSelector } from 'react-redux';
const Contact: React.FC = () => {
    const { language } = useSelector((s: { language: { language: string } }) => s.language)

    return ( 
        <section id='contact'>
            <img className='contact_effect_img' src={effectimg} alt="" />
            <div className='container'>
                <div className='contact flex items-center mb-12'>
                    <div className='contact_content'>
                        <p className='font-bold text-5xl mb-12'>{language === 'ru' ? 'Также хочешь' : 'Want to make '}<br />{language === 'ru' ? 'эффективный и крутой сайт?' : ' awesome and impactful Product?'}</p>
                        <Link className='inline-flex items-center text-yellow-400 border-b-2 border-yellow-400 py-2 px-2' to='/contacts'>{language === 'ru' ? 'Связаться' : 'Contact Us'}
                        <img className='mx-2 w-5' src={arrow} alt="" />
                        </Link>
                    </div>
                    <div className='w-1/2'>
                        <img className='rounded-lg w-full' src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;