import './about.css';

import { NavBar } from '../components/navbar';


export function About () {
    return (
        <div className = "AboutPage">
            <NavBar/>
            
            <h1 className = "Title">About This Project</h1>

            <h2 className = "SubsectionTitle">A Little About Me</h2>
            <p className = "SubsectionDesc">Hello, my name is Pearce. I am a computer science student at UMBC and this is the second website I've ever created.
                I was interested in doing a project I could be passionate about when I thought of the idea to do a cologne website, going through my personal collection.
                I could talk about colognes for hours, but I figure this is a better use of my time.<br /><br />
                If this project interests you for any reason, please send me an email! I would love to hear any and all feedback. All emails can be sent to pearcepackman@gmail.com.
            </p>

            <h2 className = "SubsectionTitle">A Little About This Website</h2>
            <p className = "SubsectionDesc">As mentioned above, this is my second website that I've built. This website was created using React, JavaScript, CSS, and a little bit of HTML.
                Building this website has been an incredible learning experience for me as I feel my front-end development skills have increased significantly. This website is
                much more impressive than my first website, utilizing features such as: multiple pages, mobile support, and better design principles. <br /><br />

                I'm proud to have built this website and I hope it is a good showcase of my current skills. 
            </p>

            <h2 className = "SubsectionTitle">A Little About The Future</h2>
            <p className = "SubsectionDesc">This website has been a great learning experience in front-end development, but I think I can do better. In the future,
                I would like to add added functionality to the site. Mainly including pages for each cologne with more information about the scent, brand, and 
                history of the scent, along with the scent profile of each one. <br /><br />
                As for other projects, I would like to focus on building a personal website for myself, utilizing all of the skills I've learned building this website.
                I would also like to create another Python based project in the near future.
            </p>
        </div>
    );
}