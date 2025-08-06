import * as React from 'react';
import { Metadata } from 'next';
import Post from '@/components/Post/Post';
import { DEFAULT_METADATA } from '@/constants/constant';
import Content from '../content';


export const metadata: Metadata = DEFAULT_METADATA

export default function PostPage() {
    return <Post
        title='Dịch vụ mai táng trọn gói quận 1: Đồng hành cùng gia đình vượt qua nỗi đau'
        publishDate={'27/12/2024'}
        content={<Content />}
        tags={[]}
    />
}
