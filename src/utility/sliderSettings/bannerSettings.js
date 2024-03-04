export const banneSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            banneSettings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            banneSettings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            banneSettings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};