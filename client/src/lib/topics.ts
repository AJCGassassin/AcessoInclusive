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
      { id: "shortcuts", title: "Atalhos de Teclado", level: 1 }
    ],
    content: `
      <h2 id="focus">Gerenciamento de Foco</h2>
      <p>O foco do teclado deve ser sempre visível e seguir uma ordem lógica de navegação.</p>

      <h2 id="shortcuts">Atalhos de Teclado</h2>
      <p>Implemente atalhos de teclado úteis e documente-os claramente para os usuários.</p>
    `
  },
  {
    id: "screen-readers",
    title: "Leitores de Tela",
    description: "Boas práticas para garantir compatibilidade com leitores de tela",
    sections: [
      { id: "aria", title: "Atributos ARIA", level: 1 },
      { id: "semantics", title: "HTML Semântico", level: 1 }
    ],
    content: `
      <h2 id="aria">Atributos ARIA</h2>
      <p>Use atributos ARIA apropriadamente para melhorar a acessibilidade do seu conteúdo.</p>

      <h2 id="semantics">HTML Semântico</h2>
      <p>Utilize elementos HTML semânticos para criar uma estrutura clara e acessível.</p>
    `
  }
];