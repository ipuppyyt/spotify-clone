import React from 'react'
import { PauseIcon, PlayIcon } from '../assets/icons'

const SideIconCard = () => {
    const [isPlaying, setIsPlaying] = React.useState(false)
    return (
        <div className='bg-neutral-500 bg-opacity-50 hover:bg-opacity-70 min-w-64 w-fit flex items-center justify-between gap-2 rounded-md pr-2'>
            <div className='flex items-center gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/3844/3844724.png" className='h-10' alt="" />
                <h2 className='text-white font-gotham-bold text-sm'>Title</h2>
            </div>
            <div>
                <div className='bg-green-500 hover:scale-105 p-2 rounded-full hover:shadow-xl hover:shadow-black'>
                    {isPlaying ?
                        <PlayIcon height={14} width={14} />
                        :
                        <PauseIcon height={14} width={14} />
                    }
                </div>
            </div>
        </div>
    )
}

export default SideIconCard