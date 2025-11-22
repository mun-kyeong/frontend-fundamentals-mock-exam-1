import { http } from 'tosslib';
import { SavingsProduct } from 'types/savingsProduct';

export async function savingsProducts(): Promise<SavingsProduct[]> {
  return await http.get<SavingsProduct[]>('/api/savings-products');
}
