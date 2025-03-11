import { Slick } from 'lib';
import { ISlickData } from 'types';
import { PageHeader } from 'shared';
import staticData from 'static/assets/data.json';

export const Menu = (props: any) => {
    const title = 'Salon Menu';
    const items: ISlickData[] = staticData.SALON_MENU_IMAGES;

    return <section id="services" className="py-5 sm:py-8 lg:py-10 text-white text-center bg-black">
        <div className="container">
            <PageHeader text={ title } className="text-red-600"/>

            <Slick data={ items }/>
        </div>
    </section>;
};
