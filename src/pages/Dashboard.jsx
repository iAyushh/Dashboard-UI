import React, { useState, useEffect } from "react";
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
import TableSkeleton from "@/components/layout/TableSkeleton";
import DarkModeToggle from "@/components/layout/DarkModeToggle";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("generated");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      const filtered = articles.filter(
        (article) => article.category === activeTab
      );
      setFilteredArticles(filtered);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="w-full min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-100">
          <div className="flex justify-between items-center w-full px-4 py-2">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="ml-[6px]" />
              <Separator orientation="vertical" className="h-6" />
            </div>

            <DarkModeToggle />
          </div>

          <div className="flex flex-col items-center justify-center p-6 w-full">
            <h1 className="text-3xl font-bold mb-6">Articles</h1>

            <Tabs
              defaultValue="generated"
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4 mb-4">
                {["generated", "published", "scheduled", "archived"].map(
                  (tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="font-semibold transition-colors 
  hover:bg-blue-100 dark:hover:bg-gray-600 
  data-[state=active]:bg-blue-600 
  data-[state=active]:text-white"
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </TabsTrigger>
                  )
                )}
              </TabsList>

              <TabsContent value={activeTab}>
                {loading ? (
                  <TableSkeleton />
                ) : (
                  <DataTable data={filteredArticles} />
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
