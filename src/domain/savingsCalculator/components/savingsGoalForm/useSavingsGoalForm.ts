import {
  SavingsGoalState,
  SavingsGoalStateKeys,
} from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import { useState } from 'react';

const initialSavingsGoalState: SavingsGoalState = {
  targetAmount: null,
  monthlyDeposit: null,
  savingsTerm: null,
};

export default function useSavingsGoalForm() {
  const [savingsGoalState, setSavingsGoalState] = useState<SavingsGoalState>(initialSavingsGoalState);

  const updateSavingsGoal = (value: number | null, field: SavingsGoalStateKeys) => {
    setSavingsGoalState(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  return { savingsGoalState, updateSavingsGoal };
}
