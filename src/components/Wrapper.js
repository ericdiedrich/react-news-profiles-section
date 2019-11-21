import React from 'react'

export default function Wrapper(props) {
        return (
            <div className="titleinside">
                <h1 className="titlemain">{props.maintitle}</h1>
                <hr></hr>
                <button>See All</button>
            </div>
    )
}