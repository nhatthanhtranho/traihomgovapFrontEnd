'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function BackToHomeButton() {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === '/') return null;

  return (
    <button
      onClick={() => router.push('/')}
      className="inline-flex items-center gap-1 text-sm bg-gray-700 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition-colors"
    >
      Quay về trang chủ
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 ml-1"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13.47 4.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L18.94 12l-5.47-5.47a.75.75 0 0 1 0-1.06zM4.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 12z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
