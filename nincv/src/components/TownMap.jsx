import townMap from '../assets/seasalt.jpg';
import { useState } from 'react';
import styles from '../styling/TownMap.module.scss';
import fashion from '../assets/acnh_fashion.gif';
import ambience from '../assets/seasalt_ambience.gif';
import filbert from '../assets/dozing_off_buddies.gif';
import blathers from '../assets/blathers.gif';
import home from '../assets/home.gif';
import buttonClick from '../assets/sound_effects/button_click.mp3';

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
        gif: blathers,
        title: 'A bit of a Blather-er',
        description: 'Hooooo... WHO?! Much like a certain owl, I tend to light up the moment I find something new and exciting. Whether that be a problem I haven\'t tackled yet, a new framework or design issue, the unknown doesn\'t scare me and gives me the motivation to dive deep in. And just like Blathers, once I get to talking about something I\'m passionate about, I might just go on a bit longer than I intend to.',
    },
    ableSisters: {
        label: 'Able Sisters',
        gif: fashion,
        title: 'Versatile and Fashionable!',
        description: 'Much like my Animal Crossing character cycling through different fits, I\'ve worn a lot of hats professionally — from PMO and data analytics to leading UI development for a government-facing AI chatbot. Whether it\'s fashion or my career, I adapt fast and I do it with style.'
    },
    house: {
        label: 'My House',
        gif: home,
        title: 'Finding my next island!',
        description:'Every island in Animal Crossing reflects its player — it\'s a place you pour your heart and efforts into and call home. For me, Nintendo has always felt like that place. A team of people who care deeply about the experiences they create, who labor over the small details, and who genuinely believe that what they make matters and is creating impact. I\'ve been building toward this for a long time, and I can\'t think of a better place to settle down.'
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
        const sound = new Audio(buttonClick)
        sound.play();
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