export const topics = [
  {
    id: "accessibility-guidelines",
    title: "Diretrizes de Acessibilidade",
    description: "Recomendações basicas de principios de acessibilidade em desenvolvimento WEB",
    sections: [
      { id: "1", title: "Organização e Navegação Compreensíveis", level: 1 },
      { id: "2", title: "Títulos Claros e Objetivos", level: 1 },
      { id: "3", title: "Orientações Não Sensoriais", level: 1 },
      { id: "4", title: "Conteúdo Visual com Descrições Textuais", level: 1 },
      { id: "5", title: "Consistência na Interação", level: 1 },
      { id: "6", title: "Minimização de Redundâncias", level: 1 },
      { id: "7", title: "Clareza em Mensagens de Erro", level: 1 },
      { id: "8", title: "Links Descritivos", level: 1 },
      { id: "9", title: "Controle Flexível de Interação", level: 1 },
      { id: "10", title: "Navegação por Teclado", level: 1 },
      { id: "11", title: "Ignorar Repetições", level: 1 },
      { id: "12", title: "Ajuste de Tempo e Movimento", level: 1 },
      { id: "13", title: "Rótulos Acessíveis e Coerentes", level: 1 },
      { id: "14", title: "Transcrições e Legendas", level: 1 },
      { id: "15", title: "Formatação de Ajuda", level: 1 },
      { id: "16", title: "Contraste Visual e Personalização", level: 1 },
    ],
    content: `

            <p>
                <strong>Diretrizes de Acessibilidade</strong> são recomendações basicas criadas com base em junção de criterios da WCAG e do guia brasileiro de acessibilidade. E tem como objetivo proporcionar uma base para a criação de sites e aplicativos acessíveis de maneira mais resumida porem mantendo o essencial de acessibilidade.

                <p> Em resumo este guia funciona de seguinte maneira:
                <ul>
                    <li> <strong>Criterios de sucesso:<strong> O que deve acontecer para que a aplicação seja considerada um sucesso.
                    <li> <strong>Objetivo:<strong> O que é o objetivo da aplicação.
                    <li> <strong>O que fazer:<strong> Como aplicar o criterio.
                </ul>
    
      <h2 id="1">1 – Organização e Navegação Compreensíveis</h2>
      <p>
        Cada elemento deve estar organizado de forma clara, tanto na aparência quanto no código, 
        para que a relação entre eles seja fácil de entender. Isso facilita a navegação para 
        quem usa tecnologias assistivas, para quem navega apenas com o teclado e para quem 
        acessa o site em dispositivos de diferentes tamanhos de tela.
      </p>

      <h2 id="criterios-sucesso">Critérios de Sucesso</h2>
      <p>
        Os elementos da interface devem ser organizados de maneira hierárquica, lógica e coerente, 
        tanto para quem vê quanto para quem ouve. A navegação mantém a sequência lógica em 
        diferentes tamanhos de tela, sendo responsiva e funcional para se movimentar por teclado.
      </p>

      <h2 id="objetivo">Objetivo</h2>
      <p>
        Assegurar que todas as pessoas usuárias, independentemente do dispositivo ou da 
        tecnologia utilizada, consigam acessar, compreender e navegar pelo conteúdo de 
        forma eficiente, intuitiva e sequencial.
      </p>

      <h2 id="que-fazer">O que fazer</h2>
      <p>
        Organize os elementos de forma hierárquica, utilizando tags apropriadas no html, 
        certifique-se de que todos os elementos focáveis sigam uma sequência previsível e 
        intuitiva, respeitando a estrutura e o fluxo do conteúdo; realize testes com 
        tecnologias assistivas e diferentes dispositivos para garantir a qualidade.
      </p>
  

      <h2 id="2">2 – Títulos Claros e Objetivos</h2>
       <p>
        Cada página deve ter um título único e relevante que ajude os usuários a 
        identificarem rapidamente seu conteúdo ou função. Isso é especialmente 
        importante para quem utiliza tecnologias assistivas, pois facilita a 
        navegação e a compreensão da página sem depender da análise de seu 
        conteúdo visual.
      </p>

      <h3 id="criterios-sucesso">Critérios de Sucesso</h3>
      <p>
        As páginas web têm títulos que descrevem o tópico ou a finalidade.
      </p>

      <h3 id="objetivo">Objetivo</h3>
      <p>
        Garantir que cada página tenha um título informativo, que comunique 
        claramente seu propósito, facilitando a navegação para todos os usuários, 
        inclusive aqueles que utilizam tecnologias assistivas.
      </p>

      <h3 id="que-fazer">O que fazer</h3>
      <p>
        Garanta que cada página tenha um título único que reflete seu conteúdo 
        de forma precisa e objetiva. O título deve ser curto e direto, informando 
        o propósito da página sem ambiguidade. Além disso, é importante evitar 
        termos genéricos ou irrelevantes, garantindo que os usuários, inclusive 
        aqueles que utilizam tecnologias assistivas, possam identificar rapidamente 
        a função da página e navegar com facilidade.
      </p>

      <h2 id="3">3 – Orientações Não Sensoriais</h2>
      <p>
        "Instruções Baseadas em Ações", "Identificação por Nome" e "Contexto e Função" 
        são instruções diretas e focam na ação a ser tomada, permitindo que todos os 
        usuários, independentemente de suas habilidades sensoriais, compreendam o que 
        devem fazer.
      </p>

      <h3 id="criterios-sucesso">Critérios de Sucesso</h3>
      <p>
        Quando a sequência em que o conteúdo é apresentado afeta o seu significado, 
        é possível determinar programaticamente uma sequência de leitura correta. 
        Assim as instruções fornecidas para a compreensão e utilização de conteúdos 
        não devem se basear apenas nas caraterísticas sensoriais dos componentes, 
        como a forma, a cor, o tamanho, a localização visual, a orientação ou o som.
      </p>

      <h3 id="objetivo">Objetivo</h3>
      <p>
        Garantir a acessibilidade e a usabilidade da interface para todos os usuários, 
        independentemente de suas habilidades sensoriais.
      </p>

      <h3 id="que-fazer">O que fazer</h3>
      <p>
        Utilize instruções claras e específicas para que qualquer usuário consiga 
        entender, independentemente de cor ou posição.
      </p>

      <h2 id="4">4 – Conteúdo Visual com Descrições Textuais</h2>
      <p>
        Todo elemento visual significativo, incluindo gráficos, símbolos e validações 
        de segurança, necessita de uma descrição textual apropriada.
      </p>

      <h3 id="criterios-sucesso">Critérios de Sucesso</h3>
      <p>
        Cada componente não textual importante deve incluir uma descrição detalhada 
        que identifica sua natureza, propósito e funcionalidade. Como ilustração, 
        quando um software de acessibilidade encontra um elemento interativo, ele 
        anuncia "Elemento interativo: Exportar dados. Pressione Enter para executar". 
        Estas descrições precisam funcionar adequadamente em diferentes tecnologias 
        assistivas, sistemas e browsers.
      </p>

      <h3 id="objetivo">Objetivo</h3>
      <p>
        Tornar o conteúdo digital acessível para um público mais amplo através de 
        descrições textuais adequadas.
      </p>

      <h3 id="que-fazer">O que fazer</h3>
      <p>
        Implementar descrições textuais claras e precisas para representar adequadamente 
        elementos visuais e sonoros do conteúdo.
      </p>

      <h2 id="5">5 – Consistência na Interação</h2>
       <p>
        O sistema deve funcionar de maneira padronizada e previsível durante toda 
        a navegação, evitando alterações inesperadas no ambiente. Elementos de 
        orientação e identificadores precisos são essenciais para orientar o 
        visitante, proporcionando uma navegação fluida e inclusiva, particularmente 
        para pessoas que dependem de recursos de acessibilidade.
      </p>

      <h3 id="criterios-sucesso">Critérios de Sucesso</h3>
      <p>
        Modificações nos elementos interativos da interface não devem desencadear 
        mudanças automáticas no ambiente, exceto quando o visitante for previamente 
        informado dessa possibilidade. Títulos e identificadores devem comunicar 
        claramente sua função e propósito.
      </p>

      <h3 id="objetivo">Objetivo</h3>
      <p>
        Assegurar uma experiência de uso intuitiva e sem surpresas, minimizando 
        dificuldades na navegação. Este aspecto é fundamental para usuários com 
        necessidades específicas ou que utilizam ferramentas de acessibilidade, 
        pois a uniformidade na interação otimiza o uso de formulários e reduz 
        a ocorrência de equívocos.
      </p>

      <h3 id="que-fazer">O que fazer</h3>
      <p>
        Evite alterações automáticas no layout ou surgimento espontâneo de elementos 
        durante a interação com formulários e campos de entrada. Utilize linguagem 
        direta e objetiva em botões e campos interativos, adicionando instruções 
        quando necessário. Mantenha padrões consistentes de interação em todo o 
        sistema. Realize avaliações com diferentes perfis de usuários, priorizando 
        aqueles que necessitam de recursos de acessibilidade para navegar.
      </p>

      <h2 id="6">6 – Minimização de Redundâncias</h2>
      <p>
        Dados previamente registrados em processos sequenciais devem ser 
        autocompletados ou apresentados como opções de seleção, minimizando 
        a necessidade de digitação repetitiva.
      </p>

      <h3 id="criterios-sucesso">Critérios de Sucesso</h3>
      <p>
        Os dados anteriormente cadastrados pelo usuário, que necessitam ser 
        utilizados novamente na mesma jornada, precisam ser automaticamente 
        populados ou disponibilizados em formato de seleção. Contudo, existem 
        situações específicas onde a reinserção é necessária, como em validações 
        de segurança ou quando os dados iniciais expiraram.
      </p>

      <h3 id="objetivo">Objetivo</h3>
      <p>
        Otimizar a experiência em processos multietapas, minimizando o esforço 
        mental do usuário.
      </p>

      <h3 id="que-fazer">O que fazer</h3>
      <p>
        Elimine a necessidade de inserção repetida de informações que já foram 
        coletadas durante o fluxo atual.
      </p>

      <h2 id="7">7 – Clareza em Mensagens de Erro</h2>
      <p>
        Na ocorrência de uma falha, é fundamental comunicar precisamente qual é 
        o problema e apresentar possíveis soluções. Esta prática beneficia todos 
        os usuários, sendo especialmente relevante para pessoas com limitações 
        visuais ou de compreensão, auxiliando no entendimento e na resolução 
        do problema encontrado.
      </p>

      <h3 id="criterios-sucesso">Critérios de Sucesso</h3>
      <p>
        Quando uma falha é identificada pelo sistema, o elemento problemático deve 
        ser destacado e uma explicação textual deve ser fornecida ao usuário. 
        Caso existam recomendações para correção, estas devem ser apresentadas, 
        exceto em situações onde tal ação possa comprometer a segurança ou a 
        finalidade do conteúdo.
      </p>

      <h3 id="objetivo">Objetivo</h3>
      <p>
        Assegurar que o usuário identifique a presença de uma falha, compreenda 
        sua natureza e receba orientações adequadas para sua correção.
      </p>

      <h3 id="que-fazer">O que fazer</h3>
      <p>
        Implemente notificações objetivas de erro e ofereça caminhos para sua 
        resolução. Para ampliar a efetividade da comunicação, utilize recursos 
        diversos como indicadores cromáticos, modificações estruturais, 
        indicadores sonoros ou mensagens textuais.
      </p>

      <h2 id="8">8 – Links Descritivos</h2>
      <p>
        É essencial informar ao usuário o que acontecerá ao clicar em um link. 
        Evite textos vagos, como "clique aqui", e opte por descrições claras que 
        indiquem o destino ou a ação do link, como "baixe o relatório", 
        "conheça nosso time" ou "acesse a página de contato".
      </p>

      <h3 id="criterios-sucesso-links">Critérios de Sucesso</h3>
      <p>
        Cada link deve comunicar de forma clara e precisa o seu destino, seja 
        por meio do próprio texto do link ou do contexto ao seu redor. Exceções 
        aplicam-se apenas quando o propósito do link for ambíguo para a maioria 
        dos usuários.
      </p>

      <h3 id="objetivo-links">Objetivo</h3>
      <p>
        Assegurar que os usuários compreendam o que ocorrerá ao interagir com 
        um link, promovendo uma experiência de navegação mais intuitiva e 
        acessível. Descrições claras ajudam os usuários a navegar com confiança, 
        evitando surpresas ou confusões sobre o destino ou a função do link.
      </p>

      <h3 id="que-fazer-links">O que fazer</h3>
      <p>
        Utilize textos de link que descrevam explicitamente a ação ou o destino, 
        como "confira nossos serviços". Para links curtos, complemente com 
        explicações no texto ao redor. Realize testes com leitores de tela para 
        garantir que os links sejam compreensíveis e assegure-se de que sejam 
        simples e claros para todos os usuários.
      </p>

      <h2 id="9">9 – Controle Flexível de Interação</h2>
      <p>
        Para funções que são frequentemente ativadas acidentalmente por gestos, 
        é necessário fornecer um mecanismo simples para desfazer ou confirmar 
        a ação antes de prosseguir. Isso é especialmente crucial em aplicativos 
        que lidam com dados sensíveis ou operações irreversíveis.
      </p>

      <h3 id="criterios-sucesso-correcao">Critérios de Sucesso</h3>
      <p>
        Funcionalidades que dependem de gestos complexos devem ser simplificadas 
        para serem executadas com um único clique. Movimentos do dispositivo ou 
        do usuário que acionam funções devem ter alternativas acessíveis na 
        interface, e deve ser possível desativar essas respostas para prevenir 
        erros. Ações ativadas por um clique devem permitir cancelamento ou 
        correção fácil, exceto quando o clique imediato for essencial.
      </p>

      <h3 id="objetivo-correcao">Objetivo</h3>
      <p>
        Reduzir frustrações e erros operacionais, assegurando que todas as 
        interações possam ser controladas de maneira segura e acessível.
      </p>

      <h3 id="que-fazer-correcao">O que fazer</h3>
      <p>
        Implemente confirmações ou opções de desfazer para ações críticas que 
        podem ser acionadas por gestos. Certifique-se de que essas opções sejam 
        claramente comunicadas e de fácil acesso para os usuários.
      </p>

      <h2 id="10">10 – Navegação por Teclado</h2>
      <p>
        Para garantir uma experiência fluida de navegação por teclado, os elementos 
        interativos devem ser acessíveis em uma ordem lógica e intuitiva, seguindo 
        o fluxo natural da interface.
      </p>

      <h3 id="criterios-sucesso-teclado">Critérios de Sucesso</h3>
      <p>
        Todos os elementos interativos devem ser acessíveis via teclado e funcionar 
        corretamente com comandos como Tab, Enter e Espaço. Isso inclui botões, 
        links, campos de formulário e outros componentes que possam receber foco.
      </p>

      <h3 id="objetivo-teclado">Objetivo</h3>
      <p>
        Facilitar a navegação independente pelo site ou aplicativo para usuários 
        que não utilizam mouse. Isso beneficia pessoas com deficiência motora, 
        visual ou cognitiva, que dependem do teclado ou de tecnologias assistivas, 
        como leitores de tela e teclados adaptados.
      </p>

      <h3 id="que-fazer-teclado">O que fazer</h3>
      <p>
        Certifique-se de que a ordem do foco do teclado siga uma sequência lógica, 
        alinhada ao fluxo visual da interface. Evite que componentes como pop-ups 
        ou menus dropdown capturem o foco do teclado de forma desorganizada, 
        interrompendo a navegação intuitiva.
      </p>

      <h2 id="11">11 – Ignorar Repetições</h2>
      <p>
        Uma prática essencial para melhorar a usabilidade do site para usuários de 
        teclado é oferecer a opção de pular blocos repetitivos, como menus de 
        navegação, cabeçalhos ou rodapés, permitindo que eles acessem diretamente 
        o conteúdo principal da página. Isso pode ser implementado por meio de um 
        link oculto no início da página, que se torna visível ao navegar com a 
        tecla Tab.
      </p>

      <h3 id="criterios-sucesso-ignorar">Critérios de Sucesso</h3>
      <p>
        O site deve permitir que os usuo�rios de teclado, ao pressionarem a tecla 
        Tab, visualizem a opção de "Pular para o conteúdo". Esse link deve ser 
        acessível logo nos primeiros passos da navegação, sem a necessidade de 
        percorrer elementos repetidos, e direcionar o usuário diretamente ao 
        conteúdo principal.
      </p>

      <h3 id="objetivo-ignorar">Objetivo</h3>
      <p>
        Reduzir o tempo e o esforço necessários para acessar o conteúdo relevante, 
        promovendo uma navegação mais rápida e eficiente, especialmente para 
        usuários que dependem do teclado ou de tecnologias assistivas. Essa 
        funcionalidade melhora a acessibilidade e facilita a navegação para todos, 
        eliminando a frustração de passar por menus ou cabeçalhos repetidos em 
        cada página.
      </p>

      <h3 id="que-fazer-ignorar">O que fazer</h3>
      <p>
        Desenvolvedores devem implementar um skip link que se torne visível ao 
        receber foco, geralmente posicionado no topo da página. Esse link deve 
        ser descrito de forma clara, como "Pular para o conteúdo principal", e 
        testado em navegadores e leitores de tela para garantir seu funcionamento 
        adequado. Além disso, é crucial assegurar que ele seja facilmente 
        acessível logo no início da navegação com o teclado, evitando a 
        necessidade de interagir com blocos repetidos.
      </p>

      <h2 id="12">12 – Ajuste de Tempo e Movimento</h2>
      <p>
        Certifique-se de que os componentes interativos, como animações automáticas 
        ou contadores de tempo, incluam controles acessíveis para que os usuários 
        possam pausar, parar ou ajustar essas ações. Para limites de tempo, ofereça 
        a opção de estender ou desativar o tempo. Isso deve ser feito usando 
        atributos e controles que possam ser detectados por tecnologias assistivas 
        e facilmente acionados por pessoas com deficiência.
      </p>

      <h3 id="criterios-sucesso-atributos">Critérios de Sucesso</h3>
      <p>
        Elementos que piscam ou se movem automaticamente devem ter controles para 
        pausar ou parar o movimento. Isso facilita a leitura e reduz desconforto 
        para pessoas com deficiência visual ou dificuldades de atenção. Um botão 
        de pausa é essencial para tornar o conteúdo acessível.
      </p>
      <p>
        Sites com limite de tempo devem permitir desativar, ajustar ou estender o 
        período antes de desconectar o usuário. Isso ajuda quem precisa de mais 
        tempo, como pessoas com deficiência. Um aviso de “Estender Tempo” antes 
        do logout garante continuidade das tarefas.
      </p>

      <h3 id="objetivo-atributos">Objetivo</h3>
      <p>
        Permitir que todos controlem o tempo e os movimentos no site, tornando a 
        navegação mais fácil e confortável para pessoas com diferentes necessidades 
        ou dificuldades, além de melhorar o uso em situações adversas de navegação.
      </p>

      <h3 id="que-fazer-atributos">O que fazer?</h3>
      <p>
        Adicione botões visíveis para pausar ou parar movimentos, como em carrosséis 
        ou animações, ajudando os usuários a evitar desconforto.
      </p>
      <p>
        Ofereça opções para desativar ou estender o tempo, garantindo que todos 
        possam completar tarefas sem pressa ou frustração.
      </p>
      <p>
        Certifique-se de que controles funcionem com leitores de tela e comandos 
        de voz, garantindo acessibilidade para todos os usuários.
      </p>

      <h2 id="13">13 – Rótulos Acessíveis e Coerentes</h2>
      <p>
        Cada componente da interface do usuário, como botões, campos de formulário, 
        links e elementos gerados por scripts, deve conter atributos claros e 
        acessíveis, como nome, função e valor. Isso é essencial para garantir que 
        as tecnologias assistivas, como leitores de tela e sistemas de comando por 
        voz, consigam interpretar e comunicar essas informações corretamente aos 
        usuários. Além disso, os nomes dos controles interativos devem ser idênticos 
        aos rótulos visíveis na interface, evitando confusão na navegação e na 
        ativação de comandos por voz.
      </p>

      <h3 id="criterios-sucesso-atributos">Critérios de Sucesso</h3>
      <p>
        Os componentes interativos têm nomes, funções e valores definidos 
        corretamente. O nome que as tecnologias assistivas leem é o mesmo que o 
        rótulo visível, e os elementos da interface funcionam de forma consistente. 
        Assim, os usuários conseguem navegar e usar a interface de forma fácil e 
        previsível, independentemente do dispositivo ou da tecnologia que estão 
        usando.
      </p>

      <h3 id="objetivo-atributos">Objetivo</h3>
      <p>
        Assegurar que todas as pessoas usuárias, incluindo aquelas que utilizam 
        leitores de tela ou navegação por voz, possam interagir com os componentes 
        da interface sem barreiras, garantindo que cada elemento possua os atributos 
        corretos e que a navegação seja intuitiva.
      </p>

      <h3 id="que-fazer-atributos">O que fazer</h3>
      <p>
        Configurar corretamente os atributos <code>aria-label</code>, <code>role</code> 
        e <code>aria-valuenow</code> para fornecer informações completas sobre os 
        componentes interativos. Também realize testes com leitores de tela e sistemas 
        de navegação por voz para validar que os controles da interface estejam sendo 
        corretamente identificados e acionados.
      </p>

      <h2 id="14">14 – Transcrições e Legendas</h2>
      <p>
        Fornecer alternativas a conteúdos audiovisuais, principalmente de forma 
        descritiva, é de extrema importância para torná-los acessíveis a todas 
        as pessoas.
      </p>

      <h3 id="criterios-sucesso-transcricoes">Critérios de Sucesso</h3>
      <p>
        Para conteúdo em áudio, pode ser disponibilizada uma transcrição completa, 
        permitindo que pessoas com deficiência auditiva leiam todas as informações 
        e acessem o conteúdo de forma equivalente.
      </p>
      <p>
        Para vídeos sem som, pode-se oferecer uma alternativa em áudio que descreve 
        o que acontece na tela. Imagine um vídeo educativo que mostra apenas imagens 
        de um experimento. Para torná-lo acessível, pode ser adicionada uma faixa de 
        áudio que descreva o experimento e explique cada etapa. Da mesma forma, uma 
        descrição em áudio é incluída em todos os vídeos gravados para explicar o 
        que está acontecendo nas imagens. Por exemplo, um documentário que mostra 
        cenas de natureza sem narração. Para que pessoas com deficiência visual 
        entendam o que aparece na tela, é incluída uma descrição em áudio que 
        explica as ações e cenários do vídeo, como "Um leão caminha lentamente 
        pela savana".
      </p>
      <p>
        Legendas são sempre incluídas em vídeos com áudio gravado, a menos que o 
        vídeo seja uma versão alternativa de um conteúdo em texto e isso esteja 
        claramente indicado. Pense em uma palestra gravada on-line. Para torná-la 
        acessível, são adicionadas legendas que transcrevem tudo o que é dito, 
        permitindo que pessoas com deficiência auditiva acompanhem o conteúdo. 
        Se esse vídeo for apenas uma versão alternativa de um artigo escrito 
        (já disponível para leitura), e isso estiver claramente indicado, as 
        legendas não são obrigatórias.
      </p>

      <h3 id="objetivo-transcricoes">Objetivo</h3>
      <p>
        Garantir a compreensão do conteúdo de áudio, vídeo e audiovisual por mais 
        pessoas ao gerar legendas e descrições de áudio.
      </p>

      <h3 id="que-fazer-transcricoes">O que fazer?</h3>
      <p>
        Forneça uma alternativa quando o conteúdo for perceptível com apenas um 
        sentido: texto sincronizado para conteúdo de áudio; descrição do conteúdo 
        visual dos vídeos; e descrição falada sincronizada do conteúdo visual 
        dos vídeos.
      </p>

      <h2 id="15">15 – Formatação de Ajuda</h2>
      <p>
        Para facilitar a navegação, a ajuda deve seguir um padrão em todas as 
        páginas. Por exemplo, se o botão de ajuda fica no canto inferior direito 
        em uma página, deve estar no mesmo lugar em todas as outras páginas do 
        site. Além disso, as instruções e a forma como a ajuda funciona devem 
        ser consistentes. Assim, os usuários sabem exatamente onde encontrar 
        ajuda e como ela funciona, independentemente da página em que estão.
      </p>

      <h3 id="criterios-sucesso-ajuda">Critérios de Sucesso</h3>
      <p>
        Se uma página da web contiver qualquer um dos seguintes mecanismos de 
        ajuda e esses mecanismos forem repetidos em várias páginas dentro de 
        um conjunto, eles ocorrerão na mesma ordem em relação a outro conteúdo 
        da página, a menos que uma alteração seja iniciada pelo usuário: 
        detalhes de contato humano, mecanismo de contato humano, opção de 
        autoajuda ou um mecanismo de contato totalmente automatizado.
      </p>

      <h3 id="objetivo-ajuda">Objetivo</h3>
      <p>
        Garantir que todas as pessoas, independentemente de habilidades ou 
        preferências, possam acessar a ajuda de forma fácil. Isso se aplica 
        especialmente para usuários com deficiência ou limitações cognitivas 
        ou tecnológicas, que precisam de consistência para navegar com mais 
        facilidade.
      </p>

      <h3 id="que-fazer-ajuda">O que fazer</h3>
      <p>
        Mantenha os elementos de ajuda (links, botões, ícones) consistentes 
        em termos de localização, design e funcionalidade em todas as páginas 
        da interface. Garanta que as opções de ajuda incluam formas automatizadas 
        (como chatbots) e formas de contato humano (como e-mail ou telefone) 
        para cobrir as preferências e necessidades de todos os usuários.
      </p>

      <h2 id="16">16 – Contraste Visual e Personalização</h2>
      <p>
        Para que o texto e as imagens sejam fáceis de ler, é importante ajustar 
        o contraste entre eles e o fundo.
      </p>

      <h3 id="criterios-sucesso-contraste">Critérios de Sucesso</h3>
      <p>
        O texto e as imagens de texto devem ter uma proporção de contraste mínima 
        de 4.5:1, com exceção para textos grandes (3:1), texto decorativo e 
        logotipos.
      </p>

      <h3 id="objetivo-contraste">Objetivo</h3>
      <p>
        Garantir que o texto seja legível por pessoas com visão moderadamente 
        baixa ou com dificuldades de percepção de contraste, sem o uso de 
        tecnologias assistivas.
      </p>

      <h3 id="que-fazer-contraste">O que fazer</h3>
      <p>
        Fornecer contraste suficiente entre o texto e o fundo, garantindo uma 
        proporção de contraste de 4.5:1 para textos normais e 3:1 para textos 
        grandes.
      </p>

      <div class="bg-muted p-4 rounded-lg mt-4">
        <h3 class="text-lg font-medium mb-2">Dica de Acessibilidade</h3>
        <p>Incorpore testes de acessibilidade desde o início do desenvolvimento e garanta que todos os usuários possam interagir com sua aplicação de forma eficiente e independente.</p>
      </div>
    `,
  },
  {
    id: "wcag",
    title: "Diretrizes WCAG 2.2 e Heurísticas de Nielsen",
    description: "Como usar a WCAG e as Heurísticas de Nielsen no desenvolvimento de um projeto",
    sections: [
      { id: "niveiswcag", title: "Níveis WCAG", level: 1 },
      { id: "nivelA", title: "Nível A", level: 2 },
      { id: "nivelAA", title: "Nível AA", level: 2 },
      { id: "nivelAAA", title: "Nível AAA", level: 2 },
      { id: "principioswcag", title: "Principios", level: 1 },
      { id: "perceptivel", title: "Princípio 1: Perceptível", level: 2 },
      { id: "operavel", title: "Princípio 2: Operável", level: 2 },
      { id: "compreensivel", title: "Princípio 3: Compreensível", level: 2 },
      { id: "robusto", title: "Princípio 4: Robusto", level: 2 },
      { id: "heuristicas", title: "Heurísticas de Nielsen", level: 1 },
    ],
    content: `
      <h2>Acessibilidade e Usabilidade Web</h1>
      <p>A WCAG (Web Content Accessibility Guidelines) é um conjunto de diretrizes criado para tornar a web mais acessível para todas as pessoas, incluindo aquelas com deficiências. Essas diretrizes ajudam desenvolvedores e designers a criar sites e aplicativos que podem ser usados por pessoas com dificuldades visuais, auditivas, motoras ou cognitivas.<p>

Seguir a WCAG melhora a experiência do usuário, garantindo que o conteúdo seja perceptível, operável, compreensível e robusto. Isso significa, por exemplo, usar descrições alternativas para imagens, permitir navegação por teclado e oferecer legendas para vídeos. Além de ser essencial para inclusão digital, a acessibilidade também beneficia empresas e instituições ao ampliar seu alcance e cumprir legislações sobre acessibilidade.

Adotar a WCAG não é apenas uma boa prática, mas um passo fundamental para tornar a web mais justa e acessível para todos.</p>
<li><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2 em português</a></li>
<h2 id ="niveiswcag">Níveis WCAG</h2>
<p>A WCAG estabelece três níveis de conformidade para garantir a acessibilidade de sites e conteúdos digitais: A, AA e AAA. Cada nível abrange um conjunto de critérios a serem atendidos, permitindo que o conteúdo seja acessível a um público mais amplo, independentemente de suas necessidades.</p>

<h3 id="nivelA">Nível A (Essencial) – Acessibilidade Mínima</h3>
<p>O nível A representa os requisitos fundamentais para tornar um site acessível. Embora seja a base mínima para garantir acessibilidade, ele não assegura a melhor experiência de uso. Exemplos de critérios do nível A incluem:</p>
<ul>
  <li><strong>Texto Alternativo:</strong> Todas as imagens devem ter uma descrição (atributo alt) para leitores de tela.</li>
  <li><strong>Navegação por Teclado:</strong> O site deve ser totalmente navegável sem o uso do mouse.</li>
  <li><strong>Evitar Conteúdo Piscante:</strong> Elementos que piscam não devem ultrapassar 3 flashes por segundo para evitar crises epilépticas.</li>
</ul>

<h3 id="nivelAA">Nível AA (Recomendado) – Acessibilidade Refinada</h3>
<p>O nível AA amplia os critérios do nível A, assegurando uma experiência mais acessível e ajustada às necessidades dos usuários. Este nível é frequentemente exigido por regulamentações de acessibilidade em vários países. Exemplos incluem:</p>
<ul>
  <li><strong>Contraste Adequado:</strong> O contraste entre o texto e o fundo deve ser de pelo menos 4.5:1, facilitando a leitura.</li>
  <li><strong>Legendas em Vídeos:</strong> Todo conteúdo em vídeo deve possuir legendas para usuários surdos ou com deficiência auditiva.</li>
  <li><strong>Conteúdo Reajustável:</strong> O site deve ser responsivo, permitindo ajustes sem comprometer a funcionalidade.</li>
</ul>

<h3 id="nivelAAA">Nível AAA (Avançado) – Acessibilidade Completa</h3>
<p>O nível AAA é o mais rigoroso, focando em melhorias adicionais para garantir a máxima acessibilidade. Embora não seja obrigatório na maioria dos casos, é altamente recomendado para sites que buscam oferecer uma experiência inclusiva para todos. Exemplos incluem:</p>
<ul>
  <li><strong>Contraste Maior:</strong> O contraste entre texto e fundo deve ser de pelo menos 7:1.</li>
  <li><strong>Audiodescrição Detalhada:</strong> Vídeos devem incluir descrições narradas para pessoas cegas.</li>
  <li><strong>Sem Limite de Tempo:</strong> O site deve permitir interação sem imposição de restrições de tempo.</li>
</ul>

<h3>Escolhendo o Nível de Acessibilidade</h3>
<p>Existem diferentes opções para implementar os níveis de conformidade da WCAG:</p>
<ul>
  <li><strong>Nível A:</strong> Essencial, mas pode não garantir acessibilidade completa.</li>
  <li><strong>Nível AA:</strong> O mais recomendado, sendo exigido por muitas legislações de acessibilidade.</li>
  <li><strong>Nível AAA:</strong> Ideal para máxima inclusão, embora seja desafiador de implementar por completo.</li>
</ul>
<p>O objetivo principal é garantir pelo menos o nível AA, visando uma experiência mais inclusiva para o maior número de usuários possível. 🌍</p>

      <h2 id= "principioswcag"> Princípios WCAG</h2>
      <p>A WCAG divide os temas em quatro princípios, cada um cobre uma area de conteudo ao desenvolvimento</p>
      
      <h3 id="perceptivel">Princípio 1: Perceptível</h2>
      <p>Todos os usuários devem conseguir perceber o conteúdo, independente de suas limitações:</p>
      <ul>
        <li>Forneça alternativas em texto para conteúdo não textual (imagens, vídeos)</li>
        <li>Permita que o conteúdo seja apresentado de diferentes formas</li>
        <li>Torne fácil para os usuários ver e ouvir o conteúdo</li>
      </ul>

      <h3 id="operavel">Princípio 2: Operável</h2>
      <p>A interface deve ser navegável e utilizável por todos:</p>
      <ul>
        <li>Torne todas as funcionalidades acessíveis via teclado</li>
        <li>Dê tempo suficiente para leitura e uso</li>
        <li>Ajude os usuários a navegar e encontrar conteúdo</li>
      </ul>

      <h3 id="compreensivel">Princípio 3: Compreensível</h2>
      <p>O conteúdo e operação devem ser fáceis de entender:</p>
      <ul>
        <li>Use linguagem clara e simples</li>
        <li>Faça as páginas funcionarem de maneira previsível</li>
        <li>Ajude os usuários a evitar e corrigir erros</li>
      </ul>

      <h3 id="robusto">Princípio 4: Robusto</h2>
      <p>O conteúdo deve funcionar bem em diferentes tecnologias:</p>
      <ul>
        <li>Seja compatível com tecnologias assistivas</li>
        <li>Mantenha o código limpo e bem estruturado</li>
      </ul>

      <h2 id="heuristicas">Heurísticas de Nielsen</h2>
<p>As <strong>Heurísticas de Nielsen</strong> são princípios essenciais para avaliar a usabilidade de interfaces digitais. Criadas por <strong>Jakob Nielsen</strong>, essas heurísticas ajudam designers e desenvolvedores a identificar problemas de usabilidade e melhorar a experiência do usuário. A seguir, veremos exemplos práticos de como essas heurísticas se aplicam no design de interfaces.</p>

<h3 id="listheursticas">As 10 Heurísticas de Usabilidade de Nielsen com Exemplos</h3>
<p>Abaixo estão as 10 heurísticas de Nielsen com exemplos para ilustrar como elas funcionam na prática:</p>
<ul>
  <li><strong>Visibilidade do estado do sistema:</strong> Exemplo: Quando você clica em um botão de "carregar mais" em uma página web, um indicador de carregamento aparece, mostrando ao usuário que a ação está sendo processada.</li>
  <li><strong>Correspondência entre o sistema e o mundo real:</strong> Exemplo: Um aplicativo de finanças usa ícones como "carteira" ou "fatura" para representar conceitos conhecidos, como a ideia de dinheiro ou contas a pagar, facilitando a compreensão do usuário.</li>
  <li><strong>Controle e liberdade do usuário:</strong> Exemplo: Em um formulário de cadastro, o usuário pode corrigir qualquer erro antes de finalizar, como editar um campo de email incorreto, sem ter que recomeçar o processo do início.</li>
  <li><strong>Consistência e padrões:</strong> Exemplo: Em um site de e-commerce, o botão "adicionar ao carrinho" sempre tem a mesma cor e posição em todas as páginas de produtos, criando uma experiência previsível e consistente para o usuário.</li>
  <li><strong>Prevenção de erros:</strong> Exemplo: Em um sistema de upload de arquivos, o aplicativo só permite que arquivos de tipos suportados sejam selecionados, evitando o erro de tentar fazer upload de um arquivo incompatível.</li>
  <li><strong>Reconhecimento ao invés de recordação:</strong> Exemplo: Um aplicativo de mensagens oferece sugestões de palavras enquanto o usuário digita, em vez de exigir que ele se lembre de palavras ou frases inteiras, tornando a experiência mais fluida e intuitiva.</li>
  <li><strong>Flexibilidade e eficiência de uso:</strong> Exemplo: Um editor de texto oferece atalhos de teclado para usuários experientes, permitindo que eles editem documentos mais rapidamente, enquanto ainda mantém uma interface simples e acessível para novatos.</li>
  <li><strong>Estética e design minimalista:</strong> Exemplo: Um site de receitas mantém uma interface limpa, sem excesso de informações, destacando apenas as receitas e seus ingredientes, o que facilita a navegação e evita sobrecarga de informações.</li>
  <li><strong>Ajudar os usuários a reconhecer, diagnosticar e recuperar de erros:</strong> Exemplo: Quando um usuário tenta fazer login com uma senha errada, o sistema mostra uma mensagem clara, como "Senha incorreta. Tente novamente", em vez de uma mensagem genérica de erro.</li>
  <li><strong>Ajuda e documentação:</strong> Exemplo: Um aplicativo de edição de fotos oferece um tutorial interativo na primeira vez que o usuário o abre, explicando os principais recursos e como usá-los, além de um centro de ajuda acessível sempre que necessário.</li>
</ul>

<h3>Importância das Heurísticas de Nielsen</h3>
<p>As heurísticas de Nielsen são fundamentais para garantir que uma interface seja fácil de usar e eficiente. Elas ajudam a identificar e corrigir problemas de usabilidade antes que eles afetem a experiência do usuário. Por exemplo, se um site não tiver feedback claro de carregamento ao clicar em um botão, os usuários podem ficar confusos e pensar que o site não está funcionando.</p>
<p>Essas heurísticas também evitam que o design se torne confuso ou sobrecarregado. Por exemplo, um site de e-commerce com muitos pop-ups e banners pode distrair os usuários e dificultar a navegação, mas ao seguir a heurística de "estética e design minimalista", o site pode ser mais agradável e focado no que realmente importa.</p>

<h3>Aplicação Prática</h3>
<p>As heurísticas de Nielsen são aplicadas em auditorias de usabilidade, onde os especialistas revisam interfaces de acordo com esses princípios. Por exemplo, ao avaliar um aplicativo de mensagens, um especialista pode identificar problemas de "visibilidade do estado do sistema", como a falta de um indicador de envio de mensagem, e sugerir a adição de um ícone de carregamento para informar o usuário de que a mensagem está sendo enviada.</p>

<p>Em resumo, as heurísticas de Nielsen ajudam a criar interfaces digitais mais eficazes e agradáveis de usar. Elas fornecem uma base sólida para melhorar a usabilidade, garantir que o sistema seja intuitivo e prevenir erros que possam frustrar os usuários.</p>

      </div>
    `,
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
      { id: "shortcuts", title: "Implementando Atalhos", level: 1 },
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
    `,
  },
  {
    id: "dev-tools-accessibility",
    title: "Ferramentas para Desenvolvedores Web de Acessibilidade",
    description:
      "Principais ferramentas para testar e melhorar a acessibilidade em aplicações web.",
    sections: [
      { id: "audit", title: "Auditorias Automáticas", level: 1 },
      { id: "contrast", title: "Verificação de Contraste", level: 1 },
      { id: "devtools", title: "Ferramentas do Navegador", level: 1 },
      { id: "manual-testing", title: "Testes Manuais", level: 1 },
    ],
    content: `
      <h2>Ferramentas de Auditoria Automática para Acessibilidade</h2>

<p>Ferramentas de auditoria automática são essenciais para desenvolvedores web que desejam garantir a acessibilidade de seus sites e aplicações. Elas ajudam a identificar problemas de conformidade com as diretrizes da <strong>WCAG (Web Content Accessibility Guidelines)</strong>, sugerindo melhorias para tornar os conteúdos mais acessíveis a todos os usuários, incluindo aqueles com deficiência.</p>

<h3>🔍 Principais Ferramentas de Auditoria Automática e Seus Usos</h3>

<ul>
  <li>
    <strong>Lighthouse (Google Chrome DevTools):</strong> Integrado ao Chrome DevTools, avalia acessibilidade, desempenho e SEO. Exemplo: Um desenvolvedor pode rodar o Lighthouse para testar a acessibilidade de um site e descobrir que a relação de contraste entre texto e fundo está inadequada, sugerindo um ajuste na paleta de cores.
  </li>
  <li>
    <strong>axe DevTools (Deque Systems):</strong> Extensão para Chrome e Firefox que identifica problemas de acessibilidade e sugere soluções. Exemplo: Um site de e-commerce pode usar o axe DevTools para encontrar botões sem rótulos adequados para leitores de tela e corrigi-los.
  </li>
  <li>
    <strong>WAVE (Web Accessibility Evaluation Tool):</strong> Ferramenta online que analisa contrastes, estrutura de cabeçalhos e elementos ARIA. Exemplo: Um desenvolvedor pode usar o WAVE para revisar a hierarquia de títulos de uma página, garantindo que usuários com deficiência visual possam navegar facilmente pelo conteúdo.
  </li>
  <li>
    <strong>Pa11y:</strong> Ferramenta de linha de comando para auditoria automática, ideal para integração em pipelines de CI/CD. Exemplo: Uma equipe de desenvolvimento pode configurar o Pa11y para rodar verificações automáticas em cada novo deploy e garantir que nenhuma atualização quebre padrões de acessibilidade.
  </li>
  <li>
    <strong>Siteimprove Accessibility Checker:</strong> Extensão para navegador que oferece análise detalhada focada na WCAG. Exemplo: Um editor de blog pode usar o Siteimprove para validar acessibilidade antes de publicar um novo artigo, evitando links mal descritos ou imagens sem texto alternativo.
  </li>
  <li>
    <strong>Tenon.io:</strong> API de acessibilidade usada para validação contínua. Exemplo: Uma empresa pode integrar o Tenon.io ao seu CMS para verificar automaticamente a acessibilidade de cada nova postagem antes da publicação.
  </li>
</ul>

<h3>🚀 Benefícios da Auditoria Automática na Prática</h3>

<ul>
  <li>✔️ <strong>Identificação rápida de erros comuns:</strong> Um site governamental pode usar essas ferramentas para encontrar rapidamente problemas como falta de legendas em vídeos.</li>
  <li>✔️ <strong>Sugestões diretas para correção:</strong> Um portal de serviços pode receber sugestões automáticas para corrigir botões invisíveis para leitores de tela.</li>
  <li>✔️ <strong>Facilidade de integração com fluxos de desenvolvimento:</strong> Empresas de tecnologia podem automatizar testes de acessibilidade como parte de seus processos de CI/CD.</li>
  <li>✔️ <strong>Conformidade com padrões da WCAG 2.1 e futuras versões:</strong> Sites que seguem essas diretrizes evitam problemas legais e garantem inclusão digital.</li>
</ul>

<p>Apesar dessas ferramentas serem poderosas, elas <strong>não substituem testes manuais e com usuários reais</strong>. Para um site verdadeiramente acessível, combine auditorias automáticas com testes de usabilidade envolvendo pessoas com deficiência. Exemplo: Após usar uma ferramenta de auditoria, uma empresa pode convidar usuários com deficiência para testar o site e relatar dificuldades que ferramentas automáticas podem não detectar.</p>


      <h2 id=\"contrast\">Verificação de Contraste</h2>
      <p>Ferramentas como o WebAIM Contrast Checker e o plugin WCAG Color Contrast Analyzer ajudam a garantir que o contraste entre o texto e o fundo esteja em conformidade com os padrões WCAG.</p>

      <h2>Ferramentas de Desenvolvedor (DevTools) para Testes de Acessibilidade</h2>

<p>As Ferramentas de Desenvolvedor (DevTools) do Chrome e Firefox são fundamentais para testar e otimizar a acessibilidade em sites. Ambos os navegadores oferecem diversas ferramentas que ajudam a identificar problemas de acessibilidade, testar como diferentes usuários percebem um site e garantir que ele atenda aos critérios de acessibilidade estabelecidos pelas WCAG 2.0. A seguir, destacamos alguns dos recursos mais relevantes:</p>

<h3>1. Árvore de Acessibilidade</h3>
<p>A Árvore de Acessibilidade exibe a estrutura de um site da maneira como os leitores de tela a percebem. Ela mostra os elementos de uma página web de forma hierárquica, facilitando a verificação de como os elementos são organizados para usuários com deficiência visual. Com a Árvore de Acessibilidade, é possível inspecionar:</p>
<ul>
  <li>A ordem de leitura dos elementos.</li>
  <li>Se os elementos possuem rótulos acessíveis, como <code>aria-label</code> ou texto alternativo.</li>
  <li>Se os controles interativos estão bem estruturados para navegação por teclado.</li>
</ul>
<p>No <strong>Chrome DevTools</strong>, você pode acessar a Árvore de Acessibilidade através da aba "Elements", clicando com o botão direito do mouse em um elemento e selecionando "Inspect Accessibility Properties". No <strong>Firefox</strong>, a ferramenta "Accessibility Inspector" oferece uma visão semelhante.</p>

<h3>2. Simulação de Daltonismo</h3>
<p>A simulação de daltonismo permite verificar como um site será visualizado por pessoas com diferentes tipos de deficiência de cores, como:</p>
<ul>
  <li><strong>Protanopia</strong> (cegueira para o vermelho).</li>
  <li><strong>Deuteranopia</strong> (cegueira para o verde).</li>
  <li><strong>Tritanopia</strong> (cegueira para o azul).</li>
</ul>
<p>Essas simulações ajudam a testar o contraste de cores e garantir que as informações não dependam apenas de cores para serem compreendidas. No <strong>Chrome DevTools</strong>, a simulação de daltonismo pode ser ativada na aba "Rendering" (Renderização). No <strong>Firefox</strong>, existe uma funcionalidade similar na aba "Accessibility".</p>

<h3>3. Verificação de Atributos ARIA</h3>
<p>Os atributos <strong>ARIA</strong> (Accessible Rich Internet Applications) são usados para melhorar a acessibilidade de elementos dinâmicos ou complexos, como menus suspensos, carrosséis e formulários interativos. Tanto o <strong>Chrome DevTools</strong> quanto o <strong>Firefox</strong> permitem inspecionar se esses atributos estão sendo usados corretamente, como:</p>
<ul>
  <li><code>aria-live</code> para atualizações dinâmicas.</li>
  <li><code>aria-labelledby</code> e <code>aria-describedby</code> para associar rótulos e descrições.</li>
  <li><code>role</code> para indicar o propósito de um elemento (ex.: <code>role="button"</code>).</li>
</ul>
<p>Ambos os navegadores alertam sobre problemas relacionados ao uso incorreto ou ausência desses atributos, ajudando a garantir que elementos interativos sejam acessíveis para usuários de leitores de tela.</p>

<p>Essas ferramentas são extremamente úteis para desenvolvedores e designers que buscam melhorar a acessibilidade de seus sites. Elas permitem testar e corrigir facilmente problemas sem a necessidade de dispositivos assistivos adicionais, tornando o processo mais ágil e eficaz.</p>


      <h2>Testes Manuais de Acessibilidade Web</h2>

<p>No contexto de acessibilidade web, os testes manuais desempenham um papel fundamental, especialmente quando combinados com auditorias automáticas. A ideia é identificar questões que as ferramentas automáticas podem não detectar, garantindo que a experiência do usuário seja otimizada para todos, incluindo pessoas com deficiências. Abaixo estão alguns testes manuais essenciais:</p>

<h3>1. Navegação via Teclado</h3>
<p>A navegação por teclado é uma das formas mais importantes de garantir a acessibilidade. Usuários com deficiência motora ou visual podem depender exclusivamente do teclado para navegar. Testar a navegação via teclado envolve:</p>
<ul>
  <li>Verificar se todos os elementos interativos (links, botões, formulários, etc.) podem ser acessados e manipulados sem a necessidade de um mouse.</li>
  <li>Verificar a ordem de navegação (tabulação) e se o foco visual está claramente indicado.</li>
</ul>
<p>Esse teste assegura que usuários que não podem usar o mouse possam interagir facilmente com o site.</p>

<h3>2. Análise de Código Semântico</h3>
<p>O uso de código semântico é crucial para garantir que o conteúdo seja compreendido adequadamente por tecnologias assistivas, como leitores de tela. Durante os testes manuais, o desenvolvedor verifica se o HTML está estruturado corretamente, com a semântica adequada, para garantir que os usuários de leitores de tela possam:</p>
<ul>
  <li>Navegar de forma clara e eficiente.</li>
  <li>Compreender o conteúdo sem confusão.</li>
</ul>
<p>Elementos como <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, entre outros, devem ser usados corretamente para garantir uma estrutura lógica e clara do conteúdo.</p>

<h3>3. Testes de Foco</h3>
<p>Testar o foco é vital para garantir que, ao navegar via teclado, o foco seja mantido de forma lógica e visível em todos os elementos interativos. Durante os testes de foco, o desenvolvedor deve:</p>
<ul>
  <li>Garantir que o foco esteja visível e mantenha a ordem lógica ao navegar entre os elementos interativos.</li>
  <li>Verificar que, ao abrir ou fechar elementos interativos como modais e menus suspensos, o foco seja transferido corretamente, sem se perder.</li>
  <li>Testar a navegação em páginas dinâmicas, garantindo que o foco não seja perdido ao carregar novos conteúdos.</li>
</ul>
<p>Esses testes são especialmente importantes em sites dinâmicos, onde a navegação e a interação podem ser mais complexas, garantindo que o usuário nunca se perca durante a interação.</p>

<p>Esses testes manuais ajudam a identificar problemas que não seriam capturados apenas com auditorias automáticas, como erros na experiência do usuário que podem afetar a navegação ou a interação em uma página. Quando combinados com ferramentas automáticas de auditoria, esses testes garantem que o site seja realmente acessível para o maior número de pessoas possível.</p>

    <div> `,
  },

  {
    id: "screen-readers",
    title: "Leitores de Tela",
    description: "Boas práticas para garantir compatibilidade com leitores de tela",
    sections: [
      { id: "screen-readers-accessibility", title: "Leitores de Tela e Acessibilidade", level: 1 },
      { id: "features", title: "Principais Características dos Leitores de Tela", level: 1 },
      { id: "text-interpretation", title: "Interpretação de Texto", level: 2 },
      { id: "semantic-compatibility", title: "Compatibilidade com Marcação Semântica", level: 2 },
      { id: "alternative-text", title: "Leitura de Alternativas Textuais", level: 2 },
      { id: "navigation-shortcuts", title: "Atalhos de Navegação", level: 2 },
      { id: "assistive-devices", title: "Compatibilidade com Dispositivos Assistivos", level: 2 },
      {
        id: "best-practices",
        title: "Boas Práticas para Acessibilidade com Leitores de Tela",
        level: 1,
      },
      { id: "lista", title: "Lista de Leitores de Tela", level: 1 },
      { id: "nvda", title: "NVDA (NonVisual Desktop Access)", level: 2 },
      { id: "jaws", title: "JAWS (Job Access With Speech)", level: 2 },
      { id: "voiceover", title: "VoiceOver", level: 2 },
      { id: "talkback", title: "TalkBack", level: 2 },
      { id: "orca", title: "Orca", level: 2 },
    ],
    content: `
      <h2 id="screen-readers-accessibility">Leitores de Tela e Acessibilidade</h2>
      <p>Os leitores de tela são ferramentas essenciais para a acessibilidade digital, permitindo que pessoas com deficiência visual ou dificuldades de leitura naveguem em dispositivos eletrônicos. Eles funcionam convertendo o conteúdo da tela em áudio ou braille, possibilitando que usuários interajam com interfaces digitais sem depender da visão.</p>

      <h2 id="features">Principais Características dos Leitores de Tela</h2>

      <h3 id="text-interpretation">Interpretação de Texto</h3>
      <ul>
        <li>Os leitores de tela extraem e vocalizam textos de páginas web, documentos e aplicativos.</li>
        <li>Permitem navegação por elementos estruturais, como títulos, listas e links.</li>
      </ul>

      <h3 id="semantic-compatibility">Compatibilidade com Marcação Semântica</h3>
      <ul>
        <li>Utilizam HTML semântico para identificar corretamente a função de botões, formulários e tabelas.</li>
        <li>Cabeçalhos bem estruturados (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, etc.) ajudam na navegação eficiente.</li>
      </ul>

      <h3 id="alternative-text">Leitura de Alternativas Textuais</h3>
      <ul>
        <li>Imagens e gráficos devem conter descrições <code>alt</code> para que o leitor possa fornecer contexto ao usuário.</li>
        <li>Audiodescrição pode complementar a acessibilidade em conteúdos multimídia.</li>
      </ul>

      <h3 id="navigation-shortcuts">Atalhos de Navegação</h3>
      <ul>
        <li>Usuários podem pular para seções específicas da página usando atalhos de teclado.</li>
        <li>Funcionalidades como "pular para o conteúdo principal" evitam repetições desnecessárias.</li>
      </ul>

      <h3 id="assistive-devices">Compatibilidade com Dispositivos Assistivos</h3>
      <ul>
        <li>Leitores de tela podem ser usados em conjunto com teclados adaptados e displays braille.</li>
        <li>Integram-se a sistemas operacionais, como o Narrador (Windows), VoiceOver (Mac/iOS) e TalkBack (Android).</li>
      </ul>

      <h2 id="best-practices">Boas Práticas para Acessibilidade com Leitores de Tela</h2>
      <ul>
        <li><strong>✅ Evite imagens sem <code>alt</code></strong> – Descreva a função da imagem sempre que for relevante.</li>
        <li><strong>✅ Use HTML semântico</strong> – Elementos como <code>&lt;button&gt;</code> e <code>&lt;label&gt;</code> melhoram a experiência.</li>
        <li><strong>✅ Evite apenas cores para indicar informações</strong> – Usuários cegos não percebem diferenças visuais.</li>
        <li><strong>✅ Ofereça legendas e transcrições</strong> – Essenciais para conteúdos em áudio e vídeo.</li>
        <li><strong>✅ Teste com leitores de tela</strong> – Ferramentas como NVDA (Windows) e VoiceOver (Mac) ajudam a validar acessibilidade.</li>
      </ul>
      <h2 id="lista">Lista de leitores de tela</h2>
      <p> Lista dos leitores de tela mais comuns 
      <h3 id="nvda">NVDA (NonVisual Desktop Access)</h3>
      <ul>
        <li><strong>Sistema:</strong> Windows</li>
        <li>Gratuito e de código aberto.</li>
        <li>Compatível com Chrome, Firefox e Edge.</li>
        <li>Suporte para displays braille.</li>
        <li>Leve e eficiente em máquinas menos potentes.</li>
      </ul>

      <h3 id="jaws">JAWS (Job Access With Speech)</h3>
      <ul>
        <li><strong>Sistema:</strong> Windows</li>
        <li>Software pago (versão gratuita para educação e testes).</li>
        <li>Integração avançada com Microsoft Office e navegadores.</li>
        <li>Suporte para telas sensíveis ao toque.</li>
        <li>Permite scripts personalizados para automação.</li>
      </ul>

      <h3 id="voiceover">VoiceOver</h3>
      <ul>
        <li><strong>Sistema:</strong> macOS, iOS, iPadOS</li>
        <li>Integrado aos dispositivos Apple, sem necessidade de instalação.</li>
        <li>Compatível com Mac, iPhone, iPad e Apple Watch.</li>
        <li>Suporte para gestos no touchpad e tela sensível ao toque.</li>
        <li>Leitura de descrições de imagens com IA.</li>
      </ul>

      <h3 id="talkback">TalkBack</h3>
      <ul>
        <li><strong>Sistema:</strong> Android</li>
        <li>Nativo em dispositivos Android.</li>
        <li>Controle por gestos na tela sensível ao toque.</li>
        <li>Feedback por vibração e som para navegação intuitiva.</li>
        <li>Compatível com teclados físicos e displays braille.</li>
      </ul>

      <h3 id="orca">Orca</h3>
      <ul>
        <li><strong>Sistema:</strong> Linux</li>
        <li>Gratuito e de código aberto.</li>
        <li>Compatível com GNOME e algumas distribuições Linux.</li>
        <li>Suporte para Firefox e Chromium.</li>
        <li>Personalizável com sintetizadores de voz e braille.</li>
      </ul>

      <p>Esses leitores de tela tornam a tecnologia mais inclusiva, permitindo a navegação digital independente para todos. 🚀</p>

      <div class="bg-muted p-4 rounded-lg mt-4">
        <h3 class="text-lg font-medium mb-2">Links de acesso:</h3>
        <ul> 
          <li><a href="https://www.nvaccess.org/" target="_blank">NVDA Screen Reader</a></li>
          <li><a href="https://www.freedomscientific.com/products/software/jaws/" target="_blank">JAWS</a></li>
          <li><a href="https://www.apple.com/voiceover/info/guide/_1121.html" target="_blank">VoiceOver</a></li>
          <li><a href="https://support.google.com/accessibility/android/answer/6283677?hl=en" target="_blank">TalkBack</a></li>
          <li><a href="https://help.gnome.org/users/orca/stable/index.html.en" target="_blank">Orca Screen Reader</a></li>
        </ul>
      </div>

      <div class="bg-muted p-4 rounded-lg mt-4">
        <h3 class="text-lg font-medium mb-2">Dica de Desenvolvimento</h3>
        <p>Durante o desenvolvimento, use diferentes ferramentas de leitura de tela para verificar a acessibilidade dos elementos e interações.</p>
      </div>
    `,
  },
  {
    id: "dev-guidelines",
    title: "Desenvolvimento Web Acessível",
    description:
      "Guia prático para criar sites acessíveis com foco em elementos específicos e exemplos de código",
    sections: [
      { id: "principios", title: "Princípios Fundamentais", level: 1 },
      { id: "design", title: "Design Inclusivo", level: 1 },
      { id: "navegacao", title: "Navegação", level: 1 },
      { id: "images", title: "Imagens", level: 1 },
      { id: "images-examples", title: "Exemplos de Implementação", level: 2 },
      { id: "videos", title: "Vídeos", level: 1 },
      { id: "videos-examples", title: "Exemplos de Implementação", level: 2 },
      { id: "forms", title: "Formulários", level: 1 },
      { id: "forms-examples", title: "Exemplos de Implementação", level: 2 },
      { id: "testing", title: "Testes de Acessibilidade", level: 1 },
    ],
    content: `

      <p>Um guia prático para implementar acessibilidade em elementos específicos do seu site.</p>

      <h2 id="principios">Princípios Fundamentais</h2>

      <h3>1. Semântica HTML</h3>
      <ul>
        <li>Use elementos HTML com significado semântico apropriado</li>
        <li>Estruture o conteúdo hierarquicamente</li>
        <li>Evite usar divs e spans quando existir um elemento semântico mais apropriado</li>
      </ul>

      <h3>2. Estrutura do Documento</h3>
      <ul>
        <li>Use landmarks para definir regiões importantes (header, main, nav, footer)</li>
        <li>Organize o conteúdo em seções lógicas</li>
        <li>Mantenha uma hierarquia clara de cabeçalhos (h1-h6)</li>
      </ul>

      <h3>3. Interatividade</h3>
      <ul>
        <li>Garanta que todas as interações possam ser feitas via teclado</li>
        <li>Forneça feedback claro para todas as ações</li>
        <li>Mantenha estados focáveis visíveis e distinguíveis</li>
      </ul>

      <h2 id="design">Design Inclusivo</h2>

      <h3>1. Cores e Contrastes</h3>
      <ul>
        <li>Use uma paleta de cores com contraste adequado (mínimo 4.5:1 para texto normal)</li>
        <li>Não transmita informações apenas através de cores</li>
        <li>Considere diferentes tipos de daltonismo</li>
      </ul>

      <h3>2. Tipografia</h3>
      <ul>
        <li>Escolha fontes legíveis e com boa leiturabilidade</li>
        <li>Mantenha um tamanho de texto adequado (mínimo 16px para corpo de texto)</li>
        <li>Use espaçamento adequado entre linhas e parágrafos</li>
      </ul>

      <h3>3. Layout Responsivo</h3>
      <ul>
        <li>Projete para diferentes tamanhos de tela</li>
        <li>Permita zoom até 400% sem perda de funcionalidade</li>
        <li>Mantenha a ordem lógica do conteúdo em diferentes layouts</li>
      </ul>

      <h2 id="navegacao">Navegação</h2>

      <h3>1. Menu Principal</h3>
      <ul>
        <li>Estruture menus usando listas (&lt;ul&gt;, &lt;li&gt;)</li>
        <li>Indique o item atual no menu</li>
        <li>Forneça múltiplas formas de navegação</li>
      </ul>

      <h3>2. Skip Links</h3>
      <ul>
        <li>Adicione links para pular para o conteúdo principal</li>
        <li>Torne skip links visíveis quando focados</li>
        <li>Posicione no topo da página</li>
      </ul>

      <h3>3. Breadcrumbs</h3>
      <ul>
        <li>Use para sites com hierarquia profunda</li>
        <li>Indique a posição atual na navegação</li>
        <li>Mantenha consistência em todas as páginas</li>
      </ul>

      <h2 id="images">Imagens</h2>
      <p>As imagens são elementos fundamentais para a web moderna, mas precisam ser implementadas corretamente.</p>

      <h3 id="images-examples">Exemplos de Implementação</h3>

      <h4>HTML Básico</h4>
      <pre><code class="language-html">&lt;!-- Imagem com texto alternativo --&gt;
&lt;img 
  src="/exemplo.jpg" 
  alt="Descrição clara da imagem"
  loading="lazy" 
/&gt;

&lt;!-- Imagem decorativa --&gt;
&lt;img 
  src="/decorativa.jpg" 
  alt="" 
  role="presentation"
/&gt;</code></pre>

      <h4>Componente React</h4>
      <pre><code class="language-tsx">interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function AccessibleImage({ 
  src, 
  alt, 
  caption 
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    &lt;figure className="relative"&gt;
      &lt;div className={\`
        relative overflow-hidden
        \${!isLoaded ? 'animate-pulse' : ''}
      \`}&gt;
        &lt;Image
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className="object-cover"
        /&gt;
      &lt;/div&gt;
      {caption && (
        &lt;figcaption className="mt-2"&gt;
          {caption}
        &lt;/figcaption&gt;
      )}
    &lt;/figure&gt;
  );
}</code></pre>

      <h2 id="videos">Vídeos</h2>
      <p>Conteúdo em vídeo precisa ser acessível para todos os usuários.</p>

      <h3 id="videos-examples">Exemplos de Implementação</h3>

      <h4>HTML com Legendas</h4>
      <pre><code class="language-html">&lt;figure&gt;
  &lt;video 
    controls 
    preload="metadata"
    poster="/thumbnail.jpg"
  &gt;
    &lt;source 
      src="/video.mp4" 
      type="video/mp4" 
    /&gt;
    &lt;track 
      kind="captions" 
      src="/legendas.vtt" 
      srclang="pt" 
      label="Português" 
    /&gt;
    Seu navegador não suporta vídeo.
  &lt;/video&gt;
  &lt;figcaption&gt;
    Título do vídeo
  &lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>

      <h4>Componente React para Vídeo</h4>
      <pre><code class="language-tsx">interface VideoProps {
  src: string;
  poster?: string;
  title: string;
}

export function AccessibleVideo({
  src,
  poster,
  title
}: VideoProps) {
  const videoRef = useRef&lt;HTMLVideoElement&gt;(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    &lt;figure className="w-full"&gt;
      &lt;div 
        className="relative"
        role="region"
        aria-label={\`Vídeo: \${title}\`}
      &gt;
        &lt;video
          ref={videoRef}
          className="w-full"
          poster={poster}
          controls
        &gt;
          &lt;source src={src} type="video/mp4" /&gt;
        &lt;/video&gt;
      &lt;/div&gt;
      &lt;figcaption&gt;{title}&lt;/figcaption&gt;
    &lt;/figure&gt;
  );
}</code></pre>

      <h2 id="forms">Formulários Acessíveis</h2>
      <p>Formulários acessíveis com validação e feedback.</p>

      <h3 id="forms-examples">Exemplos de Implementação</h3>

      <h4>Formulário de Contato</h4>
      <pre><code class="language-tsx">import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensagem muito curta')
});

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  return (
    &lt;form 
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    &gt;
      &lt;div&gt;
        &lt;label htmlFor="name"&gt;
          Nome
        &lt;/label&gt;
        &lt;input
          id="name"
          {...register('name')}
          aria-invalid={!!errors.name}
        /&gt;
        {errors.name && (
          &lt;p role="alert"&gt;
            {errors.name.message}
          &lt;/p&gt;
        )}
      &lt;/div&gt;

      &lt;div&gt;
        &lt;label htmlFor="email"&gt;
          Email
        &lt;/label&gt;
        &lt;input
          id="email"
          type="email"
          {...register('email')}
          aria-invalid={!!errors.email}
        /&gt;
        {errors.email && (
          &lt;p role="alert"&gt;
            {errors.email.message}
          &lt;/p&gt;
        )}
      &lt;/div&gt;

      &lt;button type="submit"&gt;
        Enviar
      &lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

      <h2 id="testing">Testes de Acessibilidade</h2>

      <h3>1. Testes Automáticos</h3>
      <ul>
        <li>Use ferramentas como WAVE, aXe, ou Lighthouse</li>
        <li>Verifique problemas de contraste e estrutura HTML</li>
        <li>Execute testes em diferentes páginas do site</li>
      </ul>

      <h3>2. Testes Manuais</h3>
      <ul>
        <li>Navegue usando apenas teclado</li>
        <li>Teste com diferentes leitores de tela</li>
        <li>Verifique funcionalidades com zoom ativado</li>
      </ul>

      <h3>3. Testes com Usuários</h3>
      <ul>
        <li>Inclua pessoas com diferentes necessidades</li>
        <li>Observe padrões de uso e dificuldades</li>
        <li>Colete feedback e implemente melhorias</li>
      </ul>

      <h3>Ferramentas Recomendadas</h3>
      <ul>
        <li>Leitores de tela: NVDA (Windows), VoiceOver (Mac), JAWS</li>
        <li>Extensões: WAVE, aXe, Lighthouse</li>
        <li>Simuladores de daltonismo</li>
        <li>Verificadores de contraste</li>
      </ul>

      <h3>Recursos para Desenvolvimento</h3>
      <ul>
        <li>HTML5 Accessibility</li>
        <li>MDN Web Docs - Accessibility</li>
        <li>WebAIM Articles and Resources</li>
        <li>A11Y Project</li>
      </ul>

      <div class="bg-muted p-4 rounded-lg mt-8">
        <h3 class="text-lg font-medium mb-2">Dicas de Implementação</h3>
        <ul>
          <li>Comece com HTML semântico desde o início do projeto</li>
          <li>Integre testes de acessibilidade no processo de desenvolvimento</li>
          <li>Documente decisões e padrões de acessibilidade</li>
          <li>Mantenha uma checklist de verificação</li>
        </ul>
      </div>

      <div class="bg-muted p-4 rounded-lg mt-8">
        <h3 class="text-lg font-medium mb-2">
          Recursos Adicionais
        </h3>
        <ul>
          <li>
            <a href="https://www.w3.org/WAI/tutorials/">
              W3C Web Accessibility Tutorials
            </a>
          </li>
          <li>
            <a href="https://react.dev/reference/react/accessibility">
              React Accessibility Guide
            </a>
          </li>
        </ul>
      </div>
    `,
  },
];
