
import PhotoGallery from "@/components/ImageGallery/ImageGallery";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Box } from "@mui/material";
import { Metadata } from "next";
import photos from '@/data/hinh-anh-thuc-te.json'
export const metadata: Metadata = {
    title: 'Hình ảnh thực tế'
}

export default function Page() {
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
                <PageTitle text="Hình ảnh thực tế" />
                <Box mt={10}>
                    <PhotoGallery photos={photos as any}/>
                </Box>
            </Box>

        </Box>
    )
}