import React from 'react';

function App() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Navegación */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-3xl font-bold text-emerald-900 tracking-tighter">FLC</span>
              <span className="text-sm font-semibold text-rose-600 uppercase tracking-widest hidden sm:block">Quality Control</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-emerald-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Inicio</a>
              <a href="#sobre-nosotros" className="text-emerald-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Sobre nosotros</a>
              <a href="#servicios" className="text-emerald-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Servicios</a>
              <a href="#equipo" className="text-emerald-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Equipo</a>
              <a href="#contacto" className="bg-emerald-900 text-white hover:bg-emerald-800 px-5 py-2 rounded-md text-sm font-medium transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Inicio (Hero Section) */}
      <section id="inicio" className="bg-emerald-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Control de Calidad</h1>
          <p className="mt-4 text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto font-light leading-relaxed">
            FLC es una empresa especializada en el control de calidad de flores de corte, rosas y flores de verano. Nos encontramos en la ciudad de Quito, Tababela, y trabajamos con dedicación para garantizar la excelencia en los productos de nuestros clientes. Confía en nosotros para mejorar la calidad de tu negocio.
          </p>
          <div className="mt-10">
            <a href="#contacto" className="inline-block bg-rose-600 text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-rose-700 hover:shadow-xl transition-all">
              Mejora la calidad de tu negocio
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre-nosotros" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">Sobre Nosotros</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Somos un grupo dedicado al control de calidad en el mercado de flores, nuestro esfuerzo diario a través de la innovación de procesos con herramientas tecnológicas busca garantizar la calidad de los productos para nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 rounded-xl border-t-4 border-emerald-700 shadow-sm">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Misión</h3>
              <p className="text-slate-600 leading-relaxed">
                Brindar servicio de control de calidad eficiente comprometidos a garantizar la calidad de nuestro servicio a nuestros clientes.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-xl border-t-4 border-rose-600 shadow-sm">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Visión</h3>
              <p className="text-slate-600 leading-relaxed">
                En un mundo en constante evolución, en el que los consumidores son cada vez más exigentes y están más informados, es esencial contar con proveedores de confianza y garantía de calidad. Precisamente, en FLC nos especializamos en brindar un servicio de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">Servicios</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              En FLC nos especializamos en brindar un control de calidad eficiente y eficaz. Nuestro objetivo es garantizar la calidad de los productos y procesos de nuestros clientes, aportando así al crecimiento y éxito de sus negocios. Confía en nosotros para obtener resultados excelentes y un servicio personalizado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <h4 className="text-xl font-bold text-emerald-900 mb-3">Análisis de Suelos</h4>
              <p className="text-slate-600 text-sm">El análisis de suelos es esencial para determinar la calidad y nutrientes presentes en la tierra, y así poder tomar las medidas necesarias para mejorar su productividad.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <h4 className="text-xl font-bold text-emerald-900 mb-3">Control Calidad Agencia de Carga</h4>
              <p className="text-slate-600 text-sm">Revisión de rosas y flores de verano, esencial para determinar la calidad del producto si tiene problemas fitosanitarios que puedan afectar la calidad.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <h4 className="text-xl font-bold text-emerald-900 mb-3">Inspección de Cultivos</h4>
              <p className="text-slate-600 text-sm">"La inspección de cultivos es una tarea esencial para garantizar la calidad y salud de nuestros alimentos, por lo que debemos realizarla con responsabilidad y meticulosidad."</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <h4 className="text-xl font-bold text-emerald-900 mb-3">Asesoramiento Técnico</h4>
              <p className="text-slate-600 text-sm">El asesoramiento técnico es fundamental para garantizar el éxito de un proyecto de construcción y agrícola.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <h4 className="text-xl font-bold text-emerald-900 mb-3">Capacitación en Buenas Prácticas</h4>
              <p className="text-slate-600 text-sm">La capacitación en buenas prácticas es esencial para garantizar la calidad y eficiencia en nuestro trabajo diario.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <h4 className="text-xl font-bold text-emerald-900 mb-3">Control de Plagas</h4>
              <p className="text-slate-600 text-sm">Estrategias y monitoreo especializado para proteger la sanidad del producto y evitar pérdidas de calidad en el cultivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">Conoce a nuestro equipo</h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Nuestro equipo en FLC se dedica a brindar servicios de control de calidad en el sector de la agricultura y ganadería menor en la ciudad de Quito, específicamente en Tababela. Con amplia experiencia en el campo y un enfoque en la excelencia y el compromiso con nuestros clientes, nos esforzamos por garantizar que los productos y procesos agrícolas cumplan con los más altos estándares de calidad.
          </p>
          
          <div className="inline-block">
            <div className="bg-slate-50 w-64 p-6 rounded-xl border border-slate-200 shadow-sm mx-auto">
              <div className="w-24 h-24 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">LC</div>
              <h3 className="text-xl font-bold text-emerald-900">Luis Chavez</h3>
              <p className="text-rose-600 font-medium text-sm mt-1">Manager FLC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contacto</h2>
              <p className="text-emerald-100 text-lg mb-10">
                ¡Hola! Somos FLC, una empresa especializada en el control de calidad.
              </p>
              
              <div className="space-y-6 text-emerald-50">
                <div className="flex items-center gap-4">
                  <span className="font-bold">Ubicación:</span> Quito, Puembo - Ecuador
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">Teléfono:</span> +593 984063454
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">Email:</span> flc.ec.qc@gmail.com
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">Redes:</span> @flc
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl text-slate-800 shadow-xl">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" defaultValue="Hola excelente día. Cuéntanos cómo podemos ayudarte. Saludos equipo flc.quality control"></textarea>
                </div>
                <button type="button" className="w-full bg-emerald-900 text-white font-bold py-3 rounded-md hover:bg-emerald-800 transition-colors mt-4">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm">
        <p>flc.ec © 2026 FLC Quality Control by Luis Chavez.</p>
      </footer>
    </div>
  );
}

export default App;