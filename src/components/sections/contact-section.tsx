import { ArrowUpRight, MapPin, Instagram, MessageCircle, Plus } from 'lucide-react';
import { site } from '@/data/site';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { env } from '@/lib/env';
import { QuoteLink } from '@/components/ui/quote-link';

export function ConfirmedSections() {
  const activeServices = services.filter(item => item.active);
  const activeLocations = locations.filter(item => item.active);
  return <>{activeServices.length > 0 && <section id="servicos" className="section"><div className="container"><span className="eyebrow">SERVIÇOS</span><h2>Cuidado com o seu carro.</h2><div className="info-grid">{activeServices.map(item => <article key={item.slug} className="info-card"><h3>{item.name}</h3><p>{item.description}</p><QuoteLink context={item.name} /></article>)}</div></div></section>}
    {activeLocations.length > 0 && <section id="unidades" className="section"><div className="container"><span className="eyebrow">UNIDADES</span><h2>Encontre a KaKa.</h2><div className="info-grid">{activeLocations.map(item => <article key={item.slug} className="info-card"><h3>{item.name}</h3><p>{item.address}</p><p>{item.hours}</p>{item.mapUrl.startsWith('https://') && <a className="text-link" href={item.mapUrl} target="_blank" rel="noopener noreferrer">Ver rota <ArrowUpRight size={16} /></a>}</article>)}</div></div></section>}</>;
}

// Orientações sobre o orçamento, sem alegações sobre políticas comerciais não confirmadas.
const questions = [
  { title: 'O que informar para pedir um orçamento?', text: 'Informe o produto que procura, o modelo e o ano do veículo. Se você souber, inclua também a medida do pneu ou da roda. A equipe confirma os detalhes de compatibilidade.' },
  { title: 'Ainda não sei a medida. Como começar?', text: 'Comece informando o modelo e o ano do seu carro. Você pode conversar com a equipe para entender quais informações são necessárias para consultar as opções.' },
  { title: 'Como confirmar preço e disponibilidade?', text: 'Consulte a equipe pelo canal oficial. Preço, modelo, medida e disponibilidade precisam ser confirmados no momento do orçamento.' },
];
export function ContactSection() {
  return <>
    <section className="section faq-section" id="duvidas" aria-labelledby="faq-title"><div className="container faq-grid"><div><span className="eyebrow">04 / ANTES DE CHAMAR</span><h2 id="faq-title">Bora tirar<br />as dúvidas.</h2><p className="faq-intro">Algumas orientações para começar a conversa com a equipe.</p></div><div className="faq-list">{questions.map(question => <details key={question.title}><summary>{question.title}<Plus size={20} aria-hidden="true" /></summary><p>{question.text}</p></details>)}</div></div></section>
    <section id="contato" className="contact-section" aria-labelledby="contact-title"><div className="container contact-grid"><div><span className="eyebrow"><MapPin size={15} aria-hidden="true" /> FEIRA DE SANTANA, BAHIA</span><h2 id="contact-title">Bora dar o<br />próximo passo?</h2><p>Conta pra gente o que você procura.<br />Seu carro é o ponto de partida.</p></div><div className="contact-panel"><MessageCircle size={32} aria-hidden="true" /><h3>Fale com a KaKa.</h3>{env.whatsappNumber ? <><p>Peça seu orçamento pelo WhatsApp e confirme as opções com a equipe.</p><QuoteLink>Chamar no WhatsApp</QuoteLink></> : <><p>Acesse nosso perfil e use o link da bio para encontrar o WhatsApp de orçamento.</p><a className="button button-dark" href={site.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={18} aria-hidden="true" /> Acessar perfil da KaKa <ArrowUpRight size={18} aria-hidden="true" /></a></>}<span className="contact-handle">{site.instagramHandle}</span></div></div></section>
  </>;
}
