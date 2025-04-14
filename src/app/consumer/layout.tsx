import ConsumerSidebarLayout from "@/components/shared/Sidebars/ConsumerSidebar";


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ConsumerSidebarLayout>{children}</ConsumerSidebarLayout>
        </body>
        </html>
    );
}
