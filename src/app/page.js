import AllProducts from "@/components/home/allProducts/AllProducts";
import ComputingAndGaming from "@/components/home/computingAndGaming/ComputingAndGaming";
import AdsFestivalIndex from "@/components/home/festivalComponent";
import TopCategories from "@/components/home/header/TopCategories";
import BannerCategories from "@/components/home/heroSection";
import HomeAppliance from "@/components/home/homeAppliance/HomeAppliance";
import MensFashion from "@/components/home/mensFashion/MensFashion";
import MobileAndGadget from "@/components/home/mobileAndGadget/MobileAndGadget";
import PopularProducts from "@/components/home/popularProducts/PopularProducts";
import TopBrands from "@/components/home/topBrands/TopBrands";
import WomensFashion from "@/components/home/womensFashion/WomensFashion";

export default function Home() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-1 md:py-5">
        <div className="mx-4 md:mx-0">
          <BannerCategories />
          <TopCategories />
          <AdsFestivalIndex />
          <TopBrands />
          <PopularProducts />
          <MensFashion />
          <WomensFashion />
          <MobileAndGadget />
          <HomeAppliance />
          <ComputingAndGaming />
          <AllProducts />
        </div>
      </div>
    </div>
  );
}
