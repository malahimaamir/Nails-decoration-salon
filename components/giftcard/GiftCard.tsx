import { GIFT_CARD_LINK } from 'utils';
import styles from 'styles/components/GiftCard.module.css';

export const GiftCard = (props: any) => {
    return <section id="gift_card" className="py-5 sm:py-8 lg:py-10 text-white text-center bg-black">
        <div className="container">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:gap-14">
                <div className="ant-col-sm">
                    <h2 className="mb-2 sm:mb-3 lg:mb-4 font-bold text-red-600 robo_head">
                        GIFT CARD
                    </h2>

                    <div
                        className={ `${ styles.desc } content-text leading-6 lg:border-b lg:border-red-600 md:mb-6 pb-4 mx-auto text-red-600` }>
                        <p className="mb-2">
                            This season, gift them moments of luxury and relaxation with our gift cards!
                        </p>
                    </div>

                    <a className={ `p-3.5 text-black bg-red-600 ${ styles['buy-gift-btn'] }` }
                       href={ GIFT_CARD_LINK }
                       target="_blank"
                       rel="noreferrer">
                        Buy now
                    </a>
                </div>

                <div className="ant-col-sm mb-6 sm:mb-0">
                    <a href={ GIFT_CARD_LINK }
                       target="_blank"
                       rel="noreferrer"
                    >
                        <img
                            src="/images/gift-card.jpeg"
                            alt="Special Gift Card"
                            className="border-4"
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
};
