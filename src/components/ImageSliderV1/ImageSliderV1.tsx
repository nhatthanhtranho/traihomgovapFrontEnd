'use client'

import PageTitle from "@/components/PageTitle/PageTitle";
import React, { useMemo } from "react";
import Slider from "react-slick";
import { Image } from 'antd'
import { Box, Typography } from "@mui/material";
import { Icon } from '@iconify/react';
import Link from "next/link";
import { formatLink } from "@/utils/formatLink";

interface PropTypes {
    images: string[],
    title?: string,
    displayTitle?: boolean,
    allButton?: boolean
}

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <Box
            marginRight={{
                xs: '-30px'
            }}
            onClick={onClick}
            className="absolute top-0 right-0 translate-y-32"
        >
            <Icon icon={'icons8:right-round'} color="#837500" width={35} height={35} />
        </Box>
    );
}

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <Box
            marginLeft={{
                xs: '-30px'
            }}
            onClick={onClick}
            className="absolute top-0 left-0 translate-y-32"
        >
            <Icon icon={'icons8:left-round'} color="#837500" width={35} height={35} />
        </Box>
    )
}


const ImageSliderV1: React.FC<PropTypes> = (props) => {
    const { images, title, displayTitle, allButton } = props
    const renderImages = useMemo(() => {
        return images.map((item, index) => {
            return (
                <Box className="w-[450px] h-[300px] px-2" key={index}>
                    <Image style={{ objectFit: "cover" }} width={'100%'} height={'100%'} src={item} alt={`co so mai tang trai hom go vap mai mai tang gia re hoa tang gia re go vap mai tang tron goi gia re tphcm ${index}`} />
                </Box>
            )
        })
    }, [images])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <Box display={'flex'}
            flexDirection={'column'}
            mt={{
                xs: 5,
                md: 1
            }}
            width={'100%'}
        >
            {displayTitle && <PageTitle text={title || ''} />}

            <Box px={{
                xs: 4,
            }} mt={displayTitle ? 5 : 0}>
                <Image.PreviewGroup>
                    <Slider {...settings}>
                        {renderImages}
                    </Slider>
                </Image.PreviewGroup>
            </Box>
            {
                allButton &&
                <Link href={formatLink('/hinh-anh-thuc-te')}>
                    <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} mt={5}>
                        <Box px={2} py={1} className='rounded-full custom-box-shadow-1 w-fit' mt={2} bgcolor={'#837500'}>
                            <Typography variant="body1" fontWeight={700} color={'white'}> Xem tất cả</Typography>
                        </Box>
                    </Box>
                </Link>
            }

        </Box>

    );
}

export default ImageSliderV1;