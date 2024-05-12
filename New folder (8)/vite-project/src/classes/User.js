class User {
    constructor(id, username, password, email, profileImg, balance, role = 'client', basketItems = []) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.email = email;
      this.profileImg = profileImg;
      this.balance = balance;
      this.role = role;
      this.basketItems = basketItems;
      this.createdAt = new Date();
    }
  }
  