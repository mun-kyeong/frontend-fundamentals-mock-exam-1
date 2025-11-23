import { Spacing } from 'tosslib';

export default function EmptySavingsProducts() {
  return (
    <div
      style={{
        padding: '48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#6B7684',
        fontSize: '14px',
        lineHeight: '20px',
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          backgroundColor: '#F2F4F6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
        }}
      >
        🧐
      </div>

      <Spacing size={12} />

      <div>조건에 맞는 저축 상품이 없어요</div>
      <div>다른 금액이나 기간으로 다시 찾아볼까요?</div>
    </div>
  );
}
