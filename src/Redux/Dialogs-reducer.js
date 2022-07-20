let initianState = {
    personNames: [
        { name: 'Victor', id: 1 },
        { name: 'Mariy', id: 2 },
        { name: 'Egor', id: 3 },
        { name: 'Macs', id: 4 },
        { name: 'Masha', id: 5 }
    ],
    messageName: [
        { text: 'Hey ! How are yous????', name: 'Me', id: 1 },
        { text: 'Everything is fine, how are you?', name: 'Mariy', id: 2 },
        { text: 'What are you up to today?', name: 'Me', id: 3 }
    ],
    textMessage: 'dimon'
};

const DialogsReduser = (state = initianState, action) => {


    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                text: state.textMessage,
                name: 'Me',
                id: 0
            }
            state.messageName.push(newMessage);
            state.textMessage = '';
            return state;

        case 'ADD-MESSAGE-TEXT':
            state.textMessage = action.inputMessageText;
            return state;

        default:
            return state;
    }

}


export default DialogsReduser