import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { topics } from "@/lib/topics";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent dark:text-white">
          Guia Completo de Acessibilidade Web
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Aprenda a criar sites e aplicações web acessíveis para todos os usuários
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Card key={topic.id}>
            <CardHeader>
              <CardTitle>{topic.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{topic.description}</p>
              <Link href={`/topic/${topic.id}`}>
                <Button>Ler mais</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}