import { FloatingTravelElements } from './TravelIcons';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background de avião */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/airplane-background.jpg)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/85 to-slate-900/80"></div>
      
      {/* Elementos flutuantes */}
      <FloatingTravelElements />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">
                Lançamento-Semente
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Sua Primeira <span className="text-orange-400">Venda Digital</span> em 
              <span className="text-orange-400"> Milhas e Viagens</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              <strong>Leo Pazdziora</strong> + <strong>RCDNC</strong> = Transforme sua expertise em 
              milhas no seu primeiro produto digital com foco em <strong>pelo menos uma venda</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="bg-slate-700 rounded-lg p-4 flex items-center gap-3">
                <img 
                  src="/leo-bio.jpg" 
                  alt="Leo Pazdziora"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm text-gray-400">Expert</div>
                  <div className="font-semibold">Leo Pazdziora</div>
                  <div className="text-sm text-orange-400">31.6K seguidores</div>
                </div>
              </div>
              
              <div className="bg-slate-700 rounded-lg p-4">
                <div className="text-sm text-gray-400">Lançador</div>
                <div className="font-semibold">Ricardo Dinucci</div>
                <div className="text-sm text-orange-400">Faixa Roxa Insider</div>
              </div>
            </div>

            <div className="bg-orange-900 bg-opacity-50 border border-orange-500 rounded-lg p-4">
              <div className="font-semibold text-orange-300 mb-1">🎯 Objetivo do Lançamento-Semente</div>
              <div className="text-sm text-gray-300">
                Validar sua oferta digital e conquistar suas primeiras vendas no nicho de milhas e viagens.
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 transform rotate-2">
              <div className="bg-white rounded-lg p-6 transform -rotate-2">
                <div className="text-slate-900">
                  <h3 className="font-bold text-2xl mb-4">Meta Lançamento-Semente</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Meta de Leads:</span>
                      <strong>500-1.000</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Meta de Vendas:</span>
                      <strong>1-10 vendas</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Ticket Sugerido:</span>
                      <strong>R$ 197-497</strong>
                    </div>
                    <hr className="border-slate-200" />
                    <div className="flex justify-between text-lg">
                      <span>Faturamento:</span>
                      <strong className="text-orange-600">R$ 200 - 5K</strong>
                    </div>
                    <div className="text-xs text-slate-600 mt-2">
                      *Foco na validação, não no volume
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}