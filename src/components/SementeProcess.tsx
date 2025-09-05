import { FloatingTravelElements } from './TravelIcons';

export default function SementeProcess() {
  const etapas = [
    {
      fase: "Preparação",
      tempo: "Semanas 1-2",
      itens: [
        "Definição da oferta digital (curso/mentoria/workshop)",
        "Estruturação do conteúdo básico",
        "Criação de página de vendas simples",
        "Setup de sistema de pagamento",
        "Definição de preço atrativo (R$ 197-497)"
      ],
      icon: "🎯",
      color: "from-blue-500 to-blue-600"
    },
    {
      fase: "Aquecimento",
      tempo: "Semana 3",
      itens: [
        "Conteúdo de valor nas redes sociais",
        "Stories sobre travel hacking",
        "Depoimentos de cases de sucesso",
        "Construção de expectativa",
        "Captura de leads interessados"
      ],
      icon: "🔥",
      color: "from-orange-500 to-orange-600"
    },
    {
      fase: "Lançamento",
      tempo: "Semana 4",
      itens: [
        "Abertura das vendas com live",
        "Apresentação da oferta completa",
        "Demonstração do método",
        "Call to action direto",
        "Acompanhamento de vendas em tempo real"
      ],
      icon: "🚀",
      color: "from-green-500 to-green-600"
    },
    {
      fase: "Validação",
      tempo: "Pós-venda",
      itens: [
        "Entrega do produto aos primeiros clientes",
        "Coleta de feedback e depoimentos",
        "Análise de resultados e métricas",
        "Otimizações para próximo lançamento",
        "Planejamento de escala"
      ],
      icon: "✅",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      {/* Background de praia paradisíaca */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/beach-vacation.jpg)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 to-slate-100/95"></div>
      
      {/* Elementos visuais animados */}
      <div className="absolute top-16 left-16 opacity-10 animate-bounce">
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-orange-400">
          <path fill="currentColor" d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2H6M6,4H18V20H6V4M8,6V8H16V6H8M8,10V12H16V10H8M8,14V16H16V14H8Z" />
        </svg>
      </div>
      
      <div className="absolute top-40 right-20 opacity-8 animate-pulse delay-500">
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-green-400">
          <path fill="currentColor" d="M8,7V2A1,1 0 0,1 9,1H15A1,1 0 0,1 16,2V7H19A1,1 0 0,1 20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V8A1,1 0 0,1 5,7H8M10,3V7H14V3H10Z" />
        </svg>
      </div>
      
      <div className="absolute bottom-32 left-32 opacity-10 animate-pulse delay-1000">
        <svg viewBox="0 0 24 24" className="w-14 h-14 text-blue-400">
          <path fill="currentColor" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Metodologia <span className="text-orange-600">Lançamento-Semente</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Processo simplificado de 4 semanas para validar sua oferta digital 
            e conquistar suas primeiras vendas no nicho de milhas e viagens.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-orange-100 border border-orange-300 rounded-xl p-6 flex-1">
              <div className="text-orange-800 font-semibold mb-2">
                🎯 Objetivo Principal: PELO MENOS UMA VENDA
              </div>
              <div className="text-orange-700 text-sm">
                O lançamento-semente foca na validação do produto e conquista das primeiras vendas, 
                não no volume de faturamento.
              </div>
            </div>
            
            <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src="/leo-bio.jpg" 
                  alt="Leo Pazdziora"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-slate-800 font-semibold">
                  Leo já tem a base ideal
                </div>
              </div>
              <div className="text-slate-700 text-sm">
                31.6K seguidores + autoridade construída + método validado = 
                receita para o sucesso no lançamento-semente.
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {etapas.map((etapa, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <div className={`bg-gradient-to-r ${etapa.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{etapa.icon}</span>
                  <h3 className="text-xl font-bold">{etapa.fase}</h3>
                </div>
                <div className="text-sm opacity-90">{etapa.tempo}</div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {etapa.itens.map((item, itemIndex) => (
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

        {/* Diferenças do Lançamento Clássico */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Lançamento-Semente vs <span className="text-gray-400">Lançamento Clássico</span>
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Entenda as principais diferenças entre nossa abordagem semente e um lançamento tradicional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative bg-orange-600 rounded-xl p-6 overflow-hidden">
              <div className="absolute top-2 right-2 opacity-20">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
                  <path fill="currentColor" d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
                </svg>
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  🌱 Lançamento-Semente
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Foco em validação e primeiras vendas</li>
                  <li>• Produto mínimo viável (MVP)</li>
                  <li>• Investimento menor em tráfego</li>
                  <li>• 4 semanas de execução</li>
                  <li>• Meta: 1-10 vendas</li>
                  <li>• Ticket: R$ 197-497</li>
                  <li>• Audiência orgânica + pequenos investimentos</li>
                </ul>
              </div>
            </div>
            
            <div className="relative bg-slate-700 rounded-xl p-6 overflow-hidden">
              <div className="absolute top-2 right-2 opacity-20">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-400">
                  <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-300">
                  🎯 Lançamento Clássico
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Foco em volume e escala</li>
                  <li>• Produto completo e polido</li>
                  <li>• Alto investimento em tráfego</li>
                  <li>• 8-12 semanas de execução</li>
                  <li>• Meta: 50-500+ vendas</li>
                  <li>• Ticket: R$ 997-2.997+</li>
                  <li>• Campanhas massivas de marketing</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-green-900 bg-opacity-50 border border-green-500 rounded-lg p-4">
              <div className="text-green-300 font-semibold mb-1">
                💡 Por que começar com Lançamento-Semente?
              </div>
              <div className="text-sm text-gray-300">
                Menor risco, validação rápida, aprendizado prático e base sólida para escalar posteriormente.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}