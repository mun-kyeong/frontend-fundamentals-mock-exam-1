interface FindProductByIdProps<T extends { id: string }> {
  products: T[];
  productId: string | null;
}

export default function findProductById<T extends { id: string }>({ products, productId }: FindProductByIdProps<T>) {
  return products.find(product => product.id === productId) || null;
}
