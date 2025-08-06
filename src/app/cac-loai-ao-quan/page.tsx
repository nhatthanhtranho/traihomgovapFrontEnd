import { Grid } from '@mui/material';
import { Metadata } from 'next';
import coffinData from '@/data/coffin-data.json';
import { useMemo } from 'react';
import CoffinCard from '@/components/home/CoffinSection/CoffinCard';
import { DEFAULT_METADATA } from '@/constants/constant';
import { v4 as uuidv4 } from 'uuid';
export const metadata: Metadata = {
  ...DEFAULT_METADATA,
  title:
    'Các loại áo quan | Dịch vụ Mai Táng Trọn Gói TPHCM | Cơ sở mai táng trại hòm Sinh Phúc Thọ Gò Vấp',
};

export default function Page() {
  const renderCards = useMemo(() => {
    return coffinData.map(item => {
      return (
        <Grid item xs={12} md={6} lg={4} key={uuidv4()}>
          <CoffinCard
            url={''}
            title={item.title}
            bannerURL={item.banner}
            description={item.description}
          />
        </Grid>
      );
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
        Các Loại Áo Quan
      </h1>
      <p className="text-lg leading-relaxed mb-4">
        Tại <strong>Trại hòm Sinh Phúc Thọ</strong>, chúng tôi cung cấp đa dạng các loại áo quan
        (quan tài) nhằm đáp ứng nhu cầu, tín ngưỡng và điều kiện tài chính của từng gia đình. Mỗi
        sản phẩm đều được chọn lựa kỹ lưỡng, chế tác công phu, đảm bảo tính{' '}
        <em>trang nghiêm – tôn kính – phù hợp truyền thống văn hóa Việt</em> trong nghi lễ tiễn đưa
        người thân.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        Với hơn <strong>25 năm</strong> năm kinh nghiệm trong lĩnh vực tổ chức tang lễ,{' '}
        <strong>Trại hòm Sinh Phúc Thọ</strong> luôn đặt chữ “tâm” và “đức” lên hàng đầu. Chúng tôi
        thấu hiểu rằng, mỗi tang lễ không chỉ là một nghi thức tiễn biệt, mà còn là cách thể hiện
        lòng hiếu kính, sự tri ân và tình cảm sâu sắc của người ở lại dành cho người đã khuất.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        Chính vì vậy, từng mẫu áo quan tại Sinh Phúc Thọ đều được{' '}
        <strong>lựa chọn theo tiêu chuẩn nghiêm ngặt về chất liệu, kiểu dáng và phong thủy</strong>,
        giúp gia đình an tâm trong từng quyết định quan trọng. Dù là mẫu đơn giản hay cao cấp, chúng
        tôi đều chú trọng sự trang trọng, phù hợp với truyền thống văn hóa và tín ngưỡng Việt Nam.
      </p>

      <p className="text-lg leading-relaxed mb-10">
        Hãy để Sinh Phúc Thọ đồng hành cùng bạn,{' '}
        <em>chu toàn nghi thức – trọn vẹn nghĩa tình – nhẹ lòng người tiễn biệt</em>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">{renderCards}</div>
    </div>
  );
}
