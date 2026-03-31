import React, { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
// @ts-ignore
import { Link, useNavigate } from 'react-router-dom';

const Briefing: React.FC = () => {

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [projectType, setProjectType] = useState("Site Institucional");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(event.currentTarget);
    
    // Web3Forms endpoint
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        navigate('/sucesso');
      } else {
        setSubmitError("Ocorreu um erro ao enviar. Por favor, tente novamente.");
        setIsSubmitting(false);
      }
    } catch (error) {
      setSubmitError("Erro de conexão. Verifique sua internet e tente novamente.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-tech-dark pt-24 pb-12 px-4 md:px-0 relative">
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-tech-blue/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="mb-10 text-center">
          <Link to="/" className="text-tech-gray hover:text-tech-gold text-sm mb-4 inline-block">← Voltar para Home</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2 text-glow">Briefing de Projeto</h1>
          <p className="text-tech-gray">Preencha os detalhes abaixo com o máximo de precisão para um orçamento assertivo.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* CONFIGURAÇÃO WEB3FORMS */}
          <input type="hidden" name="access_key" value={SOCIAL_LINKS.web3formsKey} />
          <input type="hidden" name="subject" value="📌 NOVO BRIEFING DETALHADO - Luiz Do Vale Tech" />
          <input type="hidden" name="from_name" value="Site Luiz do Vale Tech" />
          
          {/* MENSAGEM AUTOMÁTICA (Personalizada via painel Web3Forms) */}
          <input type="hidden" name="replyto" value="email" />
          
          {/* Feedback de Erro */}
          {submitError && (
            <div className="p-4 bg-red-500/20 border border-red-500 text-red-200 rounded-lg text-center animate-shake">
              {submitError}
            </div>
          )}

          {/* SEÇÃO 1: Contato */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-electric">
            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-electric flex items-center justify-center text-sm font-bold">1</span>
              Seus Dados
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-tech-gray mb-2">Nome Completo</label>
                <input type="text" name="1. Nome Completo" required className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none focus:ring-1 focus:ring-tech-gold transition-all" />
              </div>
              <div>
                <label className="block text-sm text-tech-gray mb-2">E-mail Corporativo</label>
                <input type="email" name="email" required className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none focus:ring-1 focus:ring-tech-gold transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-tech-gray mb-2">WhatsApp / Telefone</label>
                <input type="tel" name="2. WhatsApp ou Telefone" required className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none focus:ring-1 focus:ring-tech-gold transition-all" />
              </div>
            </div>
          </div>

          {/* SEÇÃO 2: Escopo */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-gold">
            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-gold text-tech-dark flex items-center justify-center text-sm font-bold">2</span>
              Visão do Projeto
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <label className="block text-sm text-tech-gray mb-3">Tipo de Solução</label>
                <select 
                  name="3. Tipo de Solucao" 
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none"
                >
                  <option value="Site Institucional">Site Institucional</option>
                  <option value="App Mobile (Flutter)">App Mobile (Flutter)</option>
                  <option value="Landing Page">Landing Page (Alta Conversão)</option>
                  <option value="E-commerce">Loja Virtual / Catálogo</option>
                  <option value="Sistema Web / SaaS">Sistema Web / SaaS / Dashboard</option>
                  <option value="PWA">PWA (Progressive Web App)</option>
                  <option value="Consultoria/Outros">Consultoria / Outros</option>
                </select>
              </div>

              {/* CAMPO DINÂMICO PARA SITE INSTITUCIONAL */}
              {projectType === "Site Institucional" && (
                <div className="animate-fadeIn">
                  <label className="block text-sm text-tech-gray mb-3">Área de Postagem / Blog</label>
                  <select name="3.1 Gestao de Conteudo (Blog/Projetos)" className="w-full bg-tech-surface border border-blue-500/50 rounded p-3 text-white focus:border-tech-gold outline-none">
                    <option value="Não preciso (Fotos fixas)">Não, prefiro que as fotos e textos sejam fixos (eu não pretendo trocar)</option>
                    <option value="Sim, quero um Blog/Portfólio Dinâmico">Sim, quero uma área (Blog/Projetos) onde eu mesmo possa adicionar/remover fotos e textos</option>
                    <option value="Não tenho certeza ainda">Ainda não decidi, preciso de orientação</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm text-tech-gray mb-3">Plataformas Alvo</label>
                <div className="flex flex-wrap gap-3">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" name="4. Plataformas Alvo[]" value="Web Desktop" className="accent-tech-gold w-5 h-5" /> <span className="text-white">Web Desktop</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" name="4. Plataformas Alvo[]" value="Android" className="accent-tech-gold w-5 h-5" /> <span className="text-white">Android</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" name="4. Plataformas Alvo[]" value="iOS" className="accent-tech-gold w-5 h-5" /> <span className="text-white">iOS</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-tech-gray mb-2">Objetivo Principal do Projeto</label>
              <input type="text" name="5. Objetivo do Projeto" placeholder="Ex: Aumentar vendas, automatizar processos internos, modernizar marca..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
               <div>
                  <label className="block text-sm text-tech-gray mb-2">Público-Alvo</label>
                  <input type="text" name="6. Publico-Alvo" placeholder="Ex: Jovens de 18-25, Empresas B2B, Donas de casa..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none" />
               </div>
               <div>
                  <label className="block text-sm text-tech-gray mb-2">Principais Concorrentes</label>
                  <input type="text" name="7. Principais Concorrentes" placeholder="Ex: Site X, App Y (Links são bem-vindos)" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none" />
               </div>
            </div>
          </div>

          {/* SEÇÃO 3: Detalhes Técnicos (NOVA) */}
          <div className="glass-panel p-8 rounded-2xl border-t border-blue-500">
            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">3</span>
              Detalhes Técnicos & Conteúdo
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-tech-gray mb-2">Identidade Visual (Logo/Cores)</label>
                <select name="8. Identidade Visual" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none">
                  <option value="Já possuo Logotipo e Manual da Marca">Já possuo Logotipo e Manual da Marca</option>
                  <option value="Tenho apenas o Logo (preciso expandir)">Tenho apenas o Logo (preciso expandir)</option>
                  <option value="Não tenho, preciso criar do zero">Não tenho, preciso criar do zero</option>
                  <option value="Tenho, mas quero modernizar (Redesign)">Tenho, mas quero modernizar (Redesign)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-tech-gray mb-2">Conteúdo (Textos/Imagens)</label>
                <select name="9. Status do Conteudo" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none">
                  <option value="Já tenho todos os textos e fotos prontos">Já tenho todos os textos e fotos prontos</option>
                  <option value="Estou produzindo o conteúdo">Estou produzindo o conteúdo</option>
                  <option value="Não tenho nada, preciso de ajuda para criar">Não tenho nada, preciso de ajuda para criar</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-tech-gray mb-2">Infraestrutura (Domínio/Hospedagem)</label>
                  <select name="10. Infraestrutura" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none">
                    <option value="Já tenho Domínio e Hospedagem/Contas nas Lojas">Já tenho Domínio e Hospedagem/Contas nas Lojas</option>
                    <option value="Não tenho, preciso de orientação para contratar">Não tenho, preciso de orientação para contratar</option>
                  </select>
                </div>
                <div>
                   <label className="block text-sm text-tech-gray mb-2">Integrações Necessárias</label>
                   <input type="text" name="11. Integracoes Necessarias" placeholder="Ex: PagSeguro, Google Maps, CRM, ERP, API externa..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none" />
                </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm text-tech-gray mb-2">Funcionalidades Específicas / Requisitos</label>
              <textarea name="12. Funcionalidades Requisitadas" rows={4} placeholder="Liste as funções essenciais. Ex: Login social, Área de membros, Chat em tempo real, Calculadora personalizada, Painel administrativo..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none"></textarea>
            </div>
          </div>

          {/* SEÇÃO 4: Segurança & Estratégia (NOVA - SENIOR 2026) */}
          <div className="glass-panel p-8 rounded-2xl border-t border-purple-500">
            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm font-bold">4</span>
              Segurança & Visão de Futuro
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-tech-gray mb-2">Proteção de Dados e Leis de Privacidade</label>
                <select name="13. Coleta de Dados Sensiveis (LGPD)" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white">
                  <option value="Não">Não coletaremos dados sensíveis (apenas contato básico)</option>
                  <option value="Sim">Sim, vamos coletar dados como CPF, endereço ou pagamentos</option>
                  <option value="Ainda não sei">Não tenho certeza, preciso de ajuda com a legislação</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-tech-gray mb-2">Expectativa de Movimento (Servidor)</label>
                <select name="14. Expectativa de Visitas Mensais" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white">
                  <option value="Até 1.000 (Início)">Até 1.000 pessoasp/mês (Projeto Inicial)</option>
                  <option value="Entre 1.000 e 50.000 (Médio)">Entre 1.000 e 50.000 pessoas (Escala Média)</option>
                  <option value="Grande Escala">Acima de 100.000 visitas (Alta Performance)</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-tech-gray mb-2">Cuidados após o Lançamento</label>
                <select name="15. Manutencao do Site" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white">
                  <option value="Quero suporte Luiz Vale Tech">Quero que você cuide de tudo (Suporte Mensal/Assinatura)</option>
                  <option value="Eu ou minha equipe vamos cuidar">Eu ou minha equipe interna vamos gerenciar as atualizações</option>
                  <option value="Ainda não decidi">Ainda não decidi, vamos falar sobre isso</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-tech-gray mb-2">Ferramenta ou Hospedagem Específica?</label>
                <input type="text" name="16. Preferencia de Tecnologia/Hospedagem" placeholder="Ex: AWS, Vercel, Hostgator, ou já tenho contratado..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white outline-none" />
              </div>
            </div>

            <div className="mb-0">
              <label className="block text-sm text-tech-gray mb-2">O seu Sucesso: O que faria seu investimento valer a pena daqui a 6 meses?</label>
              <textarea name="17. Meta Principal de Negocio (ROI)" rows={3} placeholder="Ex: Conseguir fechar 10 vendas extras por mês, ou reduzir meu custo operacional com o app..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white outline-none"></textarea>
            </div>
          </div>

          {/* SEÇÃO 5: Fechamento (Antiga 4) */}
          <div className="glass-panel p-8 rounded-2xl border-t border-tech-electric">
            <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tech-electric flex items-center justify-center text-sm font-bold">5</span>
              Planejamento Final
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-tech-gray mb-2">Prazo Ideal de Lançamento</label>
                <input type="text" name="18. Prazo Estimado de Lancamento" placeholder="Ex: Preciso lançar em 30 dias..." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white focus:border-tech-gold outline-none" />
              </div>
              <div>
                <label className="block text-sm text-tech-gray mb-2">Investimento Estimado (Budget)</label>
                <select name="19. Investimento Pretendido" className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white">
                  <option value="Prefiro discutir após análise">Prefiro discutir após análise</option>
                  <option value="Projeto MVP / Entrada (Baixo Custo)">Projeto MVP / Entrada (Baixo Custo)</option>
                  <option value="Projeto Profissional (Médio Porte)">Projeto Profissional (Médio Porte)</option>
                  <option value="Projeto Robusto / Personalizado (Alto Nível)">Projeto Robusto / Personalizado (Alto Nível)</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm text-tech-gray mb-2">Referências Visuais (Links que você gosta)</label>
              <textarea name="20. Referencias e Links Visuais" rows={2} placeholder="Cole links de sites ou apps que você admira." className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white"></textarea>
            </div>

            <div className="mt-6">
              <label className="block text-sm text-tech-gray mb-2">Observações Finais</label>
              <textarea name="21. Observacoes Extras" rows={2} className="w-full bg-tech-surface border border-tech-gray/30 rounded p-3 text-white"></textarea>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full py-5 bg-tech-gradient text-white font-display text-lg font-bold tracking-widest rounded-lg transition-all transform border border-white/10 flex items-center justify-center gap-3
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_0_30px_rgba(26,102,191,0.6)] hover:-translate-y-1'}
            `}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                ENVIANDO...
              </>
            ) : (
              'ENVIAR BRIEFING COMPLETO'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Briefing;