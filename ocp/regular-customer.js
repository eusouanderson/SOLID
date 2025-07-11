import DiscountStrategy from "./discount-strategy.js";

class RegularCustomerDiscount extends DiscountStrategy {
  getDiscount(price) {
    return price * 0.05;
  }
}

export default RegularCustomerDiscount;
