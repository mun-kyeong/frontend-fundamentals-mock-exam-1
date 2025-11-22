import { SavingsGoalState } from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import SavingsProductsTab from 'domain/savingsCalculator/components/savingsProductsTab/SavingsProductsTab';
import SavingsResultTab from 'domain/savingsCalculator/components/SavingsResultTab/SavingsResultTab';
import { filterSavingsProducts } from 'domain/savingsCalculator/utils/filterSavingsProducts';
import { useState } from 'react';
import { Spacing, Tab } from 'tosslib';
import { SavingsProduct } from 'types/savingsProduct';

interface ProductsTabSectionProps {
  savingsProductList: SavingsProduct[];
  savingsGoalState: SavingsGoalState;
}

type TabValue = 'products' | 'results';

export default function ProductsTabSection({ savingsProductList, savingsGoalState }: ProductsTabSectionProps) {
  const [selectedTab, setSelectedTab] = useState<TabValue>('products');

  const [selectSavingsProductId, setSelectSavingsProductId] = useState<string | null>(null);

  const handleTabChange = (value: string) => {
    const selectedValue = value as TabValue;
    setSelectedTab(selectedValue);
  };

  const handleSelectProduct = (productId: string) => {
    if (selectSavingsProductId === productId) {
      setSelectSavingsProductId(null);
      return;
    }
    setSelectSavingsProductId(productId);
  };

  const filteredProducts = filterSavingsProducts({
    products: savingsProductList,
    goal: savingsGoalState,
  });

  return (
    <>
      <Tab onChange={e => handleTabChange(e)}>
        <Tab.Item value="products" selected={selectedTab === 'products'}>
          적금 상품
        </Tab.Item>
        <Tab.Item value="results" selected={selectedTab === 'results'}>
          계산 결과
        </Tab.Item>
      </Tab>

      {selectedTab === 'products' && (
        <SavingsProductsTab
          filteredProducts={filteredProducts}
          handleSelectProduct={handleSelectProduct}
          selectSavingsProductId={selectSavingsProductId}
        />
      )}
      <Spacing size={8} />

      {selectedTab === 'results' && <SavingsResultTab filteredProducts={filteredProducts} />}
    </>
  );
}
