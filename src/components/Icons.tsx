import type { IconName } from "@/content/content";

type Name = IconName | "diamond" | "instagram" | "heart" | "pin" | "whatsapp" | "chevron" | "close";

const paths: Record<Name, React.ReactNode> = {
  nail: (
    <>
      <path d="M8.500 20V10c0-3.500 1.500-6 3.500-6s3.500 2.500 3.500 6v10Z" />
      <path d="M8.500 16h7" />
    </>
  ),
  jar: (
    <>
      <rect x="7" y="9" width="10" height="11" rx="2" />
      <rect x="8.5" y="4.5" width="7" height="4.5" rx="1" />
    </>
  ),
  shield: <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />,
  scissors: (
    <>
      <circle cx="7" cy="17" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
      <path d="M8.5 15L16 4M15.5 15L8 4" />
    </>
  ),
  drop: <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" />,
  sparkle: <path d="M12 3l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7Z" />,
  refresh: <path d="M20 12a8 8 0 1 1-2.5-5.8M20 4v4.500h-4.500" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M9 3v4M15 3v4" />
    </>
  ),
  calendarx: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M9 3v4M15 3v4M10 13.500l4 4M14 13.500l-4 4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="9" r="3" />
      <circle cx="17" cy="10" r="2.500" />
      <path d="M3 19c0-3.500 3-5 6-5s6 1.500 6 5M15.500 14.500c3 0 5.500 1 5.500 4.500" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
    </>
  ),
  pencil: <path d="M5 19l1.500-5L16 4.500 19.500 8 10 17.500 5 19Z" />,
  xcircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4l9 16H3L12 4Z" />
      <path d="M12 10v4M12 17.200v.1" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="M3 16.5l5-4.500 4 3.500 4-4 4.500 4.500" />
    </>
  ),
  coin: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M15 9.500c0-1.500-1.500-2.500-3-2.500s-3 1-3 2.300c0 3.200 6 1.700 6 4.700 0 1.300-1.500 2.500-3 2.500s-3-1-3-2.500" />
    </>
  ),
  diamond: (
    <>
      <path d="M6 4h12l3 5-9 11L3 9l3-5Z" />
      <path d="M3 9h18M9 4L8 9l4 11 4-11-1-5" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.200" />
      <circle cx="17.300" cy="6.700" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  heart: <path d="M12 20s-7-4.500-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.500-9 9-9 9Z" />,
  pin: (
    <>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.500" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.500 11.800a8.500 8.500 0 0 1-12.600 7.400L3.500 20.500l1.300-4.200A8.500 8.500 0 1 1 20.500 11.800Z" />
      <path d="M9.200 8.600c0 3.600 2.700 6.200 6.200 6.200l1.200-1.500-2-1.100-.9.800a4.700 4.700 0 0 1-2.500-2.500l.8-.9-1.100-2-1.700 1Z" fill="currentColor" stroke="none" />
    </>
  ),
  chevron: <path d="M9 5l7 7-7 7" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
};

export default function Icon({ name, size = 22, className = "" }: { name: Name; size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
