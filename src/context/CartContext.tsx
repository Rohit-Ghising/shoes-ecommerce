import { createContext, useState, type ReactNode } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  imageurl: string;
  gender?: string;
  material?: string;
  tipShaped?: string;
}
export interface CartItem extends Product {
  quantity: number;
}
interface CartContextType {
  cart: cartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  total: number;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
const CartProvider = React.Fc < { children: ReactNode } >= { children }=>{
const [cart,setCart]= useState<CartItem[]>([])
//Add to Cart
const addToCart =(product:Product)=>{
  setCart((prev)=>{
    const existing = prev.find((item)=>item.id===product.id)
    if(existing){
      return prev.map((item)=>item.id===product.id?{...item,quantity:item.quantity +1}:item)
    }

    return[...prev,{...product,quantity: 1}]
  })
}


  
};
