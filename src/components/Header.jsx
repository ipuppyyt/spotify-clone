import React from 'react';
import { BackIcon, BellIcon, NewTabIcon } from '../assets/icons';
import { Avatar, Divider, Menu, Tooltip } from '@mui/material';
import { SearchBox } from '../ui';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Use useNavigate for navigation
    const [showSearch, setShowSearch] = React.useState(location.pathname === '/search');

    const { user, isAuthenticated, logout } = useAuth0();

    // Function to handle backward navigation
    const handleBack = () => {
        navigate(-1); // Go back one step in history
    };

    // Function to handle forward navigation
    const handleForward = () => {
        navigate(1); // Go forward one step in history
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const closeMenu = () => {
        setAnchorEl(null);
    };

    return (
        <div className='flex my-3 min-h-[6vh] items-center justify-between'>
            <div className='flex items-center justify-center space-x-2'>
                <Tooltip title='Go Back' placement='bottom'>
                    <button onClick={handleBack} className='bg-opacity-50 rounded-full p-[3px]' aria-label="Go Back">
                        <BackIcon width={20} height={20} color='#fff' />
                    </button>
                </Tooltip>
                <Tooltip title='Go Forward' placement='bottom'>
                    <button onClick={handleForward} className='bg-opacity-50 rounded-full p-[3px] rotate-180' aria-label="Go Forward">
                        <BackIcon width={20} height={20} color='#fff' />
                    </button>
                </Tooltip>

                {showSearch && <SearchBox />}
            </div>

            <div className='flex items-center gap-1'>
                <Tooltip title='What&apos;s New' placement='bottom'>
                    <Link to="/content-feed" className='bg-opacity-50 rounded-full p-[1px]'>
                        <BellIcon width={24} height={24} color='#fff' />
                    </Link>
                </Tooltip>
                {isAuthenticated && (<>
                    <Tooltip title={user.name} onClick={openMenu} placement='bottom'>
                        <Avatar sx={{ height: '24px', width: '24px' }} src={user.picture} alt={user.name} />
                    </Tooltip>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={closeMenu}
                        onClick={closeMenu}
                        sx={{
                            '& .MuiMenu-paper': {
                                backgroundColor: '#242424',
                                color: '#fff',
                                borderRadius: '3px',
                                marginTop: '8px',
                                width: '150px',
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <div className='p-1 font-gotham-bold text-xs'>
                            <a href='https://www.spotify.com/in-en/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account' target='_blank' className='flex items-center justify-between hover:bg-neutral-700 transition-all ease-in-out duration-150 py-2 w-full px-2'>
                                <span>Account</span>
                                <NewTabIcon width={20} height={20} color='#fff' />
                            </a>

                            <button className='flex items-center justify-between hover:bg-neutral-700 transition-all ease-in-out duration-150 py-2 w-full px-2' onClick={() => logout()}>
                                <span>Profile</span>
                            </button>

                            <button className='flex items-center justify-between hover:bg-neutral-700 transition-all ease-in-out duration-150 py-2 w-full px-2' onClick={() => logout()}>
                                <span>Settings</span>
                            </button>

                            <Divider sx={{ marginY: '5px', backgroundColor: '#8a8a8a' }} />

                            <button className='flex items-center justify-between hover:bg-neutral-700 transition-all ease-in-out duration-150 py-2 w-full px-2' onClick={() => logout(
                                { returnTo: window.location.origin }
                            )}>
                                <span>Log out</span>
                            </button>
                        </div>
                    </Menu>
                </>)}
            </div>
        </div>
    );
}

export default Header;