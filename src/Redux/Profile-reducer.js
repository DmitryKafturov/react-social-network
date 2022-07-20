let initianState = {
    myPost: [
        { massage: "Sggh jnkjjbDhjhh jnjkbj!", likeClick: 2, id: 1 },
        { massage: "Sggh jnkjj!", likeClick: 4, id: 2 },
        { massage: "Sggh jjbDhjhh jkbj!", likeClick: 0, id: 3 }
    ],
    textPost: 'Dimon',
};

const ProfileReduser = (state = initianState, action) => {

    switch (action.type) {
        case 'ADD-POST':
            const textPost = state.textPost;
            let newObj = {
                massage: textPost,
                likeClick: 0,
                id: Date.now()
            };

            state.myPost.push(newObj);
            state.textPost = '';
            return state;

        case 'ADD-POST-TEXT':
            state.textPost = action.postValue;
            return state;

        default:
            return state;
    }

}


export default ProfileReduser
