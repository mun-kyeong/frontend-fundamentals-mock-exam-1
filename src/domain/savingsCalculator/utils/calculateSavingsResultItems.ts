import { SavingsGoalState } from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import {
  calculateExpectedProfit,
  calculateGoalDifference,
  calculateRecommendedMonthlyDeposit,
} from 'domain/savingsCalculator/utils/savingsCalculator';
import { SavingsProduct } from 'types/savingsProduct';

interface CreateSavingsResultItemsProps {
  selectedProduct: SavingsProduct;
  savingsGoalState: SavingsGoalState;
}

export function createSavingsResultItems({ selectedProduct, savingsGoalState }: CreateSavingsResultItemsProps) {
  if (
    savingsGoalState.monthlyDeposit === null ||
    savingsGoalState.savingsTerm === null ||
    savingsGoalState.targetAmount === null
  ) {
    return [];
  }

  const expectedProfit = calculateExpectedProfit({
    savingsGoalState,
    selectedProduct,
  });

  const goalDifference = calculateGoalDifference({
    savingsGoalState,
    expectedProfit,
  });

  const recommendedMonthlyDeposit = calculateRecommendedMonthlyDeposit({
    savingsGoalState,
    selectedProduct,
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
