import { useState } from "react";
import { Header } from "../../../widgets/header/ui/Header";
import { Filters } from "../../../widgets/filters/ui/Filters";
import { ProductList } from "../../../entities/product/ui/ProductList";
import { ProductModal } from "../../../entities/product/ui/ProductModal";
import type { Product } from "../../../entities/product/model/types";
import { Footer } from "../../../widgets/footer/ui/Footer";

const mockProducts: Product[] = Array.from({ length: 8 }).map((_, i) => ({
  id: String(i),
  name: `Product ${i + 1}`,
  price: 100 + i * 10,
  img: "https://via.placeholder.com/300",
  available: 5,
  category: "electronics",
  description: "Полное описание товара",
}));

export const MainPage = () => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <Header cartCount={5} userName="Анастасия" />
      <Filters />
      <ProductList products={mockProducts} />
      <ProductModal
        product={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
      <Footer />
    </>
  );
};