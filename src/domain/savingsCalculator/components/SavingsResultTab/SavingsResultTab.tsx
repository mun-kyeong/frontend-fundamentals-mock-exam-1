import { Border, colors, ListHeader, ListRow, Spacing } from 'tosslib';
import { SavingsProduct } from 'types/savingsProduct';

export const SAVINGS_RESULT_ITEMS = [
  {
    label: '예상 수익 금액',
    valueKey: 'expectedProfit',
    bottom: '1,000,000원',
  },
  {
    label: '목표 금액과의 차이',
    valueKey: 'goalDifference',
    bottom: '-500,000원',
  },
  {
    label: '추천 월 납입 금액',
    valueKey: 'recommendedMonthlyDeposit',
    bottom: '100,000원',
  },
] as const;

interface SavingsResultTabProps {
  filteredProducts: SavingsProduct[];
}

export default function SavingsResultTab({ filteredProducts }: SavingsResultTabProps) {
  return (
    <>
      {SAVINGS_RESULT_ITEMS.map(item => (
        <ListRow
          key={item.valueKey}
          contents={
            <ListRow.Texts
              type="2RowTypeA"
              top={item.label}
              topProps={{ color: colors.grey600 }}
              bottom={item.bottom}
              bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
            />
          }
        />
      ))}

      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />

      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />

      {filteredProducts.map(product => (
        <ListRow
          key={product.id}
          contents={
            <ListRow.Texts
              type="3RowTypeA"
              top={product.name}
              topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
              middle={`연 이자율: ${product.annualRate}%`}
              middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
              bottom={`${product.minMonthlyAmount.toLocaleString()}원 ~ ${product.maxMonthlyAmount.toLocaleString()}원 | ${product.availableTerms}개월`}
              bottomProps={{ fontSize: 13, color: colors.grey600 }}
            />
          }
          onClick={() => {}}
        />
      ))}

      <Spacing size={40} />

      {/* 아래는 사용자가 적금 상품을 선택하지 않고 계산 결과 탭을 선택했을 때 출력해주세요. */}
      {/* <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} /> */}
    </>
  );
}
