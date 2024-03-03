
"use client";

import { useState } from "react";

type lessonProps = {
    title: string;
    shortSummary?: string;
}

type LikeState = 'unset' | 'Liked' | 'Disliked';
export function Lesson({ title, shortSummary }: lessonProps) {
    const [likeState, setlikeState] = useState<LikeState>('unset')
    const setLike = () => setlikeState('Liked');
    return (
        <details> 
            <summary>
                <h2>{title}</h2>
            </summary>
               
            <p>{ shortSummary}</p>
        </details>
    )
    
    
    
}