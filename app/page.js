import AddProduct from "@/components/AddProduct";
import DisplayProduct from "@/components/DisplayProduct";
import Header from "@/components/Header";
import Search from "@/components/Search";
import { ProductProvider } from "./context/ProductContext";

export default function Home() {
  return (
    <div className="p-6">
      <ProductProvider>
        <Header />
        <Search />
        <AddProduct />
        <DisplayProduct />
      </ProductProvider>
    </div>
  );
}
