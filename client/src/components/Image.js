import React from 'react'

export default function Image({ urls }) {
    console.log(urls)
    return (
        <div>
            {urls.map((e, i) => {
                return (
                    <img style={{ "width": "300px" }} src={e.url} alt="name" />
                )
            })}
        </div>
    )
}