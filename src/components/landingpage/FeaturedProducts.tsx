import React from 'react'
import SectionHeader from '../common/SectionHeader';
import { ArrowRightIcon, StarIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import ProductCard from '../products/ProductCard';

const featureProductItem = [
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

const FeaturedProducts = () => {
    return (
        <section className='py-20 bg-muted/20'>
            <div className='wrapper'>
                <div
                    className='flex items-center justify-between'
                >
                    <SectionHeader
                        title="Featured Today"
                        icon={StarIcon}
                        description="Top picks from our coomunity this week"
                    />
                    <Button
                        asChild
                        className='hidden sm:flex cursor-pointer rounded-lg'
                        variant='outline'
                    >
                        <Link
                            href="/explore"
                        >
                            View All <ArrowRightIcon size={4} />
                        </Link>
                    </Button>
                </div>
                <div className='grid-wrapper mt-10'>
                    {featureProductItem.map((product) =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </div>
            </div>
        </section>

    )
}

export default FeaturedProducts;