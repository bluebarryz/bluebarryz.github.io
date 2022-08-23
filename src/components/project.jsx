import React, { Component } from 'react'

function Project(props) {
    const data = props.data;
    return (
        <div className="project col-md">
            <h3>{data.name}</h3>
            <img 
                className="proj-img"
                src={data.image}
            />
            <p>{data.description}</p>
            <p>Tools: {data.tools}</p>  
            <div className="col-md align-self-end proj-github">
                <a href={data.link} target="_blank">
                    <i className="fa-brands fa-github"></i>Github Link
                </a>
            </div>         
        </div> 
    );
}

export default Project;