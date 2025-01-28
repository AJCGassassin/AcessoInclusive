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

      <h3 id="midia-tempo">1.2 Mídia Baseada em Tempo</h3>
      <p>Forneça alternativas para mídias baseadas em tempo, como:</p>

      <h3 id="adaptavel">1.3 Adaptável</h3>
      <p>Crie conteúdo que possa ser apresentado de diferentes maneiras sem perder informação ou estrutura:</p>

      <h3 id="distinguivel">1.4 Distinguível</h3>
      <p>Facilite a visualização e audição de conteúdo, incluindo a separação do primeiro plano e plano de fundo:</p>

      <h2 id="operavel">Princípio 2: Operável</h2>
      <p>Os componentes de interface de usuário e a navegação devem ser operáveis por todos.</p>

      <h3 id="teclado">2.1 Acessível por Teclado</h3>
      <p>Todas as funcionalidades devem estar disponíveis via teclado:</p>

      <h3 id="tempo-suficiente">2.2 Tempo Suficiente</h3>
      <p>Forneça aos usuários tempo suficiente para ler e utilizar o conteúdo:</p>

      <h3 id="convulsoes">2.3 Convulsões</h3>
      <p>Não crie conteúdo que possa causar convulsões ou reações físicas:</p>

      <h3 id="navegavel">2.4 Navegável</h3>
      <p>Forneça maneiras de ajudar os usuários a navegar, localizar conteúdo e determinar onde estão:</p>

      <h3 id="modalidades-entrada">2.5 Modalidades de Entrada</h3>
      <p>Facilite a operação através de várias formas de entrada além do teclado:</p>

      <h2 id="compreensivel">Princípio 3: Compreensível</h2>
      <p>A informação e a operação da interface de usuário devem ser compreensíveis.</p>

      <h3 id="legivel">3.1 Legível</h3>
      <p>Torne o conteúdo textual legível e compreensível:</p>

      <h3 id="previsivel">3.2 Previsível</h3>
      <p>Faça com que as páginas web apareçam e funcionem de maneira previsível:</p>

      <h3 id="assistencia-entrada">3.3 Assistência de Entrada</h3>
      <p>Ajude os usuários a evitar e corrigir erros:</p>

      <h2 id="robusto">Princípio 4: Robusto</h2>
      <p>O conteúdo deve ser robusto o suficiente para ser interpretado por uma ampla variedade de agentes de usuário, incluindo tecnologias assistivas.</p>

      <h3 id="compativel">4.1 Compatível</h3>
      <p>Maximize a compatibilidade com ferramentas atuais e futuras:</p>

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

      <h2 id="browser-shortcuts">Atalhos do Navegador</h2>
      <p>Atalhos comuns que funcionam na maioria dos navegadores:</p>

      <h3>Navegação entre Abas</h3>

      <h3>Navegação na Página</h3>

      <h2 id="system-shortcuts">Atalhos do Sistema</h2>
      <p>Atalhos importantes do sistema operacional:</p>

      <h3>Windows</h3>

      <h3>macOS</h3>

      <h2 id="page-navigation">Navegação na Página</h2>
      <p>Teclas essenciais para navegar dentro de uma página web:</p>

      <h3>Navegação por Cabeçalhos</h3>
      <p>Em leitores de tela:</p>

      <h2 id="shortcuts">Implementando Atalhos</h2>
      <p>Ao implementar atalhos de teclado em sua aplicação:</p>

      <h3>Exemplo de Implementação</h3>

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
    id: "nielsen-heuristics",
    title: "Heurísticas de Nielsen",
    description: "As 10 heurísticas de Nielsen aplicadas ao design de interfaces digitais acessíveis",
    sections: [
      { id: "visibilidade", title: "1. Visibilidade do Status do Sistema", level: 1 },
      { id: "correspondencia", title: "2. Correspondência com o Mundo Real", level: 1 },
      { id: "controle", title: "3. Controle e Liberdade do Usuário", level: 1 },
      { id: "consistencia", title: "4. Consistência e Padrões", level: 1 },
      { id: "prevencao", title: "5. Prevenção de Erros", level: 1 },
      { id: "reconhecimento", title: "6. Reconhecimento em vez de Memorização", level: 1 },
      { id: "flexibilidade", title: "7. Flexibilidade e Eficiência", level: 1 },
      { id: "estetica", title: "8. Estética e Design Minimalista", level: 1 },
      { id: "erros", title: "9. Ajuda aos Usuários com Erros", level: 1 },
      { id: "ajuda", title: "10. Ajuda e Documentação", level: 1 }
    ],
    content: `
      <h1>As 10 Heurísticas de Nielsen</h1>
      <p>As heurísticas de Nielsen são princípios fundamentais para criar interfaces acessíveis e fáceis de usar. Cada uma delas aborda aspectos importantes da experiência do usuário.</p>

      <h2 id="visibilidade">1. Visibilidade do Status do Sistema</h2>
      <p>O sistema deve sempre manter os usuários informados sobre o que está acontecendo através de feedback apropriado em tempo razoável. Isso inclui:</p>
      <ul>
        <li>Indicadores de progresso para operações longas</li>
        <li>Confirmações visuais de ações realizadas</li>
        <li>Feedback imediato para interações do usuário</li>
      </ul>

      <h2 id="correspondencia">2. Correspondência com o Mundo Real</h2>
      <p>O sistema deve falar a linguagem dos usuários, com palavras, frases e conceitos familiares, seguindo convenções do mundo real. Considere:</p>
      <ul>
        <li>Uso de metáforas familiares</li>
        <li>Linguagem clara e não técnica</li>
        <li>Organização lógica da informação</li>
      </ul>

      <h2 id="controle">3. Controle e Liberdade do Usuário</h2>
      <p>Usuários frequentemente escolhem funções por engano e precisam de uma "saída de emergência" claramente marcada. É importante:</p>
      <ul>
        <li>Fornecer opções de desfazer e refazer</li>
        <li>Permitir cancelar operações em andamento</li>
        <li>Oferecer caminhos claros de retorno</li>
      </ul>

      <h2 id="consistencia">4. Consistência e Padrões</h2>
      <p>Os usuários não devem ter que se perguntar se diferentes palavras, situações ou ações significam a mesma coisa. Mantenha:</p>
      <ul>
        <li>Terminologia consistente em toda a interface</li>
        <li>Padrões visuais uniformes</li>
        <li>Comportamentos previsíveis para ações similares</li>
      </ul>

      <h2 id="prevencao">5. Prevenção de Erros</h2>
      <p>Melhor que boas mensagens de erro é um design cuidadoso que previne que problemas ocorram:</p>
      <ul>
        <li>Validação de dados em tempo real</li>
        <li>Confirmação para ações irreversíveis</li>
        <li>Sugestões e dicas preventivas</li>
      </ul>

      <h2 id="reconhecimento">6. Reconhecimento em vez de Memorização</h2>
      <p>Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis. O usuário não deve precisar lembrar informações de uma parte da interface para outra:</p>
      <ul>
        <li>Manter opções visíveis e acessíveis</li>
        <li>Fornecer dicas contextuais</li>
        <li>Usar ícones reconhecíveis e rótulos claros</li>
      </ul>

      <h2 id="flexibilidade">7. Flexibilidade e Eficiência</h2>
      <p>O sistema deve atender tanto usuários inexperientes quanto experientes, permitindo:</p>
      <ul>
        <li>Atalhos para ações frequentes</li>
        <li>Personalização da interface</li>
        <li>Diferentes caminhos para realizar tarefas</li>
      </ul>

      <h2 id="estetica">8. Estética e Design Minimalista</h2>
      <p>Os diálogos não devem conter informações irrelevantes ou raramente necessárias:</p>
      <ul>
        <li>Foco no conteúdo essencial</li>
        <li>Hierarquia visual clara</li>
        <li>Eliminação de elementos decorativos desnecessários</li>
      </ul>

      <h2 id="erros">9. Ajuda aos Usuários com Erros</h2>
      <p>Mensagens de erro devem ser expressas em linguagem clara:</p>
      <ul>
        <li>Indicar precisamente o problema</li>
        <li>Sugerir uma solução construtiva</li>
        <li>Usar linguagem amigável e não técnica</li>
      </ul>

      <h2 id="ajuda">10. Ajuda e Documentação</h2>
      <p>Mesmo que seja melhor que o sistema possa ser usado sem documentação, pode ser necessário fornecer ajuda:</p>
      <ul>
        <li>Documentação fácil de pesquisar</li>
        <li>Foco em tarefas concretas</li>
        <li>Lista concisa de passos a seguir</li>
      </ul>

      <div class="bg-muted p-4 rounded-lg mt-8">
        <h3 class="text-lg font-medium mb-2">Recursos Adicionais</h3>
        <ul>
          <li><a href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank">Artigo Original de Jakob Nielsen</a></li>
          <li><a href="https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/" target="_blank">Como Conduzir uma Avaliação Heurística</a></li>
        </ul>
      </div>
    `
  }
];