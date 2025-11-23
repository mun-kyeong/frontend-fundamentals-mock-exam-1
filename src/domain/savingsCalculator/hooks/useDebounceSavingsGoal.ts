import { SavingsGoalState } from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import { useEffect, useState } from 'react';
import { useSavingsGoalsContext } from 'shared/context/SavingsGoalContext';
import useDebounce from 'shared/hooks/useDebounce';

const initialPendingValues: Omit<SavingsGoalState, 'savingsTerm'> = {
  targetAmount: null,
  monthlyDeposit: null,
};

export default function useDebounceSavingsGoal() {
  const { updateSavingsGoal } = useSavingsGoalsContext();

  const [pendingValues, setPendingValues] = useState<Omit<SavingsGoalState, 'savingsTerm'>>(initialPendingValues);

  const debouncedPendingValues = useDebounce(pendingValues, 500);

  useEffect(() => {
    Object.entries(debouncedPendingValues).forEach(([field, value]) => {
      updateSavingsGoal({
        field: field as keyof Omit<SavingsGoalState, 'savingsTerm'>,
        value,
      });
    });
  }, [debouncedPendingValues, updateSavingsGoal]);

  return { setPendingValues };
}
