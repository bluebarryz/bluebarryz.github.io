import React, { Component } from 'react'
import Project from "./project"
import ProjectsData from "../data/projects-data"

export default class Projects extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     };
    // }   
    render() {
        console.log("hello")
        console.log(ProjectsData[0]);
        const projectsCount = ProjectsData.length;
        let rows = [];
        for (let i = 0; i < projectsCount; i += 2) {
            let row = [];
            row.push(
                <Project 
                    key={ProjectsData[i].name} 
                    data={ProjectsData[i]}
                />
            )
            if (i != projectsCount - 1) {
                row.push(
                    <Project 
                        key={ProjectsData[i + 1].name} 
                        data={ProjectsData[i + 1]}
                    />
                )
            }
            rows.push(
                <div 
                    key={rows.length} 
                    className="row"
                >
                    {row}
                </div>);
        }
        return (
            <div className="container projects">
                {rows}
            </div>
        )
    }
}