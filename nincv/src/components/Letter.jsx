//letter portion of application
import * as React from "react"; 
import { useEffect } from 'react';
import '../styling/Letter.scss';
import letterSound from '../assets/sound_effects/open_envelope.mp3';
import Tippy from "@tippy.js/react"; 
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import multi from '../assets/multi.gif';
import whitney from '../assets/whitney.gif';
import plankton from '../assets/plankton.gif';
import terraform from '../assets/terraforming.jpg';
import skywardSword from '../assets/skyward_sword.gif';
import spongebobWaiting from '../assets/spongebob-waiting.gif';
import creativity from '../assets/creativity.gif';
import rob from '../assets/rob-the-robot.gif';
import marioCaught from '../assets/marioCaught.gif';
import mashing from '../assets/mashing.gif';
import css from '../assets/css.gif';
import hat from '../assets/hat.gif';
import polished from '../assets/polishedUnderPressure.gif';
import bugSquasher from '../assets/steppinOnBugs.gif';
import dance from '../assets/squeakoid-animal-crossing.gif';
import memories from '../assets/memories.gif';

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
                From hiding under my covers trying to beat Maylene (little did I know that I'd be facing {" "}
                <Tippy theme = { "light" } content = {<img className = "tippy-image" src = {whitney}></img>}>
                    <button className = "buttonLink">
                        Whitney
                    </button>
                </Tippy> {" "}in a couple of years with HGSS), 
                to almost {" "}
                <Tippy theme = { "light" } content = {<img className = "tippy-image" src = {plankton}></img>}>
                    <button className = "buttonLink">
                        passing out
                    </button>
                </Tippy>{" "} trying to do a whole Lokomo duet in one breath, to having spontaneous midnight {" "}
                <Tippy theme = { "light" } content = {<img className = "tippy-image" src = {terraform}></img>}>
                    <button className = "buttonLink">
                        terraforming 
                    </button>
                </Tippy>{" "}
                sessions, Nintendo has honestly been the longest relationship I've had (...what does that {" "}
                <Tippy theme = { "light" } content = {<img className = "tippy-image" src = {spongebobWaiting}></img>}>
                    <button className = "buttonLink">
                        say about me, exactly?
                    </button>
                </Tippy>{" "} Ah... that I'm super {" "}
                <Tippy theme = { "light" } content = {<img className = "tippy-image" src = {skywardSword}></img>}>
                    <button className = "buttonLink">
                        loyal
                    </button>
                </Tippy>{" "} of course!).
            </p>
            <p>
                If I can be honest, pursuing a B.S. in Creative Technology & Design at CU Boulder was never just about getting a degree. It was about finding my way to a company that lives at the intersection of {" "} 
                <Tippy theme = { "light" } content = {<img className = "tippy-image" src = {creativity}></img>}>
                    <button className = "buttonLink">
                        creativity
                    </button>
                </Tippy>{" "} and {" "}
                <Tippy theme = { "light" } content = {<img className = "tippy-image" src = {rob}></img>}>
                    <button className = "buttonLink">
                        technology.
                    </button>
                </Tippy>{" "}
                Nintendo has always been that company for me. I've been {" "}
                <Tippy theme = { "light" } content = {<img className = "tippy-image" src = {marioCaught}></img>}>
                    <button className = "buttonLink">
                        stalking
                    </button>
                </Tippy>{" "}
                your careers page for a while now so when I saw that Associate Engineer position pop up on your page, 
                I 
                <Tippy theme = { "light" } content = {<img className = "tippy-image" src = {mashing}></img>}>
                    <button className = "buttonLink">
                        click as fast as I could.
                    </button>
                </Tippy>{" "} As for what I bring to the table, Creative Technology & Design has 
                given me a versatile {" "}
                <Tippy theme = {"light"} content = {<img className="tippy-image" src = {multi} />}>
                    <button className = "buttonLink">toolkit.</button>
                </Tippy>{" "} I've built and shipped applications across the stack, from React web apps to mobile applications in Xcode and Android Studio. 
                In my current role as a full-stack developer, I've worn a lot of {" "}
                <Tippy theme = {"light"} content = {<img className="tippy-image" src = {hat} />}>
                    <button className = "buttonLink">
                        hats
                    </button>
                </Tippy>{" "} - from PMO and data analytics to most recently leading {" "}
                <Tippy theme = {"light"} content = {<img className="tippy-image" src = {css} />}>
                    <button className = "buttonLink">
                        UI development
                    </button>
                </Tippy>{" "}for an AI chatbot deployed in a government-facing application. 
                That experience taught me how to adapt fast, pick up unfamiliar technologies on the fly, and still deliver something {" "}
                <Tippy theme = {"light"} content = {<img className="tippy-image" src = {polished} />}>
                    <button className = "buttonLink">
                        polished under pressure.
                    </button>
                </Tippy>{" "} All my teammates even say that I'm the first to jump on a problem, 
                my mom just says I'm nosy but either way, {" "}
                <Tippy theme = {"light"} content = {<img className="tippy-image" src = {bugSquasher} />}>
                    <button className = "buttonLink">
                        bugs don't last long around me
                    </button>
                </Tippy>{" "}and I'd love to bring that same energy to Nintendo.
            </p>
            <p>
                So here I am, just a girl fueled by {" "}
                <Tippy theme = {"light"} content = {<img className="tippy-image" src = {dance} />}>
                    <button className = "buttonLink">
                        excitement
                    </button>
                </Tippy>{" "} (and the 2 cups of matcha I had earlier), ready to find a team full of passionate people to build something amazing with.
                I can't wait to build the next generation's favorite {" "}
                <Tippy theme = {"light"} content = {<img className="tippy-image" src = {memories} />}>
                    <button className = "buttonLink">
                        memories.
                    </button>
                </Tippy>
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