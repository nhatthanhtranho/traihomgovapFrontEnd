import { Box, Grid } from '@mui/material';
import { Metadata } from 'next';
import { DEFAULT_METADATA } from '@/constants/constant';
import { Article } from '@/schema/article.schema';
import { formatDateString } from '@/utils/formatDateString';
import { v4 as uuidv4 } from 'uuid';
import ArticleCard from '@/components/PostCard/ArticleCard';

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
  title:
    'Cẩm nang dịch vụ mai táng trọn gói | Dịch vụ Mai Táng Trọn Gói TPHCM | Cơ sở mai táng trại hòm Sinh Phúc Thọ Gò Vấp',
};

async function getArticles(): Promise<Article[] | null> {
  const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;
  const res = await fetch(`${NEXT_PUBLIC_API}/articles?category=news`);
  if (!res.ok) {
    return null; // Or throw an error if you prefer
  }
  return res.json();
}

export default async function Page() {
  const articles = await getArticles();
  const renderPosts = articles?.map(item => {
    const key = uuidv4(); // Generate a unique key for each item
    return (
      <ArticleCard
        key={key}
        url={`/cam-nang/${item.slug}`}
        title={item.title}
        publishedDate={formatDateString(item.createdAt)}
        banner={item.thumbnail}
      />
    );
  });
  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
      <Box
        display={'flex'}
        flexDirection="column"
        bgcolor={'white'}
        width={{
          xs: '100%',
          lg: '1320px',
        }}
        px={{
          xs: 2,
        }}
        justifyContent={'space-between'}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
          Cẩm Nang Tang Lễ
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          <strong>
            Hướng dẫn chi tiết từng bước để chuẩn bị và tổ chức lễ tang chu đáo, trang nghiêm
          </strong>
          .<br /> Trong những thời khắc mất mát, việc chuẩn bị cho một lễ tang không chỉ là trách
          nhiệm mà còn là cách để thể hiện lòng thành kính, tri ân người đã khuất. Cẩm nang tang lễ
          cung cấp thông tin thiết thực về các thủ tục, nghi lễ, giấy tờ pháp lý, phong tục tập quán
          theo vùng miền, cũng như những điều cần lưu ý khi tổ chức tang lễ. Chúng tôi mong muốn
          giúp gia đình vượt qua giai đoạn khó khăn này một cách nhẹ nhàng và trang trọng nhất.
        </p>{' '}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
          {renderPosts}
        </div>
      </Box>
    </Box>
  );
}
