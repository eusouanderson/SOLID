class DiscountCalculator {
  constructor(discountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  calculate(price) {
    return price - this.discountStrategy.getDiscount(price);
  }
}

export default DiscountCalculator;
