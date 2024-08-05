import React from 'react'

type HomeIconProps = {
    height: number;
    width: number;
    color: string;
}

const HomeIcon = (props: HomeIconProps) => {
    return (
        <svg fill={props.color} width={props.width} height={props.height} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <polygon fillRule="evenodd" points="192 0 0 153.6 0 384 149.333 384 149.333 256 234.667 256 234.667 384 384 384 384 153.6" transform="translate(64 64)" />
        </svg>
    )
}

export default HomeIcon