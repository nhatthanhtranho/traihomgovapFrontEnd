'use client'

import RelativePostList from "@/components/RelativeArticleList/RelativeArticleList";
import { Box } from "@mui/material";
import postData from '@/data/post-data.json';
import { usePathname } from 'next/navigation';

interface Props {
    children: React.ReactNode;
}

const PostLayout = ({ children }: Props) => {
    const pathname = usePathname();
    if (pathname === "/mai-tang-tron-goi" || pathname === "/mai-tang-tron-goi.html") {
        return <>
            {children}
        </>
    }
    return (
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
                    {children}
                </Box>
                <RelativePostList articles={[]} />
            </Box>
        </Box>
    );
};

export default PostLayout;