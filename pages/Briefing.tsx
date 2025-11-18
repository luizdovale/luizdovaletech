import React, { useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Link } from 'react-router-dom';

const Briefing: React.FC = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-tech-dark pt-24 pb-12 px-4 md:px-0 relative">
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-tech-blue/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="mb-10 text-center">
           <Link to="/" className="text-tech-gray hover:text-tech-gold text-sm mb-4 inline-block">← Voltar para Home</Link>
           <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2 text-glow">Briefing de Projeto</h1>
           <p className="text-tech-gray">Preencha os detalhes abaixo para que eu possa entender sua visão.</p>
        </div>

        <form 
          action={SOCIAL_LINKS.formAction}
          method="POST"
          className="space-y-8"
        >
          <input type="hidden" name="_subject" value="NOVO BRIEFING - luizdovaletech" />
          <input type="hidden" name="_next" value="https://luizdovaletech-portfolio.vercel.app/#/sucesso" />
          <input type="hidden" name="_template" value="box" />
          
          {/* SEÇÃO 1: Contato */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-electric">
            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-electric flex items-center justify-center text-sm font-bold">1</span>
              Seus Dados
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-tech-gray mb-2">Nome Completo</label>
                <input type="text" name="name" required className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none focus:ring-1 focus:ring-tech-gold transition-all" />
              </div>
              <div>
                <label className="block text-sm text-tech-gray mb-2">E-mail Corporativo</label>
                <input type="email" name="email" required className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none focus:ring-1 focus:ring-tech-gold transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-tech-gray mb-2">WhatsApp / Telefone</label>
                <input type="tel" name="phone" required className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none focus:ring-1 focus:ring-tech-gold transition-all" />
              </div>
            </div>
          </div>

          {/* SEÇÃO 2: Detalhes do Projeto */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-gold">
            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-gold text-tech-dark flex items-center justify-center text-sm font-bold">2</span>
              Sobre o Projeto
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
               <div>
                 <label className="block text-sm text-tech-gray mb-3">Tipo de Projeto</label>
                 <select name="project_type" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none">
                   <option value="Site Institucional">Site Institucional</option>
                   <option value="App Mobile (Flutter)">App Mobile (Flutter)</option>
                   <option value="Landing Page">Landing Page</option>
                   <option value="E-commerce">Loja Virtual</option>
                   <option value="Sistema Web / Dashboard">Sistema Web / Dashboard</option>
                   <option value="PWA">PWA (Progressive Web App)</option>
                 </select>
               </div>
               <div>
                 <label className="block text-sm text-tech-gray mb-3">Plataformas</label>
                 <div className="flex flex-wrap gap-3">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" name="platform[]" value="Web" className="accent-tech-gold w-5 h-5" /> <span className="text-white">Web</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" name="platform[]" value="Android" className="accent-tech-gold w-5 h-5" /> <span className="text-white">Android</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" name="platform[]" value="iOS" className="accent-tech-gold w-5 h-5" /> <span className="text-white">iOS</span>
                    </label>
                 </div>
               </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-tech-gray mb-2">Objetivo Principal</label>
              <input type="text" name="objective" placeholder="Ex: Vender mais, automatizar processos..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none" />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-tech-gray mb-2">Identidade Visual</label>
              <select name="design_status" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none">
                <option value="Tenho logo e guia de marca">Já possuo Logotipo e Cores definidas</option>
                <option value="Tenho apenas o logo">Tenho apenas o Logo</option>
                <option value="Preciso criar do zero">Preciso criar Identidade Visual do zero</option>
              </select>
            </div>
            
            <div className="mb-6">
                <label className="block text-sm text-tech-gray mb-2">Funcionalidades Desejadas</label>
                <textarea name="features" rows={3} placeholder="Ex: Login, Pagamento online, Mapa, Chat..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none"></textarea>
            </div>
          </div>

          {/* SEÇÃO 3: Prazo e Investimento */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-electric">
             <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-electric flex items-center justify-center text-sm font-bold">3</span>
              Expectativas
            </h3>
             <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-tech-gray mb-2">Prazo Ideal</label>
                  <input type="text" name="timeline" placeholder="Ex: 30 dias, 2 meses..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-tech-gray mb-2">Orçamento Estimado (R$)</label>
                  <select name="budget" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none">
                    <option value="Não informado">Prefiro não informar agora</option>
                    <option value="Até 2k">Até R$ 2.000</option>
                    <option value="2k-5k">R$ 2.000 - R$ 5.000</option>
                    <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                    <option value="10k+">Acima de R$ 10.000</option>
                  </select>
                </div>
             </div>
             <div className="mt-6">
               <label className="block text-sm text-tech-gray mb-2">Referências / Links Inspiradores</label>
               <textarea name="references" rows={2} className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none"></textarea>
             </div>
             <div className="mt-6">
               <label className="block text-sm text-tech-gray mb-2">Observações Finais</label>
               <textarea name="notes" rows={2} className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none"></textarea>
             </div>
          </div>

          <button type="submit" className="w-full py-5 bg-tech-gradient text-white font-display text-lg font-bold tracking-widest rounded-lg hover:shadow-[0_0_30px_rgba(26,102,191,0.6)] transition-all transform hover:-translate-y-1 border border-white/10">
            ENVIAR BRIEFING
          </button>
        </form>
      </div>
    </div>
  );
};

export default Briefing;