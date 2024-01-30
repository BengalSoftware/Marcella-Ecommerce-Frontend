import AdsFestivalIndex from "@/components/home/festivalComponent";
import TopCategories from "@/components/home/header/TopCategories";
import BannerCategories from "@/components/home/heroSection";
import MensFashion from "@/components/home/mensFashion/MensFashion";
import PopularProducts from "@/components/home/popularProducts/PopularProducts";
import TopBrands from "@/components/home/topBrands/TopBrands";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="container mx-auto py-10">
        <div className="mx-4 md:mx-0">
          <TopCategories />
          <BannerCategories />
          <AdsFestivalIndex />
          <TopBrands />
          <PopularProducts />
          <MensFashion />
        </div>
      </div>
    </div>
  );
}
