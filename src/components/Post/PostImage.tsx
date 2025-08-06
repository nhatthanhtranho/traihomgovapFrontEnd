import { Box } from "@mui/material"
import { ReactNode } from "react"

interface PropTypes {
    url: string,
    alt: ReactNode
    title: string
}

const PostImage: React.FC<PropTypes> = (props) => {
    const { title, alt, url } = props
    return (
        <Box
            display={'flex'}
            mt={2}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
        >
            <Box component={'figure'}
                width={'100%'}
            >
                <Box component={'img'}
                    loading='lazy'
                    width={'100%'}
                    src={url}
                    alt={`Cơ sở mai táng trại hòm Sinh Phúc Thọ Gò Vấp | mai táng trọn gói giá rẻ | hỏa táng trọn gói giá rẻ | ${alt}`}
                />
                <em>
                    <figcaption style={{ marginTop: '8px', textAlign: "center", fontSize: "14px", fontWeight: 500 }}>
                        {title}
                    </figcaption>
                </em>
            </Box>
        </Box>
    )
}

export default PostImage