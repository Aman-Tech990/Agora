import { ArrowRightIcon, LucideIcon } from 'lucide-react';
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

const SectionHeader = (
    { title, icon: Icon, description }:
        { title: string, icon: LucideIcon, description: string }
) => {
    return (
        <div className='mb-12'>
            <div className='flex w-full items-center justify-between mb-3'>
                <div>
                    <div className='flex items-center gap-2'>
                        <Icon className='size-6 text-primary' />
                        <h2 className='font-extrabold text-xl'>{title}</h2>
                    </div>
                    <p className='text-muted-foreground text-lg'>{description}</p>
                </div>

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
    );
}

export default SectionHeader;