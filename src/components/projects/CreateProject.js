import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../store/actions/projectActions'

function CreateProject(props) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const auth = useSelector(state => state.firebase.auth);
    if (!auth.uid) return <Redirect to='/signin' />

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChangeContent = (e) => {
        setContent(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProject({ title, content }));
        props.history.push('/');
    }
    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Create a New Project</h5>
                <div className="input-field">
                    <input type="text" id='title' value={title} onChange={handleChangeTitle} />
                    <label htmlFor="title">Project Title</label>
                </div>
                <div className="input-field">
                    <textarea id="content" value={content} className="materialize-textarea" onChange={handleChangeContent}>2</textarea>
                    <label htmlFor="content">Project Content</label>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1">Create</button>
                </div>
            </form>
        </div>
    );
}

export default CreateProject;