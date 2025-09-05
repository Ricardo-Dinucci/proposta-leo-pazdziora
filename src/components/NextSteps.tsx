export default function NextSteps() {
  return (
    <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
      {/* Background de terminal de aeroporto */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/airport-terminal.jpg)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 to-slate-800/90"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Próximos <span className="text-orange-400">Passos</span>
          </h2>
          <p className="text-xl text-gray-300">
            Vamos transformar seu conhecimento em milhas em um negócio escalável
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Reunião de Alinhamento</h3>
            <p className="text-gray-300 mb-4">
              Encontro via Google Meet para alinharmos expectativas, 
              cronograma e detalhes da operação.
            </p>
            <div className="bg-slate-800 rounded-lg p-3 text-sm">
              <strong>Duração:</strong> 60-90 minutos
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Assinatura do Contrato</h3>
            <p className="text-gray-300 mb-4">
              Contrato digital de prestação de serviços sem vínculo societário. 
              Todos os entregáveis ficam com você.
            </p>
            <div className="bg-slate-800 rounded-lg p-3 text-sm">
              <strong>Prazo:</strong> 24-48 horas
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Início da Operação</h3>
            <p className="text-gray-300 mb-4">
              Começamos imediatamente com a revisão dos elementos fundamentais 
              do seu método.
            </p>
            <div className="bg-slate-800 rounded-lg p-3 text-sm">
              <strong>Cronograma:</strong> 4 semanas até lançamento
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Cronograma Lançamento-Semente: 4 Semanas</h3>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-slate-800 bg-opacity-80 rounded-lg p-4 text-white">
              <div className="font-bold mb-2 text-orange-300">Semana 1-2</div>
              <div className="text-white">Preparação</div>
              <div className="text-xs mt-1 text-gray-300">Oferta + Página de Vendas</div>
            </div>
            <div className="bg-slate-800 bg-opacity-80 rounded-lg p-4 text-white">
              <div className="font-bold mb-2 text-orange-300">Semana 3</div>
              <div className="text-white">Aquecimento</div>
              <div className="text-xs mt-1 text-gray-300">Conteúdo + Expectativa</div>
            </div>
            <div className="bg-slate-800 bg-opacity-80 rounded-lg p-4 text-white">
              <div className="font-bold mb-2 text-orange-300">Semana 4</div>
              <div className="text-white">Lançamento</div>
              <div className="text-xs mt-1 text-gray-300">Abertura + Vendas</div>
            </div>
            <div className="bg-slate-800 bg-opacity-80 rounded-lg p-4 text-white">
              <div className="font-bold mb-2 text-orange-300">Pós-Venda</div>
              <div className="text-white">Validação</div>
              <div className="text-xs mt-1 text-gray-300">Análise + Próximos Passos</div>
            </div>
          </div>
          
          <div className="mt-6 bg-green-600 bg-opacity-50 rounded-lg p-4">
            <div className="font-semibold mb-1">🎯 Meta Principal</div>
            <div className="text-sm">Conquistar pelo menos UMA venda e validar sua oferta digital</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-orange-400">Contato RCDNC</h3>
            <div className="space-y-4">
              <div>
                <strong>Ricardo Dinucci</strong><br />
                <span className="text-gray-300">Faixa Roxa Insider | CEO RCDNC</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="mailto:ricardo.dinucci@rcdnc.com.br" className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  ricardo.dinucci@rcdnc.com.br
                </a>
                <a href="https://wa.me/12122027177" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  WhatsApp: +1(212)202-7177
                </a>
              </div>
            </div>
          </div>

          <div className="bg-red-900 bg-opacity-50 border border-red-500 rounded-lg p-4">
            <div className="text-red-300 font-semibold mb-2">⏰ Proposta Válida por 7 Dias</div>
            <div className="text-sm text-gray-300">
              Esta proposta especial para Leo Pazdziora expira em 7 dias. 
              Após este período, novos valores e condições se aplicam.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}