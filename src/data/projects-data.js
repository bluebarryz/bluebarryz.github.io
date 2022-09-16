import deviceXchange from "./project-images/deviceXchange.jpg"
import dotPatterns from "./project-images/dot-patterns.png"
import geneticDrift from "./project-images/genetic-drift.gif"
import databaseBall from "./project-images/database-ball.png"

const ProjectsData = [
    {
        name: "DeviceXchange",
        alt: "The user interface for DeviceXchange showing the various ads that users have posted for their used electronics",
        image: deviceXchange,
        description: "A platform for exchanging second-hand electronics and learning about their environmental-friendliness. Won JAMHacks best Environmental/Social Good project 2021.",
        tools: "Node.js, Cheerio, jQuery",
        links: [{src: "https://github.com/mathlord2/JAMHacks-V", name: "GitHub Link - DeviceXchange", icon: <i className="faIcon fa-brands fa-github"></i>},
                {src: "https://devpost.com/software/devicexchange", name: "Devpost - DeviceXchange", icon: <i class="faIcon fa-solid fa-link"></i>}],
    },
    {
        name: "Dot Patterns",
        alt: "The user interface for the Dot Patterns game. Illustrates a spiral-like pattern created by rotating dots displayed on the screen",
        image: dotPatterns,
        description: "An animated game for creating beautiful patterns by rotating dots on the screen. Runs on desktop and mobile devices.",
        tools: "JavaScript, React, CSS",
        links: [{src: "https://bluebarryz.github.io/#/dot-patterns", name: "Try the Dot Patterns game here!", icon: <i class="faIcon fa-solid fa-arrow-pointer"></i>},
                {src: "https://github.com/bluebarryz/bluebarryz.github.io/tree/master/src/pages/project-demos/dot-patterns", name: "GitHub Link - Dot-patterns", icon: <i className="faIcon fa-brands fa-github"></i>}],
    },
    {
        name: "Genetic Drift Simulator",
        alt: "A GIF of the cellular automaton simulation for Genetic Drift",
        image: geneticDrift,
        description: "An interactive Genetic Drift simulation (cellular automaton).",
        tools: "Java/Processing",
        links: [{src: "https://github.com/bluebarryz/Genetic-Drift-v1.1", name: "GitHub Link - Genetic Drift", icon: <i className="faIcon fa-brands fa-github"></i>}],
    },
    {
        name: "Database-ball",
        alt: "The user interface for the database-ball web app that displays various statistics and visualizations",
        image: databaseBall,
        description: "A beautiful web app for analyzing baseball sabermetrics.",
        tools: "Python, H2O Wave",
        links: [{src: "https://github.com/bluebarryz/Database-ball", name: "GitHub Link - Database-ball", icon: <i className="faIcon fa-brands fa-github"></i>}],
    },

]

export default ProjectsData;