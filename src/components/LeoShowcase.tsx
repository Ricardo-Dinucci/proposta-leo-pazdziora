export default function LeoShowcase() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
      {/* Background de destino de viagem */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/travel-destination.jpg)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/90 to-orange-100/90"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Conheça o <span className="text-orange-600">Leo Pazdziora</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert em milhas e viagens com autoridade construída e audiência engajada, 
            pronto para o próximo nível digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Canal YouTube */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="h-48 overflow-hidden">
              <img 
                src="/youtube-channel.png" 
                alt="Canal YouTube Leo Pazdziora"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 text-slate-900">Canal YouTube</h3>
              <p className="text-slate-600 text-sm">
                Conteúdo educativo sobre milhas, resgates e estratégias de viagem 
                com audiência qualificada e engajada.
              </p>
            </div>
          </div>

          {/* Consultoria Individual */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl delay-100">
            <div className="h-48 overflow-hidden">
              <img 
                src="/consultoria.png" 
                alt="Consultoria Individual"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 text-slate-900">Consultoria Individual</h3>
              <p className="text-slate-600 text-sm">
                Atendimento personalizado para otimização de milhas e estratégias 
                de viagem já validado no mercado.
              </p>
            </div>
          </div>

          {/* Workshop Hospedagens */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl delay-200">
            <div className="h-48 overflow-hidden">
              <img 
                src="/hospedagens-capa.webp" 
                alt="Workshop Hospedagens"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 text-slate-900">Workshop Hospedagens</h3>
              <p className="text-slate-600 text-sm">
                Evento educativo sobre economia em hospedagens usando milhas, 
                pontos e cashback com alta demanda.
              </p>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="relative bg-slate-900 rounded-2xl p-8 overflow-hidden">
          {/* Background sutil de montanhas */}
          <div 
            className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/mountains-adventure.jpg)' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 to-slate-800/90"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Autoridade Digital <span className="text-orange-400">Comprovada</span>
              </h3>
              <p className="text-gray-300">
                Leo Pazdziora já possui uma base sólida para o lançamento-semente
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">31.6K</div>
              <div className="text-sm text-gray-300">Seguidores Instagram</div>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">1000+</div>
              <div className="text-sm text-gray-300">Alunos Educados</div>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
              <div className="text-sm text-gray-300">Anos de Experiência</div>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-sm text-gray-300">Foco em Resultados</div>
            </div>
          </div>

            <div className="mt-8 text-center">
              <div className="bg-green-900 bg-opacity-50 border border-green-500 rounded-lg p-4 max-w-2xl mx-auto">
                <div className="text-green-300 font-semibold mb-1">
                  🎯 Base Perfeita para o Lançamento-Semente
                </div>
                <div className="text-sm text-gray-300">
                  Autoridade construída + Audiência engajada + Método validado = 
                  Receita para sucesso no primeiro produto digital
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}