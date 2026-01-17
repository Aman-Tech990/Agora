import { SparklesIcon } from "lucide-react";
import Link from "next/link";

const Logo = () => {
    return (
        <Link
            href="/"
            className="flex items-center gap-2 group"
        >
            <div className="flex items-center justify-center bg-primary size-8 rounded-lg">
                <SparklesIcon
                    className="size-4 text-primary-foreground"
                />
            </div>
            <span className="font-semibold text-lg">
                A<span className="text-primary">gor</span>a
            </span>
        </Link>
    );
}

const Header = () => {
    return (
        <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div
                className="wrapper px-12"
            >
                <Logo />
            </div>
        </div>
    )
}

export default Header;