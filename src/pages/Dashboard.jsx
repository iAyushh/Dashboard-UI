import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>

      <Tabs defaultValue="generated" className="w-[50vw]">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="generated">Generated Articles</TabsTrigger>
          <TabsTrigger value="published">Published Articles</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Articles</TabsTrigger>
          <TabsTrigger value="archived">Archived Articles</TabsTrigger>
        </TabsList>

        <TabsContent value="generated" className="flex justify-center">
          <Input
            placeholder="Search Title or Keyword..."
            className="mb-4 w-1/3"
          />
        </TabsContent>

        <TabsContent value="published" className="flex justify-center">
          <Input
            placeholder="Search Title or Keyword..."
            className="mb-4 w-1/3"
          />
        </TabsContent>

        <TabsContent value="scheduled" className="flex justify-center">
          <Input
            placeholder="Search Title or Keyword..."
            className="mb-4 w-1/3"
          />
        </TabsContent>

        <TabsContent value="archived" className="flex justify-center">
          <Input
            placeholder="Search Title or Keyword..."
            className="mb-4 w-1/3"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
