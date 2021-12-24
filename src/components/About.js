import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className="about">
            <div>
                <h3 className="use"> How to Use</h3>
                <ul>
                    <li>Click the add button to get started</li>
                    <li>Input required task information</li>
                    <li>Click on checkbox to add a reminder</li>
                    <li>Click on save task to save a new task.</li>
                </ul>
                <h4> note : </h4>
                <p>
                    You can turn on/turn off reminder on tasks by double clicking on the task
                    delete a task by clicking the times sign on the task
                </p>
            </div>
            <div className="version">
                <h4>Version 1.0.0</h4>
                <Link to="/">back</Link>
            </div>
        </div>
    )
}

export default About
