import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-20 border-t border-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">un postre</span>
            <p className="text-xs text-neutral-400 leading-relaxed font-semibold">Repostería de autor, donde fusionamos pasión culinaria, refinamiento dorado y frescura garantizada.</p>
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-amber-400 mb-4">Nuestra Carta</h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-semibold">
              <li>Tortas de Ensueño</li>
              <li>Porciones Individuales</li>
              <li>Copas de Lujo</li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-amber-400 mb-4">Ubicación & Contacto</h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-semibold">
              <li>Av. Las Mercedes, Caracas.</li>
              <li>Mar - Dom: 10 AM - 7 PM</li>
              <li>Tel: +58 (412) 000-0000</li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-amber-400 mb-4">Garantía de Autor</h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-semibold">Ofrecemos productos frescos, libres de conservantes artificiales y horneados el mismo día de la entrega.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 text-center text-xs text-neutral-500 font-semibold">
          <p>© 2026 un postre. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
