import * as React from 'react';
import { FC, useRef } from 'react';
import { IComment } from '../types';
import arrow from '../../assets/Icons/vuesax-linear-vuesax-linear-arrow-right.svg'

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
                    <div className='comments_item_bottom_btns'>
                        <button>
                            <img className='comments_arrow_prev' src={arrow} alt="" />
                        </button>
                        <button>
                            <img className='comments_arrow_next' src={arrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CommentsItem;