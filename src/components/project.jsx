import React, { Component } from 'react'

function Project(props) {
    const data = props.data;
    let links = [];
    for (const link of data.links) {
        links.push(
            <div key={link.name} className="align-self-end proj-link">
                <a href={link.src} target="_blank">
                    {link.icon}{link.name}
                </a>
            </div> 
        )
    }
    return (
        <div className="project col-md">
            <h3>{data.name}</h3>
            <img 
                className="proj-img"
                src={data.image}
                alt={data.alt}
            />
            <p>{data.description}</p>
            <p>Tools: {data.tools}</p>  
            <div className="project-links">
                {links}    
            </div>              
        </div> 
    );
}

export default Project;