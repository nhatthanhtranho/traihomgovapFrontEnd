'use client'
import PageTitle from "@/components/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import { Icon } from '@iconify/react';
import PostCard from "@/components/PostCard/PostCard";
import { formatDateString } from "@/utils/formatDateString";
import Slider from "@ant-design/react-slick"
import './style.css'
import data from './data.json'
function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <Box
            marginRight={{ xs: '-30px' }}
            onClick={onClick}
            className="absolute top-0 right-0 translate-y-32 cursor-pointer"
        >
            <Icon icon="icons8:right-round" color="#837500" width={35} height={35} />
        </Box>
    );
}

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <Box
            marginLeft={{ xs: '-30px' }}
            onClick={onClick}
            className="absolute top-0 left-0 translate-y-32 cursor-pointer"
        >
            <Icon icon="icons8:left-round" color="#837500" width={35} height={35} />
        </Box>
    );
}

export default function NhaTangLeSection() {   
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '0',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, dots: true } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" mt={10}>
            <Box width={{ lg: '1320px', xs: '100%' }}>
                <PageTitle text="Nhà Tang Lễ" />
                <Box>
                    {data.length > 0 ? (
                        <Slider {...settings}>
                            {data.map((article) => (
                                <div key={article.slug} className="px-3">
                                    <PostCard
                                        variant="right-card"
                                        key={article.slug}
                                        url={`/cam-nang/${article.slug}`}
                                        title={article.title}
                                        publishDate={formatDateString(article.createdAt)}
                                        bannerURL={article.thumbnail}
                                        textCenter
                                    />
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <p className="text-center text-gray-500">No articles available.</p>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
