const createProject = (project) => {

    return (dispatch , getState, { getFirestore , getFirebase }) => {
        // when using Thunk .. we can return a function that replaces the actions
        // we will return a dispatch function that goes to the database

        const fireStore = getFirestore();

        // adding data to the projects collection from firebase
        fireStore.collection('projects').add({
            ...project, // spread operator to distribute the data hat comes from the project up there to this object
            authorFirsName : 'Mo',
            authorLastName :'Fo',
            authorId: 12345,
            createdAt: new Date()
        }).then ( () => {
            dispatch({
                type: 'CREATE_PROJECT',
                project:project
            })
        }).catch( (err) => {
            dispatch({ type : 'CREATE_PROJECT_ERROR', err })
        })

    }
}

export default createProject;
