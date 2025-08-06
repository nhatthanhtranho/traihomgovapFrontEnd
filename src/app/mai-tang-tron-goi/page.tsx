import * as React from 'react';
import { Metadata } from 'next';
import Post from '@/components/Post/Post';
import Content from './content';
import { DEFAULT_METADATA } from '@/constants/constant';


export const metadata: Metadata = DEFAULT_METADATA

export default function PostPage() {
    return <Post
        title='Dịch vụ mai táng trọn gói: Đồng hành cùng gia đình vượt qua nỗi đau'
        publishDate={'26/12/2024'}
        content={<Content />}
        tags={[]}
    />
}
