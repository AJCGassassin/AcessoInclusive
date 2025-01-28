export const topics = [
  {
    id: "wcag",
    title: "Diretrizes WCAG 2.1 e Heurísticas de Nielsen",
    description: "Guia simplificado de acessibilidade e usabilidade web",
    sections: [
      { id: "perceptivel", title: "Princípio 1: Perceptível", level: 1 },
      { id: "operavel", title: "Princípio 2: Operável", level: 1 },
      { id: "compreensivel", title: "Princípio 3: Compreensível", level: 1 },
      { id: "robusto", title: "Princípio 4: Robusto", level: 1 },
      { id: "heuristicas", title: "Heurísticas de Nielsen", level: 1 }
    ],
    content: `
      <h1>Acessibilidade e Usabilidade Web</h1>
      <p>Um guia prático combinando os princípios essenciais de acessibilidade do WCAG 2.1 com as heurísticas de usabilidade de Nielsen.</p>

      <h2 id="perceptivel">Princípio 1: Perceptível</h2>
      <p>Todos os usuários devem conseguir perceber o conteúdo, independente de suas limitações:</p>
      <ul>
        <li>Forneça alternativas em texto para conteúdo não textual (imagens, vídeos)</li>
        <li>Permita que o conteúdo seja apresentado de diferentes formas</li>
        <li>Torne fácil para os usuários ver e ouvir o conteúdo</li>
      </ul>

      <h2 id="operavel">Princípio 2: Operável</h2>
      <p>A interface deve ser navegável e utilizável por todos:</p>
      <ul>
        <li>Torne todas as funcionalidades acessíveis via teclado</li>
        <li>Dê tempo suficiente para leitura e uso</li>
        <li>Ajude os usuários a navegar e encontrar conteúdo</li>
      </ul>

      <h2 id="compreensivel">Princípio 3: Compreensível</h2>
      <p>O conteúdo e operação devem ser fáceis de entender:</p>
      <ul>
        <li>Use linguagem clara e simples</li>
        <li>Faça as páginas funcionarem de maneira previsível</li>
        <li>Ajude os usuários a evitar e corrigir erros</li>
      </ul>

      <h2 id="robusto">Princípio 4: Robusto</h2>
      <p>O conteúdo deve funcionar bem em diferentes tecnologias:</p>
      <ul>
        <li>Seja compatível com tecnologias assistivas</li>
        <li>Mantenha o código limpo e bem estruturado</li>
      </ul>

      <h2 id="heuristicas">Heurísticas de Nielsen</h2>
      <p>Dez princípios fundamentais de usabilidade:</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h3>1. Visibilidade do Status</h3>
          <p>Mantenha os usuários informados sobre o que está acontecendo.</p>
        </div>

        <div>
          <h3>2. Linguagem do Usuário</h3>
          <p>Use palavras e conceitos familiares ao usuário.</p>
        </div>

        <div>
          <h3>3. Controle e Liberdade</h3>
          <p>Permita desfazer e refazer ações facilmente.</p>
        </div>

        <div>
          <h3>4. Consistência</h3>
          <p>Mantenha padrões em toda a interface.</p>
        </div>

        <div>
          <h3>5. Prevenção de Erros</h3>
          <p>Previna problemas antes que aconteçam.</p>
        </div>

        <div>
          <h3>6. Reconhecimento</h3>
          <p>Mostre opções visíveis em vez de exigir memorização.</p>
        </div>

        <div>
          <h3>7. Flexibilidade</h3>
          <p>Atenda tanto iniciantes quanto experts.</p>
        </div>

        <div>
          <h3>8. Design Minimalista</h3>
          <p>Evite informações irrelevantes ou raramente necessárias.</p>
        </div>

        <div>
          <h3>9. Tratamento de Erros</h3>
          <p>Ajude a reconhecer e resolver erros.</p>
        </div>

        <div>
          <h3>10. Ajuda e Documentação</h3>
          <p>Forneça ajuda quando necessário.</p>
        </div>
      </div>

      <div class="bg-muted p-4 rounded-lg mt-8">
        <h3 class="text-lg font-medium mb-2">Leitura Complementar</h3>
        <ul>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">Guia Rápido WCAG 2.1</a></li>
          <li><a href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank">Heurísticas de Nielsen</a></li>
        </ul>
      </div>
    `
  },
  {
    id: "keyboard",
    title: "Navegação por Teclado",
    description: "Como implementar navegação completa por teclado em sua aplicação web",
    sections: [
      { id: "focus", title: "Gerenciamento de Foco", level: 1 },
      { id: "browser-shortcuts", title: "Atalhos do Navegador", level: 1 },
      { id: "system-shortcuts", title: "Atalhos do Sistema", level: 1 },
      { id: "page-navigation", title: "Navegação na Página", level: 1 },
      { id: "shortcuts", title: "Implementando Atalhos", level: 1 }
    ],
    content: `
      <h2 id="focus">Gerenciamento de Foco</h2>
      <p>O foco do teclado deve ser sempre visível e seguir uma ordem lógica de navegação. Alguns pontos importantes:</p>

      <h2 id="browser-shortcuts">Atalhos do Navegador</h2>
      <p>Atalhos comuns que funcionam na maioria dos navegadores:</p>

      <h3>Navegação entre Abas</h3>
      <ul>
        <li><kbd>Ctrl</kbd> + <kbd>Tab</kbd> - Próxima aba</li>
        <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> - Aba anterior</li>
        <li><kbd>Ctrl</kbd> + <kbd>1-8</kbd> - Ir para aba específica</li>
        <li><kbd>Ctrl</kbd> + <kbd>9</kbd> - Ir para última aba</li>
      </ul>

      <h3>Navegação na Página</h3>
      <ul>
        <li><kbd>Ctrl</kbd> + <kbd>F</kbd> - Buscar na página</li>
        <li><kbd>Ctrl</kbd> + <kbd>L</kbd> - Selecionar barra de endereço</li>
        <li><kbd>Alt</kbd> + <kbd>←</kbd> - Voltar na história</li>
        <li><kbd>Alt</kbd> + <kbd>→</kbd> - Avançar na história</li>
        <li><kbd>F5</kbd> ou <kbd>Ctrl</kbd> + <kbd>R</kbd> - Recarregar página</li>
      </ul>

      <h2 id="system-shortcuts">Atalhos do Sistema</h2>
      <p>Atalhos importantes do sistema operacional:</p>

      <h3>Windows</h3>
      <ul>
        <li><kbd>Alt</kbd> + <kbd>Tab</kbd> - Alternar entre aplicativos</li>
        <li><kbd>Windows</kbd> + <kbd>Tab</kbd> - Visualização de tarefas</li>
        <li><kbd>Alt</kbd> + <kbd>F4</kbd> - Fechar aplicativo atual</li>
        <li><kbd>Windows</kbd> + <kbd>M</kbd> - Minimizar todas as janelas</li>
      </ul>

      <h3>macOS</h3>
      <ul>
        <li><kbd>Cmd</kbd> + <kbd>Tab</kbd> - Alternar entre aplicativos</li>
        <li><kbd>Cmd</kbd> + <kbd>Space</kbd> - Abrir Spotlight</li>
        <li><kbd>Cmd</kbd> + <kbd>Q</kbd> - Fechar aplicativo atual</li>
        <li><kbd>Cmd</kbd> + <kbd>M</kbd> - Minimizar janela atual</li>
      </ul>

      <h2 id="page-navigation">Navegação na Página</h2>
      <p>Teclas essenciais para navegar dentro de uma página web:</p>
      <ul>
        <li><kbd>Tab</kbd> - Avançar para próximo elemento interativo</li>
        <li><kbd>Shift</kbd> + <kbd>Tab</kbd> - Voltar para elemento anterior</li>
        <li><kbd>Space</kbd> ou <kbd>Enter</kbd> - Ativar elemento selecionado</li>
        <li><kbd>Page Up</kbd>/<kbd>Page Down</kbd> - Rolar página</li>
        <li><kbd>Home</kbd>/<kbd>End</kbd> - Ir para início/fim da página</li>
      </ul>

      <h3>Navegação por Cabeçalhos</h3>
      <p>Em leitores de tela:</p>
      <ul>
        <li><kbd>H</kbd> - Próximo cabeçalho</li>
        <li><kbd>1-6</kbd> - Próximo cabeçalho de nível específico</li>
        <li><kbd>Shift</kbd> + <kbd>H</kbd> - Cabeçalho anterior</li>
      </ul>

      <h2 id="shortcuts">Implementando Atalhos</h2>
      <p>Ao implementar atalhos de teclado em sua aplicação:</p>
      <ul>
        <li>Evite conflitos com atalhos do navegador e do sistema</li>
        <li>Forneça uma maneira de visualizar e personalizar atalhos</li>
        <li>Use combinações intuitivas e consistentes</li>
        <li>Documente todos os atalhos disponíveis</li>
      </ul>

      <div class="bg-muted p-4 rounded-lg mt-4">
        <h3 class="text-lg font-medium mb-2">Dica de Acessibilidade</h3>
        <p>Ao implementar atalhos de teclado, sempre considere usuários que podem ter dificuldades motoras. 
        Evite combinações que exijam pressionar muitas teclas simultaneamente e forneça alternativas para 
        ações importantes.</p>
      </div>
    `
  },
  {
    id: "screen-readers",
    title: "Leitores de Tela",
    description: "Boas práticas para garantir compatibilidade com leitores de tela",
    sections: [
      { id: "aria", title: "Atributos ARIA", level: 1 },
      { id: "live-regions", title: "Regiões Live", level: 2 },
      { id: "roles", title: "Roles e Estados", level: 2 },
      { id: "semantics", title: "HTML Semântico", level: 1 },
      { id: "headings", title: "Estrutura de Cabeçalhos", level: 2 },
      { id: "landmarks", title: "Pontos de Referência", level: 2 },
      { id: "forms", title: "Formulários Acessíveis", level: 1 },
      { id: "testing", title: "Testando com Leitores de Tela", level: 1 }
    ],
    content: `
      <h2 id="aria">Atributos ARIA</h2>
      <p>ARIA (Accessible Rich Internet Applications) é um conjunto de atributos que define maneiras de tornar o conteúdo web mais acessível para pessoas com deficiências. Aqui estão as principais categorias:</p>

      <h3 id="live-regions">Regiões Live</h3>
      <p>Regiões live são áreas da página que são atualizadas dinamicamente e precisam ser anunciadas por leitores de tela:</p>

      <h3 id="roles">Roles e Estados</h3>
      <p>Use roles para definir o papel de um elemento e estados para informar sua condição atual:</p>

      <h2 id="semantics">HTML Semântico</h2>
      <p>O uso correto de elementos HTML semânticos é fundamental para acessibilidade:</p>

      <h3 id="headings">Estrutura de Cabeçalhos</h3>
      <p>Mantenha uma hierarquia lógica de cabeçalhos:</p>

      <h3 id="landmarks">Pontos de Referência</h3>
      <p>Use elementos semânticos para definir regiões importantes da página:</p>

      <h2 id="forms">Formulários Acessíveis</h2>
      <p>Dicas para criar formulários acessíveis:</p>

      <h2 id="testing">Testando com Leitores de Tela</h2>
      <p>É importante testar seu site com diferentes leitores de tela:</p>

      <h3>Checklist de Testes</h3>

      <div class="bg-muted p-4 rounded-lg mt-4">
        <h3 class="text-lg font-medium mb-2">Recursos Adicionais</h3>
        <ul>
          <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide (APG)</a></li>
          <li><a href="https://webaim.org/articles/screenreader_testing/" target="_blank">WebAIM: Testing with Screen Readers</a></li>
          <li><a href="https://www.nvaccess.org/" target="_blank">NVDA Screen Reader</a></li>
        </ul>
      </div>

      <div class="bg-muted p-4 rounded-lg mt-4">
        <h3 class="text-lg font-medium mb-2">Dica de Desenvolvimento</h3>
        <p>Durante o desenvolvimento, use a extensão WAVE (Web Accessibility Evaluation Tool) 
        do navegador para identificar problemas comuns de acessibilidade e verificar se seus 
        elementos ARIA estão sendo implementados corretamente.</p>
      </div>
    `
  },
  {
    id: "dev-guidelines",
    title: "Desenvolvimento Web Acessível",
    description: "Guia prático para criar sites acessíveis com foco em elementos específicos e exemplos de código",
    sections: [
      { id: "images", title: "Imagens", level: 1 },
      { id: "images-examples", title: "Exemplos de Implementação", level: 2 },
      { id: "images-checklist", title: "Checklist de Imagens", level: 2 },
      { id: "images-wcag", title: "WCAG para Imagens", level: 2 },
      { id: "videos", title: "Vídeos", level: 1 },
      { id: "videos-examples", title: "Exemplos de Implementação", level: 2 },
      { id: "videos-checklist", title: "Checklist de Vídeos", level: 2 },
      { id: "videos-wcag", title: "WCAG para Vídeos", level: 2 },
      { id: "semantic", title: "Semântica HTML", level: 1 },
      { id: "semantic-examples", title: "Exemplos de Implementação", level: 2 },
      { id: "semantic-checklist", title: "Checklist de Semântica", level: 2 },
      { id: "semantic-wcag", title: "WCAG para Semântica", level: 2 },
      { id: "react", title: "Componentes React Acessíveis", level: 1 },
      { id: "react-examples", title: "Exemplos de Implementação", level: 2 },
      { id: "react-checklist", title: "Checklist de React", level: 2 },
      { id: "forms", title: "Formulários Acessíveis", level: 1 },
      { id: "forms-examples", title: "Exemplos de Implementação", level: 2 },
      { id: "forms-checklist", title: "Checklist de Formulários", level: 2 }
    ],
    content: `
      <h1>Desenvolvimento Web Acessível</h1>
      <p>Um guia prático e detalhado para implementar acessibilidade em elementos específicos do seu site, com exemplos de código e melhores práticas.</p>

      <h2 id="images">Imagens</h2>
      <p>As imagens são elementos fundamentais para a web moderna, mas precisam ser implementadas corretamente para serem acessíveis.</p>

      <h3 id="images-examples">Exemplos de Implementação</h3>

      <h4>HTML Básico</h4>
      <pre><code class="language-html">&lt;!-- Imagem com texto alternativo --&gt;
&lt;img 
  src="/caminho/para/imagem.jpg" 
  alt="Descrição clara da imagem"
  loading="lazy" 
/&gt;

&lt;!-- Imagem decorativa --&gt;
&lt;img 
  src="/caminho/para/decorativa.jpg" 
  alt="" 
  role="presentation"
/&gt;

&lt;!-- Figura com legenda --&gt;
&lt;figure&gt;
  &lt;img 
    src="/caminho/para/grafico.jpg" 
    alt="Descrição detalhada do gráfico"
  /&gt;
  &lt;figcaption&gt;Legenda explicativa do gráfico&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>

      <h4>Componente React</h4>
      <pre><code class="language-tsx">import { useState } from 'react';
import Image from 'next/image';

interface AccessibleImageProps {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export function AccessibleImage({ 
  src, 
  alt, 
  caption, 
  width, 
  height 
}: AccessibleImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    &lt;figure className="relative"&gt;
      &lt;div 
        className={\`
          relative overflow-hidden
          \${!isLoaded ? 'animate-pulse bg-gray-200' : ''}
        \`}
        style={{ aspectRatio: width / height }}
      &gt;
        &lt;Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoadingComplete={() => setIsLoaded(true)}
          className={\`
            object-cover transition-opacity duration-300
            \${isLoaded ? 'opacity-100' : 'opacity-0'}
          \`}
        /&gt;
      &lt;/div&gt;
      {caption && (
        &lt;figcaption className="mt-2 text-sm text-gray-600"&gt;
          {caption}
        &lt;/figcaption&gt;
      )}
    &lt;/figure&gt;
  );
}</code></pre>

      <h3 id="images-checklist">Checklist de Imagens</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 border rounded-lg">
          <h4 class="font-medium mb-2">Texto Alternativo</h4>
          <ul class="space-y-2">
            <li>✓ Alt text descritivo e conciso</li>
            <li>✓ Alt vazio para imagens decorativas</li>
            <li>✓ Descrições longas para imagens complexas</li>
            <li>✓ Contexto adequado no texto alternativo</li>
          </ul>
        </div>

        <div class="p-4 border rounded-lg">
          <h4 class="font-medium mb-2">Performance</h4>
          <ul class="space-y-2">
            <li>✓ Carregamento lazy para imagens</li>
            <li>✓ Formato de imagem otimizado</li>
            <li>✓ Dimensões responsivas</li>
            <li>✓ Estados de carregamento</li>
          </ul>
        </div>

        <div class="p-4 border rounded-lg">
          <h4 class="font-medium mb-2">Visual</h4>
          <ul class="space-y-2">
            <li>✓ Contraste adequado</li>
            <li>✓ Não depende apenas de cores</li>
            <li>✓ Legível em diferentes tamanhos</li>
            <li>✓ Suporte a modo escuro</li>
          </ul>
        </div>

        <div class="p-4 border rounded-lg">
          <h4 class="font-medium mb-2">Técnico</h4>
          <ul class="space-y-2">
            <li>✓ Markup semântico correto</li>
            <li>✓ Atributos ARIA quando necessário</li>
            <li>✓ Fallbacks para erros</li>
            <li>✓ Suporte a alto contraste</li>
          </ul>
        </div>
      </div>

      <h2 id="videos">Vídeos</h2>
      <p>Conteúdo em vídeo precisa ser acessível para todos os usuários.</p>

      <h3 id="videos-examples">Exemplos de Implementação</h3>

      <h4>HTML com Legendas</h4>
      <pre><code class="language-html">&lt;!-- Vídeo com legendas e descrição --&gt;
&lt;figure&gt;
  &lt;video 
    controls 
    preload="metadata"
    poster="/thumbnail.jpg"
  &gt;
    &lt;source src="/video.mp4" type="video/mp4" /&gt;
    &lt;track 
      kind="captions" 
      src="/legendas.vtt" 
      srclang="pt" 
      label="Português" 
    /&gt;
    &lt;track 
      kind="descriptions" 
      src="/descricoes.vtt" 
      srclang="pt" 
      label="Descrições" 
    /&gt;
    Seu navegador não suporta o elemento video.
  &lt;/video&gt;
  &lt;figcaption&gt;
    Título do vídeo - Clique para ativar legendas
  &lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>

      <h4>Componente React para Player de Vídeo</h4>
      <pre><code class="language-tsx">import { useState, useRef } from 'react';

interface AccessibleVideoProps {
  src: string;
  poster?: string;
  captions?: {
    src: string;
    label: string;
    language: string;
  }[];
  title: string;
  description?: string;
}

export function AccessibleVideo({
  src,
  poster,
  captions,
  title,
  description
}: AccessibleVideoProps) {
  const videoRef = useRef&lt;HTMLVideoElement&gt;(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    &lt;figure className="w-full"&gt;
      &lt;div 
        className="relative"
        role="region"
        aria-label={\`Player de vídeo: \${title}\`}
      &gt;
        &lt;video
          ref={videoRef}
          className="w-full"
          poster={poster}
          controls
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        &gt;
          &lt;source src={src} type="video/mp4" /&gt;
          {captions?.map((caption) => (
            &lt;track
              key={caption.language}
              kind="captions"
              src={caption.src}
              srcLang={caption.language}
              label={caption.label}
            /&gt;
          ))}
        &lt;/video&gt;

        &lt;button
          className="absolute inset-0 w-full h-full bg-black/50 flex items-center justify-center"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
        &gt;
          {/* Ícone de play/pause */}
        &lt;/button&gt;
      &lt;/div&gt;

      &lt;figcaption className="mt-2"&gt;
        &lt;h3 className="text-lg font-medium"&gt;{title}&lt;/h3&gt;
        {description && (
          &lt;p className="mt-1 text-gray-600"&gt;{description}&lt;/p&gt;
        )}
      &lt;/figcaption&gt;
    &lt;/figure&gt;
  );
}</code></pre>

      <h2 id="react">Componentes React Acessíveis</h2>
      <p>Guia para criar componentes React que seguem as melhores práticas de acessibilidade.</p>

      <h3 id="react-examples">Exemplos de Implementação</h3>

      <h4>Botão Acessível</h4>
      <pre><code class="language-tsx">interface AccessibleButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  icon?: React.ReactNode;
}

export function AccessibleButton({
  onClick,
  children,
  isLoading,
  variant = 'primary',
  disabled,
  icon
}: AccessibleButtonProps) {
  return (
    &lt;button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={\`
        inline-flex items-center gap-2 px-4 py-2 rounded
        transition-colors focus:outline-none focus:ring-2
        \${variant === 'primary' 
          ? 'bg-primary text-white' 
          : 'bg-gray-100 text-gray-900'
        }
        \${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}
      \`}
      aria-busy={isLoading}
    &gt;
      {icon && &lt;span className="w-4 h-4"&gt;{icon}&lt;/span&gt;}
      {isLoading ? 'Carregando...' : children}
    &lt;/button&gt;
  );
}</code></pre>

      <h4>Menu Dropdown Acessível</h4>
      <pre><code class="language-tsx">import { useState, useRef, useEffect } from 'react';

interface MenuItem {
  id: string;
  label: string;
  onSelect: () => void;
}

interface AccessibleDropdownProps {
  label: string;
  items: MenuItem[];
}

export function AccessibleDropdown({ 
  label, 
  items 
}: AccessibleDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef&lt;HTMLButtonElement&gt;(null);
  const menuRef = useRef&lt;HTMLDivElement&gt;(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        if (!isOpen) {
          setIsOpen(true);
        }
        const firstItem = menuRef.current?.querySelector('button');
        firstItem?.focus();
        event.preventDefault();
        break;
    }
  };

  return (
    &lt;div className="relative"&gt;
      &lt;button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="px-4 py-2 rounded border"
      &gt;
        {label}
      &lt;/button&gt;

      {isOpen && (
        &lt;div
          ref={menuRef}
          role="menu"
          aria-orientation="vertical"
          className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-lg"
        &gt;
          {items.map((item) => (
            &lt;button
              key={item.id}
              role="menuitem"
              onClick={() => {
                item.onSelect();
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            &gt;
              {item.label}
            &lt;/button&gt;
          ))}
        &lt;/div&gt;
      )}
    &lt;/div&gt;
  );
}</code></pre>

      <h2 id="forms">Formulários Acessíveis</h2>
      <p>Implementação de formulários acessíveis com validação e feedback apropriado.</p>

      <h3 id="forms-examples">Exemplos de Implementação</h3>

      <h4>Formulário de Contato Acessível</h4>
      <pre><code class="language-tsx">import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string()
    .min(1, 'Nome é obrigatório')
    .max(100, 'Nome muito longo'),
  email: z.string()
    .min(1, 'E-mail é obrigatório')
    .email('E-mail inválido'),
  message: z.string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(1000, 'Mensagem muito longa')
});

type ContactForm = z.infer&lt;typeof contactSchema&gt;;

export function AccessibleContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm&lt;ContactForm&gt;({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    // Lógica de envio
    console.log(data);
  };

  return (
    &lt;form 
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    &gt;
      &lt;div&gt;
        &lt;label 
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        &gt;
          Nome
        &lt;/label&gt;
        &lt;input
          id="name"
          type="text"
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={\`
            mt-1 block w-full rounded-md border-gray-300 shadow-sm
            focus:border-primary focus:ring-primary
            \${errors.name ? 'border-red-500' : ''}
          \`}
        /&gt;
        {errors.name && (
          &lt;p 
            id="name-error" 
            className="mt-1 text-sm text-red-600"
            role="alert"
          &gt;
            {errors.name.message}
          &lt;/p&gt;
        )}
      &lt;/div&gt;

      &lt;div&gt;
        &lt;label 
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        &gt;
          E-mail
        &lt;/label&gt;
        &lt;input
          id="email"
          type="email"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={\`
            mt-1 block w-full rounded-md border-gray-300 shadow-sm
            focus:border-primary focus:ring-primary
            \${errors.email ? 'border-red-500' : ''}
          \`}
        /&gt;
        {errors.email && (
          &lt;p 
            id="email-error" 
            className="mt-1 text-sm text-red-600"
            role="alert"
          &gt;
            {errors.email.message}
          &lt;/p&gt;
        )}
      &lt;/div&gt;

      &lt;div&gt;
        &lt;label 
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        &gt;
          Mensagem
        &lt;/label&gt;
        &lt;textarea
          id="message"
          {...register('message')}
          rows={4}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={\`
            mt-1 block w-full rounded-md border-gray-300 shadow-sm
            focus:border-primary focus:ring-primary
            \${errors.message ? 'border-red-500' : ''}
          \`}
        /&gt;
        {errors.message && (
          &lt;p 
            id="message-error"            className="mt-1 text-sm text-red-600"
            role="alert"
          &gt;
            {errors.message.message}
          &lt;/p&gt;
        )}
      &lt;/div&gt;

      &lt;button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      &gt;
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      &lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

      <div class="bg-muted p-4 rounded-lg mt-8">
        <h3 class="text-lg font-medium mb-2">Recursos Adicionais</h3>
        <ul>
          <li><a href="https://www.w3.org/WAI/tutorials/" target="_blank">W3C Web Accessibility Tutorials</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" target="_blank">MDN Web Docs - Accessibility</a></li>
          <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG Guidelines</a></li>
          <li><a href="https://react.dev/reference/react/accessibility" target="_blank">React Accessibility Guide</a></li>
        </ul>
      </div>
    `
  }
  ,
  {
    id: "dev-guidelines",
    title: "Desenvolvimento Web Acessível",
    description: "Guia prático para criar sites acessíveis com foco em elementos específicos e exemplos de código",
    sections: [
      { id: "images", title: "Imagens", level: 1 },
      { id: "images-examples", title: "Exemplos de Implementação", level: 2 },
      { id: "images-checklist", title: "Checklist de Imagens", level: 2 },
      { id: "images-wcag", title: "WCAG para Imagens", level: 2 },
      { id: "videos", title: "Vídeos", level: 1 },
      { id: "videos-examples", title: "Exemplos de Implementação", level: 2 },
      { id: "videos-checklist", title: "Checklist de Vídeos", level: 2 },
      { id: "videos-wcag", title: "WCAG para Vídeos", level: 2 },
      { id: "semantic", title: "Semântica HTML", level: 1 },
      { id: "semantic-examples", title: "Exemplos de Implementação", level: 2 },
      { id: "semantic-checklist", title: "Checklist de Semântica", level: 2 },
      { id: "semantic-wcag", title: "WCAG para Semântica", level: 2 },
      { id: "react", title: "Componentes React Acessíveis", level: 1 },
      { id: "react-examples", title: "Exemplos de Implementação", level: 2 },
      { id: "react-checklist", title: "Checklist de React", level: 2 },
      { id: "forms", title: "Formulários Acessíveis", level: 1 },
      { id: "forms-examples", title: "Exemplos de Implementação", level: 2 },
      { id: "forms-checklist", title: "Checklist de Formulários", level: 2 }
    ],
    content: `
      <h1>Desenvolvimento Web Acessível</h1>
      <p>Um guia prático e detalhado para implementar acessibilidade em elementos específicos do seu site, com exemplos de código e melhores práticas.</p>

      <h2 id="images">Imagens</h2>
      <p>As imagens são elementos fundamentais para a web moderna, mas precisam ser implementadas corretamente para serem acessíveis.</p>

      <h3 id="images-examples">Exemplos de Implementação</h3>

      <h4>HTML Básico</h4>
      <pre><code class="language-html">&lt;!-- Imagem com texto alternativo --&gt;
&lt;img 
  src="/caminho/para/imagem.jpg" 
  alt="Descrição clara da imagem"
  loading="lazy" 
/&gt;

&lt;!-- Imagem decorativa --&gt;
&lt;img 
  src="/caminho/para/decorativa.jpg" 
  alt="" 
  role="presentation"
/&gt;

&lt;!-- Figura com legenda --&gt;
&lt;figure&gt;
  &lt;img 
    src="/caminho/para/grafico.jpg" 
    alt="Descrição detalhada do gráfico"
  /&gt;
  &lt;figcaption&gt;Legenda explicativa do gráfico&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>

      <h4>Componente React</h4>
      <pre><code class="language-tsx">import { useState } from 'react';
import Image from 'next/image';

interface AccessibleImageProps {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export function AccessibleImage({ 
  src, 
  alt, 
  caption, 
  width, 
  height 
}: AccessibleImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    &lt;figure className="relative"&gt;
      &lt;div 
        className={\`
          relative overflow-hidden
          \${!isLoaded ? 'animate-pulse bg-gray-200' : ''}
        \`}
        style={{ aspectRatio: width / height }}
      &gt;
        &lt;Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoadingComplete={() => setIsLoaded(true)}
          className={\`
            object-cover transition-opacity duration-300
            \${isLoaded ? 'opacity-100' : 'opacity-0'}
          \`}
        /&gt;
      &lt;/div&gt;
      {caption && (
        &lt;figcaption className="mt-2 text-sm text-gray-600"&gt;
          {caption}
        &lt;/figcaption&gt;
      )}
    &lt;/figure&gt;
  );
}</code></pre>

      <h3 id="images-checklist">Checklist de Imagens</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 border rounded-lg">
          <h4 class="font-medium mb-2">Texto Alternativo</h4>
          <ul class="space-y-2">
            <li>✓ Alt text descritivo e conciso</li>
            <li>✓ Alt vazio para imagens decorativas</li>
            <li>✓ Descrições longas para imagens complexas</li>
            <li>✓ Contexto adequado no texto alternativo</li>
          </ul>
        </div>

        <div class="p-4 border rounded-lg">
          <h4 class="font-medium mb-2">Performance</h4>
          <ul class="space-y-2">
            <li>✓ Carregamento lazy para imagens</li>
            <li>✓ Formato de imagem otimizado</li>
            <li>✓ Dimensões responsivas</li>
            <li>✓ Estados de carregamento</li>
          </ul>
        </div>

        <div class="p-4 border rounded-lg">
          <h4 class="font-medium mb-2">Visual</h4>
          <ul class="space-y-2">
            <li>✓ Contraste adequado</li>
            <li>✓ Não depende apenas de cores</li>
            <li>✓ Legível em diferentes tamanhos</li>
            <li>✓ Suporte a modo escuro</li>
          </ul>
        </div>

        <div class="p-4 border rounded-lg">
          <h4 class="font-medium mb-2">Técnico</h4>
          <ul class="space-y-2">
            <li>✓ Markup semântico correto</li>
            <li>✓ Atributos ARIA quando necessário</li>
            <li>✓ Fallbacks para erros</li>
            <li>✓ Suporte a alto contraste</li>
          </ul>
        </div>
      </div>

      <h2 id="videos">Vídeos</h2>
      <p>Conteúdo em vídeo precisa ser acessível para todos os usuários.</p>

      <h3 id="videos-examples">Exemplos de Implementação</h3>

      <h4>HTML com Legendas</h4>
      <pre><code class="language-html">&lt;!-- Vídeo com legendas e descrição --&gt;
&lt;figure&gt;
  &lt;video 
    controls 
    preload="metadata"
    poster="/thumbnail.jpg"
  &gt;
    &lt;source src="/video.mp4" type="video/mp4" /&gt;
    &lt;track 
      kind="captions" 
      src="/legendas.vtt" 
      srclang="pt" 
      label="Português" 
    /&gt;
    &lt;track 
      kind="descriptions" 
      src="/descricoes.vtt" 
      srclang="pt" 
      label="Descrições" 
    /&gt;
    Seu navegador não suporta o elemento video.
  &lt;/video&gt;
  &lt;figcaption&gt;
    Título do vídeo - Clique para ativar legendas
  &lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>

      <h4>Componente React para Player de Vídeo</h4>
      <pre><code class="language-tsx">import { useState, useRef } from 'react';

interface AccessibleVideoProps {
  src: string;
  poster?: string;
  captions?: {
    src: string;
    label: string;
    language: string;
  }[];
  title: string;
  description?: string;
}

export function AccessibleVideo({
  src,
  poster,
  captions,
  title,
  description
}: AccessibleVideoProps) {
  const videoRef = useRef&lt;HTMLVideoElement&gt;(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    &lt;figure className="w-full"&gt;
      &lt;div 
        className="relative"
        role="region"
        aria-label={\`Player de vídeo: \${title}\`}
      &gt;
        &lt;video
          ref={videoRef}
          className="w-full"
          poster={poster}
          controls
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        &gt;
          &lt;source src={src} type="video/mp4" /&gt;
          {captions?.map((caption) => (
            &lt;track
              key={caption.language}
              kind="captions"
              src={caption.src}
              srcLang={caption.language}
              label={caption.label}
            /&gt;
          ))}
        &lt;/video&gt;

        &lt;button
          className="absolute inset-0 w-full h-full bg-black/50 flex items-center justify-center"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
        &gt;
          {/* Ícone de play/pause */}
        &lt;/button&gt;
      &lt;/div&gt;

      &lt;figcaption className="mt-2"&gt;
        &lt;h3 className="text-lg font-medium"&gt;{title}&lt;/h3&gt;
        {description && (
          &lt;p className="mt-1 text-gray-600"&gt;{description}&lt;/p&gt;
        )}
      &lt;/figcaption&gt;
    &lt;/figure&gt;
  );
}</code></pre>

      <h2 id="react">Componentes React Acessíveis</h2>
      <p>Guia para criar componentes React que seguem as melhores práticas de acessibilidade.</p>

      <h3 id="react-examples">Exemplos de Implementação</h3>

      <h4>Botão Acessível</h4>
      <pre><code class="language-tsx">interface AccessibleButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  icon?: React.ReactNode;
}

export function AccessibleButton({
  onClick,
  children,
  isLoading,
  variant = 'primary',
  disabled,
  icon
}: AccessibleButtonProps) {
  return (
    &lt;button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={\`
        inline-flex items-center gap-2 px-4 py-2 rounded
        transition-colors focus:outline-none focus:ring-2
        \${variant === 'primary' 
          ? 'bg-primary text-white' 
          : 'bg-gray-100 text-gray-900'
        }
        \${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}
      \`}
      aria-busy={isLoading}
    &gt;
      {icon && &lt;span className="w-4 h-4"&gt;{icon}&lt;/span&gt;}
      {isLoading ? 'Carregando...' : children}
    &lt;/button&gt;
  );
}</code></pre>

      <h4>Menu Dropdown Acessível</h4>
      <pre><code class="language-tsx">import { useState, useRef, useEffect } from 'react';

interface MenuItem {
  id: string;
  label: string;
  onSelect: () => void;
}

interface AccessibleDropdownProps {
  label: string;
  items: MenuItem[];
}

export function AccessibleDropdown({ 
  label, 
  items 
}: AccessibleDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef&lt;HTMLButtonElement&gt;(null);
  const menuRef = useRef&lt;HTMLDivElement&gt;(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        if (!isOpen) {
          setIsOpen(true);
        }
        const firstItem = menuRef.current?.querySelector('button');
        firstItem?.focus();
        event.preventDefault();
        break;
    }
  };

  return (
    &lt;div className="relative"&gt;
      &lt;button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="px-4 py-2 rounded border"
      &gt;
        {label}
      &lt;/button&gt;

      {isOpen && (
        &lt;div
          ref={menuRef}
          role="menu"
          aria-orientation="vertical"
          className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-lg"
        &gt;
          {items.map((item) => (
            &lt;button
              key={item.id}
              role="menuitem"
              onClick={() => {
                item.onSelect();
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            &gt;
              {item.label}
            &lt;/button&gt;
          ))}
        &lt;/div&gt;
      )}
    &lt;/div&gt;
  );
}</code></pre>

      <h2 id="forms">Formulários Acessíveis</h2>
      <p>Implementação de formulários acessíveis com validação e feedback apropriado.</p>

      <h3 id="forms-examples">Exemplos de Implementação</h3>

      <h4>Formulário de Contato Acessível</h4>
      <pre><code class="language-tsx">import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string()
    .min(1, 'Nome é obrigatório')
    .max(100, 'Nome muito longo'),
  email: z.string()
    .min(1, 'E-mail é obrigatório')
    .email('E-mail inválido'),
  message: z.string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(1000, 'Mensagem muito longa')
});

type ContactForm = z.infer&lt;typeof contactSchema&gt;;

export function AccessibleContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm&lt;ContactForm&gt;({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    // Lógica de envio
    console.log(data);
  };

  return (
    &lt;form 
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    &gt;
      &lt;div&gt;
        &lt;label 
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        &gt;
          Nome
        &lt;/label&gt;
        &lt;input
          id="name"
          type="text"
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={\`
            mt-1 block w-full rounded-md border-gray-300 shadow-sm
            focus:border-primary focus:ring-primary
            \${errors.name ? 'border-red-500' : ''}
          \`}
        /&gt;
        {errors.name && (
          &lt;p 
            id="name-error" 
            className="mt-1 text-sm text-red-600"
            role="alert"
          &gt;
            {errors.name.message}
          &lt;/p&gt;
        )}
      &lt;/div&gt;

      &lt;div&gt;
        &lt;label 
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        &gt;
          E-mail
        &lt;/label&gt;
        &lt;input
          id="email"
          type="email"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={\`
            mt-1 block w-full rounded-md border-gray-300 shadow-sm
            focus:border-primary focus:ring-primary
            \${errors.email ? 'border-red-500' : ''}
          \`}
        /&gt;
        {errors.email && (
          &lt;p 
            id="email-error" 
            className="mt-1 text-sm text-red-600"
            role="alert"
          &gt;
            {errors.email.message}
          &lt;/p&gt;
        )}
      &lt;/div&gt;

      &lt;div&gt;
        &lt;label 
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        &gt;
          Mensagem
        &lt;/label&gt;
        &lt;textarea
          id="message"
          {...register('message')}
          rows={4}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={\`
            mt-1 block w-full rounded-md border-gray-300 shadow-sm
            focus:border-primary focus:ring-primary
            \${errors.message ? 'border-red-500' : ''}
          \`}
        /&gt;
        {errors.message && (
          &lt;p 
            id="message-error" 
            className="mt-1 text-sm text-red-600"
            role="alert"
          &gt;
            {errors.message.message}
          &lt;/p&gt;
        )}
      &lt;/div&gt;

      &lt;button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      &gt;
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      &lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

      <div class="bg-muted p-4 rounded-lg mt-8">
        <h3 class="text-lg font-medium mb-2">Recursos Adicionais</h3>
        <ul>
          <li><a href="https://www.w3.org/WAI/tutorials/" target="_blank">W3C Web Accessibility Tutorials</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" target="_blank">MDN Web Docs - Accessibility</a></li>
          <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG Guidelines</a></li>
          <li><a href="https://react.dev/reference/react/accessibility" target="_blank">React Accessibility Guide</a></li>
        </ul>
      </div>
    `
  }
];