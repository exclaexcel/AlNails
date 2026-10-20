"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "@/components/Icons";
import {
  brand,
  care,
  careClosing,
  contact,
  location,
  modelProgram,
  rules,
  rulesClosing,
  serviceGroups,
  servicesFootnote,
  showPrices,
  whatsappUrl,
} from "@/content/content";

type PanelId = "servicos" | "regras" | "cuidados" | "local" | "modelos";

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

const btnBase =
  "group flex min-h-[58px] w-full items-center gap-3 rounded-full px-5 text-left text-[13px] font-medium uppercase tracking-[0.08em] transition active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze";
const btnOutline = `${btnBase} border border-gold bg-white/55 text-ink shadow-[0_2px_10px_rgba(138,100,37,0.08)] hover:bg-white/80`;

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    const prevFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      prevFocus?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/45 backdrop-blur-[2px] sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg transform='scale(-1,1) translate(-200,0)' fill='none' stroke='%23c9a45c' stroke-width='1.3'%3E%3Cpath d='M-10 150C30 120 60 60 120 -10' opacity='.3'/%3E%3Cpath d='M-10 170C40 135 80 80 150 -10' opacity='.18'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
          backgroundSize: "170px 170px",
        }}
        className="sheet-in max-h-[85vh] max-h-[85dvh] w-full max-w-[480px] overflow-y-auto overscroll-contain rounded-t-[28px] bg-offwhite px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] shadow-[0_-10px_40px_rgba(23,23,23,0.25)] sm:rounded-[28px]"
      >
        <div className="sticky top-0 z-10 mb-3 flex items-center justify-between border-b border-champagne/50 bg-offwhite pt-5 pb-2">
          <h2 className="font-display text-[28px] font-semibold leading-tight text-ink">{title}</h2>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-champagne/40 focus-visible:outline-2 focus-visible:outline-bronze"
          >
            <Icon name="close" size={22} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function IconBadge({ name }: { name: Parameters<typeof Icon>[0]["name"] }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/70 bg-champagne/35 text-bronze">
      <Icon name={name} size={21} />
    </span>
  );
}

