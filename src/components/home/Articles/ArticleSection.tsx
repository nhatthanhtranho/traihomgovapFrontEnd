import PostCard from '@/components/PostCard/PostCard';
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { formatLink } from '@/utils/formatLink';
import { formatDateString } from '@/utils/formatDateString';
import { Article } from '@/schema/article.schema';
import {v4 as uuidv4} from 'uuid'

async function getArticles(): Promise<Article[] | null> {
  const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;
  const res = await fetch(`${NEXT_PUBLIC_API}/articles?category=news`);
  if (!res.ok) {
    return null; // Or throw an error if you prefer
  }
  return res.json();
}

export default async function ArticleSection() {
  const articles = await getArticles();
  const centerPost = articles?.[0];

  const leftPosts = articles?.slice(1, 6);

  const rightPosts = articles?.slice(6, 8);

  const renderLeftPosts = leftPosts?.map((article: Article) => {
    const key = uuidv4(); // Generate a unique key for each item
    return (
      <PostCard
        variant="left-card"
        key={key}
        url={article.slug}
        title={article.title}
        publishDate={formatDateString(article.createdAt)}
        bannerURL={article.thumbnail}
      />
    );
  });

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      mt={{
        xs: 5,
        md: 10,
      }}
      width={'100vw'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box
        width={{ lg: '1320px', xs: '100%' }}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center">Cẩm Nang </h1>
        {/* MOBILE LAYOUT */}
        <Box
          display={{
            sm: 'none',
            xs: 'inherit',
          }}
        >
          <Grid container mt={4} width={'100%'} pl={3} pr={2}>
            <Grid item>
              <PostCard
                variant="center-card"
                key={uuidv4()}
                url={`/cam-nang/${centerPost?.slug}`}
                title={centerPost?.title || ''}
                publishDate={formatDateString(centerPost?.createdAt || '')}
                bannerURL={centerPost?.thumbnail || ''}
                content={centerPost?.content || ''}
                />
            </Grid>
            <Grid item mt={2}>
              <Box width={'100%'} display={'flex'} flexDirection={'column'} gap={2}>
                {renderLeftPosts}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* MEDIUM LAYOUT */}
        <Box
          display={{
            xs: 'none',
            sm: 'inherit',
            md: 'none',
          }}
        >
          <Grid container mt={4} width={'100%'} pl={3} pr={2} spacing={2}>
            <Grid item sm={8}>
              <Grid container>
                <Grid sm={12}>
                  <PostCard
                    variant="center-card"
                    key={uuidv4()}
                    url={`/cam-nang/${centerPost?.slug}`}
                    title={centerPost?.title || ''}
                    publishDate={formatDateString(centerPost?.createdAt || '')}
                    bannerURL={centerPost?.thumbnail || ''}
                    content={centerPost?.content || ''}
                  />
                </Grid>
                <Grid container>
                  <Grid sm={6} pr={1}>
                    <PostCard
                      variant="center-card"
                      key={uuidv4()}
                      url={`/cam-nang/${rightPosts?.[0]?.slug}`}
                      title={rightPosts?.[0]?.title || ''}
                      publishDate={formatDateString(rightPosts?.[0]?.createdAt || '')}
                      bannerURL={rightPosts?.[0]?.thumbnail || ''}
                      content={rightPosts?.[0]?.content || ''}
                    />
                  </Grid>
                  <Grid sm={6} pl={1}>
                    <PostCard
                      variant="center-card"
                      key={uuidv4()}
                      url={`/cam-nang/${rightPosts?.[1]?.slug}`}
                      title={rightPosts?.[1]?.title || ''}
                      publishDate={formatDateString(rightPosts?.[1]?.createdAt || '')}
                      bannerURL={rightPosts?.[1]?.thumbnail || ''}
                      content={rightPosts?.[1]?.content || ''}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={4}>
              <Box width={'100%'} display={'flex'} flexDirection={'column'} gap={2}>
                {renderLeftPosts}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* LARGE PAGE LAYOUT */}
        <Box
          display={{
            md: 'inherit',
            xs: 'none',
          }}
        >
          <Grid
            container
            mt={4}
            px={{
              md: 6,
            }}
            spacing={2}
          >
            <Grid item md={4}>
              <Box width={'100%'} display={'flex'} flexDirection={'column'} gap={2}>
                {renderLeftPosts}
              </Box>
            </Grid>
            <Grid item md={5}>
              <PostCard
                variant="center-card"
                key={uuidv4()}
                url={`/cam-nang/${centerPost?.slug}`}
                title={centerPost?.title || ''}
                publishDate={formatDateString(centerPost?.createdAt || '')}
                bannerURL={centerPost?.thumbnail || ''}
                content={'aaaaa vbbb'}
              />
            </Grid>
            <Grid item md={3} gap={2}>
              <PostCard
                variant="right-card"
                key={uuidv4()}
                url={`/cam-nang/${rightPosts?.[0]?.slug}`}
                title={rightPosts?.[0]?.title || ''}
                publishDate={formatDateString(rightPosts?.[0]?.createdAt || '')}
                bannerURL={rightPosts?.[0]?.thumbnail || ''}
                content={rightPosts?.[0]?.content || ''}
              />
              <PostCard
                variant="right-card"
                key={uuidv4()}
                url={`/cam-nang/${rightPosts?.[1]?.slug}`}
                title={rightPosts?.[1]?.title || ''}
                publishDate={formatDateString(rightPosts?.[1]?.createdAt || '')}
                bannerURL={rightPosts?.[1]?.thumbnail || ''}
                content={rightPosts?.[1]?.content || ''}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Link href={formatLink('/cam-nang')}>
        <Box
          mt={2}
          sx={{ cursor: 'ponter' }}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'end'}
          width={'100%'}
          pr={2}
        >
          <Box
            px={2}
            py={1}
            className="rounded-full custom-box-shadow-1 cursor-pointer"
            bgcolor={'#837500'}
          >
            <Typography variant="body1" fontWeight={700} color={'white'}>
              {' '}
              Xem tất cả
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
