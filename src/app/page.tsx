"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import Advice from "./Advice";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Advice />
      <Tabs defaultValue="overview" className="">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">overview</TabsContent>
        <TabsContent value="analytics">analytics</TabsContent>
        <TabsContent value="reports">reports</TabsContent>
        <TabsContent value="settings">settings</TabsContent>
      </Tabs>
    </>
  );
}
