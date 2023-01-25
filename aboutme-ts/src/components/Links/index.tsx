import * as React from 'react';
import { Link } from 'react-router-dom';

const Links: React.FC = () => {
    return (
        <section id='links'>
            <div className='links_effect'>
            </div>
            <div className='container'>
                <div className='links flex justify-around mt-12'>
                    <div>
                        <Link className='links_item' to='/'>UPWORK</Link>
                    </div>
                    <div>
                        <Link className='links_item' to='/'>LinkedIn</Link>

                    </div>
                    <div>
                        <Link className='links_item' to='/'>Indeed</Link>

                    </div>
                    <div>
                        <Link className='links_item' to='/'>Instagram</Link>

                    </div>
                </div>
            </div>


        </section>
    );
}

export default Links;