class User {
    constructor(id, username, password, createdAt, email, profileImg, balance, role, basketItems) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.createdAt = createdAt;
      this.email = email;
      this.profileImg = profileImg;
      this.balance = balance;
      this.role = role || 'client';
      this.basketItems = basketItems || [];
    }
  }

  class Message {
    constructor(fullName, email, title, message, createdAt) {
      this.fullName = fullName;
      this.email = email;
      this.title = title;
      this.message = message;
      this.createdAt = createdAt;
    }
  }
  
  class OrderItem {
    constructor(productId, count) {
      this.productId = productId;
      this.count = count;
    }
  }
  

  class Order {
    constructor(userId, totalPrice, createdAt, status, items) {
      this.userId = userId;
      this.totalPrice = totalPrice;
      this.createdAt = createdAt;
      this.status = status || 'pending';
      this.items = items || [];
    }
  }
 
  class Category {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }
  

  class Product {
    constructor(id, name, salePrice, costPrice, createdAt, imgSrc, discountPercentage, description, categoryId, stockCount) {
      this.id = id;
      this.name = name;
      this.salePrice = salePrice;
      this.costPrice = costPrice;
      this.createdAt = createdAt || new Date();
      this.imgSrc = imgSrc;
      this.discountPercentage = discountPercentage;
      this.description = description;
      this.categoryId = categoryId;
      this.stockCount = stockCount;
    }
  }
  