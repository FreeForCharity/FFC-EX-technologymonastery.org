'use client';

interface PrintButtonProps {
  className?: string;
}

// Opens the browser print dialog, which is also how a reader saves the page as a PDF.
// Hidden on paper; the print stylesheet in globals.css does the rest.
export default function PrintButton({ className = '' }: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`inline-block px-6 py-3 rounded-lg font-semibold border border-purple-400/60 text-white hover:bg-purple-600/40 transition-colors duration-200 print:hidden ${className}`}
    >
      Print or save as PDF
    </button>
  );
}
