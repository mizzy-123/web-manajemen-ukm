import { Suspense } from "react";
import LoadingHomeDashboard from "@/components/loading/loadingHomeDashboard";
import DashboardHomeFeed from "@/components/server/dashboardHomeFeed";

export default function Dashboard() {
  return (
    <>
      <Suspense fallback={<LoadingHomeDashboard />}>
        <DashboardHomeFeed />
      </Suspense>
    </>
  );
}
