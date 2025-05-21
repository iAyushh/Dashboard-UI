import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
function Tab() {
  return (
    <>
      <Tabs defaultValue="generated" className="w-[55vw]">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger
            value="generated"
            className="font-semibold hover:bg-blue-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Generated Articles
          </TabsTrigger>
          <TabsTrigger
            value="published"
            className="font-semibold hover:bg-blue-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Published Articles
          </TabsTrigger>
          <TabsTrigger
            value="scheduled"
            className="font-semibold hover:bg-blue-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Scheduled Articles
          </TabsTrigger>
          <TabsTrigger
            value="archived"
            className="font-semibold hover:bg-blue-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Archived Articles
          </TabsTrigger>
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
    </>
  );
}

export default Tab;
