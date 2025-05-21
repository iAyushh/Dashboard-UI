import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Tab from "@/components/layout/Tab";
import DataTable from "@/components/layout/DataTable";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div>
          <SidebarTrigger className="ml-[6px] absolute top-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </div>
        <div className="flex flex-col items-center justify-center p-6">
          <h1 className="text-3xl font-bold mb-6">Articles</h1>
          <Tab />
          <DataTable />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
