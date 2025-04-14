'use client';
import {Layout, Menu} from 'antd';
import {AccountBookOutlined, HomeOutlined,} from '@ant-design/icons';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Loading from "@/app/loading";
import {Suspense} from "react";

const {Sider, Content} = Layout;

const menuItems = [
    {
        key: '/',
        icon: <HomeOutlined/>,
        label: <Link href="/">Home</Link>,
    },
    {
        key: '/consumer',
        icon: <AccountBookOutlined/>,
        label: <Link href="/consumer">Consumer</Link>,
    },
];

export default function ConsumerSidebarLayout({children}: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible>
                <div className="text-white text-center text-lg font-semibold my-4">
                    Demo API Consumer
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[pathname.startsWith('/person') ? '/person' : pathname]}
                    items={menuItems}
                />
            </Sider>
            <Layout>
                <Content style={{padding: '24px'}}>
                    <Suspense fallback={Loading()}>{children}</Suspense></Content>
            </Layout>
        </Layout>
    );
}
