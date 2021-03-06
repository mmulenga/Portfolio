import React from 'react';
import './SpotifyWidget.css';

function SpotifyWidget() {
  return (
    <div className="spotify-widget">
      <iframe
        src="https://open.spotify.com/embed/user/12166954155/playlist/3Vxt0eJTGKcQFlxLJsBE8N"
        width="300"
        height="380"
        frameBorder="0"
        // eslint-disable-next-line react/no-unknown-property
        allowtransparency="true"
        allow="encrypted-media"
        title="Spotify"
      />
    </div>
  );
}

export default SpotifyWidget;
