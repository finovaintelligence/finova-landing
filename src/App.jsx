import logo from './assets/FINOVA-Logo.png'
import crecimiento from './assets/crecimiento.png'
import rentabilidad from './assets/rentabilidad.png'
import liquidez from './assets/liquidez-capital-trabajo.png'
import estructura from './assets/estructura-capital.png'
import eficiencia from './assets/eficiencia.png'
import estadoresultados from './assets/estado-resultados.png'
import balance from './assets/balance.png'
import flujoefectivo from './assets/flujo-efectivo.png'
import gastosprincipales from './assets/gastos-principales.png'
import presupuesto from './assets/variacion-presupuesto.png'
import presupuestoporcuenta from './assets/presupuesto-por-cuenta.png'

export default function App() {

  return (

    <div className="bg-slate-950 text-white min-h-screen">
      {/* NAVBAR */}

<nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

<div className="flex flex-col">

  <div className="flex justify-center md:justify-start w-full">

  <img
    src={logo}
    alt="FINOVA"
    className="w-[280px] md:w-[500px] lg:w-[620px]"
  />

</div>

  <p className="text-slate-400 text-sm mt-2 ml-1">
    Plataforma de Inteligencia Financiera
  </p>

</div>

  <div className="flex flex-wrap justify-center items-center gap-4 text-slate-300">

    <a href="#" className="hover:text-white">
      Plataforma
    </a>

    <a href="#" className="hover:text-white">
      IA
    </a>

    <a href="#" className="hover:text-white">
      Seguridad
    </a>

    <a href="#" className="hover:text-white">
      Demo
    </a>

    <a
      href="https://app.finovaintelligence.com"
      className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold"
    >
      Login
    </a>

  </div>

</nav>

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full mb-6">
          SaaS • IA • Inteligencia Financiera
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl">
          Inteligencia Financiera Automatizada
        </h1>

        <p className="text-2xl text-slate-400 mt-8 max-w-4xl leading-relaxed">
          Convierte automáticamente tu libro mayor
          en estados financieros, KPIs,
          forecast, análisis y proyecciones impulsadas por IA.
        </p>

        <div className="flex flex-wrap gap-5 mt-10">

  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-semibold">
    Solicitar Demo
  </button>

  <button className="border border-slate-700 hover:bg-slate-900 px-8 py-4 rounded-2xl text-lg">
    Ver Plataforma
  </button>

  <button className="bg-red-600/80 hover:bg-red-700 px-8 py-4 rounded-2xl text-lg font-semibold">
    Exportar PDF
  </button>

</div>

      </section>

      {/* CARDS */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">

            <h3 className="text-2xl font-bold mb-4">
              Estados Financieros Automáticos
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Balance General, Estado de Resultados,
              Flujo de Caja y KPIs generados automáticamente
              desde el libro mayor.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">

            <h3 className="text-2xl font-bold mb-4">
              Forecast e Inteligencia Artificial
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Forecast financiero, desviaciones,
              análisis de tendencias e insights
              automáticos impulsados por IA.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">

            <h3 className="text-2xl font-bold mb-4">
              Arquitectura SaaS Segura
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Plataforma Multi Tenant con Power BI Embedded,
              Row Level Security (RLS) y acceso seguro por cliente.
            </p>

          </div>

        </div>

      </section>

      {/* SCREENSHOTS */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="mb-14">

          <h2 className="text-5xl font-bold mb-6">
            Plataforma FINOVA
          </h2>

          <p className="text-slate-400 text-xl">
            Dashboards financieros automatizados en tiempo real.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <img
            src={crecimiento}
            className="rounded-3xl border border-slate-800 shadow-2xl w-full"
          />

          <img
            src={rentabilidad}
            className="rounded-3xl border border-slate-800 shadow-2xl w-full"
          />

          <img
            src={liquidez}
            className="rounded-3xl border border-slate-800 shadow-2xl w-full"
          />

          <img
            src={estructura}
            className="rounded-3xl border border-slate-800 shadow-2xl w-full"
          />

          <img
            src={eficiencia}
            className="rounded-3xl border border-slate-800 shadow-2xl w-full"
          />

          <img
            src={estadoresultados}
            className="rounded-3xl border border-slate-800 shadow-2xl w-full"
          />

          <img
            src={balance}
            className="rounded-3xl border border-slate-800 shadow-2xl w-full"
          />

          <img
            src={flujoefectivo}
            className="rounded-3xl border border-slate-800 shadow-2xl w-full"
          />

          <img
            src={gastosprincipales}
            className="rounded-3xl border border-slate-800 shadow-2xl w-full"
          />

          <img
            src={presupuesto}
            className="rounded-3xl border border-slate-800 shadow-2xl w-full"
          />

          <img
            src={presupuestoporcuenta}
            className="rounded-3xl border border-slate-800 shadow-2xl w-full"
          />

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-5xl mx-auto px-8 pb-32 text-center">

        <h2 className="text-5xl font-bold mb-8">
          Lleva tu área financiera al siguiente nivel
        </h2>

        <p className="text-slate-400 text-2xl leading-relaxed mb-10">
          Automatiza reportes financieros, análisis,
          presupuesto y proyecciones con IA.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-2xl text-xl font-semibold">
          Solicitar una Demo
        </button>

      </section>

{/* FORMULARIO LEADS */}

<section className="max-w-4xl mx-auto px-8 pb-32">

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12">

    <h2 className="text-5xl font-bold mb-6 text-center">
      Solicita una Demo
    </h2>

    <p className="text-slate-400 text-center mb-10 text-xl">
      Descubre cómo automatizar estados financieros,
      KPIs y forecast con IA.
    </p>

    <form
      action="https://formspree.io/f/xykvjenv"
      method="POST"
      className="space-y-6"
    >

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        required
        className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-4 text-white"
      />

      <input
        type="text"
        name="empresa"
        placeholder="Empresa"
        required
        className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-4 text-white"
      />

      <input
        type="email"
        name="email"
        placeholder="Correo corporativo"
        required
        className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-4 text-white"
      />

      <input
        type="text"
        name="whatsapp"
        placeholder="WhatsApp"
        className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-4 text-white"
      />

      <input
        type="text"
        name="erp"
        placeholder="ERP actual (SAP, SIIGO, SIESA, Odoo...)"
        className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-4 text-white"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 py-5 rounded-2xl text-xl font-bold"
      >
        Solicitar Demo
      </button>

    </form>

  </div>

</section>
    </div>

  )

}