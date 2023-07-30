import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardHeader } from "@/components/Layout/Dashboard/Header";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeader text="Settings"></DashboardHeader>
      </DashboardShell>
    </DashboardLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}