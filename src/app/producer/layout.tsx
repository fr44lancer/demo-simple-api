import ProducerSidebarLayout from "@/components/shared/Sidebars/ProducerSidebar";



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ProducerSidebarLayout>{children}</ProducerSidebarLayout>
        </body>
        </html>
    );
}
