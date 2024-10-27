// components/BackgroundAudio.tsx
import React from 'react';

const BackgroundAudio: React.FC = () => {
    return (
        <audio autoPlay loop>
            <source src="/sounds/creepy-sound.mp3" type="audio/mpeg" />
        </audio>
    );
};

export default BackgroundAudio;
