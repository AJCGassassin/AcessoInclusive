import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TableOfContents from "@/components/layout/TableOfContents";
import { topics } from "@/lib/topics";
import { useParams } from "wouter";

export default function Topic() {
  const { id } = useParams();
  const topic = topics.find((t) => t.id === id);

  if (!topic) {
    return <div>Tópico não encontrado</div>;
  }

  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: topic.title, href: `/topic/${topic.id}` },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12 mt-8">
        <article className="prose prose-slate max-w-none">
          <h1>{topic.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: topic.content }} />
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-8">
            <TableOfContents items={topic.sections} />
          </div>
        </aside>
      </div>
    </div>
  );
}
