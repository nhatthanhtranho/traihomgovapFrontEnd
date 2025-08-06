import Introduction from "@/components/Introduction/Introduction";
import RelativeArticleList from "@/components/RelativeArticleList/RelativeArticleList";
import { DEFAULT_METADATA } from "@/constants/constant";
import { formatDateString } from "@/utils/formatDateString";
import { Box, Chip, Typography } from "@mui/material";
import Head from "next/head";
import './style.css'
const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;

async function getArticle(slug: string) {
    const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;
    const res = await fetch(`${NEXT_PUBLIC_API}/articles/find-by-slug/${slug}`);
    if (!res.ok) {
        return null; // Or throw an error if you prefer
    }
    return res.json();
}

export const generateStaticParams = async () => {
    const res = await fetch(`${NEXT_PUBLIC_API}/articles?category=nha-tang-le`);
    const articles = await res.json();
    const params = articles.map((post: { slug: string }) => ({
        slug: post.slug.toString(),
    }));
    return params;
}

async function fetchArticles() {
    const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;
    const res = await fetch(`${NEXT_PUBLIC_API}/articles`)
    const articles = await res.json()
    return articles;
}

export default async function Article({
    params,
}: {
    params: Promise<{ slug: string }>,
}) {
    const { slug } = await params
    const article = await getArticle(slug); 
    const articles = await fetchArticles();
    if (!article) {
        return <>404 no data</>; // Use notFound from next/navigation for 404s
    }

    return (
        <>
            <Head>
                <title>{article.title} | Dịch vụ tang lễ trọn gói | Dịch vụ mai táng trọn gói | Sinh Phúc Thọ</title>
                <meta name="description" content={article.description || DEFAULT_METADATA.description} />
                <meta property="keywords" content={article.keywords || DEFAULT_METADATA.keywords} />
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.description || DEFAULT_METADATA.description} />
                <meta property="og:image" content={article.thumbnail} />
                <meta property="og:url" content={`https://sinhphuctho.com/nha-tang-le/${article.slug}.html`} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content={DEFAULT_METADATA?.openGraph?.siteName} />
                <meta property="og:locale" content="vi_VN" />
                <meta property="og:images" content={article.thumbnail} />
                <meta property="icons" content={DEFAULT_METADATA?.icons?.toString()} />
            </Head>

            <Box
                display={'flex'}
                bgcolor={'white'}
                justifyContent={'center'}
            >
                <Box
                    display={'flex'}
                    flexDirection={{
                        xs: 'column',
                        lg: 'row'
                    }}
                    bgcolor={'white'}
                    width={{
                        xs: '100%',
                        lg: '1320px'
                    }}
                    px={{
                        xs: 2
                    }}
                    justifyContent={'space-between'}

                >
                    <Box pr={5}>
                        <Box
                            minHeight={'100vh'}
                            bgcolor={'white'}
                            width={{
                                lg: '950px',
                            }}
                        >
                            <Chip className='font-bold !text-white' label="Nhà tang lễ" sx={{ backgroundColor: '#837500' }} />
                            <Typography variant='h5' fontWeight={700} mt={2} color={'#837500'}>
                                {article?.title}
                            </Typography>
                            <Typography mb={4} mt={1} variant='body2'>{formatDateString(article?.createdAt)}</Typography>
                            <Box dangerouslySetInnerHTML={{ __html: article?.content || '' }} component={'div'} className='article' />
                            <Introduction />
                        </Box>
                    </Box>
                    <RelativeArticleList articles={articles} />
                </Box>
            </Box>
        </>
    );
}



export const revalidate = false;  // This prevents revalidation
