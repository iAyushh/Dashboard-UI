import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
function Tab() {
  return (
    <>
      <Tabs defaultValue="generated" className="w-[55vw]">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="generated">Generated Articles</TabsTrigger>
          <TabsTrigger value="published">Published Articles</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Articles</TabsTrigger>
          <TabsTrigger value="archived">Archived Articles</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
}

export default Tab;
