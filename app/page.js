import AddProduct from "@/components/AddProduct";
import DisplayProduct from "@/components/DisplayProduct";
import Header from "@/components/Header";
import Search from "@/components/Search";

export default function Home() {
  return (
    <div className="p-6">
      <Header />
      <Search />
      <AddProduct />
      <DisplayProduct />
    </div>
  );
}
