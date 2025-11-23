import { describe, expect, test } from 'vitest';
import findProductById from './findProductById';

interface Product {
  id: string;
  name: string;
  price: number;
}

const mockProducts: Product[] = [
  { id: '1', name: '상품1', price: 1000 },
  { id: '2', name: '상품2', price: 2000 },
  { id: '3', name: '상품3', price: 3000 },
];

describe('findProductById', () => {
  test('존재하는 id이면 해당 상품을 반환해야 한다', () => {
    const result = findProductById<Product>({
      products: mockProducts,
      productId: '2',
    });

    expect(result).toEqual({ id: '2', name: '상품2', price: 2000 });
  });

  test('존재하지 않는 id이면 null을 반환해야 한다', () => {
    const result = findProductById<Product>({
      products: mockProducts,
      productId: '999',
    });

    expect(result).toBeNull();
  });

  test('productId가 null이면 null을 반환해야 한다', () => {
    const result = findProductById<Product>({
      products: mockProducts,
      productId: null,
    });

    expect(result).toBeNull();
  });

  test('products 배열이 비어 있어도 null을 반환해야 한다', () => {
    const result = findProductById<Product>({
      products: [],
      productId: '1',
    });

    expect(result).toBeNull();
  });
});
