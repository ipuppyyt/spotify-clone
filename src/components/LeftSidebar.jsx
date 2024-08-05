import React from 'react';
import { HomeIcon, LibraryIcon, SearchIcon } from '../assets/icons';

function Sidebar() {
    return (
        <div className="bg-black text-white p-2 w-[20%] text-xs min-h-[100vh]">

            <div className='space-y-2 min-h-[97vh]'>

                <div className="flex flex-col space-y-2 items-center px-3 p-3 rounded-lg bg-[#121212]">
                    <div className='flex cursor-pointer w-full space-x-3 items-center font-gotham-bold py-2 px-2 rounded-lg hover:bg-neutral-950 transition-all ease-in-out duration-200'>
                        <HomeIcon height={18} width={18} color='#fff' />
                        <span>Home</span>
                    </div>
                    <div className='flex cursor-pointer w-full space-x-3 items-center font-gotham-bold py-2 px-2 rounded-lg hover:bg-neutral-950 transition-all ease-in-out duration-200'>
                        <SearchIcon height={18} width={18} color='#fff' />
                        <span>Search</span>
                    </div>
                </div>

                <div className='flex flex-col space-y-2 w-full   items-center px-3 p-3 rounded-lg bg-[#121212]'>
                    <div className='flex flex-row w-full px-2 space-x-3 cursor-default'>
                        <LibraryIcon height={18} width={18} color='#fff' />
                        <span className='font-gotham-bold'>Your Library</span>
                    </div>

                    <div className='w-full h-full'>
                        sasdas
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;