'use client'

import { Box, Grid, Typography } from "@mui/material";
import PostCard from "../PostCard/PostCard";
import { useMemo } from "react";
import { formatDateString } from "@/utils/formatDateString";
import { Article } from "@/schema/article.schema";

interface PropTypes {
    articles: Article[];
}

const RelativeArticleList: React.FC<PropTypes> = ({ articles }) => {

    const renderArticles = useMemo(() => {
        if (!articles || articles.length === 0) {
            return (
                <Grid item xs={12} sm={6} lg={12}>
                    <Typography variant="body2" color="text.secondary">
                        Không có bài viết nào
                    </Typography>
                </Grid>
            );
        }

        return articles.map((item) => {
            return (
                <Grid item xs={12} sm={6} lg={12} key={item.title}>
                    <PostCard
                        url={item.slug}
                        title={item.title}
                        publishDate={formatDateString(item.createdAt)}
                        bannerURL={`${item.thumbnail}`}
                        category={item.category}
                    />
                </Grid>
            )
        });
    }, [articles]);

    return (
        <Box sx={{ mt: 5 }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
                BÀI VIẾT NỔI BẬT
            </Typography>
            <Grid container spacing={2} mt={{ xs: 3, lg: 0 }}>
                {renderArticles}
            </Grid>
        </Box>
    );
};

export default RelativeArticleList;