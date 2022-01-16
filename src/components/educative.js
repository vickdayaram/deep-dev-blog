import React from 'react';

export const Educative = () => {

    const educativeLink = () => {
        const name = "educative.io";
        const href = "https://www.educative.io/learn";
        return <a href={href}>{name}</a>
    }
    return (
        <div>
            Shout out to {educativeLink()}, specifically their course Grokking 
            the coding interview: Pattern for coding questions. Their course has been tremendously helpful 
            in my development when tackling these questions. Highly recommend them if you are 
            looking to sharpen your skills.
        </div>
    )

}