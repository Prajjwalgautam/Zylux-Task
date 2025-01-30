import * as React from "react";

export function Table({ children }: { children: React.ReactNode }) {
  return <table className="w-full border-collapse">{children}</table>;
}

export function TableHead({ children }: { children: React.ReactNode }) {
  return <thead className="bg-gray-100">{children}</thead>;
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-2 text-left border-b">{children}</th>;
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }: { children: React.ReactNode }) {
  return <tr className="border-b hover:bg-gray-50">{children}</tr>;
}

interface TableCellProps {
  children: React.ReactNode;
  colSpan?: number;
  className?: string;
}

export function TableCell({ children, colSpan, className }: TableCellProps) {
  return (
    <td colSpan={colSpan} className={`px-4 py-2 border-b ${className || ""}`}>
      {children}
    </td>
  );
}