//letter portion of application
import * as React from "react"; 
import { useEffect } from 'react';
import '../styling/Letter.scss';
import letterSound from '../assets/sound_effects/open_envelope.mp3';
import Tippy from "@tippy.js/react"; 
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import multi from '../assets/multi.gif';

function Letter(){
    useEffect(() => {
        const sound = new Audio(letterSound);
        sound.play();
    },[]) //only play the sound once when the component mounts
    return(
        <div className = "letterContainer">
           <div className = "letterBackground">
            <h3>Dear Nintendo,</h3>
            <p>
                Where do I even begin? I know this sounds typical, but truly - you guys have been there for <em><b>every</b></em> step of my life.
                From hiding under my covers trying to beat Maylene (little did I know that I'd be facing Whitney in a couple of years with HGSS), 
                to almost passing out trying to do a whole Lokomo duet in one breath, to having spontaneous midnight terraforming sessions, 
                Nintendo has honestly been the longest relationship I've had (...what does that say about me, exactly? Ah... that I'm super loyal of course!).
            </p>
            <p>
                If I can be honest, pursuing a B.S. in Creative Technology & Design at CU Boulder was never just about getting a degree. It was about finding my way to a company that lives at the intersection of creativity and technology. 
                Nintendo has always been that company for me. I've been stalking your careers page for a while now so when I saw that
                Associate Engineer position pop up on your page, I clicked as fast as I could. As for what I bring to the table, Creative Technology & Design has 
                given me a versatile {" "}
                <Tippy theme = {"light"} content = {<img className="tippy-image" src = {multi} />}>
                    <button className = "buttonLink"> toolkit. </button>
                </Tippy>{" "} I've built and shipped applications across the stack, from React web apps to mobile applications in Xcode and Android Studio. 
                In my current role as a full-stack developer, I've worn a lot of hats — from PMO and data analytics to most recently leading UI development for an AI chatbot deployed in a government-facing application. 
                That experience taught me how to adapt fast, pick up unfamiliar technologies on the fly, and still deliver something polished under pressure. All my teammates even say that I'm the first to jump on a problem, 
                my mom just says I'm nosy but either way, bugs don't last long around me and I'd love to bring that same energy to Nintendo.
            </p>
            <p>
                So here I am, just a girl fueled by excitement (and the 2 cups of matcha I had earlier), ready to find a team full of passionate people to build something amazing with.
                I can't wait to build the next generation's favorite memories.
            </p>
            <h3>
                Best Regards,
                <br />
                Kaitlyn Huynh
            </h3>
           </div>
        </div>
    )

}
export default Letter;