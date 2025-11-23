import { SavingsCalculatorPage } from 'domain/savingsCalculator/SavingsCalculatorPage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ErrorFallback from 'shared/components/errorFallback/ErrorFallback';
import { SavingsGoalProvider } from 'shared/context/SavingsGoalContext';

import { SavingsProductsProvider } from 'shared/context/SavingsProductsContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SavingsCalculatorPage />,
    errorElement: <ErrorFallback />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />,
    errorElement: <ErrorFallback />,
  },
]);

export function Routes() {
  return (
    <SavingsGoalProvider>
      <SavingsProductsProvider>
        <RouterProvider router={router} />
      </SavingsProductsProvider>
    </SavingsGoalProvider>
  );
}
