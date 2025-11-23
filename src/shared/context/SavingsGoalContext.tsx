import { SavingsGoalState } from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import useSavingsGoalForm, {
  UpdateSavingsGoalProps,
} from 'domain/savingsCalculator/components/savingsGoalForm/useSavingsGoalForm';
import { createContext, useContext } from 'react';

interface SavingsGoalStateContextValue {
  savingsGoalState: SavingsGoalState;
  updateSavingsGoal: ({ value, field }: UpdateSavingsGoalProps) => void;
}

const SavingsGoalStateContext = createContext<SavingsGoalStateContextValue | null>(null);

interface SavingsGoalProviderProps {
  children: React.ReactNode;
}

export function SavingsCoalProvider({ children }: SavingsGoalProviderProps) {
  const { savingsGoalState, updateSavingsGoal } = useSavingsGoalForm();

  return (
    <SavingsGoalStateContext.Provider value={{ savingsGoalState, updateSavingsGoal }}>
      {children}
    </SavingsGoalStateContext.Provider>
  );
}

export function useSavingsGoalsContext() {
  const context = useContext(SavingsGoalStateContext);
  if (!context) {
    throw new Error('useSavingsGoalsContext must be used within a SavingsCoalProvider');
  }
  return context;
}
