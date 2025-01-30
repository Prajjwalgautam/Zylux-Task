"use client";

import clsx from "clsx";
import * as React from "react";

interface SidebarMenuProps {
  children: React.ReactNode;
}

export function SidebarMenu({ children }: SidebarMenuProps) {
  return <ul className="space-y-1">{children}</ul>;
}

interface SidebarMenuItemProps {
  children: React.ReactNode;
}

export function SidebarMenuItem({ children }: SidebarMenuItemProps) {
  return <li>{children}</li>;
}

interface SidebarMenuButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
  isActive?: boolean;
}

export function SidebarMenuButton({ children, asChild, isActive }: SidebarMenuButtonProps) {
  if (asChild) {
    return React.Children.only(children);
  }
  return (
    <button
      className={clsx(
        "w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
        isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground",
      )}
    >
      {children}
    </button>
  );
}