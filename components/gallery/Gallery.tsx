import { GridGallery } from 'lib';
import { Pagination } from 'utils';
import { IPagination } from 'types';
import { PageHeader, ShowMore } from 'shared';
import staticData from 'static/assets/data.json';

export const Gallery = (props: any) => {
    const title = 'Check Out Our Previous Work';
    const data: IPagination[] = staticData.PREVIOUS_WORKS;

    const { pages, loadMore, last } = Pagination(data);

    return <section id="gallery" className="py-5 sm:py-8 lg:py-10">
        <div className="container">
            <PageHeader text={ title }/>

            <div className="sm:mx-12 sm:mx-24 mb-4">
                <GridGallery data={ data } pages={ pages }/>
            </div>

            <ShowMore key="load-more-work" loadMore={ loadMore } last={ last }/>
        </div>
    </section>
};
