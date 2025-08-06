import { Box, Chip, Typography } from "@mui/material"
import { ReactNode } from "react"
import Introduction from "../Introduction/Introduction"

interface PropTypes {
    title: string,
    publishDate: string,
    content: ReactNode,
    tags?: string[]
}

const Post: React.FC<PropTypes> = (props) => {
    const { title, content, publishDate, tags } = props
    return (
        <Box
            minHeight={'100vh'}
            bgcolor={'white'}
            width={{
                lg: '950px',
            }}
        >
            <Chip className='font-bold !text-white' label="Bài viết" sx={{ backgroundColor: '#837500' }} />
            <Typography variant='h5' fontWeight={700} mt={2} color={'#837500'}>
                {title}
            </Typography>
            <Typography mb={4} mt={1} variant='body2'>{publishDate}</Typography>
            {content}

            <Introduction tags={tags}/>
        </Box>
    )
}


export default Post