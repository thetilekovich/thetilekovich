import * as React from 'react';
import { PREV_SLIDE, NEXT_SLIDE } from '../redux/actions';
import arrow from '../../assets/Icons/vuesax-linear-vuesax-linear-arrow-right.svg'
import { IComment } from '../types';
import CommentsItem from '../CommentsItem';
import { useSelector, useDispatch } from 'react-redux';


const Comments: React.FC = () => {
    const dispatch = useDispatch()
    const { count } = useSelector((s: { slide: { count: number } }) => s.slide)
    const { comments } = useSelector((s: { slide: { comments: IComment[] } }) => s.slide)


    return (
        <section id='comments'>
            <div className='container'>
                <div className='comments '>
                    {
                        <CommentsItem key={comments[count].id} comment={comments[count]} />
                    }
                    <div className='comments_btns'>
                        <button
                            onClick={() => dispatch({ type: PREV_SLIDE })}
                        >
                            <img
                                className={count === 0 ? 'comments_btns_animation comments_arrow_prev' : 'comments_arrow_prev'} src={arrow} alt="" />
                        </button>
                        <button
                            onClick={() => dispatch({ type: NEXT_SLIDE })}
                        >
                            <img
                                className={count + 1 == comments.length ? 'comments_btns_animation comments_arrow_next' : 'comments_arrow_next'} src={arrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comments;