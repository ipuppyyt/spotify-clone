import React from 'react';
import { FavouriteIcon } from '../assets/icons';

const RightSidebar = () => {
    return (
        <section className='w-full sm:w-[20%] bg-black p-2'>
            <div className='px-1 bg-[#121212] h-full flex flex-col rounded-lg'>
                <div className='rounded-lg py-1'>
                    <img
                        src="https://pbs.twimg.com/media/F9YxgXBXoAA3mPu.jpg"
                        className='rounded-lg w-full sm:w-auto'
                        alt="Squid Game"
                    />
                    <div className='mt-1 px-[5px] flex justify-between items-center'>
                        <div className='cursor-pointer'>
                            <h1 className='text-white font-gotham-bold text-lg hover:underline'>Squid Game</h1>
                            <p className='text-white font-gotham-light text-sm hover:underline'>Netflix</p>
                        </div>
                        <div className='cursor-pointer'>
                            <FavouriteIcon height={20} width={20} color='#fff' />
                        </div>
                    </div>
                </div>

                <div className='px-[5px] mt-[3vh]'>
                    <div>
                        <div className='rounded-lg'>
                            <img
                                src="https://thumbs.wbm.im/pw/small/6dc1cb1116b972bb2405441d4d590cd2.jpg"
                                className='rounded-t-lg w-full sm:w-auto'
                                alt="Kuttanpilla"
                            />
                            <div className='mt-1 px-[5px] flex justify-between items-end'>
                                <div>
                                    <h1 className='text-white font-gotham-bold text-sm cursor-pointer hover:underline'>Kuttanpilla</h1>
                                    <p className='text-white font-gotham-light text-sm'>453452345 streams</p>
                                </div>
                                <div className='cursor-pointer'>
                                    <button className='text-xs border rounded-full px-3 py-1'>Follow</button>
                                </div>
                            </div>
                            <div className='mt-3 px-[5px] text-xs line-clamp-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente ab alias, omnis quam quas fugiat nihil amet ea, ipsam quo veniam dicta iusto. Quidem quas nobis necessitatibus distinctio sapiente.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RightSidebar;