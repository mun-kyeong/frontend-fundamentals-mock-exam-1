import { SavingsGoalState } from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import { SavingsProduct } from 'types/savingsProduct';

interface FilterSavingsProductsProps {
  products: SavingsProduct[];
  goal: SavingsGoalState;
}

export function filterSavingsProducts({ products, goal }: FilterSavingsProductsProps) {
  return products.filter(product => {
    const meetsMonthlyDepositCondition =
      goal.monthlyDeposit === null ||
      (product.minMonthlyAmount <= goal.monthlyDeposit && goal.monthlyDeposit <= product.maxMonthlyAmount);

    const meetsSavingsTermCondition = goal.savingsTerm === null || product.availableTerms === goal.savingsTerm;

    return meetsMonthlyDepositCondition && meetsSavingsTermCondition;
  });
}
