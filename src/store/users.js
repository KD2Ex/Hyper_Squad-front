import { makeAutoObservable } from "mobx";
import axios from "axios";


class Users {
    users = [];
    loggedUser = {id: 1, login: "qwe"};

    constructor() {
        makeAutoObservable(this);
    }

    getUsers() {
        const result = axios.get('');
        this.users = [...this.users, ...result.data];
    }

    addUser(user) {

    }

    setLoggedUser(id) {
        const user = users.find(user => user.id === id);
        this.loggedUser = user;
    }

}

export default new Users();