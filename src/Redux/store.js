import DialogsReducer from './Dialogs-reducer'
import ProfileReducer from './Profile-reducer'
import NavbarReducer from './Navbar-reducer'

let Store = {
    _State: {
        profilePage: {
            myPost: [
                { massage: "Sggh jnkjjbDhjhh jnjkbj!", likeClick: 2, id: 1 },
                { massage: "Sggh jnkjj!", likeClick: 4, id: 2 },
                { massage: "Sggh jjbDhjhh jkbj!", likeClick: 0, id: 3 }
            ],
            textPost: 'Dimon',
        },
        messagesPage: {
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
        },
        navbar: {
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
    },
    getState() {
        return this._State
    },
    _renderDom() {
        console.log('State changed')
    },
    subscribe(observer) {
        this.getRenderDom = observer
    },
    getRenderDom() {
        return Store._renderDom
    },
    dispatch(action) {
        this._State.messagesPage = DialogsReducer(this._State.messagesPage, action);
        this._State.profilePage = ProfileReducer(this._State.profilePage, action);
        this._State.navbar = NavbarReducer(this._State.navbar, action);
        this.getRenderDom(this.State);

    }
};
export const addText = (text) =>
({
    type: 'ADD-POST-TEXT',
    postValue: text
});


export const addPost = () => ({
    type: 'ADD-POST'
});





export const updateText = (text) => ({
    type: 'ADD-MESSAGE-TEXT',
    inputMessageText: text
});

export const addObjMessage = () => ({
    type: 'ADD-MESSAGE'
});






export default Store;
window.Store = Store;