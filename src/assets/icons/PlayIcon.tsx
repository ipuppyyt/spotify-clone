import React from 'react';

type PlayIconProps = {
    width?: number;
    height?: number;
    color?: string;
};

const PlayIcon = (props: PlayIconProps) => {
    return (
        <svg width={props.width} height={props.height} viewBox="-3 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Icon-Set-Filled" transform="translate(-419.000000, -571.000000)" fill="#000000">
                    <path d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554" id="play">
                    </path>
                </g>
            </g>
        </svg>
    )
}

export default PlayIcon