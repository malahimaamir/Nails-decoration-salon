import { Collapse } from 'antd';
import { IFaq } from 'types';
import { PageHeader } from 'shared';
import { Panel } from 'rc-collapse';
import { SendOutlined } from '@ant-design/icons';
import staticData from 'static/assets/data.json';

export const FAQ = (props: any) => {
    const title = 'FAQs';
    const faqs: IFaq[] = staticData.FAQS;

    const item = faqs.map((faq, index) => {
        const header = <span className="text-white">{ faq.question }</span>;

        return <Panel key={ index + 1 } header={ header } style={ { color: 'white' } }>
            <p className="text-white font-thin lg:pl-8 lg:text-base">{ faq.answer }</p>
        </Panel>
    });

    return <section id="faq" className="py-5 sm:py-8 lg:py-10">
        <div className="container">
            <PageHeader text={ title }/>

            <Collapse
                className="font-roboto lg:text-lg lg:mx-24"
                expandIcon={ (panelProps) =>
                    <SendOutlined style={ { fontSize: '16px' } }/>
                }
                ghost
            >
                { item }
            </Collapse>
        </div>
    </section>
};
