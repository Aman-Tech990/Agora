import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import ProductCard from "../products/ProductCard";
import EmptyState from "../common/empty-state";

const recentlyLaunced = [
  {
    id: 1,
    name: "ParityKit",
    description: "A toolkit for creating parity products",
    tags: ["SaaS", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Modern Full Stack Next.js Course",
    description: "Learn to build production-ready full stack apps with Next.js",
    tags: ["Next.js", "Full-Stack", "Course"],
    votes: 125,
    isFeatured: false,
  },
];

const RecentlyLauncedProduct = () => {
  return (
    <section className="py-20">
      <div className="wrapper space-y-8">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />
        <div className="grid-wrapper">
          {
            recentlyLaunced.length < 0
              ? recentlyLaunced.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                )
              })
              : <EmptyState 
                message="No products launched in the last week. Check back soon for new launches."
                icon={CalendarIcon}
              />
              }
        </div>
      </div>
    </section>
  )
}

export default RecentlyLauncedProduct;

