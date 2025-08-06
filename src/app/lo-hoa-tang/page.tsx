import HuCotSection from '@/components/Sections/HuCotSection';
import LoHoaTangSection from '@/components/Sections/LoHoaTangSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nhà tang lễ - Lò hỏa táng',
};

export default function Page() {
  return (
    <>
      <LoHoaTangSection />;
      <HuCotSection />;
    </>
  );
}
