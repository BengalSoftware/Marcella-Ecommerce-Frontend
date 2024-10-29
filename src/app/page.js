import AllProducts from "@/components/home/allProducts/AllProducts";
import ExtraSubCategory from "@/components/home/extraSubCategory/ExtraSubCategory";
import AdsFestivalIndex from "@/components/home/festivalComponent";
import TopCategories from "@/components/home/header/TopCategories";
import BannerCategories from "@/components/home/heroSection";
import Messenger from "@/components/home/messenger/Messenger";
import ProductType from "@/components/home/productType/ProductType";
import TopBrands from "@/components/home/topBrands/TopBrands";

export default function Home() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-1 md:py-2">
        <div className="mx-4 md:mx-0">
          <BannerCategories />
          <TopCategories />
          <ExtraSubCategory />
          <AdsFestivalIndex />
          <TopBrands />
          <ProductType />
          <AllProducts />
          <Messenger />
        </div>
      </div>
    </div>
  );
}
