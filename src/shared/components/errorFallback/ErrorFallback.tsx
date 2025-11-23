import { useRouteError } from 'react-router-dom';

export default function ErrorFallback() {
  const error = useRouteError();

  return (
    <div
      style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>문제가 발생했어요</h2>
      <p style={{ color: '#666' }}>페이지를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>

      {import.meta.env.DEV && (
        <pre
          style={{
            marginTop: '16px',
            padding: '12px',
            background: '#f5f5f5',
            borderRadius: '8px',
            whiteSpace: 'pre-wrap',
            fontSize: '12px',
            color: '#333',
          }}
        >
          {String(error)}
        </pre>
      )}
    </div>
  );
}
