"use client";

import type { SVGProps } from "react";

function base(props: SVGProps<SVGSVGElement>) {
  return {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function IconArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function IconPlus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconMinus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M5 4h4l2 5-2.5 1.5c1 2.5 3 4.5 5.5 5.5L15.5 14l5 2v4c0 .5-.5 1-1 1C11 21 3 13 3 5c0-.5.5-1 1-1Z" />
    </svg>
  );
}

export function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconScale(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 4v16M8 20h8M12 6 6 8m6-2 6 2" />
      <path d="M3.5 13 6 8l2.5 5a2.6 2.6 0 0 1-5 0ZM15.5 13 18 8l2.5 5a2.6 2.6 0 0 1-5 0Z" />
    </svg>
  );
}

export function IconBuilding(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 9h5a1 1 0 0 1 1 1v11M2.5 21h19" />
      <path d="M7 8h4M7 12h4M7 16h4" />
    </svg>
  );
}

export function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 5 6v5.5c0 4.5 3 8 7 9.5 4-1.5 7-5 7-9.5V6l-7-2.5Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  );
}

export function IconDoc(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M7 3.5h7L19 8.5V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" />
      <path d="M13.5 3.5v5H19M9.5 13h5M9.5 16.5h5" />
    </svg>
  );
}

export function IconUsers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.6-3.4 2.8-5.2 5.5-5.2s4.9 1.8 5.5 5.2M15.5 5.4a3.2 3.2 0 0 1 0 5.6M17.5 15.3c1.7.8 2.7 2.3 3 4.7" />
    </svg>
  );
}

export function IconLandmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 9.5 12 4l8.5 5.5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20.5h18" />
    </svg>
  );
}

export function IconBriefcase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="8" width="17" height="12" rx="2" />
      <path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8M3.5 13.5h17" />
    </svg>
  );
}

export function IconLinkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6.4 8.9H3.6V21h2.8V8.9ZM5 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Zm7 8.2c0-1 .5-2.6 2.7-2.6 2 0 2.6 1.5 2.6 3.7V21h2.8v-5c0-3.4-1.4-5.4-4.4-5.4-1.6 0-2.7.9-3.1 1.7V8.9H9.8c0 .8 0 12.1 0 12.1h2.8v-6.9c0-.4 0-.8.2-1.1.4-.8 1.2-1.6 2.6-1.6 1.8 0 2.5 1.4 2.5 3.6v6H21v-6.5c0-3.1-1.6-4.9-4.2-4.9-1.9 0-3 1.1-3.5 1.9V8.9H12v2.8Z" />
    </svg>
  );
}
