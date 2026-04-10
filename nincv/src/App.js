import { useState } from 'react';
import OpeningVideo from './components/OpeningVideo.jsx';
import TownMap from './components/TownMap.jsx';
import './App.css';
import './index.css';

function App() {
    const [view, setView] = useState('opening');

    return (
        <div>
            {view === 'opening' && <OpeningVideo onAboutMe={() => setView('townmap')} />}
            {view === 'townmap' && <TownMap />}
        </div>
    );
}

export default App;