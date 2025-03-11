import styles from 'styles/components/Message.module.css';

export const Message = (props: any) => {
    return <section id="sms" className="text-center bg-black">
        <div className="container">
            <div className="flex justify-between sm:justify-center sm:gap-36">
                <div className="relative ant-col-6 ant-col-md-6 ant-col-sm-6">
                    <img
                        src="/images/sms-poster.webp"
                        alt="..."
                        className={ styles.model }
                    />
                </div>

                <div className="ant-col ant-col-sm-16 ant-col-md-12">
                    <div className={ `${ styles['sms-wrap'] } py-5 flex flex-col justify-center items-center` }>
                        <p className="mb-4 text-red-600 sm:text-black sm:text-lg">
                            Send your message here
                        </p>

                        <h3 className={ `sm:font-black robo_head mb-4 text-red-600 sm:text-black sm:mb-6 lg:mb-8 ${ styles['text-shadow'] }` }>
                            SPEAK TO US!
                        </h3>

                        <a className="flex items-center justify-center rounded-full bg-red-600 sm:bg-black"
                           href="sms:+1 (904) 999 7371">
                            <svg className={ `block ${ styles['icon-sms-svg'] }` }
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 23.74 18.24">
                                <path className="cls-1"
                                      d="M692.09,375a5.92,5.92,0,0,1,1.18.13,2.12,2.12,0,0,1,1.46,1.23.79.79,0,0,1-.34,1.19l-2,1.25c-2.89,1.84-5.79,3.66-8.67,5.52a1.17,1.17,0,0,1-1.46,0c-3.51-2.25-7-4.48-10.56-6.72l-.22-.14a.61.61,0,0,1-.29-.82,2.19,2.19,0,0,1,2.13-1.6C673.75,375,689.06,375,692.09,375Z"
                                      transform="translate(-671.13 -375)"
                                />
                                <path className="cls-1"
                                      d="M673.76,393.23a4,4,0,0,1-1.14-.15,2.05,2.05,0,0,1-1.44-1.48.59.59,0,0,1,.3-.79l8.5-5.34a.84.84,0,0,1,.91,0c.54.32,1.07.65,1.59,1a.74.74,0,0,0,1,0c.56-.35,1.12-.7,1.67-1.06a.71.71,0,0,1,.84,0l2.72,1.74,5.59,3.53c.57.35.67.65.38,1.26a2.22,2.22,0,0,1-1.92,1.26,4.56,4.56,0,0,1-.64,0Z"
                                      transform="translate(-671.13 -375)"
                                />
                                <path className="cls-1" d="M671.17,389v-9.76l7.67,4.88Z"
                                      transform="translate(-671.13 -375)"
                                />
                                <path className="cls-1" d="M687.17,384.13l7.66-4.88V389Z"
                                      transform="translate(-671.13 -375)"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};
