import React, { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/layout/DataTable";
import { articles } from "@/data/articles";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("generated");

  const filteredArticles = articles.filter(
    (article) => article.category === activeTab
  );

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div>
          <SidebarTrigger className="ml-[6px] absolute top-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </div>

        <div className="flex flex-col items-center justify-center p-6 w-full">
          <h1 className="text-3xl font-bold mb-6 ">Articles</h1>

          {/*Tab navigation and filtered content */}
          <Tabs
            defaultValue="generated"
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger
                value="generated"
                className="font-semibold hover:bg-blue-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Generated
              </TabsTrigger>
              <TabsTrigger
                value="published"
                className="font-semibold hover:bg-blue-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Published
              </TabsTrigger>
              <TabsTrigger
                value="scheduled"
                className="font-semibold hover:bg-blue-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Scheduled
              </TabsTrigger>
              <TabsTrigger
                value="archived"
                className="font-semibold hover:bg-blue-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Archived
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab}>
              <DataTable data={filteredArticles} />
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
