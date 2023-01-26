import * as React from 'react';
import img1 from '../../assets/Images/comment.png'
import img2 from '../../assets/Images/homeimg.png'
import { IComment } from '../types';
import CommentsItem from '../CommentsItem';
const Comments = () => {
    const [comments, setComments] = React.useState<IComment[]>([
        {
            id: 0,
            image: img1,
            comment: 'Izat is a profesional worker who always gives resuslts that are beyond our expectacions, thanks for your services',
            name: 'Jasmin',
            job: 'Businessman',
        },
        // {
        //     id: 1,
        //     image: img2,
        //     comment: 'Izat is a profesional worker who always gives resuslts that are beyond our expectacions, thanks for your services',
        //     name: 'Jack',
        //     job: 'Businessman',
        // }
    ])



    return (
        <section id='comments'>
            <div className='container'>
                <div className='comments '>
                    {
                        comments.map(comment => <CommentsItem key={comment.id} comment={comment}/>)
                    }
                </div>
            </div>
        </section>
    );
}

export default Comments;