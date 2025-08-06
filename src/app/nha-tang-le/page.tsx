import PageTitle from "@/components/PageTitle/PageTitle";
import { Box, Grid } from "@mui/material";
import { Metadata } from "next";
import PostCard from "@/components/PostCard/PostCard";
import { DEFAULT_METADATA } from "@/constants/constant";
import { Article } from "@/schema/article.schema";
import { formatDateString } from "@/utils/formatDateString";

export const metadata: Metadata = {
    ...DEFAULT_METADATA,
    title: 'Cẩm nang dịch vụ mai táng trọn gói | Dịch vụ Mai Táng Trọn Gói TPHCM | Cơ sở mai táng trại hòm Sinh Phúc Thọ Gò Vấp'
}

async function getArticles(): Promise<Article[] | null> {
    const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;
    const res = await fetch(`${NEXT_PUBLIC_API}/articles?category=nha-tang-le`);
    if (!res.ok) {
        return null;
    }
    return res.json();
}

export default async function Page() {
    const articles = await getArticles();
    const renderPosts = articles?.map(item => {
        return <Grid item xs={12} sm={4} lg={3} key={item.title}>
            <PostCard
                key={item.slug}
                url={`/cam-nang/${item.slug}`}
                title={item.title}
                publishDate={formatDateString(item.createdAt)}
                bannerURL={item.thumbnail}
                variant="right-card"
            />
        </Grid>
    })
    return (
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
            <Box
                display={'flex'}
                flexDirection='column'
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
                <PageTitle text="cẩm nang tang lễ" />
                <Grid container spacing={3} mt={5} px={10}>
                    {renderPosts}
                </Grid>
            </Box>

        </Box>
    )
}