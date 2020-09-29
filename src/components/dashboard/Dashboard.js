import React, { useEffect } from 'react';
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { useSelector, useDispatch } from 'react-redux'
import { loadProject } from '../../store/actions/projectActions'

function Dashboard(props) {
    const projects = useSelector(state => state.project.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchProjectList() {
            try {
                dispatch(loadProject());
            } catch (error) {
                console.log("Failed to fetch:", error.message);
            }
        }
        fetchProjectList();
    }, []);

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div >
    )
}

export default Dashboard;

// import React, { Component } from 'react'
// import ProjectList from '../projects/ProjectList'
// import Notifications from './Notifications'
// import { connect } from 'react-redux';

// class Dashboard extends Component {
//     render() {
//         const { projects } = this.props;
//         return (
//             <div className="dashboard container">
//                 <div className="row">
//                     <div className="col s12 m6">
//                         <ProjectList projects={projects} />
//                     </div>
//                     <div className="col s12 m5 offset-m1">
//                         <Notifications />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// function mapStateToProps(state) {
//     return {
//         projects: state.project.projects
//     }
// }

// export default connect(mapStateToProps)(Dashboard)