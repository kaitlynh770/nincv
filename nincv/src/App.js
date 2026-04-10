import { useState } from 'react';
import OpeningVideo from './components/OpeningVideo.jsx';
import TownMap from './components/TownMap.jsx';
import Letter from './components/Letter.jsx';
import './App.css';
import './index.css';

function App() {
    const [view, setView] = useState('opening');

    return (
        <div>
            {view === 'opening' && <OpeningVideo onAboutMe={() => setView('townmap')} />}
            {view === 'letter' && <Letter onAboutMe={() => setView('townmap')} onBack={() => setView('letter')} />}
            {view === 'townmap' && <TownMap onBack={() => setView('letter')} />}
        </div>
    );
}

export default App;