import { MOCK_PRODUCTS } from '../data/mockProducts';

const PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

/**
 * Busca os produtos na API. Em caso de erro ou resposta inválida,
 * retorna o dataset mock como fallback.
 */
export async function fetchProducts() {
  try {
    const response = await fetch(PRODUCTS_URL);
    if (!response.ok) throw new Error('Network error');

    const data = await response.json();
    if (data && data.success && data.products) {
      return data.products;
    }
    return MOCK_PRODUCTS;
  } catch (err) {
    console.warn('API Fetch error, falling back to mock data:', err);
    return MOCK_PRODUCTS;
  }
}
