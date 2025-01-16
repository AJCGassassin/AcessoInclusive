import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

export function Search() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {isOpen ? (
        <div className="absolute right-0 top-0 w-[300px] flex">
          <Input
            type="search"
            placeholder="Buscar..."
            className="w-full"
            autoFocus
            onBlur={() => setIsOpen(false)}
          />
          <Button variant="ghost" size="icon" className="absolute right-0">
            <SearchIcon className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
          <SearchIcon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
