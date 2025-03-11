import { Pagination, randomNumber } from 'utils';
import { AnimationType, IComment, IPagination } from 'types';
import { PageHeader, ShowMore } from 'shared';
import { Avatar, Comment, Rate } from 'antd';
import staticData from 'static/assets/data.json';

export const Review = (props: any) => {
    const title = 'Reviews';
    const data: IPagination<IComment>[] = staticData.COMMENTS;

    const { loadMore, last, pages } = Pagination(data);
    const item = data
        .filter(({ page }) => pages.includes(page)) // Filter only on showing pages
        .flatMap(({ data }) => data.map((comment, index) => {
            const fadeDir: AnimationType = (index % 2) === 0 ? 'fade-down-right' : 'fade-down-left';
            const fadeOffset = (index % 2) === 0 ? '200' : '400';

            return <Comment
                key={ randomNumber(1, 9999999999) }
                className="sm:m-10 border-b border-black"
                data-aos={ fadeDir }
                data-aos-offset={ fadeOffset }
                data-aos-once={ true }
                avatar={ <Avatar
                    src={ comment.avatar }
                    alt={ comment.name }
                    className="w-10 h-10 sm:w-20 sm:h-20"
                />
                }
                author={ <div className="flex justify-between mb-4">
                    <a className="flex flex-col text-white text-lg">
                        <span>{ comment.name }</span>
                        <span className="font-thin">{ comment.social }</span>
                    </a>
                    <Rate className="text-white text-sm sm:text-lg" value={ 5 }/>
                </div>
                }
                content={ <p className="text-white text-lg font-light italic">{ comment.content }</p> }
            />
        }));

    return <section id="review" className="py-5 sm:py-8 lg:py-10">
        <div className="container">
            <PageHeader text={ title }/>

            <div className="sm:grid grid-cols-2 gap-4 mb-4">
                { item }
            </div>

            <ShowMore key="load-more-comment" loadMore={ loadMore } last={ last }/>
        </div>
    </section>;
};

//     <div className="order-0 col-md-6 mb-2 mb-lg-4 px-lg-8 hide-on-sm hide-on-all">
//         <div className="entry h-100 pb-1 pb-lg-3">
//             <div className="row justify-content-between align-items-center mb-4 mb-lg-6">
//                 <div className="col">
//                     <div className="form-row align-items-center">
//                         <div className="col-auto">
//                             <img width="80" height="80"
//                                  src="https://vnailweb.com/wp-content/uploads/2021/04/Bonnie-Caballero--300x300.jpeg"
//                                  alt="..." className="avatar rounded-circle vnp-border-secondary"/>
//                         </div>
//                         <div className="col lh-13">
//                             <p className="font-medium font-11x mb-1">Bonnie Caballero</p>
//                             <p className="font-light">Facebook</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-auto">
//                     <div className="d-flex rating vnp-color-secondary">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="content-text lh-16 font-italic">
//                 <p>Nails Kute and Spa was able accommodate my sister and I last minute on Tuesday without an
//                     appointment. Their spa was very bright and clean and pretty inside. They have a large
//                     selection of trendy nail colors that I can’t wait to try out next. Both nail technicians
//                     that I saw were detail oriented and made sure my nails were perfect despite being open
//                     past closing time.</p>
//             </div>
//         </div>
//     </div>
//     <div className="order-0 col-md-6 mb-2 mb-lg-4 px-lg-8 hide-on-sm hide-on-all">
//         <div className="entry h-100 pb-1 pb-lg-3">
//             <div className="row justify-content-between align-items-center mb-4 mb-lg-6">
//                 <div className="col">
//                     <div className="form-row align-items-center">
//                         <div className="col-auto">
//                             <img width="80" height="80"
//                                  src="https://vnailweb.com/wp-content/uploads/2021/04/Selena-L..jpeg.webp"
//                                  alt="..." className="avatar rounded-circle vnp-border-secondary"/>
//                         </div>
//                         <div className="col lh-13">
//                             <p className="font-medium font-11x mb-1">Selena L.</p>
//                             <p className="font-light">Yelp</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-auto">
//                     <div className="d-flex rating vnp-color-secondary">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="content-text lh-16 font-italic">
//                 <p>I was so happy to find a super clean &amp; efficient Spa! I took my girlfriend as a
//                     “pampering day” surprise &amp; got my feet done as well. Now every since then I go once
//                     a month without her most of the time . This place is very welcoming. If you make an
//                     appointment at a time ahead there, should be no issue with them sitting you down at the
//                     time you requested. Jenny is my main, she is the bomb to me! My feet most certainly
//                     aren’t the prettiest but she is always sure to get them to the best they can be. The
//                     equipment they use (their chairs) are great. But my favorite aspect of the salon is how
//                     clean they are in everything they do. Highly recommend but I would say this place is
//                     starting to get a lot of buzz so make your appointments!</p>
//                 <p>Pros: Clean, appointment service, state of the art equipment, friendly service.</p>
//                 <p>Cons: Over scheduling is possible. During peak hours even if you show up early you might
//                     have to wait some time for your service.</p>
//             </div>
//         </div>
//     </div>
// </div>
