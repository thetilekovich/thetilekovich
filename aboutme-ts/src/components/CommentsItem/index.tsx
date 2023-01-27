import * as React from 'react';
import { FC } from 'react';
import { IComment } from '../types';

interface ICommentProps {
    comment: IComment
}




const CommentsItem: FC<ICommentProps> = ({ comment }) => {
    


    return (
        <div className='comments_item flex'>
            <img className='comments_item_img' src={comment.image} alt="" />
            <div className='comments_item_text_container'>
                <p>{comment.comment}</p>
                <div className='comments_item_bottom flex justify-between'>
                    <div className='comments_item_bottom_author'>
                        <h2>{comment.name}</h2>
                        <h3>{comment.job}</h3>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default CommentsItem;