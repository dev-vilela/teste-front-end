import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import CategoryBar from './components/CategoryBar/CategoryBar';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import PartnerBanners from './components/PartnerBanners/PartnerBanners';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import BrandsSection from './components/BrandsSection/BrandsSection';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import ProductModal from './components/ProductModal/ProductModal';
import { useProducts } from './hooks/useProducts';
import { useProductModal } from './hooks/useProductModal';

const PARTNER_IMAGE_1 =
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800';
const PARTNER_IMAGE_2 =
  'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=800';

export default function App() {
  const { products, loading } = useProducts();
  const modal = useProductModal();

  return (
    <div className="min-h-screen bg-[#F6F5FA] font-sans text-[#3F3F3F] flex flex-col">
      <Header />
      <HeroBanner />
      <CategoryBar />

      <ProductShowcase
        products={products}
        loading={loading}
        onOpenProduct={modal.open}
      />

      <PartnerBanners image={PARTNER_IMAGE_1} />

      <RelatedProducts products={products.slice(0, 4)} onOpenProduct={modal.open} />

      <PartnerBanners image={PARTNER_IMAGE_2} />

      <BrandsSection />

      <RelatedProducts products={products.slice(4, 8)} onOpenProduct={modal.open} />

      <Newsletter />
      <Footer />

      <ProductModal
        product={modal.selectedProduct}
        quantity={modal.quantity}
        onClose={modal.close}
        onIncrement={modal.increment}
        onDecrement={modal.decrement}
      />
    </div>
  );
}
