import React, { useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';
// @ts-ignore
import { Link } from 'react-router-dom';

const Briefing: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-tech-dark pt-24 pb-12 px-4 md:px-0 relative">
      
      {/* BG Effect */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-tech-blue/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <Link to="/" className="text-tech-gray hover:text-tech-gold text-sm mb-4 inline-block">
            ← Voltar para Home
          </Link>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2 text-glow">
            Briefing de Projeto
          </h1>

          <p className="text-tech-gray">Preencha com calma — perguntas práticas que ajudam a entender exatamente o que você precisa.</p>
        </div>

        <form 
          action={SOCIAL_LINKS.formAction}
          method="POST"
          className="space-y-10"
        >
          <input type="hidden" name="_subject" value="NOVO BRIEFING - luizdovaletech" />
          <input type="hidden" name="_next" value="https://luizdovaletech.vercel.app/#/sucesso" />
          <input type="hidden" name="_template" value="box" />

          {/* ======================================================
             SEÇÃO 1 — DADOS DO CLIENTE
          ======================================================= */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-electric animate-[fadeIn_0.6s_ease]">
            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-electric flex items-center justify-center text-sm font-bold">1</span>
              Seus Dados
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-tech-gray mb-2">Nome Completo</label>
                <input type="text" name="name" required className="input" />
              </div>
              <div>
                <label className="block text-sm text-tech-gray mb-2">E-mail Corporativo</label>
                <input type="email" name="email" required className="input" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-tech-gray mb-2">WhatsApp / Telefone</label>
                <input type="tel" name="phone" required className="input" />
              </div>
            </div>
          </div>

          {/* ======================================================
             SEÇÃO 2 — SOBRE O NEGÓCIO
          ======================================================= */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-gold animate-[fadeIn_0.7s_ease]">

            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-gold text-tech-dark flex items-center justify-center text-sm font-bold">2</span>
              Sobre o Seu Negócio
            </h3>

            <div className="space-y-6">

              <div>
                <label className="label">O que sua empresa faz? (Explique de forma simples)</label>
                <textarea name="business_description" rows={2} className="textarea" />
              </div>

              <div>
                <label className="label">Quem é o seu público-alvo?</label>
                <textarea name="target_audience" rows={2} placeholder="Ex: jovens, mães, empresas, motoristas, etc." className="textarea" />
              </div>

              <div>
                <label className="label">Quais problemas você quer resolver para o seu cliente?</label>
                <textarea name="business_problems" rows={2} placeholder="Ex: automatizar, vender mais, receber pedidos, gerenciar equipe..." className="textarea" />
              </div>

              <div>
                <label className="label">Cite 1 ou 2 concorrentes (se souber)</label>
                <textarea name="competitors" rows={1} className="textarea" placeholder="Links ou nomes (opcional)" />
              </div>

            </div>
          </div>

          {/* ======================================================
             SEÇÃO 3 — SOBRE O PROJETO (PRÁTICO)
          ======================================================= */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-electric animate-[fadeIn_0.8s_ease]">

            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-electric flex items-center justify-center text-sm font-bold">3</span>
              Sobre o Projeto
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="label">Tipo de Projeto</label>
                <select name="project_type" className="input">
                  <option>Site Institucional</option>
                  <option>Landing Page</option>
                  <option>App Mobile (Flutter)</option>
                  <option>E-commerce</option>
                  <option>Sistema Web / Dashboard</option>
                  <option>PWA (Progressive Web App)</option>
                </select>
              </div>

              <div>
                <label className="label">Plataformas</label>
                <div className="flex flex-wrap gap-3 pt-1">
                  <label className="checkbox"><input type="checkbox" name="platform[]" value="Web" /> Web</label>
                  <label className="checkbox"><input type="checkbox" name="platform[]" value="Android" /> Android</label>
                  <label className="checkbox"><input type="checkbox" name="platform[]" value="iOS" /> iOS</label>
                </div>
              </div>

            </div>

            <div className="space-y-6">

              <div>
                <label className="label">Objetivo principal do projeto</label>
                <input type="text" name="objective" className="input" placeholder="Ex: captar clientes, vender, automatizar..." />
              </div>

              <div>
                <label className="label">Quais funcionalidades você precisa?</label>
                <textarea 
                  name="features" 
                  rows={3} 
                  placeholder="Ex: login, pagamentos, chat, mapa, cadastro de produtos..."
                  className="textarea"
                />
              </div>

              <div>
                <label className="label">Vai precisar de painel administrativo?</label>
                <select name="admin_panel" className="input">
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                  <option value="Não sei, preciso de orientação">Não sei</option>
                </select>
              </div>

              <div>
                <label className="label">Integrações necessárias</label>
                <textarea name="integrations" rows={2} placeholder="Ex: PagSeguro, MercadoPago, Firebase, WhatsApp, Maps..." className="textarea" />
              </div>

            </div>
          </div>

          {/* ======================================================
             SEÇÃO 4 — DESIGN E CONTEÚDO
          ======================================================= */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-gold animate-[fadeIn_0.9s_ease]">

            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-gold text-tech-dark flex items-center justify-center text-sm font-bold">4</span>
              Visual, Estilo e Conteúdo
            </h3>

            <div className="space-y-6">

              <div>
                <label className="label">Identidade visual atual</label>
                <select name="design_status" className="input">
                  <option>Tenho logo e cores definidas</option>
                  <option>Tenho somente o logo</option>
                  <option>Preciso criar tudo do zero</option>
                </select>
              </div>

              <div>
                <label className="label">Tem fotos e textos prontos?</label>
                <select name="content_status" className="input">
                  <option>Sim, já tenho tudo</option>
                  <option>Tenho parte do conteúdo</option>
                  <option>Preciso que você me ajude com isso</option>
                </select>
              </div>

              <div>
                <label className="label">Referências ou estilo desejado</label>
                <textarea name="references" rows={3} placeholder="Links, prints ou sites que você gosta" className="textarea" />
              </div>

            </div>
          </div>

          {/* ======================================================
             SEÇÃO 5 — ENTREGA, SUPORTE E EXPECTATIVAS
          ======================================================= */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-electric animate-[fadeIn_1s_ease]">

            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-electric flex items-center justify-center text-sm font-bold">5</span>
              Prazos, Orçamento e Finalização
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="label">Prazo ideal</label>
                <input type="text" name="timeline" className="input" placeholder="Ex: 30 dias, 2 meses..." />
              </div>
              <div>
                <label className="label">Orçamento estimado</label>
                <select name="budget" className="input">
                  <option>Prefiro não informar agora</option>
                  <option>Até R$ 2.000</option>
                  <option>R$ 2.000 - R$ 5.000</option>
                  <option>R$ 5.000 - R$ 10.000</option>
                  <option>Acima de R$ 10.000</option>
                </select>
              </div>
            </div>

            <div>
              <label className="label">Observações finais</label>
              <textarea name="notes" rows={2} className="textarea" />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-5 bg-tech-gradient text-white font-display text-lg font-bold tracking-widest rounded-lg hover:shadow-[0_0_30px_rgba(26,102,191,0.6)] transition-all transform hover:-translate-y-1 border border-white/10"
          >
            ENVIAR BRIEFING
          </button>

        </form>
      </div>
    </div>
  );
};

export default Briefing;
