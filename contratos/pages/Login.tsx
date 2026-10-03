import React, { useState } from 'react';
import { signIn } from '../api';
import { BrandMark, FieldLabel, inputClass, PrimaryButton, Spinner } from '../components/ui';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      await signIn(email, password);
      // o ContratosApp percebe a sessão sozinho e troca para o painel
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Não foi possível entrar.');
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-screen min-h-dvh items-center justify-center bg-white px-5 font-sans">
      <div className="w-full max-w-[380px]">
        <div className="mb-8 flex flex-col items-center text-center">
          <BrandMark size={60} />
          <div className="mt-5 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">ValeTech</div>
          <h1 className="mt-1 text-[26px] font-extrabold tracking-tight text-slate-900">Contratos</h1>
          <p className="mt-2 text-[15px] text-slate-500">Acesso restrito. Entre para continuar.</p>
        </div>

        <form
          onSubmit={submit}
          className="space-y-5 rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.25)]"
        >
          <div>
            <FieldLabel htmlFor="email">E-mail</FieldLabel>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              autoFocus
              required
              placeholder="voce@email.com"
              className={inputClass}
            />
          </div>

          <div>
            <FieldLabel htmlFor="senha">Senha</FieldLabel>
            <div className="relative">
              <input
                id="senha"
                type={show ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                placeholder="Sua senha"
                className={`${inputClass} pr-20`}
              />
              <button
                type="button"
                onClick={() => setShow((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-bold text-slate-500 hover:bg-slate-100"
                aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {show ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>

          {error && (
            <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {error}
            </div>
          )}

          <PrimaryButton type="submit" disabled={busy || !email || !password} className="w-full">
            {busy ? (
              <>
                <Spinner className="h-4 w-4" /> Entrando…
              </>
            ) : (
              'Entrar'
            )}
          </PrimaryButton>
        </form>

        <p className="mt-6 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-slate-300">
          ValeTech · Assinatura digital
        </p>
      </div>
    </div>
  );
};

export default Login;
