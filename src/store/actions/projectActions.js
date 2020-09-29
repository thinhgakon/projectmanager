import { firebaseStore } from "./../../config/fbConfig";

export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to database
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

export const loadProject = () => {
    let arrProject = [];
    return (dispatch, getState) => {
        // make async call to database
        firebaseStore.collection("projects").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                const project = {
                    ...doc.data(),
                    id: doc.id
                }
                arrProject.push(project);
            });
        }).then(() => {
            dispatch({ type: 'LOAD_PROJECT', projects: arrProject });
        }).catch(err => {
            dispatch({ type: 'LOAD_PROJECT_ERROR' }, err);
        });;
    }
};