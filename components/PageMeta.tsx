import React, { useEffect } from 'react';

const SITE_URL = 'https://www.valetechsolucoes.com.br';

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

const upsertTag = (tag: 'meta' | 'link', key: string, keyValue: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLElement>(`${tag}[${key}="${keyValue}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(key, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

// Cada rota do site é uma página própria para o Google: título, descrição e canonical por página.
const PageMeta: React.FC<PageMetaProps> = ({ title, description, path, noindex = false }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    upsertTag('meta', 'name', 'description', 'content', description);
    upsertTag('link', 'rel', 'canonical', 'href', url);
    upsertTag('meta', 'property', 'og:title', 'content', title);
    upsertTag('meta', 'property', 'og:description', 'content', description);
    upsertTag('meta', 'property', 'og:url', 'content', url);
    upsertTag(
      'meta',
      'name',
      'robots',
      'content',
      noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );
  }, [title, description, path, noindex]);

  return null;
};

export default PageMeta;
