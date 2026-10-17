import Image from "next/image";
import Icon from "@/components/Icons";
import Menu from "@/components/Menu";
import { brand, images } from "@/content/content";

/** Curvas douradas discretas, como no modelo. */
function Swoosh({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="#c9a45c" strokeWidth="1.3" aria-hidden="true" className={className}>
      <path d="M-10 150C30 120 60 60 120 -10" opacity=".75" />
      <path d="M-10 170C40 135 80 80 150 -10" opacity=".45" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative mx-auto min-h-screen max-w-[480px] overflow-hidden bg-[linear-gradient(180deg,#fbf8f3_0%,#f7f3ed_45%,#efe4d2_100%)] shadow-[0_0_60px_rgba(23,23,23,0.08)]">
      <Swoosh className="pointer-events-none absolute -left-4 -top-4 h-44 w-44" />
      <Swoosh className="pointer-events-none absolute -right-4 top-20 h-36 w-36 -scale-x-100 opacity-70" />

      <header className="relative px-6 pt-9 text-center">
        <Image
          src={images.logo}
          alt="AL Nails"
          width={586}
          height={586}
          sizes="120px"
          preload
          className="mx-auto h-[120px] w-[120px] rounded-full shadow-[0_6px_22px_rgba(138,100,37,0.18)]"
        />
        <div className="mx-auto mt-4 flex w-28 items-center gap-2 text-bronze" aria-hidden="true">
          <span className="h-px flex-1 bg-gold/80" />
          <Icon name="heart" size={12} />
          <span className="h-px flex-1 bg-gold/80" />
        </div>
        <h1 className="mt-3 font-script text-[44px] leading-[1.05] text-bronze text-balance">{brand.headline}</h1>
        <p className="mx-auto mt-2 max-w-[340px] font-display text-[20px] font-medium leading-snug text-balance text-ink">{brand.support}</p>
      </header>

      <section className="relative mt-4" aria-label="Foto de destaque">
        <div className="relative aspect-[10/11] w-full [mask-image:linear-gradient(to_bottom,black_62%,transparent_100%)]">
          <Image
            src={images.hero}
            alt={images.heroAlt}
            fill
            sizes="(max-width: 480px) 100vw, 480px"
            preload
            className="object-cover object-[50%_18%]"
          />
        </div>
      </section>

      <div className="relative -mt-10 px-5 pb-6">
        <p className="mb-4 text-center text-[12px] font-medium uppercase tracking-[0.2em] text-ink/85">
          {brand.photoCaption} <Icon name="heart" size={11} className="ml-1 inline text-bronze" />
        </p>
        <Menu />

        <footer className="mt-9 text-center">
          <p className="font-script text-[30px] leading-none text-bronze">{brand.signature}</p>
          <div className="mt-2 flex justify-center text-bronze" aria-hidden="true">
            <Icon name="heart" size={13} />
          </div>
          <Image
            src={images.logo}
            alt={brand.name}
            width={586}
            height={586}
            sizes="56px"
            className="mx-auto mt-3 h-14 w-14 rounded-full opacity-90 shadow-[0_4px_14px_rgba(138,100,37,0.15)]"
          />
        </footer>
      </div>
    </main>
  );
}
