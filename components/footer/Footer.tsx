import Image from 'next/image';
import {
    ClockCircleOutlined,
    FacebookFilled,
    GooglePlusSquareFilled,
    InstagramFilled,
    LockOutlined,
    ShopOutlined
} from '@ant-design/icons';
import { FB_LINK, GOOGLE_LINK, INSTAGRAM_LINK, YELP_LINK } from 'utils';
import moment from 'moment';

export const Footer = (props: any) => {
    const weekDays = [
        { date: 'Monday', open: 'Closed', abbr: 'Mon' },
        { date: 'Tuesday', open: '09:30 - 19:30', abbr: 'Tue' },
        { date: 'Wednesday', open: '09:30 - 19:30', abbr: 'Wed' },
        { date: 'Thursday', open: '09:30 - 19:30', abbr: 'Thu' },
        { date: 'Friday', open: '09:30 - 19:30', abbr: 'Fri' },
        { date: 'Saturday', open: '09:30 - 19:30', abbr: 'Sat' },
        { date: 'Sunday', open: '12:00 - 18:00', abbr: 'Sun' },
    ];
    const today = moment().format('ddd');
    const item = weekDays.map(({ date, open, abbr }, index) => {
        return <div
            key={ index + 1 }
            className={ `flex justify-between p-2 mb-2 ${ today === abbr ? 'border border-red-600' : '' }` }
        >
            <span>{ date }</span>
            <span>{ open }</span>
        </div>
    });

    return <footer id="contact" className="bg-black">
        <div className="vnp-bg-primary text-white pt-6 pb-6">
            <div className="container">
                <img
                    width="120"
                    src="/images/nails-kute-logo.png"
                    alt="Nails Kute Logo"
                    className="mx-auto logo-footer mb-6"
                />

                {/*Social Icons*/ }
                <div id="social-links" className="flex justify-center gap-14 mb-10">
                    <a href={ FB_LINK }
                       target="_blank"
                       rel="noreferrer"
                       data-aos="fade-right"
                       data-aos-delay="300"
                       data-aos-once={ true }
                    >
                        <FacebookFilled className="text-4xl text-red-600"/>
                    </a>

                    <a href={ INSTAGRAM_LINK }
                       target="_blank"
                       rel="noreferrer"
                       data-aos="fade-right"
                       data-aos-delay="200"
                       data-aos-once={ true }
                    >
                        <InstagramFilled className="text-4xl text-red-600"/>
                    </a>

                    <a href={ YELP_LINK }
                       target="_blank"
                       rel="noreferrer"
                       className="mt-1"
                       data-aos="fade-right"
                       data-aos-delay="100"
                       data-aos-once={ true }
                    >
                        <Image width={ 36 } height={ 36 } src="/icons/yelp-logo.svg" alt="Yelp logo"/>
                    </a>

                    <a href={ GOOGLE_LINK }
                       target="_blank"
                       rel="noreferrer"
                       data-aos="fade-right"
                       data-aos-once={ true }
                    >
                        <GooglePlusSquareFilled className="text-4xl text-red-600"/>
                    </a>
                </div>

                {/*Contact Info*/ }
                <div className="sm:grid grid-cols-3 gap-8 text-red-600">
                    {/*Business Info*/ }
                    <div
                        className="ant-col-md"
                        data-aos="fade-right"
                        data-aos-once={ true }
                    >
                        <h5 className="flex items-end gap-3 text-lg text-red-600 font-medium mb-5">
                            <ShopOutlined className="pb-1"/>
                            <span>Business Info</span>
                        </h5>

                        <p className="flex mb-4">
                            <span>+1 (904) 375 2061</span>
                        </p>

                        <p className="flex">
                            <a className="hover:text-white"
                               href="https://g.page/nailskutespa32003?share"
                               target="_blank"
                               rel="noreferrer"
                            >
                                4685 US-17 Suite 1, Fleming Island, FL 32003
                            </a>
                        </p>

                        <div className="py-8 block md:hidden">
                            <div className="sep"/>
                        </div>
                    </div>

                    {/*Business Hours*/ }
                    <div
                        className="ant-col-md sm:-ml-10 sm:mr-10 sm:mx-5"
                        data-aos="fade-up"
                        data-aos-once={ true }
                    >
                        <h5 className="flex items-end gap-3 text-lg text-red-600 font-medium mb-5">
                            <ClockCircleOutlined className="pb-1"/>
                            <span>Business Hours</span>
                        </h5>

                        { item }

                        <div className="py-8 block md:hidden">
                            <div className="sep"/>
                        </div>
                    </div>

                    {/*Holidays*/ }
                    <div
                        className="ant-col-md"
                        data-aos="fade-left"
                        data-aos-once={ true }
                    >
                        <h5 className="flex items-end gap-3 text-lg text-red-600 font-medium mb-5">
                            <LockOutlined className="pb-1"/>
                            <span>Closing Holidays</span>
                        </h5>

                        <div className="flex flex-wrap">
                            <p className="mb-4 w-1/2">
                                New Years </p>
                            <p className="mb-4 w-1/2">
                                Thanksgiving </p>
                            <p className="mb-4 w-1/2">
                                Easter </p>
                            <p className="mb-4 w-1/2">
                                Christmas </p>
                            <p className="mb-4 w-1/2">
                                Memorial Day </p>
                            <p className="mb-4 w-1/2">
                                Fourth of July </p>
                            <p className="mb-4 w-1/2">
                                Labor Day </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="text-center text-red-600 py-3 text-white bg-white">
            Copyright © 2021 <a href="https://vnailpro.com" target="_blank" rel="noreferrer">VNailPro Inc</a>. All Right
            Reserved
        </div>
    </footer>;
};
