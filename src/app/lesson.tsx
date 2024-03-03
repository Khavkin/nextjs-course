
"use client";

import { useState } from "react";
import styles from './lesson.module.css'

type lessonProps = {
    title: string;
    shortSummary?: string;
}

type LikeState = 'unset' | 'Liked' | 'Disliked';
export function Lesson({ title, shortSummary }: lessonProps) {
    const [likeState, setlikeState] = useState<LikeState>('unset')
    const setLike = () => setlikeState('Liked');
    return (
       <>
                <h2 className={styles.header}>{title} <button type="button" onClick={setLike}>
          {likeState === 'unset' ? 'like' : likeState}
        </button></h2>
               
            <p>{ shortSummary}</p>
       </>
    )
    
    
    
}