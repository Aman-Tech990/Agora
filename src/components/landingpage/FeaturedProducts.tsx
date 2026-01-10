import React from 'react'
import SectionHeader from '../common/SectionHeader';
import { StarIcon } from 'lucide-react';

const FeaturedProducts = () => {
    return (
        <section className='py-20 bg-muted/20'>
            <div className='wrapper'>
                <div className='flex items-center justify-between mb-8'>
                    <h1>
                        <SectionHeader
                            title="Featured Today"
                            icon={StarIcon}
                            description="Top picks from our coomunity this week"
                        />
                    </h1>
                </div>

            </div>
        </section>

    )
}

export default FeaturedProducts;