import React, {useState} from 'react';

const services = [
  {
    title: 'Gestión de Seguridad y Salud Ocupacional',
    desc: 'Planes de prevención, auditorías y apoyo técnico para cumplir la normativa y reducir riesgos.'
  },
  { title: 'Capacitaciones', desc: 'Cursos teóricos y prácticos adaptados: trabajo en altura, espacios confinados, EPP.' },
  { title: 'Análisis de Riesgos & Auditorías', desc: 'Inspecciones, matrices de riesgo y planes de acción con seguimiento.' },
  { title: 'Asesoría para Licitaciones', desc: 'Documentación, cumplimiento normativo y apoyo técnico para procesos de compra pública.' }
];

function Header({onNav}){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">FS</div>
          <div>
            <h1 className="text-xl font-semibold">Fox Solutions</h1>
            <p className="text-sm text-gray-500">Prevención de Riesgos Laborales</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <button onClick={() => onNav('home')} className="hover:text-orange-600">Inicio</button>
          <button onClick={() => onNav('services')} className="hover:text-orange-600">Servicios</button>
          <button onClick={() => onNav('about')} className="hover:text-orange-600">Nosotros</button>
          <button onClick={() => onNav('contact')} className="hover:text-orange-600">Contacto</button>
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-orange-500 text-white px-4 py-2 rounded-md text-sm">Solicitar Asesoramiento</a>
        <div className="md:hidden">
          <a href="#contact" className="bg-orange-500 text-white px-3 py-2 rounded-md text-sm">Contacto</a>
        </div>
      </div>
    </header>
  )
}

function Hero(){
  return (
    <section id="home" className="bg-gradient-to-r from-white to-orange-50">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Protegemos lo más importante: la vida de tus trabajadores</h2>
          <p className="mt-6 text-gray-700">Asesoramiento técnico, prevención de riesgos laborales y cumplimiento normativo para empresas de todo Uruguay. Planes a medida, capacitaciones y auditorías para reducir siniestralidad.</p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="bg-orange-500 text-white px-5 py-3 rounded-md">Solicitá asesoramiento</a>
            <a href="#services" className="border border-gray-300 px-5 py-3 rounded-md">Ver servicios</a>
          </div>
          <div className="mt-6 text-sm text-gray-500">¿Preferís que te llamemos? Agregá tu número en el formulario de contacto.</div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold">Plan rápido: Diagnóstico express</h3>
            <p className="mt-2 text-sm text-gray-600">Visita técnica, informe y recomendaciones básicas para detectar puntos críticos.</p>
            <ul className="mt-3 text-sm space-y-1 text-gray-700">
              <li>• Evaluación inicial</li>
              <li>• Checklist de seguridad</li>
              <li>• Plan de acciones prioritarias</li>
            </ul>
            <div className="mt-4">
              <a href="#contact" className="block text-center bg-orange-500 text-white px-4 py-2 rounded-md">Solicitar diagnóstico</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services(){
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold">Servicios</h3>
      <p className="mt-2 text-gray-600">Soluciones integrales para prevenir riesgos y cumplir la normativa laboral.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <article key={i} className="p-5 bg-white rounded-lg shadow-sm border">
            <div className="text-orange-500 font-bold text-lg">{s.title}</div>
            <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
            <a href="#contact" className="mt-4 inline-block text-sm text-orange-600">Solicitar info →</a>
          </article>
        ))}
      </div>
    </section>
  )
}

function About(){
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold">Nosotros</h3>
          <p className="mt-4 text-gray-700">Fox Solutions es una consultora especializada en prevención de riesgos laborales. Contamos con equipo técnico multidisciplinario y experiencia en empresas de construcción, industria y servicios.</p>
          <ul className="mt-4 text-sm text-gray-700 space-y-2">
            <li>• Equipo de prevencionistas y técnicos certificados</li>
            <li>• Experiencia en auditorías y gestión de siniestralidad</li>
            <li>• Enfoque práctico y orientado a resultados</li>
          </ul>
        </div>
        <div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold">Nuestra misión</h4>
            <p className="mt-2 text-sm text-gray-700">Reducir accidentes y promover la cultura preventiva apoyando a empleadores y trabajadores con soluciones reales y medibles.</p>
            <div className="mt-4">
              <a href="#contact" className="text-orange-600 text-sm">Contáctanos para auditoría gratuita →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact(){
  const [form, setForm] = useState({name:'', company:'', email:'', phone:'', message:''});
  const [sent, setSent] = useState(false);
  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold">Contacto</h3>
      <p className="mt-2 text-gray-600">Dejanos tu mensaje y nos comunicamos a la brevedad.</p>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="p-3 border rounded-md" />
        <input name="company" value={form.company} onChange={handleChange} placeholder="Empresa" className="p-3 border rounded-md" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 border rounded-md" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono" className="p-3 border rounded-md" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Mensaje" className="md:col-span-2 p-3 border rounded-md h-32" />
        <div className="md:col-span-2 flex items-center gap-4">
          <button type="submit" className="bg-orange-500 text-white px-5 py-3 rounded-md">Enviar</button>
          {sent && <span className="text-green-600">Mensaje enviado. Gracias.</span>}
          <div className="text-sm text-gray-500 ml-auto">O llamanos: +598 9XX XXX XX</div>
        </div>
      </form>
    </section>
  )
}

export default function App(){
  const [view, setView] = useState('home');
  const onNav = (v) => setView(v);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header onNav={onNav} />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h4 className="font-semibold">Fox Solutions</h4>
            <p className="text-sm text-gray-400">Prevención de riesgos laborales • Uruguay</p>
          </div>
          <div className="text-sm text-gray-400">
            <div>Contacto: contacto@foxsolutions.uy</div>
            <div>Tel: +598 9XX XXX XX</div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} Fox Solutions. Todos los derechos reservados.</div>
      </footer>
    </div>
}
