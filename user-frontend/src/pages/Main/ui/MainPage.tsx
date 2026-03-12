import { useEffect, useState } from "react";
import { Filters } from "../../../widgets/filters/ui/Filters";
import { ProductList } from "../../../entities/product/ui/ProductList";
import { ProductModal } from "../../../features/product/ui/ProductModal";
import { productApi } from "../../../entities/product/api/productApi";
import type { Product } from "../../../entities/product/model/types";
import type { ProductFilters } from "../../../entities/product/model/types";

export const MainPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);

  const [filters, setFilters] = useState<ProductFilters>({
    page: 1,
    limit: 12,
  });

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadProducts();
  }, [filters]);

  const loadProducts = async () => {
    const res = await productApi.getProducts(filters);

    setProducts(res.items);
    setTotalPages(res.pagination.totalPages);
  };

  return (
    <>
      <Filters
        onApply={(f) =>
          setFilters({
            ...filters,
            ...f,
            page: 1,
          })
        }
      />

      <ProductList
        products={products}
        page={filters.page}
        totalPages={totalPages}
        onPageChange={(p) =>
          setFilters({
            ...filters,
            page: p,
          })
        }
        onOpen={setSelected}
      />

      <ProductModal
        product={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </>
  );
};
