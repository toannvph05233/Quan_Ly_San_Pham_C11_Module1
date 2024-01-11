class Account {
    id;
    username;
    password;
    role;
    avatar;

    constructor(id, username, password, role, avatar) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.avatar = avatar;
    }

    changePassword(newPass) {
        if (this.password === newPass) {
            alert("trùng với password cũ")
        } else {
            this.password = newPass;
        }
    }
}
