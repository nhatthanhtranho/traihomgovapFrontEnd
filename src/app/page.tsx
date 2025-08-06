import IntroductionSection from '@/components/home/Introduction';
import PostSection from '@/components/home/Articles/ArticleSection';
import { Metadata } from 'next';
import ServiceSection from '@/components/home/ServiceSection/ServiceSection';
import FacilitySection from "@/components/home/FacilitySection/FacilitySection";
import ContactForm from "@/components/ContactForm/ContactForm";
import NhaTangLeSection from "@/components/home/NhaTangLe2/NhaTangLeSection";
import albumImages from '../data/album.json'
import dynamic from 'next/dynamic';
const HuCotSection = dynamic(() => import('@/components/Sections/HuCotSection'), { ssr: false });
const LoHoaTangSection = dynamic(() => import('@/components/Sections/LoHoaTangSection'), {
  ssr: false,
});

const NEXT_PUBLIC_GG_VERIFY = process.env.NEXT_PUBLIC_GG_VERIFY

export const metadata: Metadata = {
  verification: {
    google: NEXT_PUBLIC_GG_VERIFY
  }
}

export default function Home() {
  return (
    <div>
      <IntroductionSection />
      <ServiceSection />
      <FacilitySection images={albumImages} limit={30}/>
      <LoHoaTangSection />
      <HuCotSection />  
      <PostSection />
      <NhaTangLeSection />
      <ContactForm />
    </div>
  );
}