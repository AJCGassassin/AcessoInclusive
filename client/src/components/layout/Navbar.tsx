import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Search } from "@/components/ui/search";
import { topics } from "@/lib/topics";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">
            Guia de Acessibilidade
          </a>
        </Link>

        <div className="flex items-center gap-4">
          <Search />
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tópicos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {topics.map((topic) => (
                      <li key={topic.id}>
                        <NavigationMenuLink asChild>
                          <Link href={`/topic/${topic.id}`}>
                            <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{topic.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {topic.description}
                              </p>
                            </a>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
