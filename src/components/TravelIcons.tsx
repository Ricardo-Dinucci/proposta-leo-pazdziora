export default function TravelIcons() {
  return (
    <>
      {/* Ícones SVG de viagem e aviação */}
      <div className="hidden">
        <svg id="airplane-icon" viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="currentColor" d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
        </svg>
        
        <svg id="passport-icon" viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="currentColor" d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2H6M6,4H18V20H6V4M8,6V8H16V6H8M8,10V12H16V10H8M8,14V16H16V14H8Z" />
        </svg>
        
        <svg id="luggage-icon" viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="currentColor" d="M8,7V2A1,1 0 0,1 9,1H15A1,1 0 0,1 16,2V7H19A1,1 0 0,1 20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V8A1,1 0 0,1 5,7H8M10,3V7H14V3H10Z" />
        </svg>
        
        <svg id="earth-icon" viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="currentColor" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      </div>
    </>
  );
}

// Componente para ícones flutuantes
export function FloatingTravelElements() {
  return (
    <>
      {/* Elementos flutuantes para ambientar */}
      <div className="absolute top-10 left-10 opacity-10 animate-pulse">
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-orange-400">
          <path fill="currentColor" d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
        </svg>
      </div>
      
      <div className="absolute top-32 right-16 opacity-10 animate-pulse delay-1000">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-400">
          <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-20 opacity-10 animate-pulse delay-500">
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-green-400">
          <path fill="currentColor" d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2H6M6,4H18V20H6V4M8,6V8H16V6H8M8,10V12H16V10H8M8,14V16H16V14H8Z" />
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-32 opacity-10 animate-pulse delay-700">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-purple-400">
          <path fill="currentColor" d="M8,7V2A1,1 0 0,1 9,1H15A1,1 0 0,1 16,2V7H19A1,1 0 0,1 20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V8A1,1 0 0,1 5,7H8M10,3V7H14V3H10Z" />
        </svg>
      </div>
    </>
  );
}