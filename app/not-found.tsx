import Link from "next/link";
import { ArrowLeft, Home, Building2, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full bg-[#F4F4F6] min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-lg w-full bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-brand-primary text-xs font-black tracking-wider uppercase mb-4">
          Error 404
        </span>
        <h1 className="text-3xl font-black text-gray-900 mb-3">
          Structural Component Not Found
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          The page or blueprint you are searching for might have been moved, renamed, or is currently undergoing engineering revision.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary text-xs inline-flex items-center justify-center gap-2">
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>
          <Link href="/products" className="btn-secondary text-xs inline-flex items-center justify-center gap-2">
            <Building2 className="w-4 h-4" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
