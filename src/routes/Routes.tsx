import { SavingsCalculatorPage } from 'domain/savingsCalculator/SavingsCalculatorPage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { SavingsCoalProvider } from 'shared/context/SavingsGoalContext';
import { SavingsProductsProvider } from 'shared/context/SavingsProductsContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SavingsCalculatorPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />,
  },
]);

export function Routes() {
  return (
    <SavingsCoalProvider>
      <SavingsProductsProvider>
        <RouterProvider router={router} />
      </SavingsProductsProvider>
    </SavingsCoalProvider>
  );
}
