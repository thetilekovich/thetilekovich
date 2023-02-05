import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Links: React.FC = () => {

    return (
        <section id='links'>
            <div className='links_effect'>
            </div>
            <div className='container'>
                <div className='links flex justify-around mt-12'>
                    <div>
                        <a className='links_item' href='https://twitter.com/izat_it'>Twitter</a>
                    </div>
                    <div>
                        <a className='links_item' href='https://www.linkedin.com/in/izat-tilekovich-a1592a24a'>LinkedIn</a>
                    </div>
                    <div>
                        <a className='links_item' href='https://mail.google.com/mail/u/1/#inbox?compose=CllgCJvkZCVrVzwHsnsTdCZpqTrZgTwjMrHjSSgNWJvjDcTJlljDpVCjClDDNqWddhKrFQshZSq'>Gmail</a>
                    </div>
                    <div>
                        <a className='links_item' href='https://github.com/thetilekovich'>GitHub</a>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Links;