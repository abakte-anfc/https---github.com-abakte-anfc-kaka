import Image from 'next/image';
import { Camera, Play } from 'lucide-react';
import { validateLocalMedia } from '@/lib/media';
import type { MediaAsset } from '@/types/content';

export function MediaSlot({ media, className = '', priority = false, variant = 'default' }: {
  media: MediaAsset; className?: string; priority?: boolean; variant?: 'default' | 'hero' | 'pneus' | 'rodas';
}) {
  const src = validateLocalMedia(media.src);
  const poster = media.poster ? validateLocalMedia(media.poster) : undefined;
  return <div className={`media-slot media-${variant} ${className} ${src ? 'has-media' : 'empty-media'}`}>
    {src ? media.kind === 'video' ? <video controls preload="none" playsInline poster={poster} aria-label={media.alt}>
      <source src={src} type={src.toLowerCase().endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
      Seu navegador não reproduz este vídeo. <a href={src}>Baixar vídeo</a>
    </video> : <Image src={src} alt={media.alt} fill priority={priority} sizes={variant === 'hero' ? '(max-width: 900px) 100vw, 55vw' : '(max-width: 600px) 100vw, 50vw'} />
      : <>
        {variant === 'hero' && <div className="hero-rings" aria-hidden="true"><span /><span /><span /><span /><span /><div className="ring-center">K<span>+</span></div></div>}
        {(variant === 'pneus' || variant === 'rodas') && <div className={`product-art art-${variant}`} aria-hidden="true"><span /><i /><b /></div>}
        <div className="media-empty-label"><span className="media-empty-icon">{media.kind === 'video' ? <Play size={20} aria-hidden="true" /> : <Camera size={18} aria-hidden="true" />}</span><span>{media.label}<small>{media.kind === 'video' ? 'Espaço reservado para vídeo' : 'Espaço reservado para foto'}</small></span></div>
      </>}
  </div>;
}
