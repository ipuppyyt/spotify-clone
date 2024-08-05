// components/MainContent.jsx
import React, { useEffect, useState } from 'react';
import { Checkbox } from '../ui';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import { useAuth0 } from '@auth0/auth0-react';

function MainContent() {
    const location = useLocation(); // Get the current location
    const [selectedFacet, setSelectedFacet] = useState('all');

    const { user } = useAuth0();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const facet = query.get('facet') || 'all'; // Default to 'all' if no facet is found
        setSelectedFacet(facet);
    }, [location.search]); // Depend on location.search to trigger on URL changes

    const isChecked = (facet) => selectedFacet === facet;

    return (
        <section className='bg-[#121212] w-full my-2 rounded-lg px-5'>

            <Header />

            <div className='flex flex-row gap-1'>
                <Link to='/'>
                    <Checkbox checked={isChecked('all')} id='all' label='All' />
                </Link>
                <Link to='/home?facet=music-chip'>
                    <Checkbox checked={isChecked('music-chip')} id='music' label='Music' />
                </Link>
                <Link to='/home?facet=podcasts-chip'>
                    <Checkbox checked={isChecked('podcasts-chip')} id='podcasts' label='Podcasts' />
                </Link>
            </div>

            <span>

            </span>
        </section>
    );
}

export default MainContent;