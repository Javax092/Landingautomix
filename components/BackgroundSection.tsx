import { PremiumImage } from "./PremiumImage";

type BackgroundSectionProps = {
  children: React.ReactNode;
  image: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  priority?: boolean;
};

export function BackgroundSection({ children, image, alt = "", className = "", imageClassName = "", overlayClassName = "", priority = false }: BackgroundSectionProps) {
  return (
    <section className={`premium-background relative isolate overflow-hidden ${className}`}>
      <PremiumImage src={image} alt={alt} fill priority={priority} sizes="100vw" className={`premium-background-image -z-20 object-cover ${imageClassName}`} />
      <div className={`absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(5,5,7,.96),rgba(5,5,7,.78)_52%,rgba(28,10,12,.65))] ${overlayClassName}`} />
      {children}
    </section>
  );
}
