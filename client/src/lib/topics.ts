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
    description: "Guia prático para criar sites acessíveis com foco em elementos específicos",
    sections: [
      { id: "images", title: "Imagens", level: 1 },
      { id: "images-checklist", title: "Checklist de Imagens", level: 2 },
      { id: "images-wcag", title: "WCAG para Imagens", level: 2 },
      { id: "videos", title: "Vídeos", level: 1 },
      { id: "videos-checklist", title: "Checklist de Vídeos", level: 2 },
      { id: "videos-wcag", title: "WCAG para Vídeos", level: 2 },
      { id: "semantic", title: "Semântica HTML", level: 1 },
      { id: "semantic-checklist", title: "Checklist de Semântica", level: 2 },
      { id: "semantic-wcag", title: "WCAG para Semântica", level: 2 }
    ],
    content: `
      <h1>Desenvolvimento Web Acessível</h1>
      <p>Um guia prático para implementar acessibilidade em elementos específicos do seu site.</p>

      <h2 id="images">Imagens</h2>
      <p>As imagens são elementos fundamentais para a web moderna, mas precisam ser implementadas corretamente para serem acessíveis.</p>

      <h3 id="images-checklist">Checklist de Imagens</h3>
      <ul>
        <li>✓ Todas as imagens possuem texto alternativo (alt)</li>
        <li>✓ Imagens decorativas têm alt="" vazio</li>
        <li>✓ Imagens complexas têm descrições longas</li>
        <li>✓ Infográficos têm versões em texto</li>
        <li>✓ Contraste adequado entre texto e fundo</li>
        <li>✓ Não há informação transmitida apenas por cores</li>
      </ul>

      <h3 id="images-wcag">WCAG para Imagens</h3>
      <ul>
        <li><strong>1.1.1 Conteúdo Não Textual</strong> - Fornecer alternativas em texto</li>
        <li><strong>1.4.3 Contraste</strong> - Garantir contraste adequado</li>
        <li><strong>1.4.5 Imagens de Texto</strong> - Evitar texto em imagens</li>
        <li><strong>1.4.11 Contraste Não Textual</strong> - Contraste em elementos gráficos</li>
      </ul>

      <h2 id="videos">Vídeos</h2>
      <p>Conteúdo em vídeo precisa ser acessível para todos os usuários.</p>

      <h3 id="videos-checklist">Checklist de Vídeos</h3>
      <ul>
        <li>✓ Legendas para todo conteúdo em áudio</li>
        <li>✓ Transcrição em texto disponível</li>
        <li>✓ Audiodescrição para informações visuais importantes</li>
        <li>✓ Controles de player acessíveis por teclado</li>
        <li>✓ Opção para pausar, parar e ajustar volume</li>
        <li>✓ Não há reprodução automática</li>
      </ul>

      <h3 id="videos-wcag">WCAG para Vídeos</h3>
      <ul>
        <li><strong>1.2.1 Apenas Áudio e Vídeo</strong> - Alternativas para mídia</li>
        <li><strong>1.2.2 Legendas</strong> - Legendas para todo conteúdo em áudio</li>
        <li><strong>1.2.3 Audiodescrição</strong> - Descrição para conteúdo visual</li>
        <li><strong>1.2.5 Audiodescrição (Pré-gravada)</strong> - Descrição estendida</li>
      </ul>

      <h2 id="semantic">Semântica HTML</h2>
      <p>HTML semântico é a base para uma web acessível.</p>

      <h3 id="semantic-checklist">Checklist de Semântica</h3>
      <ul>
        <li>✓ Uso apropriado de elementos de cabeçalho (h1-h6)</li>
        <li>✓ Estrutura de documento clara (header, main, footer)</li>
        <li>✓ Listas usadas corretamente (ul, ol, dl)</li>
        <li>✓ Navegação marcada com nav</li>
        <li>✓ Artigos e seções bem definidos</li>
        <li>✓ Formulários com labels apropriados</li>
      </ul>

      <h3 id="semantic-wcag">WCAG para Semântica</h3>
      <ul>
        <li><strong>1.3.1 Informação e Relações</strong> - Estrutura lógica</li>
        <li><strong>2.4.1 Ignorar Blocos</strong> - Navegação consistente</li>
        <li><strong>2.4.6 Cabeçalhos e Rótulos</strong> - Títulos descritivos</li>
        <li><strong>4.1.1 Análise</strong> - Marcação válida</li>
        <li><strong>4.1.2 Nome, Função, Valor</strong> - Interfaces consistentes</li>
      </ul>

      <div class="bg-muted p-4 rounded-lg mt-8">
        <h3 class="text-lg font-medium mb-2">Recursos Adicionais</h3>
        <ul>
          <li><a href="https://www.w3.org/WAI/tutorials/" target="_blank">W3C Web Accessibility Tutorials</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" target="_blank">MDN Web Docs - Accessibility</a></li>
          <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG Guidelines</a></li>
        </ul>
      </div>
    `
  }
];