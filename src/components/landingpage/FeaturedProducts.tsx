import React from 'react'
import SectionHeader from '../common/SectionHeader';
import { StarIcon } from 'lucide-react';

const FeaturedProducts = () => {
    return (
        <section className='py-20 bg-muted/20'>
            <div className='wrapper'>
                <SectionHeader
                    title="Featured Today"
                    icon={StarIcon}
                    description="Top picks from our coomunity this week"
                />

            </div>
        </section>

    )
}

export default FeaturedProducts;