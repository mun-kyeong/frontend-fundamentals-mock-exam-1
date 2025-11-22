import { SavingsGoalState } from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import SavingsProductsTab from 'domain/savingsCalculator/components/savingsProductsTab/SavingsProductsTab';
import { useState } from 'react';
import { Border, colors, ListHeader, ListRow, Spacing, Tab } from 'tosslib';
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

      <SavingsProductsTab
        savingsProductList={savingsProductList}
        savingsGoalState={savingsGoalState}
        handleSelectProduct={handleSelectProduct}
        selectSavingsProductId={selectSavingsProductId}
      />

      <Spacing size={8} />

      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="예상 수익 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`1,000,000원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="목표 금액과의 차이"
            topProps={{ color: colors.grey600 }}
            bottom={`-500,000원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="추천 월 납입 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`100,000원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />

      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />

      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />

      <ListRow
        contents={
          <ListRow.Texts
            type="3RowTypeA"
            top={'기본 정기적금'}
            topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
            middle={`연 이자율: 3.2%`}
            middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
            bottom={`100,000원 ~ 500,000원 | 12개월`}
            bottomProps={{ fontSize: 13, color: colors.grey600 }}
          />
        }
        onClick={() => {}}
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="3RowTypeA"
            top={'고급 정기적금'}
            topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
            middle={`연 이자율: 2.8%`}
            middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
            bottom={`50,000원 ~ 1,000,000원 | 24개월`}
            bottomProps={{ fontSize: 13, color: colors.grey600 }}
          />
        }
        onClick={() => {}}
      />

      <Spacing size={40} />

      {/* 아래는 사용자가 적금 상품을 선택하지 않고 계산 결과 탭을 선택했을 때 출력해주세요. */}
      {/* <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} /> */}
    </>
  );
}
