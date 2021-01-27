import React from 'react'

export default function AvatarSection({url, name}){
    return (
        <div className='vertical-center'>
            <div className="vertical-center right-side-divider">
                <div className="avatar-container">
                    <img 
                        src={url}
                        alt={`Avatar of ${name}`}
                        className="avatar"
                    />
                </div>
            </div>
        </div>
    )
}