import townMap from '../assets/seasalt.jpg';
import { useState } from 'react';
import styles from '../styling/TownMap.module.scss';
import fashion from '../assets/acnh_fashion.gif';
import ambience from '../assets/seasalt_ambience.gif';
import filbert from '../assets/dozing_off_buddies.gif';

const ITEMS = {
    default: {
        label: 'Welcome',
        gif: ambience,
        title: "Welcome to Seasalt! 🌊",
        description: "Dodo Airlines flight KH-001 has landed on Seasalt Island! Look around, there's more to this island than meets the eye!",
    },
    villager: {
        label: 'Filbert',
        gif: filbert,
        title: 'My Bestie Filbert!',
        description: 'As my bestie Filbert once said, "The coolest part about hanging out with you is that you remind me of a lot of my favorite things." While I\'d love to take all the credit, the truth is I just really love the people I work with. I absolutely thrive in collaborative environments where everyone brings something different to the table (did I tell you that one of my top Gallup Strenths was Maximizer?). My teammates (and probably Filbert) would probably describe me as the warm soup of the group: reliable, calming under pressure, and somehow always there when you need me.',
    },
    museum: {
        label: 'Museum',
        gif: null,
        title: 'Blathers & The Museum',
        description: 'Placeholder — tell your story here!',
    },
    ableSisters: {
        label: 'Able Sisters',
        gif: fashion,
        title: 'Versatile and Fashionable!',
        description: 'Much like my Animal Crossing character cycling through different fits, I\'ve worn a lot of hats professionally — from PMO and data analytics to leading UI development for a government-facing AI chatbot. Whether it\'s fashion or my career, I adapt fast and I do it with style.'
    },
    house: {
        label: 'My House',
        gif: null,
        title: 'Home Sweet Home',
        description: 'Placeholder — tell your story here!',
    }
};

// approximate positions of each clickable item as % of the map image
const HOTSPOTS = [
    { id: 'villager',    top: '49%', left: '9%',  label: 'Filbert' },
    { id: 'museum',      top: '49%', left: '41%', label: 'Museum' },
    { id: 'ableSisters', top: '72.3%', left: '42.3%', label: 'Able Sisters' },
    { id: 'house',       top: '73%', left: '58.5%', label: 'My House' },
];

function TownMap() {
    const [selected, setSelected] = useState('default');

    const handleSelect = (id) => {
        setSelected(prev => prev === id ? null : id);
    };

    const item = ITEMS[selected];

    return (
        <div className={styles.townMapContainer}>

            {/* LEFT: map */}
            <div className={styles.mapWrapper}>
                <img src={townMap} alt="Seasalt island map" className={styles.mapImage} />
                {HOTSPOTS.map(spot => (
                    <button
                        key={spot.id}
                        className={`${styles.hotspot} ${selected === spot.id ? styles.hotspotActive : ''}`}
                        style={{ top: spot.top, left: spot.left }}
                        onClick={() => handleSelect(spot.id)}
                        aria-label={spot.label}
                    />
                ))}
            </div>

            {/* RIGHT: info panel */}
            <div className={`${styles.infoPanel} ${selected ? styles.infoPanelVisible : ''}`}>
                {item && (
                    <>
                        <div className={styles.gifArea}>
                            {item.gif
                                ? <img src={item.gif} alt={item.title} className={styles.gif} />
                                : <div className={styles.gifPlaceholder}>gif goes here 🐾</div>
                            }
                        </div>
                        <div className={styles.card}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                        <button className={styles.closeBtn} onClick={() => setSelected(null)}>✕</button>
                    </>
                )}
            </div>

        </div>
    );
}

export default TownMap;