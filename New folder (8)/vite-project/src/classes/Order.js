class Order {
    constructor(userId, totalPrice, status = 'pending', items = []) {
      this.userId = userId;
      this.totalPrice = totalPrice;
      this.status = status;
      this.items = items;
      this.createdAt = new Date();
    }
  }
  
  class OrderItem {
    constructor(productId, count) {
      this.productId = productId;
      this.count = count;
    }
  }
  