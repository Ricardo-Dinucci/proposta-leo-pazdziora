export default function Services() {
  const services = [
    {
      phase: "1. Elementos Fundamentais",
      duration: "4 semanas",
      items: [
        "Formalização do método Leo Pazdziora",
        "Nicho: Travel Hacking / Otimização de Milhas", 
        "Avatar: Viajantes que querem economizar 70%+",
        "Roma: 'Viagens de luxo gastando como classe econômica'",
        "Árvore de objeções específica do nicho",
        "Estruturação completa da oferta"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      phase: "2. Audiência e Conteúdo",
      duration: "30-45 dias",
      items: [
        "Copywriting especializado em milhas",
        "Roteiro de Raízes: Cases de resgates épicos",
        "Roteiro de Nutellas: Dicas rápidas de milhas",
        "E-mails: Sequência educativa sobre travel hacking",
        "Design & Vídeo mantendo identidade visual",
        "Gestão completa de social media"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      phase: "3. Pré-Pré-Lançamento",
      duration: "15 dias",
      items: [
        "Workshop gratuito: 'Hospedagens Gratuitas com Milhas'",
        "Página de captura otimizada",
        "Sequência de aquecimento personalizada",
        "Gestão de grupos WhatsApp",
        "Criativos e campanhas de tráfego",
        "Automações ManyChat"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      phase: "4. Lançamento",
      duration: "7 dias",
      items: [
        "Método completo de travel hacking",
        "Ofertas estruturadas com bônus",
        "Lives da semana do carrinho",
        "Recuperação de carrinho abandonado",
        "Suporte especializado ao lead",
        "Apuração completa de vendas"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Operacionalização de Lançamentos <span className="text-orange-600">RCDNC</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Metodologia completa adaptada para o nicho de milhas e viagens, 
            mantendo sua identidade e maximizando resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <h3 className="text-xl font-bold mb-2">{service.phase}</h3>
                <div className="text-sm opacity-90">{service.duration}</div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Adaptação Específica para Milhas</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Todos os entregáveis são customizados para o universo de travel hacking, 
              mantendo a autenticidade da marca Leo Pazdziora.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Conteúdo Especializado</h4>
              <p className="text-sm text-gray-400">
                Copywriting e materiais focados em milhas, pontos e travel hacking
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Identidade Preservada</h4>
              <p className="text-sm text-gray-400">
                Mantemos o tom e estilo visual da marca Resgates com Milhas
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Resultados Escaláveis</h4>
              <p className="text-sm text-gray-400">
                Foco em crescimento sustentável e replicabilidade dos lançamentos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}