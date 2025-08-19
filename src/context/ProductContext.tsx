import { createContext, useContext, useState, type ReactNode } from "react";

type Product = {
  id: string;
  imageurl: string;
  title: string;
  gender: string;
  price: string;
  material?: string;
  tipShaped?: string;
};

type ProductContextType = {
  products: Product[];
  setProducts?: React.Dispatch<React.SetStateAction<Product[]>>;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products] = useState<Product[]>([
    {
      id: "123",
      imageurl:
        "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&auto=format&fit=crop&q=60",
      title: "sneakers",
      gender: "male",
      price: "500",
      material: "leather",
      tipShaped: "rounded",
    },
    {
      id: "1234",
      imageurl:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&auto=format&fit=crop&q=60",
      title: "sneakers",
      gender: "female",
      price: "500",
    },
    {
      id: "1235",
      imageurl:
        "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&auto=format&fit=crop&q=60",
      title: "sneakers",
      gender: "female",
      price: "500",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
