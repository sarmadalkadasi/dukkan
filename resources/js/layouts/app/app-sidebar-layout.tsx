import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
// import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell variant="sidebar">
            {/* <AppSidebar /> */}
            <AppContent variant="sidebar">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                <div className="flex h-full flex-col items-center">
                    <div className="flex w-full max-w-5xl flex-1 flex-col gap-4 rounded-xl">{children}</div>
                </div>
            </AppContent>
        </AppShell>
    );
}
