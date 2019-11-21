import React from 'react'

export default function Placeholder(props) {
    const image=`${props.image}`
        return (
            <div className="card">
                <img src={image} alt="content image"/>
                <div>
                    <p>{props.title}</p>
                </div>
            </div>
    )
}