import SavingsProductsTab from 'domain/savingsCalculator/components/savingsProductsTab/SavingsProductsTab';
import SavingsResultTab from 'domain/savingsCalculator/components/SavingsResultTab/SavingsResultTab';
import { filterSavingsProducts } from 'domain/savingsCalculator/utils/filterSavingsProducts';
import { useState } from 'react';
import SectionPadding from 'shared/components/sectionPadding/SectionPadding';

import { useSavingsGoalsContext } from 'shared/context/SavingsGoalContext';
import { useSavingsProductsContext } from 'shared/context/SavingsProductsContext';
import { Tab } from 'tosslib';

type TabValue = 'products' | 'results';

export default function ProductsTabSection() {
  const { savingsProducts } = useSavingsProductsContext();
  const { savingsGoalState } = useSavingsGoalsContext();
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
    products: savingsProducts,
    goal: savingsGoalState,
  });

  const selectedProduct = savingsProducts.find(product => product.id === selectSavingsProductId) || null;

  return (
    <SectionPadding top={8}>
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

      {selectedTab === 'results' && (
        <SavingsResultTab
          filteredProducts={filteredProducts}
          selectedProduct={selectedProduct}
          savingsGoalState={savingsGoalState}
        />
      )}
    </SectionPadding>
  );
}
