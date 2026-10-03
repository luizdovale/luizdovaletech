import { createClient } from '@supabase/supabase-js';

// URL e chave PÚBLICAS (publishable) do projeto "valetech-contratos": foram feitas para ficar no front-end.
// A proteção dos dados está no banco (RLS + funções com token), não no segredo desta chave.
const SUPABASE_URL = 'https://uwmiwrovkbvjpkmugtpj.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_qFi421yLkPHuJ_lL_xSbGQ_Cd2YwB8h';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
    storageKey: 'valetech-contratos-auth',
  },
});
