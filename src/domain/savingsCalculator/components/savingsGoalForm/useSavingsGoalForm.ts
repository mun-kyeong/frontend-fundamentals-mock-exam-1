import {
  SavingsGoalState,
  SavingsGoalStateKeys,
} from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import { useCallback, useState } from 'react';

const initialSavingsGoalState: SavingsGoalState = {
  targetAmount: null,
  monthlyDeposit: null,
  savingsTerm: null,
};

export interface UpdateSavingsGoalProps {
  value: number | null;
  field: SavingsGoalStateKeys;
}

export default function useSavingsGoalForm() {
  const [savingsGoalState, setSavingsGoalState] = useState<SavingsGoalState>(initialSavingsGoalState);

  const updateSavingsGoal = useCallback(({ value, field }: UpdateSavingsGoalProps) => {
    setSavingsGoalState(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  return { savingsGoalState, updateSavingsGoal };
}
