import { firebaseStore } from "./../../config/fbConfig";

export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to database
        // dispatch({ type: 'CREATE_PROJECT', project });
        firebaseStore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS', project });
        }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
        });
    }
};