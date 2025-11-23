import { SavingsGoalState } from 'domain/savingsCalculator/types/savingsGoalForm.type';
import {
  calculateExpectedProfit,
  calculateGoalDifference,
  calculateRecommendedMonthlyDeposit,
} from 'domain/savingsCalculator/utils/savingsCalculator';
import { SavingsProduct } from 'domain/savingsCalculator/types/savingsProduct';

interface CreateSavingsResultItemsProps {
  selectedProduct: SavingsProduct;
  savingsGoalState: SavingsGoalState;
}

export function createSavingsResultItems({ selectedProduct, savingsGoalState }: CreateSavingsResultItemsProps) {
  if (!savingsGoalState.monthlyDeposit || !savingsGoalState.savingsTerm || !savingsGoalState.targetAmount) {
    return [];
  }

  const expectedProfit = calculateExpectedProfit({
    monthlyDeposit: savingsGoalState.monthlyDeposit,
    term: savingsGoalState.savingsTerm,
    annualRate: selectedProduct.annualRate,
  });

  const goalDifference = calculateGoalDifference({
    targetAmount: savingsGoalState.targetAmount,
    expectedProfit,
  });

  const recommendedMonthlyDeposit = calculateRecommendedMonthlyDeposit({
    targetAmount: savingsGoalState.targetAmount,
    term: savingsGoalState.savingsTerm,
    annualRate: selectedProduct.annualRate,
  });

  return [
    {
      label: '예상 수익 금액',
      valueKey: 'expectedProfit',
      bottom: `${expectedProfit.toLocaleString()}원`,
    },
    {
      label: '목표 금액과의 차이',
      valueKey: 'goalDifference',
      bottom: `${goalDifference.toLocaleString()}원`,
    },
    {
      label: '추천 월 납입 금액',
      valueKey: 'recommendedMonthlyDeposit',
      bottom: `${recommendedMonthlyDeposit.toLocaleString()}원`,
    },
  ] as const;
}
