import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

interface Product {
    id: number,
    name: string,
    description: string,
    tags: string[],
    votes: number,
    isFeatured: boolean,
};

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Link href={`/products/${product.id}`}>
            <Card
                className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400"
            >
                <CardHeader>
                    <div
                        className="flex items-center gap-2"
                    >
                        <CardTitle
                            className="text-lg group-hover:text-primary transition-colors"
                        >
                            {product.name}
                        </CardTitle>
                        {product.isFeatured &&
                            <Badge>
                                Featured
                            </Badge>
                        }
                    </div>
                    <CardDescription>
                        {product.description}
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <div
                        className="flex items-center gap-1.25"
                    >
                        {product.tags.map((tag) =>
                            <Badge
                                variant="secondary"
                                key={tag}
                            >
                                {tag}
                            </Badge>
                        )}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ProductCard;