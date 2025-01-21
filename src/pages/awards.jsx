import './awards.css';
import { NavBar } from '../components/navbar';
import code from '../components/pics/armani_code.png';
import legend from '../components/pics/legend.jpg';
import adg from '../components/pics/adg_prof.jpg';
import hero from '../components/pics/burberry_hero.jpg';
import allure from '../components/pics/chanel_allure.jpg';



export function Awards() {
    return (
        <div className = "AwardsPage">
            <NavBar />
            <h1 className = "Title">Awards</h1>

            <h2 className = "AwardTitle">Best Winter Fragrance</h2>
                        <p className = "AwardDesc">The best fragrance that captures the spirit of cold weather</p>
                        <div className = "PicCont">
                            <div className = "Armani Code">
                                <img className = "AwardPic" src = {code} />
                                <p className = "CologneAwardTitle"><br/>Armani Code</p>
                                <p className = "CologneAwardDesc"><br/>Armani Code is a wonderful fresh and wintery fragrance. With an interesting powdery and Bergamot opening,
                                drying down to Tonka Bean and Cedar. This scent is perfect in any cold conditions.</p>
                            </div>
                        </div>

                        <h2 className = "AwardTitle">Best Spring Fragrance</h2>
                        <p className = "AwardDesc">The best fragrance that beautifully blanaces fresh and fruity</p>
                        <div className = "PicCont">
                            <div className = "Montblanc Legend">
                                <img className = "AwardPic" src = {legend} />
                                <p className = "CologneAwardTitle"><br/>Montblanc Legend</p>
                                <p className = "CologneAwardDesc"><br/>Montblanc Legend is a great blend of freshness and fruitiness. With a Pineapple and Bergamot opening drying down to
                                a Sandalwood and Tonka Bean base, Legend is clean, fruity, and smooth. Perfect for any springtime occasion.</p>
                            </div>
                        </div>

                        <h2 className = "AwardTitle">Best Summer Fragrance</h2>
                        <p className = "AwardDesc">The best fragrance that captures the spirit of the sea; citrusy, light, and fresh.</p>
                        <div className = "PicCont">
                            <div className = "Montblanc Legend">
                                <img className = "AwardPic" src = {adg} />
                                <p className = "CologneAwardTitle"><br/>ADG Profondo</p>
                                <p className = "CologneAwardDesc"><br/>Acqua Di Gio Profondo is a staple summer scent. With a great citrus opening utilizing Mandarin Orange and 
                                Bergamot, then drying down to a mineraly and salty base. ADG Profondo is a masculine and fantastic summer fragrance.</p>
                            </div>
                        </div>

                        <h2 className = "AwardTitle">Best Fall Fragrance</h2>
                        <p className = "AwardDesc">The best fragrance that reminds me of going back to school</p>
                        <div className = "PicCont">
                            <div className = "Montblanc Legend">
                                <img className = "AwardPic" src = {hero} />
                                <p className = "CologneAwardTitle"><br/>Burberry Hero EDT</p>
                                <p className = "CologneAwardDesc"><br/>Burberry Hero EDT begins with a Bergamot opening that dries down to a fresh and spicy Cedar base.
                                The perfect blend between fresh and fall, and at a great price point, this scent is my fall staple.</p>
                            </div>
                        </div>

                        <h2 className = "AwardTitle">Best All Year Fragrance</h2>
                        <p className = "AwardDesc">The best fragrance that can be worn at any time of the year</p>
                        <div className = "PicCont">
                            <div className = "Montblanc Legend">
                                <img className = "AwardPic" src = {allure} />
                                <p className = "CologneAwardTitle"><br/>Chanel Allure</p>
                                <p className = "CologneAwardDesc"><br/>Although, primarily being a warm weather scent, Chanel Allure is a fantastic fresh fragrance that excels
                                in any condition. Opening with a beautifully balanced Citrusy and Aqua opening drying down to warm Tonka Bean and Amber. Chanel Allure
                                is my personal favorite of my collection.</p>
                            </div>
                        </div>
                        
                                  
        </div>
    )
}