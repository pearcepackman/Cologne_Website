import './home.css';
import { Link } from "react-router";
import { NavBar } from '../components/navbar';
import code from '../components/pics/armani_code.png';
import spicebomb from '../components/pics/spicebomb.jpg';
import eros from '../components/pics/eros.jpg';
import legend from '../components/pics/legend.jpg';
import green from '../components/pics/coach_green.jpg';
import allure from '../components/pics/chanel_allure.jpg';
import eau_fraiche from '../components/pics/eau_fraiche.jpg';
import light_blue from '../components/pics/lightblue.jpg';
import adg from '../components/pics/adg_prof.jpg';
import polo67 from '../components/pics/polo67.jpg';
import hero from '../components/pics/burberry_hero.jpg';
import fierce from '../components/pics/fierce.jpg';
import dylanblue from '../components/pics/dylanblue.jpg';
import explorer from '../components/pics/explorer.jpg';
import legendspirit from '../components/pics/legendspirit.jpg';



export function HomePage () {
    return (
        <div className = "HomePage">
            <NavBar />
            <h1 className = "Title">Pearce's Collection</h1>

            {/*Beginning of winter collection */}


            <h2 className = "CollectionTitle">Winter Collection</h2>
            <p className = "WinterDesc">A collection of my favorite cold weather fragrances</p>
            <div className = "PicContainer">
                <div className = "Armani Code">
                    <img className = "pics" src = {code} />
                    <p className = "CologneTitle"><br/>Armani Code</p>
                    <p className = "CologneDesc"><br/>Masculine, powdery, and fresh; this<br/>is my go to cold weather fragrance</p>
                </div>
                <div className = "Spicebomb">
                    <img className = "pics" src = {spicebomb} />
                    <p className = "CologneTitle"><br/>Spicebomb Night Vision</p>
                    <p className = "CologneDesc"><br/>Dark, sweet, and spicy; Spicebomb <br/>Night Vision EDP shines at night</p>
                </div>
                <div className = "Versace Eros">
                    <img className = "pics" src = {eros} />
                    <p className = "CologneTitle"><br/>Versace Eros EDT</p>
                    <p className = "CologneDesc"><br/>Vanilla and sweet, <br/> Versace Eros is perfect at night</p>
                </div>
                

            </div>

            {/*Beginning of Spring collection */}

            <h2 className = "CollectionTitle">Spring Collection</h2>
            <p className = "WinterDesc">Spring is the time for fruity and fresh fragrances</p>
            <div className = "PicContainer">
                <div className = "Montblanc Legend">
                    <img className = "pics" src = {legend} />
                    <p className = "CologneTitle"><br/>Montblanc Legend</p>
                    <p className = "CologneDesc"><br/>With a great pineapple scent, <br/>Legend is fruity and fresh</p>
                </div>

                <div className = "Coach Green">
                    <img className = "pics" src = {green} />
                    <p className = "CologneTitle"><br/>Coach Green</p>
                    <p className = "CologneDesc"><br/>With a unique Kiwi opening, <br/>Coach Green is interesting and fruity</p>
                </div>

                
            </div>

            {/*Beginning of Summer collection */}

            <h2 className = "CollectionTitle">Summer Collection</h2>

            <p className = "WinterDesc">A collection of citrusy, fresh, and light fragrances for the summer</p>

            <div className = "PicContainer">

                <div className = "Chanel Allure">
                    <img className = "pics" src = {allure} />
                    <p className = "CologneTitle"><br/>Chanel Allure</p>
                    <p className = "CologneDesc"><br/>Citrusy and fresh with a vanilla drydown, <br/> one of my favorite scents</p>
                </div>

                <div className = "Versace Eau Fraiche">
                    <img className = "pics" src = {eau_fraiche} />
                    <p className = "CologneTitle"><br/>Versace Eau Fraiche</p>
                    <p className = "CologneDesc"><br/>Fresh and oceanic, Eau Fraiche is <br/>a beautifully hydrating scent</p>
                </div>

                <div className = "D&G Light Blue">
                    <img className = "pics" src = {light_blue} />
                    <p className = "CologneTitle"><br/>D&G Light Blue</p>
                    <p className = "CologneDesc"><br/>Citrusy, oceanic, and salty, <br/>this scent feels like the Mediterranean Sea</p>
                </div>

                <div className = "ADG Profondo">
                    <img className = "pics" src = {adg} />
                    <p className = "CologneTitle"><br/>Acqua Di Gio Profondo</p>
                    <p className = "CologneDesc"><br/>Citrusy, and salty, <br/>this scent is a summertime classic</p>
                </div>

                <div className = "Polo 67">
                    <img className = "pics" src = {polo67} />
                    <p className = "CologneTitle"><br/>Polo 67</p>
                    <p className = "CologneDesc"><br/>With a fresh and fruity grapefruit opening, <br/>this is one of Polo's best scents</p>
                </div>


            </div>

            <h2 className = "CollectionTitle">Fall Collection</h2>
            <p className = "WinterDesc">Woody and spicy fragrances for when there's a slight chill in the air</p>

            <div className = "PicContainer">

                <div className = "Burberry Hero">
                    <img className = "pics" src = {hero} />
                    <p className = "CologneTitle"><br/>Burberry Hero</p>
                    <p className = "CologneDesc"><br/>Woody, ambery, and fresh, <br/>this is one of my favorite fall scents</p>
                </div>

                <div className = "A&F Fierce">
                    <img className = "pics" src = {fierce} />
                    <p className = "CologneTitle"><br/>A&F Fierce Reserve</p>
                    <p className = "CologneDesc"><br/>Woody, darker, and smoky, <br/>this is perfect for colder weather</p>
                </div>
        
            </div>

            <h2 className = "CollectionTitle">All Season Fragrances</h2>
            <p className = "WinterDesc">A collection of fragrances that work in all weather</p>

            <div className = "PicContainer">

                <div className = "Dylan Blue">
                    <img className = "pics" src = {dylanblue} />
                    <p className = "CologneTitle"><br/>Versace Dylan Blue</p>
                    <p className = "CologneDesc"><br/>Dark, oceanic, and ambery, <br/>perfect for every day wear</p>
                </div>

                <div className = "MontBlanc Explorer">
                    <img className = "pics" src = {explorer} />
                    <p className = "CologneTitle"><br/>Montblanc Explorer</p>
                    <p className = "CologneDesc"><br/>Citrusy, leathery, and masculine<br/>good all season pick</p>
                </div>

                <div className = "MontBlanc Legend Spirit">
                    <img className = "pics" src = {legendspirit} />
                    <p className = "CologneTitle"><br/>Montblanc Legend Spirit</p>
                    <p className = "CologneDesc"><br/>Clean and soapy,<br/>very light and soft</p>
                </div>
        
            </div>

            
        </div>
    );
}