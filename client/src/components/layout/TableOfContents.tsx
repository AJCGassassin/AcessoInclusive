import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  items: {
    id: string;
    title: string;
    level: number;
  }[];
  activeId?: string;
}

export default function TableOfContents({ items, activeId }: TableOfContentsProps) {
  return (
    <nav className="space-y-1">
      <p className="font-medium mb-4">Nesta página</p>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            "block text-sm py-1 text-muted-foreground hover:text-foreground",
            item.level === 2 && "pl-4",
            item.level === 3 && "pl-8",
            activeId === item.id && "text-primary font-medium"
          )}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}
