import DiscountCalculator from "./discount-calculator.js";
import RegularCustomerDiscount from "./regular-customer.js";
import PremiumCustomerDiscount from "./premium-customer.js";

const price = 100;

// Cliente comum
const regularCalc = new DiscountCalculator(new RegularCustomerDiscount());
console.log("Preço com desconto (Regular): R$", regularCalc.calculate(price));

// Cliente premium
const premiumCalc = new DiscountCalculator(new PremiumCustomerDiscount());
console.log("Preço com desconto (Premium): R$", premiumCalc.calculate(price));
