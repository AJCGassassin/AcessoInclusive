export const topics = [
  {
    id: "wcag",
    title: "Diretrizes WCAG 2.1",
    description: "Entenda os princípios e diretrizes do WCAG 2.1 para criar conteúdo web acessível",
    sections: [
      { id: "perceptivel", title: "Princípio 1: Perceptível", level: 1 },
      { id: "alternativas-texto", title: "1.1 Alternativas em Texto", level: 2 },
      { id: "midia-tempo", title: "1.2 Mídia Baseada em Tempo", level: 2 },
      { id: "adaptavel", title: "1.3 Adaptável", level: 2 },
      { id: "distinguivel", title: "1.4 Distinguível", level: 2 },
      { id: "operavel", title: "Princípio 2: Operável", level: 1 },
      { id: "teclado", title: "2.1 Acessível por Teclado", level: 2 },
      { id: "tempo-suficiente", title: "2.2 Tempo Suficiente", level: 2 },
      { id: "convulsoes", title: "2.3 Convulsões", level: 2 },
      { id: "navegavel", title: "2.4 Navegável", level: 2 },
      { id: "modalidades-entrada", title: "2.5 Modalidades de Entrada", level: 2 },
      { id: "compreensivel", title: "Princípio 3: Compreensível", level: 1 },
      { id: "legivel", title: "3.1 Legível", level: 2 },
      { id: "previsivel", title: "3.2 Previsível", level: 2 },
      { id: "assistencia-entrada", title: "3.3 Assistência de Entrada", level: 2 },
      { id: "robusto", title: "Princípio 4: Robusto", level: 1 },
      { id: "compativel", title: "4.1 Compatível", level: 2 }
    ],
    content: `
      <h2 id="perceptivel">Princípio 1: Perceptível</h2>
      <p>As informações e os componentes da interface do usuário devem ser apresentáveis aos usuários em formas que eles possam perceber.</p>

      <h3 id="alternativas-texto">1.1 Alternativas em Texto</h3>
      <p>Forneça alternativas em texto para qualquer conteúdo não textual, permitindo que ele seja alterado para outras formas mais adequadas à necessidade da pessoa, como impressão em caracteres ampliados, braille, fala, símbolos ou linguagem mais simples.</p>
      <ul>
        <li>Use o atributo alt em imagens</li>
        <li>Forneça transcrições para áudios</li>
        <li>Descreva gráficos e diagramas em texto</li>
      </ul>

      <h3 id="midia-tempo">1.2 Mídia Baseada em Tempo</h3>
      <p>Forneça alternativas para mídias baseadas em tempo, como:</p>
      <ul>
        <li>Legendas para vídeos</li>
        <li>Audiodescrição para conteúdo visual</li>
        <li>Linguagem de sinais para conteúdo em áudio</li>
      </ul>

      <h3 id="adaptavel">1.3 Adaptável</h3>
      <p>Crie conteúdo que possa ser apresentado de diferentes maneiras sem perder informação ou estrutura:</p>
      <ul>
        <li>Use marcação semântica adequada</li>
        <li>Mantenha a sequência significativa do conteúdo</li>
        <li>Não dependa apenas de características sensoriais</li>
      </ul>

      <h3 id="distinguivel">1.4 Distinguível</h3>
      <p>Facilite a visualização e audição de conteúdo, incluindo a separação do primeiro plano e plano de fundo:</p>
      <ul>
        <li>Use contraste suficiente (mínimo 4.5:1)</li>
        <li>Permita redimensionar texto até 200%</li>
        <li>Evite áudio em segundo plano</li>
      </ul>

      <h2 id="operavel">Princípio 2: Operável</h2>
      <p>Os componentes de interface de usuário e a navegação devem ser operáveis por todos.</p>

      <h3 id="teclado">2.1 Acessível por Teclado</h3>
      <p>Todas as funcionalidades devem estar disponíveis via teclado:</p>
      <ul>
        <li>Navegação completa por teclado</li>
        <li>Sem bloqueio de foco do teclado</li>
        <li>Atalhos de teclado personalizáveis</li>
      </ul>

      <h3 id="tempo-suficiente">2.2 Tempo Suficiente</h3>
      <p>Forneça aos usuários tempo suficiente para ler e utilizar o conteúdo:</p>
      <ul>
        <li>Permita ajustar ou desativar limites de tempo</li>
        <li>Permita pausar, parar ou ocultar conteúdo em movimento</li>
        <li>Evite interrupções não essenciais</li>
      </ul>

      <h3 id="convulsoes">2.3 Convulsões</h3>
      <p>Não crie conteúdo que possa causar convulsões ou reações físicas:</p>
      <ul>
        <li>Evite flashes mais de três vezes por segundo</li>
        <li>Evite animações que cubram grandes áreas da tela</li>
      </ul>

      <h3 id="navegavel">2.4 Navegável</h3>
      <p>Forneça maneiras de ajudar os usuários a navegar, localizar conteúdo e determinar onde estão:</p>
      <ul>
        <li>Títulos e rótulos descritivos</li>
        <li>Foco visível durante navegação</li>
        <li>Múltiplas formas de localizar páginas</li>
      </ul>

      <h3 id="modalidades-entrada">2.5 Modalidades de Entrada</h3>
      <p>Facilite a operação através de várias formas de entrada além do teclado:</p>
      <ul>
        <li>Gestos simples para funções complexas</li>
        <li>Alternativas para gestos complexos</li>
        <li>Suporte a dispositivos de apontamento alternativos</li>
      </ul>

      <h2 id="compreensivel">Princípio 3: Compreensível</h2>
      <p>A informação e a operação da interface de usuário devem ser compreensíveis.</p>

      <h3 id="legivel">3.1 Legível</h3>
      <p>Torne o conteúdo textual legível e compreensível:</p>
      <ul>
        <li>Identifique o idioma da página</li>
        <li>Identifique mudanças de idioma no conteúdo</li>
        <li>Explique palavras incomuns e abreviações</li>
      </ul>

      <h3 id="previsivel">3.2 Previsível</h3>
      <p>Faça com que as páginas web apareçam e funcionem de maneira previsível:</p>
      <ul>
        <li>Mudanças de contexto sob controle do usuário</li>
        <li>Navegação consistente</li>
        <li>Identificação consistente de elementos</li>
      </ul>

      <h3 id="assistencia-entrada">3.3 Assistência de Entrada</h3>
      <p>Ajude os usuários a evitar e corrigir erros:</p>
      <ul>
        <li>Identifique erros automaticamente</li>
        <li>Forneça instruções ou rótulos</li>
        <li>Sugestões para correção de erros</li>
      </ul>

      <h2 id="robusto">Princípio 4: Robusto</h2>
      <p>O conteúdo deve ser robusto o suficiente para ser interpretado por uma ampla variedade de agentes de usuário, incluindo tecnologias assistivas.</p>

      <h3 id="compativel">4.1 Compatível</h3>
      <p>Maximize a compatibilidade com ferramentas atuais e futuras:</p>
      <ul>
        <li>Análise (parsing) correta do código</li>
        <li>Nome, função e valor disponíveis para tecnologias assistivas</li>
        <li>Mensagens de status para tecnologias assistivas</li>
      </ul>

      <h3>Recursos Adicionais</h3>
      <p>Para mais informações sobre WCAG 2.1, consulte:</p>
      <ul>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">Guia de Referência Rápida WCAG 2.1</a></li>
        <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">Website Oficial WCAG</a></li>
      </ul>
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
      <ul>
        <li>Use outline ou outro indicador visual claro para mostrar o elemento em foco</li>
        <li>Mantenha uma ordem de tabulação lógica (tabindex)</li>
        <li>Evite remover o outline sem fornecer uma alternativa visível</li>
        <li>Certifique-se que todos os elementos interativos são focáveis</li>
      </ul>

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

      <h3>Exemplo de Implementação</h3>
      <pre><code class="language-javascript">
// Exemplo de implementação de atalhos de teclado
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + /
  if ((e.ctrlKey || e.metaKey) && e.key === '/') {
    e.preventDefault();
    // Abrir ajuda com atalhos
    toggleShortcutsHelp();
  }
});
      </code></pre>

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
      <pre><code class="language-html">
<!-- Anúncio imediato de atualizações -->
<div aria-live="assertive" aria-atomic="true">
  Mensagem importante que precisa ser anunciada
</div>

<!-- Anúncio com prioridade mais baixa -->
<div aria-live="polite" aria-atomic="true">
  Atualizações de status menos urgentes
</div>
      </code></pre>

      <h3 id="roles">Roles e Estados</h3>
      <p>Use roles para definir o papel de um elemento e estados para informar sua condição atual:</p>
      <pre><code class="language-html">
<!-- Menu de navegação -->
<nav role="navigation" aria-label="Menu principal">
  <ul role="menubar">
    <li role="menuitem" aria-current="page">Página Atual</li>
  </ul>
</nav>

<!-- Diálogo modal -->
<div role="dialog" aria-labelledby="dialog-title" aria-modal="true">
  <h2 id="dialog-title">Título do Diálogo</h2>
</div>
      </code></pre>

      <h2 id="semantics">HTML Semântico</h2>
      <p>O uso correto de elementos HTML semânticos é fundamental para acessibilidade:</p>

      <h3 id="headings">Estrutura de Cabeçalhos</h3>
      <p>Mantenha uma hierarquia lógica de cabeçalhos:</p>
      <pre><code class="language-html">
<h1>Título Principal da Página</h1>
<section>
  <h2>Seção Principal</h2>
  <article>
    <h3>Subseção</h3>
    <h4>Tópico Específico</h4>
  </article>
</section>
      </code></pre>

      <h3 id="landmarks">Pontos de Referência</h3>
      <p>Use elementos semânticos para definir regiões importantes da página:</p>
      <pre><code class="language-html">
<header role="banner">
  <!-- Cabeçalho do site -->
</header>

<nav role="navigation">
  <!-- Navegação principal -->
</nav>

<main role="main">
  <!-- Conteúdo principal -->
</main>

<aside role="complementary">
  <!-- Conteúdo relacionado -->
</aside>

<footer role="contentinfo">
  <!-- Rodapé do site -->
</footer>
      </code></pre>

      <h2 id="forms">Formulários Acessíveis</h2>
      <p>Dicas para criar formulários acessíveis:</p>
      <ul>
        <li>Use elementos label corretamente associados</li>
        <li>Forneça mensagens de erro claras</li>
        <li>Agrupe campos relacionados com fieldset</li>
        <li>Use atributos aria-required e aria-invalid</li>
      </ul>

      <pre><code class="language-html">
<form>
  <div>
    <label for="name">Nome:</label>
    <input 
      id="name" 
      type="text" 
      aria-required="true"
      aria-invalid="false"
      aria-describedby="name-error"
    >
    <div id="name-error" role="alert"></div>
  </div>

  <fieldset>
    <legend>Informações de Contato</legend>
    <div>
      <label for="email">Email:</label>
      <input id="email" type="email">
    </div>
    <div>
      <label for="phone">Telefone:</label>
      <input id="phone" type="tel">
    </div>
  </fieldset>
</form>
      </code></pre>

      <h2 id="testing">Testando com Leitores de Tela</h2>
      <p>É importante testar seu site com diferentes leitores de tela:</p>
      <ul>
        <li><strong>NVDA (Windows)</strong> - Leitor de tela gratuito e open source</li>
        <li><strong>VoiceOver (macOS/iOS)</strong> - Integrado ao sistema</li>
        <li><strong>JAWS (Windows)</strong> - Leitor de tela profissional</li>
        <li><strong>TalkBack (Android)</strong> - Leitor de tela para dispositivos Android</li>
      </ul>

      <h3>Checklist de Testes</h3>
      <ul>
        <li>Verifique se todos os elementos interativos são anunciados corretamente</li>
        <li>Confirme se a ordem de leitura faz sentido</li>
        <li>Teste a navegação por teclado</li>
        <li>Verifique se as atualizações dinâmicas são anunciadas</li>
        <li>Teste diferentes navegadores e leitores de tela</li>
      </ul>

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
  }
];