import townMap from '../assets/seasalt.jpg';
import { useState, useRef, useEffect } from 'react';
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
        description: 'As my bestie Filbert once said, "The coolest part about hanging out with you is that you remind me of a lot of my favorite things." While I\'d love to take all the credit, the truth is I just really love the people I work with. I absolutely thrive in collaborative environments where everyone brings something different to the table (did I tell you that one of my top Gallup Strengths was Maximizer?). My teammates (and probably Filbert) would probably describe me as the warm soup of the group: reliable, calming under pressure, and somehow always there when you need me.',
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
        description: 'Much like my Animal Crossing character cycling through different fits, I\'ve worn a lot of hats professionally — from PMO and data analytics to leading UI development for a government-facing AI chatbot. Whether it\'s fashion or my career, I adapt fast and I do it with style.',
    },
    house: {
        label: 'My House',
        gif: home,
        title: 'Finding my next island!',
        description: 'Every island in Animal Crossing reflects the player, it\'s a place where you really pour your heart and soul into. From what I can see, Nintendo is the same! A place where earnest people put their everything into not only creating genuine products, but unforgettable experiences. They\'re made up of a team of people who care deeply about the experiences they create, who labor over the small details, and who genuinely believe that what they make matters and is creating impact. I\'ve been building toward this for a long time, and I can\'t think of a better place to settle down.',
    },
};

const HOTSPOTS = [
    { id: 'villager',    x: 50,  y: 350, label: 'Filbert' },
    { id: 'museum',      x: 510,  y: 352, label: 'Museum' },
    { id: 'ableSisters', x: 530, y: 520, label: 'Able Sisters' },
    { id: 'house',       x: 763,  y: 525, label: 'My House' },
];

const IMAGE_WIDTH = 1280;
const IMAGE_HEIGHT = 720;

function TownMap({ onBack }) {
    const [selected, setSelected] = useState('default');
    const [imageRect, setImageRect] = useState(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const updateRect = () => {
            if (imgRef.current) {
                setImageRect(imgRef.current.getBoundingClientRect());
            }
        };
        updateRect();
        window.addEventListener('resize', updateRect);
        return () => window.removeEventListener('resize', updateRect);
    }, []);

    const getHotspotStyle = (x, y) => {
        if (!imageRect) return { display: 'none' };

        const containerAspect = imageRect.width / imageRect.height;
        const imageAspect = IMAGE_WIDTH / IMAGE_HEIGHT;

        let renderedWidth, renderedHeight, offsetX, offsetY;

        if (containerAspect > imageAspect) {
            renderedHeight = imageRect.height;
            renderedWidth = renderedHeight * imageAspect;
            offsetX = (imageRect.width - renderedWidth) / 2;
            offsetY = 0;
        } else {
            renderedWidth = imageRect.width;
            renderedHeight = renderedWidth / imageAspect;
            offsetX = 0;
            offsetY = (imageRect.height - renderedHeight) / 2;
        }

        return {
            left: offsetX + (x / IMAGE_WIDTH) * renderedWidth,
            top: offsetY + (y / IMAGE_HEIGHT) * renderedHeight,
        };
    };

    const handleSelect = (id) => {
        const sound = new Audio(buttonClick);
        sound.play();
        setSelected(prev => prev === id ? 'default' : id);
    };

    const item = ITEMS[selected];

    return (
        <div className={styles.townMapContainer}>
            <button className={styles.backBtn} onClick={onBack}>← Back to Letter</button>

            <div className={styles.mapWrapper}>
                <img
                    ref={imgRef}
                    src={townMap}
                    alt="Seasalt island map"
                    className={styles.mapImage}
                    onLoad={() => setImageRect(imgRef.current.getBoundingClientRect())}
                />
                {HOTSPOTS.map(spot => (
                    <button
                        key={spot.id}
                        className={`${styles.hotspot} ${selected === spot.id ? styles.hotspotActive : ''}`}
                        style={getHotspotStyle(spot.x, spot.y)}
                        onClick={() => handleSelect(spot.id)}
                        aria-label={spot.label}
                    />
                ))}
            </div>

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
                        <button className={styles.closeBtn} onClick={() => setSelected('default')}>✕</button>
                    </>
                )}
            </div>

        </div>
    );
}

export default TownMap;