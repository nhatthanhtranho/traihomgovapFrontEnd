// app/404.tsx (với App Router)
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect về trang chủ sau 1 giây (tuỳ chỉnh nếu muốn)
    const timeout = setTimeout(() => {
      router.replace('/');
    }, 1000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen text-gray-500">
      <p>Không tìm thấy trang. Đang chuyển hướng về trang chủ...</p>
    </div>
  );
}
