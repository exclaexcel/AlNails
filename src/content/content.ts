/**
 * Todo o conteúdo da página da AL Nails fica aqui.
 * Para trocar texto, valor, horário ou link, mexa só neste arquivo.
 * Fonte: formulário de briefing preenchido por Ana Luiza (08/10/2026) + modelo aprovado.
 */

export const brand = {
  name: "AL Nails",
  // Confirmado pela Dany (17/10/2026): "autoestima" é a frase oficial.
  headline: "Mais que unhas, é autoestima!",
  support: "Naturalidade, cuidado e um momento só seu.",
  photoCaption: "Beleza também é autocuidado",
  signature: "Feito com amor para você.",
};

export const contact = {
  whatsappNumber: "5541991768220", // 41 99176-8220
  whatsappMessage:
    "Olá, Ana! Conheci a AL Nails pela sua página e gostaria de consultar os horários disponíveis.",
  instagramHandle: "@al.nails_cwb",
  instagramUrl: "https://www.instagram.com/al.nails_cwb/",
};

export function whatsappUrl(extra?: string) {
  const msg = extra ? `${contact.whatsappMessage} ${extra}` : contact.whatsappMessage;
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

// Card de divulgação feito pela Ana (Instagram): vagas de modelo para gerar conteúdo.
// Seleção 1x por semana, conforme disponibilidade (WhatsApp da Ana, 17/10/2026).
export const modelProgram = {
  label: "Vagas para modelo do mês",
  intro: "5 vagas disponíveis por mês para gerar conteúdo para o Instagram.",
  how: {
    title: "Como funciona",
    items: [
      "Postar fotos de unhas no Instagram",
      "Gravar vídeos de manutenção",
      "Divulgar o meu trabalho e o AL Nails",
    ],
  },
  purpose: "O objetivo é fortalecer o meu portfólio e alcançar mais pessoas através do meu conteúdo.",
  requirements: {
    title: "Requisitos para ser modelo",
    items: [
      { icon: "calendar" as IconName, text: "Ter tempo disponível de acordo com os horários disponibilizados durante o mês" },
      { icon: "image" as IconName, text: "Permitir o uso da imagem das suas mãos (fotos e vídeos) para as redes sociais do AL Nails" },
      { icon: "coin" as IconName, text: "Pagamento somente da taxa do material (não será cobrado o valor do procedimento)" },
    ],
  },
  note: "Seleção 1x por semana, de acordo com a disponibilidade das modelos. Vagas limitadas!",
  formUrl: "https://forms.gle/DXxgZ1jvksa1X5dV7",
  ctaLabel: "Quero me candidatar",
};

export const location = {
  // Ana escolheu mostrar só bairro e cidade. Confirmado pela Dany (17/10/2026): Almirante Tamandaré é no Paraná (DDD 41).
  neighborhood: "Campina do Arruda",
  city: "Almirante Tamandaré",
  state: "PR",
};

// Confirmado pela Dany (17/10/2026): atendimento só aos sábados.
export const hours = "sábados, das 9h às 17h";

export type IconName =
  | "nail" | "jar" | "shield" | "scissors" | "drop" | "sparkle" | "refresh" | "x" | "plus"
  | "heart" | "calendar" | "calendarx" | "clock" | "people" | "card" | "pencil" | "xcircle" | "alert"
  | "image" | "coin";

export type Service = { name: string; price: number; icon: IconName; note?: string };
export type ServiceGroup = { title?: string; items: Service[] };

export const showPrices = true; // Ana quer valores visíveis

export const serviceGroups: ServiceGroup[] = [
  {
    items: [
      { name: "Alongamento em Molde F1", price: 100, icon: "nail" },
      { name: "Banho de gel", price: 70, icon: "jar" },
      { name: "Blindagem", price: 50, icon: "shield" },
      { name: "Manicure tradicional", price: 30, icon: "scissors", note: "esmaltação inclusa" },
      { name: "Pedicure", price: 35, icon: "heart" },
      { name: "Pé + Mão", price: 50, icon: "sparkle" },
    ],
  },
  {
    title: "Manutenção",
    items: [
      { name: "Molde F1", price: 80, icon: "refresh" },
      { name: "Banho de gel", price: 50, icon: "refresh" },
    ],
  },
  {
    title: "Extras",
    items: [
      { name: "Remoção", price: 45, icon: "x" },
      { name: "Reposição de unha", price: 10, icon: "plus", note: "por unha" },
    ],
  },
  // Confirmado no formulário de briefing (08/10/2026): esmaltação inclusa na manicure tradicional.
];

export const servicesFootnote = "Valores sujeitos a atualização. Consulte as informações no momento do agendamento.";

export const rules: { icon: IconName; text: string }[] = [
  { icon: "calendar", text: "O horário é reservado mediante o pagamento de um sinal de 30% do valor do serviço." },
  { icon: "clock", text: "Tolerância de atraso de até 15 minutos." },
  // Ana escreveu "no máximo 24h"; a intenção (dar tempo de encaixar outra cliente) é "pelo menos 24h".
  { icon: "refresh", text: "Para remarcar, avise com pelo menos 24 horas de antecedência." },
  { icon: "calendarx", text: "O sinal é devolvido em cancelamentos avisados com pelo menos 24 horas de antecedência." },
  { icon: "people", text: "Evite trazer acompanhantes, para que seu momento seja ainda mais especial." },
  { icon: "card", text: "Formas de pagamento: crédito, débito ou PIX." },
  { icon: "clock", text: `Atendimento com horário marcado: ${hours}.` },
];
export const rulesClosing = "Obrigada pela compreensão!";

export const care: { icon: IconName; text: string }[] = [
  { icon: "pencil", text: "Evitar usar as unhas como ferramenta (abrir latinhas, raspar superfícies)" },
  { icon: "sparkle", text: "Usar luvas ao manusear produtos de limpeza" },
  { icon: "drop", text: "Hidratar cutículas e mãos diariamente com óleo ou creme" },
  { icon: "xcircle", text: "Não roer nem arrancar o alongamento em caso de descolamento" },
  // Ana respondeu só "OK" ao prazo do mockup (15 a 25 dias).
  { icon: "calendar", text: "Fazer a manutenção dentro do prazo recomendado (a cada 15 a 25 dias)" },
  { icon: "alert", text: "Em caso de dor, desconforto ou problema, entrar em contato imediatamente" },
];
export const careClosing = "Cuidar das suas mãos também é amor-próprio.";

export const images = {
  logo: "/images/logo-al-nails.webp",
  hero: "/images/hero.webp",
  heroAlt: "Mão com unhas quadradas vermelhas, trabalho da AL Nails",
  // Escopo: só UMA foto de destaque (Instagram é o portfólio). g1-g3 ficam em public/images/extras, sem uso por enquanto.
};

// Cores da Ana (formulário, item 1.4) ficam em src/app/globals.css (@theme).
