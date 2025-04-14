
'use client';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    FileTextOutlined,
    HomeOutlined,
    IdcardOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Sider, Content } = Layout;

const menuItems = [
    {
        key: '/person',
        icon: <UserOutlined />,
        label: <Link href="/producer/person">Persons</Link>,
    },
    {
        key: '/address',
        icon: <HomeOutlined />,
        label: <Link href="/producer/address">Addresses</Link>,
    },
    {
        key: '/document',
        icon: <FileTextOutlined />,
        label: <Link href="/producer/document">Documents</Link>,
    },
];

export default function ProducerSidebarLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible>
                <div className="text-white text-center text-lg font-semibold my-4">
                    Demo API Producer System
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[pathname.startsWith('/person') ? '/person' : pathname]}
                    items={menuItems}
                />
            </Sider>
            <Layout>
                <Content style={{ padding: '24px' }}>{children}</Content>
            </Layout>
        </Layout>
    );
}
