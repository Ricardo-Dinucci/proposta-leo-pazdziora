export default function Investment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Investimento <span className="text-orange-600">Lançamento-Semente</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Investimento ajustado para seu primeiro produto digital com foco na validação e primeiras vendas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Setup + 1º Lançamento */}
          <div className="bg-slate-50 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
              SETUP COMPLETO
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              Lançamento-Semente Completo
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-orange-600">R$ 8.000</div>
                  <div className="text-sm text-slate-600">À Vista (PIX)</div>
                </div>
                <div className="text-center text-sm text-slate-500">
                  ou 8x R$ 1.000 (cartão)
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                <div className="text-center">
                  <div className="text-xl font-bold mb-2">Co-participação</div>
                  <div className="text-3xl font-bold">15%</div>
                  <div className="text-sm opacity-90">do faturamento bruto</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Inclui:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Definição da oferta digital (MVP)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Criação de página de vendas simples</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Estratégia de conteúdo para aquecimento</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Lançamento-semente (4 semanas)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Validação e análise de resultados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Manutenção Mensal */}
          <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
              PÓS-LANÇAMENTO
            </div>
            
            <h3 className="text-2xl font-bold mb-6">
              Manutenção Mensal
            </h3>
            
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl text-slate-400 line-through">R$ 2.500</div>
                  <div className="text-3xl font-bold text-green-400">R$ 1.500</div>
                  <div className="text-sm text-gray-400">PIX (Desconto Semente)</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-orange-400">Inclui:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Gestão básica de redes sociais</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>5 posts estáticos mensais</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>10 edições de vídeos mensais</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Suporte básico ao lead</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Planejamento do próximo lançamento</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-orange-600 rounded-lg p-4 text-center">
                <div className="text-sm font-semibold">Só começa após o lançamento</div>
              </div>
            </div>
          </div>
        </div>

        {/* Inspiração Leo */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-800 rounded-lg p-4">
              <img 
                src="/hospedagens-capa.webp" 
                alt="Workshop"
                className="w-full h-24 object-cover rounded-md mb-3"
              />
              <div className="text-orange-400 font-semibold text-sm">Workshops Validados</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <img 
                src="/consultoria.png" 
                alt="Consultoria"
                className="w-full h-24 object-cover rounded-md mb-3"
              />
              <div className="text-orange-400 font-semibold text-sm">Consultoria Ativa</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <img 
                src="/first-milhas-capa.webp" 
                alt="First Milhas"
                className="w-full h-24 object-cover rounded-md mb-3"
              />
              <div className="text-orange-400 font-semibold text-sm">Programa Exclusivo</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <div className="text-white font-semibold">Leo já tem a base ideal para o lançamento-semente</div>
            <div className="text-gray-300 text-sm">Hora de digitalizar e escalar!</div>
          </div>
        </div>

        {/* Bônus */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-900">
            Bônus Exclusivos <span className="text-orange-600">RCDNC</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-slate-900">Mentoria de Ofertas</h4>
              <p className="text-sm text-slate-600">Estruturação de downsell, upsell e orderbump</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-slate-900">Automações ManyChat</h4>
              <p className="text-sm text-slate-600">Setup completo e personalizado</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-slate-900">Treinamento de Conteúdo</h4>
              <p className="text-sm text-slate-600">Raízes, nutellas e CPLs</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4M6 9v10a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2H8a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-slate-900">Canal WhatsApp</h4>
              <p className="text-sm text-slate-600">Suporte direto e tira dúvidas</p>
            </div>
          </div>
        </div>

        {/* Condições */}
        <div className="mt-12 bg-slate-800 rounded-xl p-6 text-white text-sm">
          <h4 className="font-semibold mb-4 text-orange-400">Condições Importantes:</h4>
          <ul className="space-y-2 text-gray-300">
            <li>• Proposta válida por 7 dias</li>
            <li>• Válida para 1 produto do negócio digital Leo Pazdziora</li>
            <li>• Acompanhamento do lançamento atual será cortesia (desconto R$ 2.000)</li>
            <li>• A partir do 2º lançamento, novo aditivo contratual com valor renegociado</li>
            <li>• Contrato sem vínculo societário - todos os entregáveis ficam com o cliente</li>
          </ul>
        </div>
      </div>
    </section>
  );
}