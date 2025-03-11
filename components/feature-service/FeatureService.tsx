import { PageHeader } from 'shared';
import { IFeatureProduct } from 'types';
import { GridMenu } from './components';
import staticData from 'static/assets/data.json';

export const FeatureService = (props: any) => {
    const title = 'Most Wanted Services';
    const products: IFeatureProduct[] = staticData.FEATURED_PRODUCTS;

    return <section id="featured_products" className="py-5 sm:py-8 lg:py-10 bg-red">
        <div className="container">
            <PageHeader text={ title }/>

            <GridMenu data={ products } containerClassName="lg:mx-16"/>
        </div>
    </section>
};
