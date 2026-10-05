import { ArrowUpRight, CarFront, MessageCircle, CheckCheck } from 'lucide-react';
import { QuoteLink } from '@/components/ui/quote-link';
const steps = [
  { number: '01', icon: CarFront, title: 'Conta o que você procura.', text: 'Pneus ou rodas? Tenha em mente o modelo e o ano do seu carro. Se souber a medida, melhor ainda.' },
  { number: '02', icon: MessageCircle, title: 'Conversa com a gente.', text: 'Envie suas informações pelo canal oficial e fale com a equipe sobre as opções para o seu veículo.' },
  { number: '03', icon: CheckCheck, title: 'Confirma os detalhes.', text: 'A equipe confere compatibilidade, preço e disponibilidade com você antes de seguir com o pedido.' },
];
export function QuoteSteps() {
  return <section id="orcamento" className="section steps-section" aria-labelledby="steps-title"><div className="container">
    <div className="section-heading"><div><span className="eyebrow">03 / SEM COMPLICAÇÃO</span><h2 id="steps-title">Seu próximo upgrade<br />começa numa conversa<span className="yellow-dot">.</span></h2></div><ArrowUpRight size={50} className="heading-arrow" aria-hidden="true" /></div>
    <div className="steps-grid">{steps.map(step => <article className="step" key={step.number}><div className="step-top"><span>{step.number}</span><step.icon size={26} aria-hidden="true" /></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    <div className="steps-bottom"><p>Não sabe a medida? Comece pelo modelo e ano do veículo.</p><QuoteLink /></div>
  </div></section>;
}