export default function Menu() {
  const [open, setOpen] = useState<PanelId | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <nav aria-label="Menu principal" className="space-y-3">
        <a
          id="cta-principal"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnBase} bg-ink text-offwhite shadow-[0_8px_22px_rgba(23,23,23,0.28)] hover:bg-[#2a2520]`}
        >
          <Icon name="whatsapp" size={24} className="text-offwhite" />
          <span className="flex-1">Agendar pelo WhatsApp</span>
          <Icon name="chevron" size={18} className="text-gold" />
        </a>

        <button type="button" onClick={() => setOpen("servicos")} aria-haspopup="dialog" className={btnOutline}>
          <Icon name="diamond" size={22} className="text-bronze" />
          <span className="flex-1">Serviços e valores</span>
          <Icon name="chevron" size={18} className="text-bronze" />
        </button>

        <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className={btnOutline}>
          <Icon name="instagram" size={22} className="text-bronze" />
          <span className="flex-1">Conheça meu trabalho</span>
          <Icon name="chevron" size={18} className="text-bronze" />
        </a>

        <button type="button" onClick={() => setOpen("modelos")} aria-haspopup="dialog" className={btnOutline}>
          <Icon name="sparkle" size={22} className="text-bronze" />
          <span className="flex-1">{modelProgram.label}</span>
          <Icon name="chevron" size={18} className="text-bronze" />
        </button>

        <button type="button" onClick={() => setOpen("regras")} aria-haspopup="dialog" className={btnOutline}>
          <Icon name="calendar" size={22} className="text-bronze" />
          <span className="flex-1">Regras de agendamento</span>
          <Icon name="chevron" size={18} className="text-bronze" />
        </button>

        <button type="button" onClick={() => setOpen("cuidados")} aria-haspopup="dialog" className={btnOutline}>
          <Icon name="heart" size={22} className="text-bronze" />
          <span className="flex-1">Cuidados com as unhas</span>
          <Icon name="chevron" size={18} className="text-bronze" />
        </button>
      </nav>

      {/* Divisor e atalhos */}
      <div className="mt-8 flex items-center gap-3 px-4" aria-hidden="true">
        <span className="h-px flex-1 bg-gold/70" />
        <Icon name="heart" size={14} className="text-bronze" />
        <span className="h-px flex-1 bg-gold/70" />
      </div>
      <ul className="mt-6 flex items-start justify-center gap-10">
        {[
          { label: "Instagram", icon: "instagram" as const, href: contact.instagramUrl },
          { label: "Localização", icon: "pin" as const, panel: "local" as PanelId },
          { label: "WhatsApp", icon: "whatsapp" as const, href: whatsappUrl() },
        ].map((it) => (
          <li key={it.label} className="w-[84px] text-center">
            {it.href ? (
              <a href={it.href} target="_blank" rel="noopener noreferrer" className="group inline-flex flex-col items-center gap-2 focus-visible:outline-2 focus-visible:outline-bronze">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-champagne/35 text-bronze transition group-hover:bg-champagne/60">
                  <Icon name={it.icon} size={24} />
                </span>
                <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink">{it.label}</span>
              </a>
            ) : (
              <button type="button" onClick={() => setOpen(it.panel!)} aria-haspopup="dialog" className="group inline-flex flex-col items-center gap-2 focus-visible:outline-2 focus-visible:outline-bronze">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-champagne/35 text-bronze transition group-hover:bg-champagne/60">
                  <Icon name={it.icon} size={24} />
                </span>
                <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink">{it.label}</span>
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Painéis */}
      {open === "servicos" && (
        <Modal title="Serviços e valores" onClose={close}>
          {serviceGroups.map((g, gi) => (
            <div key={gi}>
              {g.title && (
                <div className="my-3 flex items-center gap-3" aria-hidden="true">
                  <span className="h-px flex-1 bg-gold/60" />
                  <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-bronze">{g.title}</span>
                  <span className="h-px flex-1 bg-gold/60" />
                </div>
              )}
              <ul>
                {g.items.map((s) => (
                  <li key={s.name} className="border-b border-champagne/70 last:border-b-0">
                    <a
                      href={whatsappUrl(`Tenho interesse em: ${g.title ? g.title + " – " : ""}${s.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 py-2.5 focus-visible:outline-2 focus-visible:outline-bronze"
                    >
                      <IconBadge name={s.icon} />
                      <span className="flex-1">
                        <span className="block text-[15px] leading-snug text-ink">{s.name}</span>
                        {showPrices && (
                          <span className="block text-[15px] font-semibold text-ink">
                            {brl.format(s.price)}
                            {s.note && <span className="ml-1.5 font-normal text-ink/70">{s.note}</span>}
                          </span>
                        )}
                      </span>
                      <Icon name="chevron" size={16} className="text-bronze" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="mt-4 text-center text-[13px] leading-snug text-ink/75">{servicesFootnote}</p>
        </Modal>
      )}

      {open === "regras" && (
        <Modal title="Regras de agendamento" onClose={close}>
          <ul className="space-y-3.5 pt-1">
            {rules.map((r) => (
              <li key={r.text} className="flex items-center gap-3">
                <IconBadge name={r.icon} />
                <span className="text-[15px] leading-snug text-ink">{r.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center font-script text-[28px] leading-none text-bronze">{rulesClosing}</p>
          <div className="mt-2 flex justify-center text-bronze"><Icon name="heart" size={14} /></div>
        </Modal>
      )}

      {open === "cuidados" && (
        <Modal title="Cuidados com as unhas" onClose={close}>
          <ul className="space-y-3.5 pt-1">
            {care.map((c) => (
              <li key={c.text} className="flex items-center gap-3">
                <IconBadge name={c.icon} />
                <span className="text-[15px] leading-snug text-ink">{c.text}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-[300px] text-center font-script text-[28px] leading-[1.1] text-bronze">{careClosing}</p>
          <div className="mt-2 flex justify-center text-bronze"><Icon name="heart" size={14} /></div>
        </Modal>
      )}

      {open === "local" && (
        <Modal title="Localização" onClose={close}>
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <IconBadge name="pin" />
            <p className="text-[17px] leading-snug text-ink">
              {location.neighborhood}
              <br />
              {location.city} &ndash; {location.state}
            </p>
            <p className="font-script text-[26px] leading-none text-bronze">{brand.signature}</p>
          </div>
        </Modal>
      )}

      {open === "modelos" && (
        <Modal title={modelProgram.label} onClose={close}>
          <p className="pt-1 text-[15px] leading-snug text-ink/85">{modelProgram.intro}</p>

          <div className="my-4 flex items-center gap-3" aria-hidden="true">
            <span className="h-px flex-1 bg-gold/60" />
            <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-bronze">{modelProgram.how.title}</span>
            <span className="h-px flex-1 bg-gold/60" />
          </div>
          <ul className="space-y-3">
            {modelProgram.how.items.map((t) => (
              <li key={t} className="flex items-center gap-3">
                <IconBadge name="sparkle" />
                <span className="text-[15px] leading-snug text-ink">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[14px] leading-snug text-ink/75">{modelProgram.purpose}</p>

          <div className="my-4 flex items-center gap-3" aria-hidden="true">
            <span className="h-px flex-1 bg-gold/60" />
            <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-bronze">{modelProgram.requirements.title}</span>
            <span className="h-px flex-1 bg-gold/60" />
          </div>
          <ul className="space-y-3.5">
            {modelProgram.requirements.items.map((r) => (
              <li key={r.text} className="flex items-center gap-3">
                <IconBadge name={r.icon} />
                <span className="text-[15px] leading-snug text-ink">{r.text}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-center text-[13px] leading-snug text-ink/75">{modelProgram.note}</p>

          <a
            href={modelProgram.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnBase} mt-5 bg-ink text-offwhite shadow-[0_8px_22px_rgba(23,23,23,0.28)] hover:bg-[#2a2520]`}
          >
            <Icon name="sparkle" size={22} className="text-offwhite" />
            <span className="flex-1">{modelProgram.ctaLabel}</span>
            <Icon name="chevron" size={18} className="text-gold" />
          </a>
        </Modal>
      )}
    </>
  );
}
