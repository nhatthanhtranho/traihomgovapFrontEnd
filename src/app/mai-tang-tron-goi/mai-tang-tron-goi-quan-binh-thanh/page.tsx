import * as React from 'react';
import Content from './content';
import { Metadata } from 'next';
import Post from '@/components/Post/Post';


export const metadata: Metadata = {
    title: 'Trại hòm quận Quận Quận bình thạnh gần đây nhất - Cơ sở mai táng trại hòm Sinh Phúc Thọ - Mai táng trọn gói giá rẻ TPHCM',
    keywords: ['trại hòm quận quận bình thạnh', 'mai táng quận quận bình thạnh', 'mai táng trọn gói quận quận bình thạnh','Trại Hòm Quận Quận bình thạnh', 'trại hòm', 'trại hòm Quận bình thạnh', 'mai táng', 'mai táng trọn gói', 'mai táng trọn gói giá rẻ', 'mai táng trọn gói quận quận bình thạnh', 'trại hòm', 'trại hòm gần đây'],
    description: 'Mai táng trọn gói Tang Lễ Sinh Phúc Thọ Quận Quận bình thạnh chuyên cung cấp dịch vụ mai táng trọn gói và tổ chức tang lễ trọn gói tại nhà riêng, chung cư, các nhà tang lễ với nhiều mức giá phù hợp. Dịch Vụ Tang Lễ trọn gói Sinh Phúc Thọ là đơn vị cung cấp dịch vụ mai táng trọn gói hàng đầu với mức giá cả hợp lý chi tiết minh bạch tại Tp.HCM. Trại hòm Sinh Phúc Thọ Quận Quận bình thạnh cung cấp dịch vụ mai táng giá rẻ trọn gói gồm các dịch vụ hỏa táng trọn gói và an táng trọn gói. Chúng tôi còn hỗ trợ liên hệ nhà tang lễ và lò thiêu trên khăp các quận huyện tại Thành Phố Hồ Chí Minh',
    openGraph: {
        description: 'Mai táng trọn gói Tang Lễ Sinh Phúc Thọ Quận Quận bình thạnh chuyên cung cấp dịch vụ mai táng trọn gói và tổ chức tang lễ trọn gói tại nhà riêng, chung cư, các nhà tang lễ với nhiều mức giá phù hợp. Dịch Vụ Tang Lễ trọn gói Sinh Phúc Thọ là đơn vị cung cấp dịch vụ mai táng trọn gói hàng đầu với mức giá cả hợp lý chi tiết minh bạch tại Tp.HCM. Trại hòm Sinh Phúc Thọ Quận Quận bình thạnh cung cấp dịch vụ mai táng giá rẻ trọn gói gồm các dịch vụ hỏa táng trọn gói và an táng trọn gói. Chúng tôi còn hỗ trợ liên hệ nhà tang lễ và lò thiêu trên khăp các quận huyện tại Thành Phố Hồ Chí Minh',
        locale: 'vi_VN',
        type: 'website',
        url: 'http://sinhphuctho.com/mai-tang-tron-goi/mai-tang-tron-goi-quan-1.html',
        siteName: 'Dịch Vụ Tang Lễ Trọn Gói - Mai táng trọn gói trại hòm cơ sở mai táng Sinh Phúc Thọ TpHCM',
        title: 'Trại hòm quận Quận Quận bình thạnh gần đây nhất - Mai táng trọn gói giá rẻ TPHCM',
        images: ['https://sinhphuctho.com/logo.svg'],
    },
}

export default function PostPage() {
    return <Post
        title='Trại hòm quận quận Bình Thạnh trọn gói giá rẻ - Mai táng trọn gói quận quận Bình Thạnh TPHCM'
        publishDate={'11/09/2024'}
        content={<Content />}
        tags={['trại hòm', 'quận quận bình thạnh', 'trại hòm quận quận bình thạnh', 'trại hòm quận quận quận bình thạnh', 'trại hòm quận quận quận bình thạnh gần đây nhất', 'trại hòm quận quận quận bình thạnh gần đây', 'mai táng trọn gói']}
    />
}