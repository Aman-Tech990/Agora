import { ArrowRightIcon, LucideIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import ProductCard from '../products/ProductCard';

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
            </div>
        </div>
    );
}

export default SectionHeader;