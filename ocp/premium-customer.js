import DiscountStrategy from "./discount-strategy.js";

class PremiumCustomerDiscount extends DiscountStrategy {
  getDiscount(price) {
    return price * 0.2; // 20% de desconto
  }
}

export default PremiumCustomerDiscount;
