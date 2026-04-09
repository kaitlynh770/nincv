//letter portion of application
import {useEffect} from 'react';
import styles from '../styling/Letter.module.scss';
import letterSound from '../assets/sound_effects/open_envelope.mp3';

function Letter(){
    useEffect(() => {
        const sound = new Audio(letterSound);
        sound.play();
    },[]) //only play the sound once when the component mounts
    return(
        <div className = {styles.letterContainer}>
           <div className = {styles.letterBackground}>
            Hi there!
           </div>
        </div>
    )

}
export default Letter;