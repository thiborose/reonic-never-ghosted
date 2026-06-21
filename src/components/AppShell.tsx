import {
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  FileText,
  Home,
  Inbox,
  LayoutGrid,
  ReceiptText,
  Search,
  Settings,
  Users,
  Wrench,
} from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", icon: Home, to: "/home" },
  { label: "Dashboard", icon: LayoutGrid, to: "/dashboard" },
  { label: "Contacts", icon: Users, to: "/contacts" },
  { label: "Tasks", icon: CalendarDays, to: "/tasks" },
  { label: "Requests", icon: Inbox, to: "/quotes", match: ["/quotes", "/requests", "/customers"] },
  { label: "Offers", icon: FileText, to: "/offers" },
  { label: "Installations", icon: BriefcaseBusiness, to: "/installations" },
  { label: "Services", icon: Wrench, to: "/services" },
  { label: "Invoices", icon: ReceiptText, to: "/invoices" },
];

export function AppShell() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-logo">Reonic</div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="account-switcher">
            <span className="avatar avatar-green">TT</span>
            <span className="account-copy">
              <strong>Theo Tiral</strong>
              <span>Onboarding Demo Kunde</span>
            </span>
            <ChevronDown size={14} />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="dropdown-content" align="start">
            <DropdownMenu.Item className="dropdown-item">Demo workspace</DropdownMenu.Item>
            <DropdownMenu.Item className="dropdown-item">Settings</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        <label className="sidebar-search">
          <Search size={15} />
          <input placeholder="Search" />
        </label>
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const active = item.match
              ? item.match.some((path) => location.pathname.startsWith(path))
              : location.pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <NavLink
                className={active ? "sidebar-link active" : "sidebar-link"}
                to={item.to}
                key={item.label}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
        <div className="sidebar-agenda">
          <div className="agenda-title">
            <span>Agenda</span>
            <Settings size={13} />
          </div>
          <div className="agenda-line">
            <BarChart3 size={13} />
            All done for today.
          </div>
        </div>
      </aside>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
