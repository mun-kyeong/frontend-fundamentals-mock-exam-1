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

export interface UpdateSavingsGoalProps {
  value: number | null;
  field: SavingsGoalStateKeys;
}

export default function useSavingsGoalForm() {
  const [savingsGoalState, setSavingsGoalState] = useState<SavingsGoalState>(initialSavingsGoalState);

  const updateSavingsGoal = ({ value, field }: UpdateSavingsGoalProps) => {
    setSavingsGoalState(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  return { savingsGoalState, updateSavingsGoal };
}
