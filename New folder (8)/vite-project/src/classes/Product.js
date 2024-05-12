class Product {
    constructor(id, name, salePrice, costPrice, imgSrc, description, categoryId, stockCount, discountPercentage = 0) {
      this.id = id;
      this.name = name;
      this.salePrice = salePrice;
      this.costPrice = costPrice;
      this.imgSrc = imgSrc;
      this.description = description;
      this.categoryId = categoryId;
      this.stockCount = stockCount;
      this.discountPercentage = discountPercentage;
      this.createdAt = new Date();
    }
  }
  