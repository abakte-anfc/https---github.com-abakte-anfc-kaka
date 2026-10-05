import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { env } from '@/lib/env';
import { getQuoteLink } from '@/lib/whatsapp';

export function QuoteLink({ context, className = '', children, compact = false }: {
  context?: string; className?: string; children?: React.ReactNode; compact?: boolean;
}) {
  const { href, external } = getQuoteLink(env.whatsappNumber, context);
  return <a href={href} className={`button button-primary ${className}`} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
    {!compact && <MessageCircle size={18} aria-hidden="true" />}
    {children || 'Pedir orçamento'}<ArrowUpRight size={18} aria-hidden="true" />
  </a>;
}
