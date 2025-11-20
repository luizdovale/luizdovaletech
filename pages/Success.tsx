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
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-tech-blue/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="mb-10 text-center">
          <Link to="/" className="text-tech-gray hover:text-tech-gold text-sm mb-4 inline-block">← Voltar para Home</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2 text-glow">Briefing de Projeto</h1>
          <p className="text-tech-gray">Preencha os detalhes abaixo para que eu possa entender sua visão.</p>
        </div>

        {/* FORMULÁRIO COM FORM SUBMIT CONFIGURADO */}
        <form
          action="https://formsubmit.co/luizdovaletech@gmail.com"
          method="POST"
          className="space-y-8"
        >
          {/* CAMPOS OCULTOS */}
          <input type="hidden" name="_subject" value="📌 NOVO BRIEFING - Luiz Do Vale Tech" />

          {/* Redirecionamento pós-envio */}
          <input type="hidden" name="_next" value="https://luizdovaletech.vercel.app/#/sucesso" />

          {/* Evita spam */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Autoresposta */}
          <input type="hidden" name="_autoresponse" value="Olá! Recebi seu briefing e em breve retornarei com uma análise inicial. Obrigado por entrar em contato! — Luiz do Vale Tech" />

          {/* Template mais bonito */}
          <input type="hidden" name="_template" value="table" />

          {/* SEÇÃO 1: Contato */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-electric">
            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-electric flex items-center justify-center text-sm font-bold">1</span>
              Seus Dados
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-tech-gray mb-2">Nome Completo</label>
                <input type="text" name="Nome Completo" required className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none focus:ring-1 focus:ring-tech-gold transition-all" />
              </div>
              <div>
                <label className="block text-sm text-tech-gray mb-2">E-mail</label>
                <input type="email" name="Email" required className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none focus:ring-1 focus:ring-tech-gold transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-tech-gray mb-2">Telefone / WhatsApp</label>
                <input type="tel" name="Telefone" required className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none focus:ring-1 focus:ring-tech-gold transition-all" />
              </div>
            </div>
          </div>

          {/* SEÇÃO 2: Projeto */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-gold">
            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-gold text-tech-dark flex items-center justify-center text-sm font-bold">2</span>
              Sobre o Projeto
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <label className="block text-sm text-tech-gray mb-3">Tipo de Projeto</label>
                <select name="Tipo de Projeto" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none">
                  <option>Site Institucional</option>
                  <option>App Mobile (Flutter)</option>
                  <option>Landing Page</option>
                  <option>E-commerce</option>
                  <option>Sistema Web / Dashboard</option>
                  <option>PWA</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-tech-gray mb-3">Plataformas</label>
                <div className="flex flex-wrap gap-3">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" name="Plataformas[]" value="Web" className="accent-tech-gold w-5 h-5" /> <span className="text-white">Web</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" name="Plataformas[]" value="Android" className="accent-tech-gold w-5 h-5" /> <span className="text-white">Android</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" name="Plataformas[]" value="iOS" className="accent-tech-gold w-5 h-5" /> <span className="text-white">iOS</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-tech-gray mb-2">Objetivo Principal</label>
              <input type="text" name="Objetivo" placeholder="Ex: captar clientes, automatizar processos..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none" />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-tech-gray mb-2">Identidade Visual</label>
              <select name="Identidade Visual" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none">
                <option>Já possuo logotipo e cores definidas</option>
                <option>Tenho apenas o logo</option>
                <option>Preciso criar identidade visual do zero</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-tech-gray mb-2">Funcionalidades Desejadas</label>
              <textarea name="Funcionalidades" rows={3} placeholder="Ex: Login, cadastro, pagamento online..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none"></textarea>
            </div>

            {/* Perguntas práticas extras */}
            <div className="mb-6">
              <label className="block text-sm text-tech-gray mb-2">Seu público-alvo</label>
              <textarea name="Publico Alvo" rows={2} placeholder="Ex: clientes da área de saúde, motoristas, comércio local..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none"></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-tech-gray mb-2">Problemas que o projeto deve resolver</label>
              <textarea name="Problemas" rows={2} placeholder="O que hoje dá trabalho? Onde perde tempo? O que deseja melhorar?" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none"></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-tech-gray mb-2">Fluxos essenciais</label>
              <textarea name="Fluxos Essenciais" rows={2} placeholder="Ex: cliente faz login → envia pedido → recebe atualização..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none"></textarea>
            </div>
          </div>

          {/* SEÇÃO 3 */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-electric">
            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-electric flex items-center justify-center text-sm font-bold">3</span>
              Expectativas
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-tech-gray mb-2">Prazo Ideal</label>
                <input type="text" name="Prazo Ideal" placeholder="Ex: 30 dias, urgente..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white" />
              </div>

              <div>
                <label className="block text-sm text-tech-gray mb-2">Orçamento Estimado (R$)</label>
                <select name="Orçamento" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white">
                  <option>Prefiro não informar agora</option>
                  <option>Até R$ 2.000</option>
                  <option>R$ 2.000 - R$ 5.000</option>
                  <option>R$ 5.000 - R$ 10.000</option>
                  <option>Acima de R$ 10.000</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm text-tech-gray mb-2">Referências</label>
              <textarea name="Referências" rows={2} placeholder="Links, sites, apps que você gosta..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white"></textarea>
            </div>

            <div className="mt-6">
              <label className="block text-sm text-tech-gray mb-2">Observações Finais</label>
              <textarea name="Observações" rows={2} placeholder="Algo importante que não pode faltar?" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white"></textarea>
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
