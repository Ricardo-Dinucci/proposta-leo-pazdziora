import { FloatingTravelElements } from './TravelIcons';

export default function About() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background de resort de luxo */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/luxury-resort.jpg)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 to-white/90"></div>
      
      {/* Elementos flutuantes sutis */}
      <div className="absolute top-20 right-10 opacity-5 animate-pulse">
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-orange-400">
          <path fill="currentColor" d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-10 opacity-5 animate-pulse delay-1000">
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-400">
          <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">
              Ricardo Dinucci | <span className="text-orange-600">RCDNC</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-slate-900 mb-2">Faixa Roxa Insider</h3>
                <p className="text-slate-700">
                  Especialista em operacionalização de lançamentos digitais com metodologia 
                  Érico Rocha, focado em nichos de alta conversão.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">R$ 2M+</div>
                  <div className="text-sm text-slate-600">Faturamento Gerado</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-slate-600">Lançamentos</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Nossa Expertise:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Operacionalização completa de lançamentos</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Especialização em nichos de alta conversão</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Manutenção da identidade do expert</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Track record comprovado em viagens e lifestyle</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Portfolio do Leo */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <img 
                  src="/hospedagens-capa.webp" 
                  alt="Workshop Hospedagens"
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
                <div className="text-xs text-slate-600 font-medium">Workshop Hospedagens</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <img 
                  src="/first-milhas-capa.webp" 
                  alt="First Milhas"
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
                <div className="text-xs text-slate-600 font-medium">First Milhas</div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Por que Leo + RCDNC?</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Leo como EXPERT</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• 31.6K seguidores engajados</li>
                    <li>• Autoridade em milhas e travel hacking</li>
                    <li>• Método já validado (workshops)</li>
                    <li>• Audiência qualificada e convertedora</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">RCDNC como OPERADOR</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• Especialização em lançamentos de nicho</li>
                    <li>• Metodologia testada e aprovada</li>
                    <li>• Manutenção da identidade visual</li>
                    <li>• Foco em resultados e escalabilidade</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">Combinação Perfeita</div>
                  <div className="text-sm text-gray-400">Expert + Operador = Sucesso Garantido</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}