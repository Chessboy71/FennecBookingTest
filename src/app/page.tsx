"use client";

import { useState } from "react";
import PageHeaderWithNavigation from "./components/PageHeaderWithNavigation";
import FilterList from "./components/FilterList";

export default function Home() {
  const MainPagetitle = (
    <>
      Let’s Make our lives <span className="font-bold">Greener</span>
    </>
  );

  const [filter, setFilter] = useState<string>("All");

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-b from-white to-30% to-secondary">
      <main className="px-4 py-6 h-screen w-screen overflow-hidden">
        <PageHeaderWithNavigation title={MainPagetitle} />
        <FilterList filter={filter} setFilter={setFilter} />
      </main>
    </div>
  );
}
