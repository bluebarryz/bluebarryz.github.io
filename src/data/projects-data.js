import deviceXchange from "./project-images/deviceXchange.jpg"
import dotPatterns from "./project-images/dot-patterns.png"
import geneticDrift from "./project-images/genetic-drift.gif"
import databaseBall from "./project-images/database-ball.png"

const ProjectsData = [
    {
        name: "DeviceXchange",
        image: deviceXchange,
        description: "A platform for exchanging second-hand electronics and learning about their environmental-friendliness. JamHacks best Environmental/Social Good project 2021.",
        tools: "Node.js, Cheerio, jQuery",
        links: [{src: "https://github.com/mathlord2/JAMHacks-V", name: "GitHub Link", icon: <i className="faIcon fa-brands fa-github"></i>},
                {src: "https://devpost.com/software/devicexchange", name: "DevPost", icon: <i class="faIcon fa-solid fa-link"></i>}],
    },
    {
        name: "Dot Patterns",
        image: dotPatterns,
        description: "An animated game for creating beautiful patterns by rotating dots on the screen. Runs on desktop and mobile devices.",
        tools: "JavaScript, React, CSS",
        links: [{src: "https://bluebarryz.github.io/#/dot-patterns", name: "Try it out!", icon: <i class="faIcon fa-solid fa-arrow-pointer"></i>},
                {src: "https://github.com/bluebarryz/bluebarryz.github.io/tree/master/src/pages/project-demos/dot-patterns", name: "GitHub Link", icon: <i className="faIcon fa-brands fa-github"></i>}],
    },
    {
        name: "Genetic Drift Simulator",
        image: geneticDrift,
        description: "An interactive Genetic Drift simulation (cellular automaton).",
        tools: "Java/Processing",
        links: [{src: "https://github.com/bluebarryz/Genetic-Drift-v1.1", name: "GitHub Link", icon: <i className="faIcon fa-brands fa-github"></i>}],
    },
    {
        name: "Database-ball",
        image: databaseBall,
        description: "A beautiful web app for analyzing baseball sabermetrics.",
        tools: "Python, H2O Wave",
        links: [{src: "https://github.com/bluebarryz/Database-ball", name: "GitHub Link", icon: <i className="faIcon fa-brands fa-github"></i>}],
    },

]

export default ProjectsData;