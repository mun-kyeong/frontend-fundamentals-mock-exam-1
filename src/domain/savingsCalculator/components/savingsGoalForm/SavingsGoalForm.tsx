import useSavingsGoalHandlers from 'domain/savingsCalculator/hooks/useSavingsGoalHandlers';
import SectionPadding from 'shared/components/sectionPadding/SectionPadding';
import { SelectBottomSheet, Spacing, TextField } from 'tosslib';

const SavingsGoalField = {
  targetAmount: 'targetAmount',
  monthlyDeposit: 'monthlyDeposit',
  savingsTerm: 'savingsTerm',
} as const;

export default function SavingsGoalForm() {
  const { displayValues, handleTargetAmountChange, handleSavingsTermChange } = useSavingsGoalHandlers();

  return (
    <SectionPadding top={16} bottom={24}>
      <TextField
        label="목표 금액"
        placeholder="목표 금액을 입력하세요"
        suffix="원"
        value={displayValues.targetAmount?.toString() || ''}
        onChange={e => handleTargetAmountChange(e, SavingsGoalField.targetAmount)}
      />
      <Spacing size={16} />
      <TextField
        label="월 납입액"
        placeholder="희망 월 납입액을 입력하세요"
        suffix="원"
        value={displayValues.monthlyDeposit?.toString() || ''}
        onChange={e => handleTargetAmountChange(e, SavingsGoalField.monthlyDeposit)}
      />
      <Spacing size={16} />
      <SelectBottomSheet
        label="저축 기간"
        title="저축 기간을 선택해주세요"
        value={displayValues.savingsTerm}
        onChange={value => handleSavingsTermChange(value, SavingsGoalField.savingsTerm)}
      >
        <SelectBottomSheet.Option value={6}>6개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={12}>12개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={24}>24개월</SelectBottomSheet.Option>
      </SelectBottomSheet>
    </SectionPadding>
  );
}
