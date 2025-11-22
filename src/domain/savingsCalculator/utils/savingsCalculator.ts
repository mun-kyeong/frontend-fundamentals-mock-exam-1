import { SavingsGoalState } from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import { SavingsProduct } from 'types/savingsProduct';

interface CalculateExpectedProfitProps {
  savingsGoalState: SavingsGoalState;
  selectedProduct: SavingsProduct;
}

export function calculateExpectedProfit({ savingsGoalState, selectedProduct }: CalculateExpectedProfitProps) {
  if (savingsGoalState.monthlyDeposit === null || savingsGoalState.savingsTerm === null) {
    return 0;
  }

  const monthlyDeposit = savingsGoalState.monthlyDeposit;
  const term = savingsGoalState.savingsTerm;
  const rate = selectedProduct.annualRate;
  const rateFactor = 1 + rate * 0.5;
  return Math.floor(monthlyDeposit * term * rateFactor);
}

interface CalculateGoalDifferenceProps {
  savingsGoalState: SavingsGoalState;
  expectedProfit: number;
}

export function calculateGoalDifference({ savingsGoalState, expectedProfit }: CalculateGoalDifferenceProps) {
  if (savingsGoalState.targetAmount === null) {
    return 0;
  }
  const targetAmount = savingsGoalState.targetAmount;
  return targetAmount - expectedProfit;
}

interface CalculateRecommendedMonthlyDepositProps {
  savingsGoalState: SavingsGoalState;
  selectedProduct: SavingsProduct;
}

export function calculateRecommendedMonthlyDeposit({
  savingsGoalState,
  selectedProduct,
}: CalculateRecommendedMonthlyDepositProps) {
  if (savingsGoalState.targetAmount === null || savingsGoalState.savingsTerm === null) {
    return 0;
  }
  const targetAmount = savingsGoalState.targetAmount;
  const term = savingsGoalState.savingsTerm;
  const rate = selectedProduct.annualRate;

  const rateFactor = 1 + rate * 0.5;
  return Math.round(targetAmount / (term * rateFactor) / 1000) * 1000;
}
