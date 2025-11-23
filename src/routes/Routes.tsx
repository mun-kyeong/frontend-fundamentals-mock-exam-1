import { SavingsCalculatorPage } from 'domain/savingsCalculator/SavingsCalculatorPage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ErrorFallback from 'shared/components/errorFallback/ErrorFallback';

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
  return <RouterProvider router={router} />;
}
