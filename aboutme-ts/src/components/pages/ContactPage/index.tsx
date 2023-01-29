import * as React from 'react';
import './style.css'
import { useSelector } from 'react-redux';
const ContactPage: React.FC = () => {
    const { language } = useSelector((s: { language: { language: string } }) => s.language)

    return (
        <section id='contactpage'>
            <div className='container'>
                <div className='contactpage'>
                    <a target={'_blank'} href='https://mail.google.com/mail/u/0/#inbox?compose=sJwlqXSnzXdFvzvzvJbXJNSHBXPWTFLrdWSXtQXZZvFSnwxGBnvFvCWKhwqDpzjlnXHfvLQNcHSFnnSswRZqfmmTPSpkHhhdBfgpczNqFKbDxFCjVbdWfjFPDLcLBlGTKpqqpGMkxmGdrMzBmFWpbjcblTNFGWdLQ'>
                        {language === 'ru' ? 'Написать на почту' : 'WRITE TO EMAIL'}
                        </a>
                    
                </div>
            </div>
        </section>
    );
}

export default ContactPage;