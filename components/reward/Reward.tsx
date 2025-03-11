import { Divider, List } from 'antd';
import { PageHeader } from 'shared';
import staticData from 'static/assets/data.json';

interface IReward {
    title: string;
    description: string | string[];
}

export const Reward = (props: any) => {
    const title = 'Rewards';
    const data: IReward[] = staticData.REWARDS;

    const itemTitle = () => (text: string) => <div className="font-lobster text-white text-2xl">
        { text }
    </div>;

    const itemDesc = () => (text: string | string[]) => {
        if (Array.isArray(text)) {
            const li = text.map((ele, index) =>
                <li key={ index + 1 } className="text-white list-disc ml-5 pt-2">
                    { ele }
                </li>
            );

            return <ul className="text-base pt-4 border-t">{ li }</ul>
        }

        return <div className="text-white text-base border-t pt-4">{ text }</div>;
    };

    const listItem = (item: IReward) => <List.Item>
        <List.Item.Meta
            className=""
            data-aos="fade-up"
            data-aos-once={ true }
            title={ itemTitle()(item.title) }
            description={ itemDesc()(item.description) }
        >
        </List.Item.Meta>
    </List.Item>;

    return <section id="reward" className="py-5 sm:py-8 lg:py-10">
        <div className="container">
            <Divider style={ { borderColor: 'black' } }>
                <PageHeader text={ title } className="mb-4"/>
            </Divider>

            <List
                size="large"
                itemLayout="horizontal"
                dataSource={ data }
                split={ false }
                renderItem={ listItem }
            />
        </div>
    </section>;
};
