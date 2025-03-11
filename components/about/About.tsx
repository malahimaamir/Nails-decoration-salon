import { PageHeader } from 'shared/components';
import styles from 'styles/components/About.module.css';

export const About = (props: any) => {
    const title = 'A Salon with a Touch of Luxury';
    const content = `
        Nails Kute & Spa memorable spa time in Fleming Island, Florida. Our peaceful and
        welcoming setting makes sure that you can enjoy relaxing moments while getting your
        favorite nail services done. Our highly-qualified nail technicians will ensure that
        all the services are done in the most perfect and caring manner so that you are
        completely satisfied with the experience. From pedicures to manicures and nail
        extensions, we do all the services according to your specifications and
        requirements. Customer satisfaction is our ultimate priority as we promise to never
        let anyone down. Come and experience high-quality nail services with Nails
        Kute & Spa. Hurry up! Make your appointment now.
    `;

    return <section id="about" className="py-5 sm:py-8 lg:py-10 bg-red">
        <div className="container">
            <PageHeader text={ title }/>

            <div className="sm:flex items-center justify-center">
                <div
                    className={ styles['flex-item'] }
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-once={ true }
                >
                    <img src="/images/about-nails-kute.jpeg" alt="About Nails Kute & Spa"/>
                </div>

                <div
                    className={ `${ styles['flex-item'] } sm:ml-8` }
                    data-aos="fade-left"
                    data-aos-once={ true }
                >
                    <h3 className="text-white text-center text-4xl font-lobster mx-auto mb-3 md:mb-6">
                        About Us
                    </h3>

                    <div className="text-white mb-2 lg:leading-7">
                        <p className="">{ content }</p>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};
