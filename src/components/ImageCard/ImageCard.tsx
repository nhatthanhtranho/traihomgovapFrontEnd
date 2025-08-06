'use client'
import { Box, Tooltip, Typography } from "@mui/material"
interface PropTypes {
    title: string,
    imageURL: string
}

const ImageCard: React.FC<PropTypes> = (props) => {
    const { title, imageURL } = props
    return (
        <Box sx={{ cursor: 'pointer' }}>
            <Box
                display={{
                    xs: 'flex'
                }} flexDirection={'column'}  alignItems={'center'} className='shadow-2xl'
                pl={.5}
            >
                <Box width={'100%'}
                    height={'200px'}
                    borderRadius={1}
                    display={'contents'}
                    position={'relative'}
                >
                    <Box component={'img'}
                        loading='lazy'
                        borderRadius={1}
                        width={'100%'}
                        height={'200px'}
                        src={imageURL}
                        sx={{ objectFit: 'cover' }}
                        alt="Sinh Phúc Thọ | hình ảnh"
                    />
                </Box>
                <Box sx={{ overflow: 'hidden' }} py={2} width={'100%'} textAlign={'center'}>
                    <Tooltip title={title} >
                        <Typography variant='subtitle1' ml={1} fontWeight={550}
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: '4',
                                WebkitBoxOrient: 'vertical',
                            }}
                        >
                            {title}
                        </Typography>
                    </Tooltip>
                </Box>
            </Box>
        </Box >
    )
}
export default ImageCard