import {
  SavingsGoalState,
  SavingsGoalStateKeys,
} from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import { SelectBottomSheet, Spacing, TextField } from 'tosslib';

const SavingsGoalField = {
  targetAmount: 'targetAmount',
  monthlyDeposit: 'monthlyDeposit',
  savingsTerm: 'savingsTerm',
} as const;

interface SavingsGoalFormProps {
  updateSavingsGoal: (value: number | null, field: SavingsGoalStateKeys) => void;
  savingsGoalState: SavingsGoalState;
}
export default function SavingsGoalForm({ updateSavingsGoal, savingsGoalState }: SavingsGoalFormProps) {
  const handleTargetAmountChange = (e: React.ChangeEvent<HTMLInputElement>, target: SavingsGoalStateKeys) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    updateSavingsGoal(value ? parseInt(value) : null, target);
  };

  const handleSavingsTermChange = (value: number | null, target: SavingsGoalStateKeys) => {
    updateSavingsGoal(value || null, target);
  };

  return (
    <>
      <TextField
        label="목표 금액"
        placeholder="목표 금액을 입력하세요"
        suffix="원"
        value={savingsGoalState.targetAmount?.toString() || ''}
        onChange={e => handleTargetAmountChange(e, SavingsGoalField.targetAmount)}
      />
      <Spacing size={16} />
      <TextField
        label="월 납입액"
        placeholder="희망 월 납입액을 입력하세요"
        suffix="원"
        value={savingsGoalState.monthlyDeposit?.toString() || ''}
        onChange={e => handleTargetAmountChange(e, SavingsGoalField.monthlyDeposit)}
      />
      <Spacing size={16} />
      <SelectBottomSheet
        label="저축 기간"
        title="저축 기간을 선택해주세요"
        value={savingsGoalState.savingsTerm}
        onChange={value => handleSavingsTermChange(value, SavingsGoalField.savingsTerm)}
      >
        <SelectBottomSheet.Option value={6}>6개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={12}>12개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={24}>24개월</SelectBottomSheet.Option>
      </SelectBottomSheet>
    </>
  );
}
