import SavingsProductsTab from 'domain/savingsCalculator/components/savingsProductsTab/SavingsProductsTab';
import SavingsResultTab from 'domain/savingsCalculator/components/SavingsResultTab/SavingsResultTab';
import useSelectedProduct from 'domain/savingsCalculator/hooks/useSelectedProduct';
import useSelectedTab from 'domain/savingsCalculator/hooks/useSelectedTab';
import { filterSavingsProducts } from 'domain/savingsCalculator/utils/filterSavingsProducts';
import findProductById from 'domain/savingsCalculator/utils/findProductById';
import { useMemo } from 'react';
import SectionPadding from 'shared/components/sectionPadding/SectionPadding';

import { useSavingsGoalsContext } from 'shared/context/SavingsGoalContext';
import { useSavingsProductsContext } from 'shared/context/SavingsProductsContext';
import { Tab } from 'tosslib';

export default function ProductsTabSection() {
  const { savingsProducts } = useSavingsProductsContext();
  const { savingsGoalState } = useSavingsGoalsContext();
  const { selectedProductId, handleSelectProduct } = useSelectedProduct();
  const { selectedTab, handleTabChange } = useSelectedTab();

  const filteredProducts = useMemo(() => {
    return filterSavingsProducts({
      products: savingsProducts,
      goal: savingsGoalState,
    });
  }, [savingsProducts, savingsGoalState]);

  const selectedProduct = useMemo(() => {
    return findProductById({
      products: savingsProducts,
      productId: selectedProductId,
    });
  }, [savingsProducts, selectedProductId]);

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
          selectedProductId={selectedProductId}
        />
      )}

      {selectedTab === 'results' && (
        <SavingsResultTab
          topRateProducts={filteredProducts.slice(0, 2)}
          selectedProduct={selectedProduct}
          savingsGoalState={savingsGoalState}
          handleSelectProduct={handleSelectProduct}
          selectedProductId={selectedProductId}
        />
      )}
    </SectionPadding>
  );
}
