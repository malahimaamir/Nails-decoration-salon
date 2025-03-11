import { ISlickProps, Slick } from 'lib';
import { Settings } from 'typings';
import { ISlickData } from 'types';
import { PageHeader } from 'shared';
import staticData from 'static/assets/data.json';

export const Brand = (props: any) => {
    const title = 'What We Use';
    const data: ISlickData[] = staticData.BRANDS;
    const settings: Settings = {
        slidesToShow: 5,
        slidesToScroll: 5,
        className: 'lg:mx-40 md:mx-28',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
        lightBox: false
    };
    const slickSettings: ISlickProps = {
        data, settings,
        elementClassName: 'brand-logo mx-auto object-contain bg-white',
        containerClassName: 'brand-logo'
    };

    return <section id="brands" className="py-5 sm:py-8 lg:py-10 text-white bg-black">
        <div className="container">
            <PageHeader text={ title } className="text-red-600"/>

            <Slick { ...slickSettings }/>
        </div>
    </section>
};
