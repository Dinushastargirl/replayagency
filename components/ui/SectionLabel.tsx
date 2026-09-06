import React from "react";

interface SectionLabelProps {
  index?: string;
  label: string;
  className?: string;
}

export function SectionLabel({ index, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {index && (
        <>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">
            {index} // INDEX
          </span>
          <span className="w-6 h-[1px] bg-border" />
        </>
      )}
      <span className="text-xs uppercase tracking-[0.25em] font-medium text-muted font-mono">
        {label}
      </span>
    </div>
  );
}
