import React from 'react';
import Image from 'next/image';
import { Layout, Menu } from 'antd';
import styles from 'styles/components/NavBar.module.css';
import staticData from 'static/assets/data.json';
import { MenuOutlined } from '@ant-design/icons';

const { Sider, Header: AntdHeader } = Layout;

export const NavBar = (props: any) => {
    const navItems: string[] = staticData.NAV_BAR_ITEMS;

    const menuItem = navItems.map((item, index) => {
        const key = index + 1;
        const href = `#${ item.toLowerCase().replace(' ', '_') }`;

        return <Menu.Item key={ key }>
            <a href={ href } className={ `font-lobster text-base ${ styles['text-red'] }` }>
                { item }
            </a>
        </Menu.Item>;
    });

    return <Layout className="bg-current sticky top-0 z-10">
        {/*Responsive for mobile*/}
        <Sider
            breakpoint="sm"
            className="sm:hidden"
        >
            {/*Overflown menu*/}
            <Menu
                className="mx-2 my-1.5"
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={ ['1'] }
                overflowedIndicator={ <MenuOutlined className={ `text-red-600 ${ styles['text-2xl-imp'] }` }/> }
            >
                { menuItem }
            </Menu>
        </Sider>

        <Layout>
            <AntdHeader className="flex justify-around">
                {/*App logo*/}
                <div className={ `${ styles.logo }` }>
                    <a href="https://vnailweb.com/nail-salon-near-me-nails-kute-spa-fleming-island-fl-32003/"
                       target="_blank"
                       rel="noreferrer"
                    >
                        <Image
                            src="/images/nails-kute-logo.png"
                            alt="App logo"
                            width={ 45 }
                            height={ 45 }
                        />
                    </a>
                </div>

                {/*Horizontal menu*/}
                <Menu
                    className="hidden md:block md:float-right md:pr-5"
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={ ['1'] }
                >
                    { menuItem }
                </Menu>
            </AntdHeader>
        </Layout>
    </Layout>;
};
