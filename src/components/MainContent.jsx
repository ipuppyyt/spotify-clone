// components/MainContent.jsx
import React from 'react';

function MainContent() {
    return (
        <div className="flex-grow bg-gray-800 text-white p-4">
            <h2 className="text-xl font-bold mb-4">Playlists</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600">
                    <img src="playlist-thumbnail.jpg" alt="Playlist Thumbnail" className="rounded-lg mb-2" />
                    <h3 className="font-bold">Playlist Name</h3>
                    <p className="text-gray-400">Artist Name</p>
                </div>
                {/* Add more playlist items */}
            </div>
        </div>
    );
}

export default MainContent;