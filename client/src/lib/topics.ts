export const topics = [
  {
    id: "wcag",
    title: "Diretrizes WCAG 2.1",
    description: "Entenda os princípios e diretrizes do WCAG 2.1 para criar conteúdo web acessível",
    sections: [
      { id: "perceptivel", title: "Princípio 1: Perceptível", level: 1 },
      { id: "operavel", title: "Princípio 2: Operável", level: 1 },
      { id: "compreensivel", title: "Princípio 3: Compreensível", level: 1 },
      { id: "robusto", title: "Princípio 4: Robusto", level: 1 }
    ],
    content: `
      <h2 id="perceptivel">Princípio 1: Perceptível</h2>
      <p>As informações e os componentes da interface do usuário devem ser apresentáveis aos usuários em formas que eles possam perceber.</p>
      
      <h2 id="operavel">Princípio 2: Operável</h2>
      <p>Os componentes de interface de usuário e a navegação devem ser operáveis.</p>
      
      <h2 id="compreensivel">Princípio 3: Compreensível</h2>
      <p>A informação e a operação da interface de usuário devem ser compreensíveis.</p>
      
      <h2 id="robusto">Princípio 4: Robusto</h2>
      <p>O conteúdo deve ser robusto o suficiente para poder ser interpretado de forma confiável por uma ampla variedade de agentes de usuário, incluindo tecnologias assistivas.</p>
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
