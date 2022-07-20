let initianState = {
    navbarList: [
        { value: 'Profile', href: '/Profile' },
        { value: 'Messages', href: '/Dialogs' },
        { value: 'News', href: '/News' },
        { value: 'Music', href: '/Music' },
        { value: 'Settings', href: '/Settings' }
    ],
    friendsList: [
        { namePerson: 'Viktor', id: 1 },
        { namePerson: 'Ivan', id: 2 },
        { namePerson: 'Dany', id: 3 },
        { namePerson: 'Pety', id: 4 },
    ]
}


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