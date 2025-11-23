import { SavingsGoalStateKeys } from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import { useState } from 'react';
import { useSavingsGoalsContext } from 'shared/context/SavingsGoalContext';
import { formatNumberWithComma, stripNonNumeric } from 'shared/utils/numberFormat';

interface SavingsGoalDisplayValues {
  targetAmount: string;
  monthlyDeposit: string;
  savingsTerm: number;
}

export default function useSavingsGoalHandlers() {
  const { updateSavingsGoal } = useSavingsGoalsContext();

  const [displayValues, setDisplayValues] = useState<SavingsGoalDisplayValues>({
    targetAmount: '',
    monthlyDeposit: '',
    savingsTerm: 0,
  });

  const handleTargetAmountChange = (e: React.ChangeEvent<HTMLInputElement>, field: SavingsGoalStateKeys) => {
    const raw = e.target.value;
    const numeric = stripNonNumeric(raw);
    const formatted = numeric ? formatNumberWithComma(numeric) : '';

    setDisplayValues(prev => ({
      ...prev,
      [field]: formatted,
    }));

    updateSavingsGoal({
      field,
      value: numeric ? parseInt(numeric) : null,
    });
  };

  const handleSavingsTermChange = (value: number | null, target: SavingsGoalStateKeys) => {
    setDisplayValues(prev => ({
      ...prev,
      savingsTerm: value || 0,
    }));

    updateSavingsGoal({ value: value || null, field: target });
  };

  return { handleTargetAmountChange, handleSavingsTermChange, displayValues };
}
