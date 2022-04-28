export type NavItem =
  | { label: string; route: string; href?: never }
  | { label: string; route?: never; href: string }
