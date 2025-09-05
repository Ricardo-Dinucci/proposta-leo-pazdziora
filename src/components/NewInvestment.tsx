import { FloatingTravelElements } from './TravelIcons';

export default function NewInvestment() {
  const servicosIndividuais = [
    {
      categoria: "Elementos Fundamentais",
      periodo: "Semana 1-2",
      servicos: [
        { nome: "Definição/Revisão de Nicho e Avatar", preco: 1200 },
        { nome: "Formalização do Método/Conteúdo", preco: 1500 },
        { nome: "Estruturação da Oferta Digital", preco: 1000 },
        { nome: "Estratégia de Preços Roma", preco: 800 },
      ]
    },
    {
      categoria: "Audiência e Conteúdo",
      periodo: "Semana 2-3",
      servicos: [
        { nome: "Copywriting para Vendas", preco: 2000 },
        { nome: "Roteiros de Conteúdo e Posts", preco: 1200 },
        { nome: "Sequência de E-mails (14 dias)", preco: 1500 },
        { nome: "Scripts para Redes Sociais", preco: 1000 },
      ]
    },
    {
      categoria: "Captação e Tráfego Pago",
      periodo: "Semana 3-4",
      servicos: [
        { nome: "Landing Page de Captura", preco: 1800 },
        { nome: "Página de Vendas + Checkout", preco: 2200 },
        { nome: "Criação de Criativos para Ads", preco: 1500 },
        { nome: "Setup e Gestão de Campanhas", preco: 2500 },
        { nome: "Monitoramento e Otimização", preco: 1000 },
      ]
    },
    {
      categoria: "Lançamento e Recuperação",
      periodo: "Semana 4 + Pós-venda",
      servicos: [
        { nome: "Roteiro de Webinar de Vendas", preco: 1500 },
        { nome: "Sequência de Recuperação de Carrinho", preco: 1200 },
        { nome: "Automações de Follow-up", preco: 1000 },
        { nome: "Suporte Técnico Durante Lançamento", preco: 1500 },
        { nome: "Análise de Resultados e Relatórios", preco: 800 },
      ]
    }
  ];

  const totalServicos = servicosIndividuais.reduce((total, categoria) => {
    return total + categoria.servicos.reduce((catTotal, servico) => catTotal + servico.preco, 0);
  }, 0);

  const modalidades = [
    {
      nome: "Sem Co-participação",
      tipo: "PAGAMENTO TOTAL",
      valor: 12000,
      descricao: "Investimento fixo sem divisão de resultados",
      vantagens: [
        "Sem divisão de faturamento",
        "Todos os lucros são seus",
        "Propriedade total dos materiais",
        "Sem compromissos futuros"
      ],
      cor: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      nome: "Com Co-participação 15%",
      tipo: "PARCERIA PADRÃO",
      valor: 8000,
      coparticipacao: 15,
      descricao: "Investimento reduzido + divisão de resultados",
      vantagens: [
        "Investimento inicial menor",
        "Risco compartilhado",
        "RCDNC investido no seu sucesso",
        "Suporte contínuo durante todo processo"
      ],
      cor: "from-orange-500 to-orange-600",
      popular: true
    },
    {
      nome: "Co-participação 50%",
      tipo: "SOCIEDADE ESTRATÉGICA",
      valor: 4000,
      coparticipacao: 50,
      descricao: "Mínimo investimento + parceria total",
      vantagens: [
        "Investimento mínimo inicial",
        "Parceria 50/50 nos resultados",
        "Máximo comprometimento RCDNC",
        "Crescimento conjunto a longo prazo"
      ],
      cor: "from-green-500 to-green-600",
      popular: false
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background de skyline de cidade */}
      <div 
        className="absolute inset-0 opacity-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/city-skyline.jpg)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/88 to-white/92"></div>
      
      {/* Elementos de dinheiro e promoção flutuantes */}
      <div className="absolute top-20 right-16 opacity-8 animate-pulse">
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-green-500">
          <path fill="currentColor" d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" />
        </svg>
      </div>
      
      <div className="absolute bottom-32 left-20 opacity-8 animate-bounce delay-700">
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-orange-500">
          <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17H13V16H14A2,2 0 0,0 16,14V10A2,2 0 0,0 14,8H10V10H14V14H10V16H11V17Z" />
        </svg>
      </div>
      
      <div className="absolute top-48 left-12 opacity-6 animate-pulse delay-300">
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-purple-500">
          <path fill="currentColor" d="M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9Z" />
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Investimento <span className="text-orange-600">Modular</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Escolha a modalidade que melhor se adequa ao seu perfil e momento atual.
          </p>
        </div>

        {/* Serviços Individuais */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-900">
            Serviços por <span className="text-orange-600">Categoria</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {servicosIndividuais.map((categoria, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-2 text-slate-900">{categoria.categoria}</h4>
                <div className="text-xs text-slate-600 mb-4 bg-orange-100 rounded px-2 py-1">
                  📅 {categoria.periodo}
                </div>
                <div className="space-y-3">
                  {categoria.servicos.map((servico, servicoIndex) => (
                    <div key={servicoIndex} className="border-b border-slate-200 pb-2">
                      <div className="text-sm text-slate-700 mb-1">{servico.nome}</div>
                      <div className="font-semibold text-orange-600">R$ {servico.preco.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-slate-300">
                  <div className="font-bold text-slate-900">
                    Subtotal: R$ {categoria.servicos.reduce((sum, s) => sum + s.preco, 0).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-slate-900 rounded-xl p-6 max-w-md mx-auto">
              <div className="text-white font-bold text-xl mb-2">Valor Total dos Serviços</div>
              <div className="text-orange-400 font-bold text-3xl">R$ {totalServicos.toLocaleString()}</div>
              <div className="text-gray-400 text-sm mt-2">Se contratados individualmente</div>
            </div>
          </div>
        </div>

        {/* Modalidades de Proposta */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-900">
            Modalidades de <span className="text-orange-600">Parceria</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {modalidades.map((modalidade, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden relative transform hover:scale-105 transition-all duration-300 hover:shadow-2xl ${modalidade.popular ? 'ring-4 ring-orange-400 animate-pulse' : 'hover:ring-2 hover:ring-orange-200'}`}>
                {modalidade.popular && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    MAIS POPULAR
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${modalidade.cor} p-6 text-white text-center`}>
                  <h4 className="text-xl font-bold mb-2">{modalidade.nome}</h4>
                  <div className="text-sm opacity-90 mb-4">{modalidade.tipo}</div>
                  
                  <div className="mb-4">
                    <div className="text-3xl font-bold mb-1">R$ {modalidade.valor.toLocaleString()}</div>
                    <div className="text-sm opacity-90">Investimento Inicial</div>
                  </div>
                  
                  {modalidade.coparticipacao && (
                    <div className="bg-slate-800 bg-opacity-70 rounded-lg p-3 text-white">
                      <div className="text-sm text-white opacity-90">+ Co-participação</div>
                      <div className="text-2xl font-bold text-white">{modalidade.coparticipacao}%</div>
                      <div className="text-xs text-white opacity-80">do faturamento</div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <p className="text-slate-600 mb-6">{modalidade.descricao}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="font-semibold text-slate-900">Vantagens:</div>
                    {modalidade.vantagens.map((vantagem, vIndex) => (
                      <div key={vIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        <span>{vantagem}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="text-sm text-slate-800 mb-2">Economia vs. Individual:</div>
                    <div className="font-bold text-green-700">
                      R$ {(totalServicos - modalidade.valor).toLocaleString()} 
                      <span className="text-sm font-normal text-slate-700"> de desconto</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparativo de ROI */}
        <div className="mt-16 relative bg-slate-900 rounded-2xl p-8 overflow-hidden">
          {/* Background sutil de classe executiva */}
          <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/business-class.jpg)' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/95"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">
              Simulação de <span className="text-orange-400">ROI</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 text-center">
              <div className="text-blue-400 font-bold text-lg mb-2">Sem Co-participação</div>
              <div className="text-white text-sm mb-4">Meta Faturamento: R$ 5.000</div>
              <div className="text-green-400 font-bold">Lucro Leo: R$ 5.000</div>
              <div className="text-gray-400 text-xs mt-1">ROI: 24% sobre investimento</div>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 text-center ring-2 ring-orange-400">
              <div className="text-orange-400 font-bold text-lg mb-2">Co-participação 15%</div>
              <div className="text-white text-sm mb-4">Meta Faturamento: R$ 5.000</div>
              <div className="text-green-400 font-bold">Lucro Leo: R$ 4.250</div>
              <div className="text-gray-400 text-xs mt-1">ROI: 30% sobre investimento</div>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 text-center">
              <div className="text-green-400 font-bold text-lg mb-2">Co-participação 50%</div>
              <div className="text-white text-sm mb-4">Meta Faturamento: R$ 5.000</div>
              <div className="text-green-400 font-bold">Lucro Leo: R$ 2.500</div>
              <div className="text-gray-400 text-xs mt-1">ROI: 28% sobre investimento</div>
            </div>
          </div>
          
            <div className="mt-6 text-center">
              <div className="bg-orange-900 bg-opacity-50 border border-orange-500 rounded-lg p-4 max-w-2xl mx-auto">
                <div className="text-orange-300 font-semibold mb-1">
                  💡 Escolha Estratégica
                </div>
                <div className="text-sm text-gray-300">
                  Co-participação = Menor risco + Maior ROI + Parceiro comprometido com seu sucesso
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Condições */}
        <div className="mt-12 bg-slate-800 rounded-xl p-6 text-white text-sm">
          <h4 className="font-semibold mb-4 text-orange-400">Condições Importantes:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-gray-300">
              <li>• Proposta válida por 7 dias</li>
              <li>• Válida para 1 produto do negócio digital</li>
              <li>• Todos os entregáveis ficam com o cliente</li>
              <li>• Contrato sem vínculo societário</li>
            </ul>
            <ul className="space-y-2 text-gray-300">
              <li>• Co-participação apenas sobre faturamento bruto</li>
              <li>• Sem co-participação em custos ou despesas</li>
              <li>• Relatórios transparentes de vendas</li>
              <li>• Possibilidade de renegociação futura</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}