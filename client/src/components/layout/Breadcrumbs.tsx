import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface BreadcrumbsProps {
  items: {
    label: string;
    href: string;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={item.href} className="inline-flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />}
            <Link href={item.href}>
              <a className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
