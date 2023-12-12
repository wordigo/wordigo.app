import Banner from "./Banner";
import HomeHeader from "./Header";
import Footer from "@/components/Home/Footers";
import { type PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren<{ showBanner?: boolean }>> = ({
  children,
  showBanner = true,
}) => {
  return (
    <>
      {showBanner && <Banner />}
      <HomeHeader />

      <div className="relative">
        <main className="container flex flex-col gap-y-16 sm:gap-y-20 md:gap-y-24 lg:gap-y-28 xl:gap-y-32 pt-6 sm:pt-10 md:pt-14 lg:pt-[72px] xl:pt-[88px] pb-[72px] sm:pb-24 md:pb-[104px] lg:pb-28">
          {children}
        </main>

        <svg
          className="absolute -z-10 top-0 left-0 opacity-[0.15]"
          width="1920"
          height="1080"
          viewBox="0 0 1440 1032"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_7491_43998"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="1440"
          >
            <rect
              width="1440"
              height="1440"
              fill="url(#paint0_radial_7491_43998)"
            />
          </mask>
          <g mask="url(#mask0_7491_43998)">
            <g clip-path="url(#clip0_7491_43998)">
              <path
                d="M48 96V97H49V96H48ZM47 0V96H49V0H47ZM48 95H-48V97H48V95Z"
                fill="#D0D5DD"
                mask="url(#path-3-inside-1_7491_43998)"
              />
              <path
                d="M144 96V97H145V96H144ZM143 0V96H145V0H143ZM144 95H48V97H144V95Z"
                fill="#D0D5DD"
                mask="url(#path-5-inside-2_7491_43998)"
              />
              <path
                d="M240 96V97H241V96H240ZM239 0V96H241V0H239ZM240 95H144V97H240V95Z"
                fill="#D0D5DD"
                mask="url(#path-7-inside-3_7491_43998)"
              />
              <path
                d="M336 96V97H337V96H336ZM335 0V96H337V0H335ZM336 95H240V97H336V95Z"
                fill="#D0D5DD"
                mask="url(#path-9-inside-4_7491_43998)"
              />
              <path
                d="M432 96V97H433V96H432ZM431 0V96H433V0H431ZM432 95H336V97H432V95Z"
                fill="#D0D5DD"
                mask="url(#path-11-inside-5_7491_43998)"
              />
              <path
                d="M528 96V97H529V96H528ZM527 0V96H529V0H527ZM528 95H432V97H528V95Z"
                fill="#D0D5DD"
                mask="url(#path-13-inside-6_7491_43998)"
              />
              <path
                d="M624 96V97H625V96H624ZM623 0V96H625V0H623ZM624 95H528V97H624V95Z"
                fill="#D0D5DD"
                mask="url(#path-15-inside-7_7491_43998)"
              />
              <path
                d="M720 96V97H721V96H720ZM719 0V96H721V0H719ZM720 95H624V97H720V95Z"
                fill="#D0D5DD"
                mask="url(#path-17-inside-8_7491_43998)"
              />
              <path
                d="M816 96V97H817V96H816ZM815 0V96H817V0H815ZM816 95H720V97H816V95Z"
                fill="#D0D5DD"
                mask="url(#path-19-inside-9_7491_43998)"
              />
              <path
                d="M912 96V97H913V96H912ZM911 0V96H913V0H911ZM912 95H816V97H912V95Z"
                fill="#D0D5DD"
                mask="url(#path-21-inside-10_7491_43998)"
              />
              <path
                d="M1008 96V97H1009V96H1008ZM1007 0V96H1009V0H1007ZM1008 95H912V97H1008V95Z"
                fill="#D0D5DD"
                mask="url(#path-23-inside-11_7491_43998)"
              />
              <path
                d="M1104 96V97H1105V96H1104ZM1103 0V96H1105V0H1103ZM1104 95H1008V97H1104V95Z"
                fill="#D0D5DD"
                mask="url(#path-25-inside-12_7491_43998)"
              />
              <path
                d="M1200 96V97H1201V96H1200ZM1199 0V96H1201V0H1199ZM1200 95H1104V97H1200V95Z"
                fill="#D0D5DD"
                mask="url(#path-27-inside-13_7491_43998)"
              />
              <path
                d="M1296 96V97H1297V96H1296ZM1295 0V96H1297V0H1295ZM1296 95H1200V97H1296V95Z"
                fill="#D0D5DD"
                mask="url(#path-29-inside-14_7491_43998)"
              />
              <path
                d="M1392 96V97H1393V96H1392ZM1391 0V96H1393V0H1391ZM1392 95H1296V97H1392V95Z"
                fill="#D0D5DD"
                mask="url(#path-31-inside-15_7491_43998)"
              />
              <path
                d="M1488 96V97H1489V96H1488ZM1487 0V96H1489V0H1487ZM1488 95H1392V97H1488V95Z"
                fill="#D0D5DD"
                mask="url(#path-33-inside-16_7491_43998)"
              />
              <path
                d="M48 192V193H49V192H48ZM47 96V192H49V96H47ZM48 191H-48V193H48V191Z"
                fill="#D0D5DD"
                mask="url(#path-35-inside-17_7491_43998)"
              />
              <path
                d="M144 192V193H145V192H144ZM143 96V192H145V96H143ZM144 191H48V193H144V191Z"
                fill="#D0D5DD"
                mask="url(#path-37-inside-18_7491_43998)"
              />
              <path
                d="M240 192V193H241V192H240ZM239 96V192H241V96H239ZM240 191H144V193H240V191Z"
                fill="#D0D5DD"
                mask="url(#path-39-inside-19_7491_43998)"
              />
              <mask id="path-41-inside-20_7491_43998" fill="white">
                <path d="M240 96H336V192H240V96Z" />
              </mask>
              <path d="M240 96H336V192H240V96Z" fill="#F2F4F7" />
              <path
                d="M336 192V193H337V192H336ZM335 96V192H337V96H335ZM336 191H240V193H336V191Z"
                fill="#D0D5DD"
                mask="url(#path-41-inside-20_7491_43998)"
              />
              <path
                d="M432 192V193H433V192H432ZM431 96V192H433V96H431ZM432 191H336V193H432V191Z"
                fill="#D0D5DD"
                mask="url(#path-43-inside-21_7491_43998)"
              />
              <path
                d="M528 192V193H529V192H528ZM527 96V192H529V96H527ZM528 191H432V193H528V191Z"
                fill="#D0D5DD"
                mask="url(#path-45-inside-22_7491_43998)"
              />
              <path
                d="M624 192V193H625V192H624ZM623 96V192H625V96H623ZM624 191H528V193H624V191Z"
                fill="#D0D5DD"
                mask="url(#path-47-inside-23_7491_43998)"
              />
              <path
                d="M720 192V193H721V192H720ZM719 96V192H721V96H719ZM720 191H624V193H720V191Z"
                fill="#D0D5DD"
                mask="url(#path-49-inside-24_7491_43998)"
              />
              <path
                d="M816 192V193H817V192H816ZM815 96V192H817V96H815ZM816 191H720V193H816V191Z"
                fill="#D0D5DD"
                mask="url(#path-51-inside-25_7491_43998)"
              />
              <path
                d="M912 192V193H913V192H912ZM911 96V192H913V96H911ZM912 191H816V193H912V191Z"
                fill="#D0D5DD"
                mask="url(#path-53-inside-26_7491_43998)"
              />
              <path
                d="M1008 192V193H1009V192H1008ZM1007 96V192H1009V96H1007ZM1008 191H912V193H1008V191Z"
                fill="#D0D5DD"
                mask="url(#path-55-inside-27_7491_43998)"
              />
              <path
                d="M1104 192V193H1105V192H1104ZM1103 96V192H1105V96H1103ZM1104 191H1008V193H1104V191Z"
                fill="#D0D5DD"
                mask="url(#path-57-inside-28_7491_43998)"
              />
              <mask id="path-59-inside-29_7491_43998" fill="white">
                <path d="M1104 96H1200V192H1104V96Z" />
              </mask>
              <path d="M1104 96H1200V192H1104V96Z" fill="#F2F4F7" />
              <path
                d="M1200 192V193H1201V192H1200ZM1199 96V192H1201V96H1199ZM1200 191H1104V193H1200V191Z"
                fill="#D0D5DD"
                mask="url(#path-59-inside-29_7491_43998)"
              />
              <path
                d="M1296 192V193H1297V192H1296ZM1295 96V192H1297V96H1295ZM1296 191H1200V193H1296V191Z"
                fill="#D0D5DD"
                mask="url(#path-61-inside-30_7491_43998)"
              />
              <path
                d="M1392 192V193H1393V192H1392ZM1391 96V192H1393V96H1391ZM1392 191H1296V193H1392V191Z"
                fill="#D0D5DD"
                mask="url(#path-63-inside-31_7491_43998)"
              />
              <path
                d="M1488 192V193H1489V192H1488ZM1487 96V192H1489V96H1487ZM1488 191H1392V193H1488V191Z"
                fill="#D0D5DD"
                mask="url(#path-65-inside-32_7491_43998)"
              />
              <path
                d="M48 288V289H49V288H48ZM47 192V288H49V192H47ZM48 287H-48V289H48V287Z"
                fill="#D0D5DD"
                mask="url(#path-67-inside-33_7491_43998)"
              />
              <path
                d="M144 288V289H145V288H144ZM143 192V288H145V192H143ZM144 287H48V289H144V287Z"
                fill="#D0D5DD"
                mask="url(#path-69-inside-34_7491_43998)"
              />
              <path
                d="M240 288V289H241V288H240ZM239 192V288H241V192H239ZM240 287H144V289H240V287Z"
                fill="#D0D5DD"
                mask="url(#path-71-inside-35_7491_43998)"
              />
              <path
                d="M336 288V289H337V288H336ZM335 192V288H337V192H335ZM336 287H240V289H336V287Z"
                fill="#D0D5DD"
                mask="url(#path-73-inside-36_7491_43998)"
              />
              <path
                d="M432 288V289H433V288H432ZM431 192V288H433V192H431ZM432 287H336V289H432V287Z"
                fill="#D0D5DD"
                mask="url(#path-75-inside-37_7491_43998)"
              />
              <mask id="path-77-inside-38_7491_43998" fill="white">
                <path d="M432 192H528V288H432V192Z" />
              </mask>
              <path d="M432 192H528V288H432V192Z" fill="#F2F4F7" />
              <path
                d="M528 288V289H529V288H528ZM527 192V288H529V192H527ZM528 287H432V289H528V287Z"
                fill="#D0D5DD"
                mask="url(#path-77-inside-38_7491_43998)"
              />
              <path
                d="M624 288V289H625V288H624ZM623 192V288H625V192H623ZM624 287H528V289H624V287Z"
                fill="#D0D5DD"
                mask="url(#path-79-inside-39_7491_43998)"
              />
              <path
                d="M720 288V289H721V288H720ZM719 192V288H721V192H719ZM720 287H624V289H720V287Z"
                fill="#D0D5DD"
                mask="url(#path-81-inside-40_7491_43998)"
              />
              <path
                d="M816 288V289H817V288H816ZM815 192V288H817V192H815ZM816 287H720V289H816V287Z"
                fill="#D0D5DD"
                mask="url(#path-83-inside-41_7491_43998)"
              />
              <mask id="path-85-inside-42_7491_43998" fill="white">
                <path d="M816 192H912V288H816V192Z" />
              </mask>
              <path d="M816 192H912V288H816V192Z" fill="#F2F4F7" />
              <path
                d="M912 288V289H913V288H912ZM911 192V288H913V192H911ZM912 287H816V289H912V287Z"
                fill="#D0D5DD"
                mask="url(#path-85-inside-42_7491_43998)"
              />
              <path
                d="M1008 288V289H1009V288H1008ZM1007 192V288H1009V192H1007ZM1008 287H912V289H1008V287Z"
                fill="#D0D5DD"
                mask="url(#path-87-inside-43_7491_43998)"
              />
              <path
                d="M1104 288V289H1105V288H1104ZM1103 192V288H1105V192H1103ZM1104 287H1008V289H1104V287Z"
                fill="#D0D5DD"
                mask="url(#path-89-inside-44_7491_43998)"
              />
              <path
                d="M1200 288V289H1201V288H1200ZM1199 192V288H1201V192H1199ZM1200 287H1104V289H1200V287Z"
                fill="#D0D5DD"
                mask="url(#path-91-inside-45_7491_43998)"
              />
              <path
                d="M1296 288V289H1297V288H1296ZM1295 192V288H1297V192H1295ZM1296 287H1200V289H1296V287Z"
                fill="#D0D5DD"
                mask="url(#path-93-inside-46_7491_43998)"
              />
              <path
                d="M1392 288V289H1393V288H1392ZM1391 192V288H1393V192H1391ZM1392 287H1296V289H1392V287Z"
                fill="#D0D5DD"
                mask="url(#path-95-inside-47_7491_43998)"
              />
              <path
                d="M1488 288V289H1489V288H1488ZM1487 192V288H1489V192H1487ZM1488 287H1392V289H1488V287Z"
                fill="#D0D5DD"
                mask="url(#path-97-inside-48_7491_43998)"
              />
              <mask id="path-99-inside-49_7491_43998" fill="white">
                <path d="M-48 288H48V384H-48V288Z" />
              </mask>
              <path d="M-48 288H48V384H-48V288Z" fill="#F2F4F7" />
              <path
                d="M48 384V385H49V384H48ZM47 288V384H49V288H47ZM48 383H-48V385H48V383Z"
                fill="#D0D5DD"
                mask="url(#path-99-inside-49_7491_43998)"
              />
              <path
                d="M144 384V385H145V384H144ZM143 288V384H145V288H143ZM144 383H48V385H144V383Z"
                fill="#D0D5DD"
                mask="url(#path-101-inside-50_7491_43998)"
              />
              <path
                d="M240 384V385H241V384H240ZM239 288V384H241V288H239ZM240 383H144V385H240V383Z"
                fill="#D0D5DD"
                mask="url(#path-103-inside-51_7491_43998)"
              />
              <path
                d="M336 384V385H337V384H336ZM335 288V384H337V288H335ZM336 383H240V385H336V383Z"
                fill="#D0D5DD"
                mask="url(#path-105-inside-52_7491_43998)"
              />
              <path
                d="M432 384V385H433V384H432ZM431 288V384H433V288H431ZM432 383H336V385H432V383Z"
                fill="#D0D5DD"
                mask="url(#path-107-inside-53_7491_43998)"
              />
              <path
                d="M528 384V385H529V384H528ZM527 288V384H529V288H527ZM528 383H432V385H528V383Z"
                fill="#D0D5DD"
                mask="url(#path-109-inside-54_7491_43998)"
              />
              <path
                d="M624 384V385H625V384H624ZM623 288V384H625V288H623ZM624 383H528V385H624V383Z"
                fill="#D0D5DD"
                mask="url(#path-111-inside-55_7491_43998)"
              />
              <path
                d="M720 384V385H721V384H720ZM719 288V384H721V288H719ZM720 383H624V385H720V383Z"
                fill="#D0D5DD"
                mask="url(#path-113-inside-56_7491_43998)"
              />
              <path
                d="M816 384V385H817V384H816ZM815 288V384H817V288H815ZM816 383H720V385H816V383Z"
                fill="#D0D5DD"
                mask="url(#path-115-inside-57_7491_43998)"
              />
              <path
                d="M912 384V385H913V384H912ZM911 288V384H913V288H911ZM912 383H816V385H912V383Z"
                fill="#D0D5DD"
                mask="url(#path-117-inside-58_7491_43998)"
              />
              <path
                d="M1008 384V385H1009V384H1008ZM1007 288V384H1009V288H1007ZM1008 383H912V385H1008V383Z"
                fill="#D0D5DD"
                mask="url(#path-119-inside-59_7491_43998)"
              />
              <path
                d="M1104 384V385H1105V384H1104ZM1103 288V384H1105V288H1103ZM1104 383H1008V385H1104V383Z"
                fill="#D0D5DD"
                mask="url(#path-121-inside-60_7491_43998)"
              />
              <mask id="path-123-inside-61_7491_43998" fill="white">
                <path d="M1104 288H1200V384H1104V288Z" />
              </mask>
              <path d="M1104 288H1200V384H1104V288Z" fill="#F2F4F7" />
              <path
                d="M1200 384V385H1201V384H1200ZM1199 288V384H1201V288H1199ZM1200 383H1104V385H1200V383Z"
                fill="#D0D5DD"
                mask="url(#path-123-inside-61_7491_43998)"
              />
              <path
                d="M1296 384V385H1297V384H1296ZM1295 288V384H1297V288H1295ZM1296 383H1200V385H1296V383Z"
                fill="#D0D5DD"
                mask="url(#path-125-inside-62_7491_43998)"
              />
              <path
                d="M1392 384V385H1393V384H1392ZM1391 288V384H1393V288H1391ZM1392 383H1296V385H1392V383Z"
                fill="#D0D5DD"
                mask="url(#path-127-inside-63_7491_43998)"
              />
              <path
                d="M1488 384V385H1489V384H1488ZM1487 288V384H1489V288H1487ZM1488 383H1392V385H1488V383Z"
                fill="#D0D5DD"
                mask="url(#path-129-inside-64_7491_43998)"
              />
              <path
                d="M48 480V481H49V480H48ZM47 384V480H49V384H47ZM48 479H-48V481H48V479Z"
                fill="#D0D5DD"
                mask="url(#path-131-inside-65_7491_43998)"
              />
              <path
                d="M144 480V481H145V480H144ZM143 384V480H145V384H143ZM144 479H48V481H144V479Z"
                fill="#D0D5DD"
                mask="url(#path-133-inside-66_7491_43998)"
              />
              <path
                d="M240 480V481H241V480H240ZM239 384V480H241V384H239ZM240 479H144V481H240V479Z"
                fill="#D0D5DD"
                mask="url(#path-135-inside-67_7491_43998)"
              />
              <path
                d="M336 480V481H337V480H336ZM335 384V480H337V384H335ZM336 479H240V481H336V479Z"
                fill="#D0D5DD"
                mask="url(#path-137-inside-68_7491_43998)"
              />
              <path
                d="M432 480V481H433V480H432ZM431 384V480H433V384H431ZM432 479H336V481H432V479Z"
                fill="#D0D5DD"
                mask="url(#path-139-inside-69_7491_43998)"
              />
              <path
                d="M528 480V481H529V480H528ZM527 384V480H529V384H527ZM528 479H432V481H528V479Z"
                fill="#D0D5DD"
                mask="url(#path-141-inside-70_7491_43998)"
              />
              <mask id="path-143-inside-71_7491_43998" fill="white">
                <path d="M528 384H624V480H528V384Z" />
              </mask>
              <path d="M528 384H624V480H528V384Z" fill="#F2F4F7" />
              <path
                d="M624 480V481H625V480H624ZM623 384V480H625V384H623ZM624 479H528V481H624V479Z"
                fill="#D0D5DD"
                mask="url(#path-143-inside-71_7491_43998)"
              />
              <path
                d="M720 480V481H721V480H720ZM719 384V480H721V384H719ZM720 479H624V481H720V479Z"
                fill="#D0D5DD"
                mask="url(#path-145-inside-72_7491_43998)"
              />
              <path
                d="M816 480V481H817V480H816ZM815 384V480H817V384H815ZM816 479H720V481H816V479Z"
                fill="#D0D5DD"
                mask="url(#path-147-inside-73_7491_43998)"
              />
              <path
                d="M912 480V481H913V480H912ZM911 384V480H913V384H911ZM912 479H816V481H912V479Z"
                fill="#D0D5DD"
                mask="url(#path-149-inside-74_7491_43998)"
              />
              <path
                d="M1008 480V481H1009V480H1008ZM1007 384V480H1009V384H1007ZM1008 479H912V481H1008V479Z"
                fill="#D0D5DD"
                mask="url(#path-151-inside-75_7491_43998)"
              />
              <path
                d="M1104 480V481H1105V480H1104ZM1103 384V480H1105V384H1103ZM1104 479H1008V481H1104V479Z"
                fill="#D0D5DD"
                mask="url(#path-153-inside-76_7491_43998)"
              />
              <path
                d="M1200 480V481H1201V480H1200ZM1199 384V480H1201V384H1199ZM1200 479H1104V481H1200V479Z"
                fill="#D0D5DD"
                mask="url(#path-155-inside-77_7491_43998)"
              />
              <path
                d="M1296 480V481H1297V480H1296ZM1295 384V480H1297V384H1295ZM1296 479H1200V481H1296V479Z"
                fill="#D0D5DD"
                mask="url(#path-157-inside-78_7491_43998)"
              />
              <path
                d="M1392 480V481H1393V480H1392ZM1391 384V480H1393V384H1391ZM1392 479H1296V481H1392V479Z"
                fill="#D0D5DD"
                mask="url(#path-159-inside-79_7491_43998)"
              />
              <path
                d="M1488 480V481H1489V480H1488ZM1487 384V480H1489V384H1487ZM1488 479H1392V481H1488V479Z"
                fill="#D0D5DD"
                mask="url(#path-161-inside-80_7491_43998)"
              />
              <path
                d="M48 576V577H49V576H48ZM47 480V576H49V480H47ZM48 575H-48V577H48V575Z"
                fill="#D0D5DD"
                mask="url(#path-163-inside-81_7491_43998)"
              />
              <path
                d="M144 576V577H145V576H144ZM143 480V576H145V480H143ZM144 575H48V577H144V575Z"
                fill="#D0D5DD"
                mask="url(#path-165-inside-82_7491_43998)"
              />
              <path
                d="M240 576V577H241V576H240ZM239 480V576H241V480H239ZM240 575H144V577H240V575Z"
                fill="#D0D5DD"
                mask="url(#path-167-inside-83_7491_43998)"
              />
              <mask id="path-169-inside-84_7491_43998" fill="white">
                <path d="M240 480H336V576H240V480Z" />
              </mask>
              <path d="M240 480H336V576H240V480Z" fill="#F2F4F7" />
              <path
                d="M336 576V577H337V576H336ZM335 480V576H337V480H335ZM336 575H240V577H336V575Z"
                fill="#D0D5DD"
                mask="url(#path-169-inside-84_7491_43998)"
              />
              <path
                d="M432 576V577H433V576H432ZM431 480V576H433V480H431ZM432 575H336V577H432V575Z"
                fill="#D0D5DD"
                mask="url(#path-171-inside-85_7491_43998)"
              />
              <path
                d="M528 576V577H529V576H528ZM527 480V576H529V480H527ZM528 575H432V577H528V575Z"
                fill="#D0D5DD"
                mask="url(#path-173-inside-86_7491_43998)"
              />
              <path
                d="M624 576V577H625V576H624ZM623 480V576H625V480H623ZM624 575H528V577H624V575Z"
                fill="#D0D5DD"
                mask="url(#path-175-inside-87_7491_43998)"
              />
              <path
                d="M720 576V577H721V576H720ZM719 480V576H721V480H719ZM720 575H624V577H720V575Z"
                fill="#D0D5DD"
                mask="url(#path-177-inside-88_7491_43998)"
              />
              <path
                d="M816 576V577H817V576H816ZM815 480V576H817V480H815ZM816 575H720V577H816V575Z"
                fill="#D0D5DD"
                mask="url(#path-179-inside-89_7491_43998)"
              />
              <mask id="path-181-inside-90_7491_43998" fill="white">
                <path d="M816 480H912V576H816V480Z" />
              </mask>
              <path d="M816 480H912V576H816V480Z" fill="#F2F4F7" />
              <path
                d="M912 576V577H913V576H912ZM911 480V576H913V480H911ZM912 575H816V577H912V575Z"
                fill="#D0D5DD"
                mask="url(#path-181-inside-90_7491_43998)"
              />
              <path
                d="M1008 576V577H1009V576H1008ZM1007 480V576H1009V480H1007ZM1008 575H912V577H1008V575Z"
                fill="#D0D5DD"
                mask="url(#path-183-inside-91_7491_43998)"
              />
              <path
                d="M1104 576V577H1105V576H1104ZM1103 480V576H1105V480H1103ZM1104 575H1008V577H1104V575Z"
                fill="#D0D5DD"
                mask="url(#path-185-inside-92_7491_43998)"
              />
              <path
                d="M1200 576V577H1201V576H1200ZM1199 480V576H1201V480H1199ZM1200 575H1104V577H1200V575Z"
                fill="#D0D5DD"
                mask="url(#path-187-inside-93_7491_43998)"
              />
              <path
                d="M1296 576V577H1297V576H1296ZM1295 480V576H1297V480H1295ZM1296 575H1200V577H1296V575Z"
                fill="#D0D5DD"
                mask="url(#path-189-inside-94_7491_43998)"
              />
              <path
                d="M1392 576V577H1393V576H1392ZM1391 480V576H1393V480H1391ZM1392 575H1296V577H1392V575Z"
                fill="#D0D5DD"
                mask="url(#path-191-inside-95_7491_43998)"
              />
              <path
                d="M1488 576V577H1489V576H1488ZM1487 480V576H1489V480H1487ZM1488 575H1392V577H1488V575Z"
                fill="#D0D5DD"
                mask="url(#path-193-inside-96_7491_43998)"
              />
              <path
                d="M48 672V673H49V672H48ZM47 576V672H49V576H47ZM48 671H-48V673H48V671Z"
                fill="#D0D5DD"
                mask="url(#path-195-inside-97_7491_43998)"
              />
              <mask id="path-197-inside-98_7491_43998" fill="white">
                <path d="M48 576H144V672H48V576Z" />
              </mask>
              <path d="M48 576H144V672H48V576Z" fill="#F2F4F7" />
              <path
                d="M144 672V673H145V672H144ZM143 576V672H145V576H143ZM144 671H48V673H144V671Z"
                fill="#D0D5DD"
                mask="url(#path-197-inside-98_7491_43998)"
              />
              <path
                d="M240 672V673H241V672H240ZM239 576V672H241V576H239ZM240 671H144V673H240V671Z"
                fill="#D0D5DD"
                mask="url(#path-199-inside-99_7491_43998)"
              />
              <path
                d="M336 672V673H337V672H336ZM335 576V672H337V576H335ZM336 671H240V673H336V671Z"
                fill="#D0D5DD"
                mask="url(#path-201-inside-100_7491_43998)"
              />
              <path
                d="M432 672V673H433V672H432ZM431 576V672H433V576H431ZM432 671H336V673H432V671Z"
                fill="#D0D5DD"
                mask="url(#path-203-inside-101_7491_43998)"
              />
              <path
                d="M528 672V673H529V672H528ZM527 576V672H529V576H527ZM528 671H432V673H528V671Z"
                fill="#D0D5DD"
                mask="url(#path-205-inside-102_7491_43998)"
              />
              <path
                d="M624 672V673H625V672H624ZM623 576V672H625V576H623ZM624 671H528V673H624V671Z"
                fill="#D0D5DD"
                mask="url(#path-207-inside-103_7491_43998)"
              />
              <path
                d="M720 672V673H721V672H720ZM719 576V672H721V576H719ZM720 671H624V673H720V671Z"
                fill="#D0D5DD"
                mask="url(#path-209-inside-104_7491_43998)"
              />
              <path
                d="M816 672V673H817V672H816ZM815 576V672H817V576H815ZM816 671H720V673H816V671Z"
                fill="#D0D5DD"
                mask="url(#path-211-inside-105_7491_43998)"
              />
              <path
                d="M912 672V673H913V672H912ZM911 576V672H913V576H911ZM912 671H816V673H912V671Z"
                fill="#D0D5DD"
                mask="url(#path-213-inside-106_7491_43998)"
              />
              <path
                d="M1008 672V673H1009V672H1008ZM1007 576V672H1009V576H1007ZM1008 671H912V673H1008V671Z"
                fill="#D0D5DD"
                mask="url(#path-215-inside-107_7491_43998)"
              />
              <path
                d="M1104 672V673H1105V672H1104ZM1103 576V672H1105V576H1103ZM1104 671H1008V673H1104V671Z"
                fill="#D0D5DD"
                mask="url(#path-217-inside-108_7491_43998)"
              />
              <path
                d="M1200 672V673H1201V672H1200ZM1199 576V672H1201V576H1199ZM1200 671H1104V673H1200V671Z"
                fill="#D0D5DD"
                mask="url(#path-219-inside-109_7491_43998)"
              />
              <path
                d="M1296 672V673H1297V672H1296ZM1295 576V672H1297V576H1295ZM1296 671H1200V673H1296V671Z"
                fill="#D0D5DD"
                mask="url(#path-221-inside-110_7491_43998)"
              />
              <mask id="path-223-inside-111_7491_43998" fill="white">
                <path d="M1296 576H1392V672H1296V576Z" />
              </mask>
              <path d="M1296 576H1392V672H1296V576Z" fill="#F2F4F7" />
              <path
                d="M1392 672V673H1393V672H1392ZM1391 576V672H1393V576H1391ZM1392 671H1296V673H1392V671Z"
                fill="#D0D5DD"
                mask="url(#path-223-inside-111_7491_43998)"
              />
              <path
                d="M1488 672V673H1489V672H1488ZM1487 576V672H1489V576H1487ZM1488 671H1392V673H1488V671Z"
                fill="#D0D5DD"
                mask="url(#path-225-inside-112_7491_43998)"
              />
              <path
                d="M48 768V769H49V768H48ZM47 672V768H49V672H47ZM48 767H-48V769H48V767Z"
                fill="#D0D5DD"
                mask="url(#path-227-inside-113_7491_43998)"
              />
              <path
                d="M144 768V769H145V768H144ZM143 672V768H145V672H143ZM144 767H48V769H144V767Z"
                fill="#D0D5DD"
                mask="url(#path-229-inside-114_7491_43998)"
              />
              <path
                d="M240 768V769H241V768H240ZM239 672V768H241V672H239ZM240 767H144V769H240V767Z"
                fill="#D0D5DD"
                mask="url(#path-231-inside-115_7491_43998)"
              />
              <path
                d="M336 768V769H337V768H336ZM335 672V768H337V672H335ZM336 767H240V769H336V767Z"
                fill="#D0D5DD"
                mask="url(#path-233-inside-116_7491_43998)"
              />
              <path
                d="M432 768V769H433V768H432ZM431 672V768H433V672H431ZM432 767H336V769H432V767Z"
                fill="#D0D5DD"
                mask="url(#path-235-inside-117_7491_43998)"
              />
              <path
                d="M528 768V769H529V768H528ZM527 672V768H529V672H527ZM528 767H432V769H528V767Z"
                fill="#D0D5DD"
                mask="url(#path-237-inside-118_7491_43998)"
              />
              <mask id="path-239-inside-119_7491_43998" fill="white">
                <path d="M528 672H624V768H528V672Z" />
              </mask>
              <path d="M528 672H624V768H528V672Z" fill="#F2F4F7" />
              <path
                d="M624 768V769H625V768H624ZM623 672V768H625V672H623ZM624 767H528V769H624V767Z"
                fill="#D0D5DD"
                mask="url(#path-239-inside-119_7491_43998)"
              />
              <path
                d="M720 768V769H721V768H720ZM719 672V768H721V672H719ZM720 767H624V769H720V767Z"
                fill="#D0D5DD"
                mask="url(#path-241-inside-120_7491_43998)"
              />
              <path
                d="M816 768V769H817V768H816ZM815 672V768H817V672H815ZM816 767H720V769H816V767Z"
                fill="#D0D5DD"
                mask="url(#path-243-inside-121_7491_43998)"
              />
              <path
                d="M912 768V769H913V768H912ZM911 672V768H913V672H911ZM912 767H816V769H912V767Z"
                fill="#D0D5DD"
                mask="url(#path-245-inside-122_7491_43998)"
              />
              <path
                d="M1008 768V769H1009V768H1008ZM1007 672V768H1009V672H1007ZM1008 767H912V769H1008V767Z"
                fill="#D0D5DD"
                mask="url(#path-247-inside-123_7491_43998)"
              />
              <path
                d="M1104 768V769H1105V768H1104ZM1103 672V768H1105V672H1103ZM1104 767H1008V769H1104V767Z"
                fill="#D0D5DD"
                mask="url(#path-249-inside-124_7491_43998)"
              />
              <mask id="path-251-inside-125_7491_43998" fill="white">
                <path d="M1104 672H1200V768H1104V672Z" />
              </mask>
              <path d="M1104 672H1200V768H1104V672Z" fill="#F2F4F7" />
              <path
                d="M1200 768V769H1201V768H1200ZM1199 672V768H1201V672H1199ZM1200 767H1104V769H1200V767Z"
                fill="#D0D5DD"
                mask="url(#path-251-inside-125_7491_43998)"
              />
              <path
                d="M1296 768V769H1297V768H1296ZM1295 672V768H1297V672H1295ZM1296 767H1200V769H1296V767Z"
                fill="#D0D5DD"
                mask="url(#path-253-inside-126_7491_43998)"
              />
              <path
                d="M1392 768V769H1393V768H1392ZM1391 672V768H1393V672H1391ZM1392 767H1296V769H1392V767Z"
                fill="#D0D5DD"
                mask="url(#path-255-inside-127_7491_43998)"
              />
              <path
                d="M1488 768V769H1489V768H1488ZM1487 672V768H1489V672H1487ZM1488 767H1392V769H1488V767Z"
                fill="#D0D5DD"
                mask="url(#path-257-inside-128_7491_43998)"
              />
              <path
                d="M48 864V865H49V864H48ZM47 768V864H49V768H47ZM48 863H-48V865H48V863Z"
                fill="#D0D5DD"
                mask="url(#path-259-inside-129_7491_43998)"
              />
              <path
                d="M144 864V865H145V864H144ZM143 768V864H145V768H143ZM144 863H48V865H144V863Z"
                fill="#D0D5DD"
                mask="url(#path-261-inside-130_7491_43998)"
              />
              <path
                d="M240 864V865H241V864H240ZM239 768V864H241V768H239ZM240 863H144V865H240V863Z"
                fill="#D0D5DD"
                mask="url(#path-263-inside-131_7491_43998)"
              />
              <mask id="path-265-inside-132_7491_43998" fill="white">
                <path d="M240 768H336V864H240V768Z" />
              </mask>
              <path d="M240 768H336V864H240V768Z" fill="#F2F4F7" />
              <path
                d="M336 864V865H337V864H336ZM335 768V864H337V768H335ZM336 863H240V865H336V863Z"
                fill="#D0D5DD"
                mask="url(#path-265-inside-132_7491_43998)"
              />
              <path
                d="M432 864V865H433V864H432ZM431 768V864H433V768H431ZM432 863H336V865H432V863Z"
                fill="#D0D5DD"
                mask="url(#path-267-inside-133_7491_43998)"
              />
              <path
                d="M528 864V865H529V864H528ZM527 768V864H529V768H527ZM528 863H432V865H528V863Z"
                fill="#D0D5DD"
                mask="url(#path-269-inside-134_7491_43998)"
              />
              <path
                d="M624 864V865H625V864H624ZM623 768V864H625V768H623ZM624 863H528V865H624V863Z"
                fill="#D0D5DD"
                mask="url(#path-271-inside-135_7491_43998)"
              />
              <path
                d="M720 864V865H721V864H720ZM719 768V864H721V768H719ZM720 863H624V865H720V863Z"
                fill="#D0D5DD"
                mask="url(#path-273-inside-136_7491_43998)"
              />
              <path
                d="M816 864V865H817V864H816ZM815 768V864H817V768H815ZM816 863H720V865H816V863Z"
                fill="#D0D5DD"
                mask="url(#path-275-inside-137_7491_43998)"
              />
              <mask id="path-277-inside-138_7491_43998" fill="white">
                <path d="M816 768H912V864H816V768Z" />
              </mask>
              <path d="M816 768H912V864H816V768Z" fill="#F2F4F7" />
              <path
                d="M912 864V865H913V864H912ZM911 768V864H913V768H911ZM912 863H816V865H912V863Z"
                fill="#D0D5DD"
                mask="url(#path-277-inside-138_7491_43998)"
              />
              <path
                d="M1008 864V865H1009V864H1008ZM1007 768V864H1009V768H1007ZM1008 863H912V865H1008V863Z"
                fill="#D0D5DD"
                mask="url(#path-279-inside-139_7491_43998)"
              />
              <path
                d="M1104 864V865H1105V864H1104ZM1103 768V864H1105V768H1103ZM1104 863H1008V865H1104V863Z"
                fill="#D0D5DD"
                mask="url(#path-281-inside-140_7491_43998)"
              />
              <path
                d="M1200 864V865H1201V864H1200ZM1199 768V864H1201V768H1199ZM1200 863H1104V865H1200V863Z"
                fill="#D0D5DD"
                mask="url(#path-283-inside-141_7491_43998)"
              />
              <path
                d="M1296 864V865H1297V864H1296ZM1295 768V864H1297V768H1295ZM1296 863H1200V865H1296V863Z"
                fill="#D0D5DD"
                mask="url(#path-285-inside-142_7491_43998)"
              />
              <path
                d="M1392 864V865H1393V864H1392ZM1391 768V864H1393V768H1391ZM1392 863H1296V865H1392V863Z"
                fill="#D0D5DD"
                mask="url(#path-287-inside-143_7491_43998)"
              />
              <path
                d="M1488 864V865H1489V864H1488ZM1487 768V864H1489V768H1487ZM1488 863H1392V865H1488V863Z"
                fill="#D0D5DD"
                mask="url(#path-289-inside-144_7491_43998)"
              />
              <path
                d="M48 960V961H49V960H48ZM47 864V960H49V864H47ZM48 959H-48V961H48V959Z"
                fill="#D0D5DD"
                mask="url(#path-291-inside-145_7491_43998)"
              />
              <path
                d="M144 960V961H145V960H144ZM143 864V960H145V864H143ZM144 959H48V961H144V959Z"
                fill="#D0D5DD"
                mask="url(#path-293-inside-146_7491_43998)"
              />
              <path
                d="M240 960V961H241V960H240ZM239 864V960H241V864H239ZM240 959H144V961H240V959Z"
                fill="#D0D5DD"
                mask="url(#path-295-inside-147_7491_43998)"
              />
              <path
                d="M336 960V961H337V960H336ZM335 864V960H337V864H335ZM336 959H240V961H336V959Z"
                fill="#D0D5DD"
                mask="url(#path-297-inside-148_7491_43998)"
              />
              <path
                d="M432 960V961H433V960H432ZM431 864V960H433V864H431ZM432 959H336V961H432V959Z"
                fill="#D0D5DD"
                mask="url(#path-299-inside-149_7491_43998)"
              />
              <path
                d="M528 960V961H529V960H528ZM527 864V960H529V864H527ZM528 959H432V961H528V959Z"
                fill="#D0D5DD"
                mask="url(#path-301-inside-150_7491_43998)"
              />
              <path
                d="M624 960V961H625V960H624ZM623 864V960H625V864H623ZM624 959H528V961H624V959Z"
                fill="#D0D5DD"
                mask="url(#path-303-inside-151_7491_43998)"
              />
              <path
                d="M720 960V961H721V960H720ZM719 864V960H721V864H719ZM720 959H624V961H720V959Z"
                fill="#D0D5DD"
                mask="url(#path-305-inside-152_7491_43998)"
              />
              <path
                d="M816 960V961H817V960H816ZM815 864V960H817V864H815ZM816 959H720V961H816V959Z"
                fill="#D0D5DD"
                mask="url(#path-307-inside-153_7491_43998)"
              />
              <path
                d="M912 960V961H913V960H912ZM911 864V960H913V864H911ZM912 959H816V961H912V959Z"
                fill="#D0D5DD"
                mask="url(#path-309-inside-154_7491_43998)"
              />
              <path
                d="M1008 960V961H1009V960H1008ZM1007 864V960H1009V864H1007ZM1008 959H912V961H1008V959Z"
                fill="#D0D5DD"
                mask="url(#path-311-inside-155_7491_43998)"
              />
              <path
                d="M1104 960V961H1105V960H1104ZM1103 864V960H1105V864H1103ZM1104 959H1008V961H1104V959Z"
                fill="#D0D5DD"
                mask="url(#path-313-inside-156_7491_43998)"
              />
              <path
                d="M1200 960V961H1201V960H1200ZM1199 864V960H1201V864H1199ZM1200 959H1104V961H1200V959Z"
                fill="#D0D5DD"
                mask="url(#path-315-inside-157_7491_43998)"
              />
              <path
                d="M1296 960V961H1297V960H1296ZM1295 864V960H1297V864H1295ZM1296 959H1200V961H1296V959Z"
                fill="#D0D5DD"
                mask="url(#path-317-inside-158_7491_43998)"
              />
              <path
                d="M1392 960V961H1393V960H1392ZM1391 864V960H1393V864H1391ZM1392 959H1296V961H1392V959Z"
                fill="#D0D5DD"
                mask="url(#path-319-inside-159_7491_43998)"
              />
              <mask id="path-321-inside-160_7491_43998" fill="white">
                <path d="M1392 864H1488V960H1392V864Z" />
              </mask>
              <path d="M1392 864H1488V960H1392V864Z" fill="#F2F4F7" />
              <path
                d="M1488 960V961H1489V960H1488ZM1487 864V960H1489V864H1487ZM1488 959H1392V961H1488V959Z"
                fill="#D0D5DD"
                mask="url(#path-321-inside-160_7491_43998)"
              />
              <path
                d="M48 1056V1057H49V1056H48ZM47 960V1056H49V960H47ZM48 1055H-48V1057H48V1055Z"
                fill="#D0D5DD"
                mask="url(#path-323-inside-161_7491_43998)"
              />
              <path
                d="M144 1056V1057H145V1056H144ZM143 960V1056H145V960H143ZM144 1055H48V1057H144V1055Z"
                fill="#D0D5DD"
                mask="url(#path-325-inside-162_7491_43998)"
              />
              <path
                d="M240 1056V1057H241V1056H240ZM239 960V1056H241V960H239ZM240 1055H144V1057H240V1055Z"
                fill="#D0D5DD"
                mask="url(#path-327-inside-163_7491_43998)"
              />
              <path
                d="M336 1056V1057H337V1056H336ZM335 960V1056H337V960H335ZM336 1055H240V1057H336V1055Z"
                fill="#D0D5DD"
                mask="url(#path-329-inside-164_7491_43998)"
              />
              <mask id="path-331-inside-165_7491_43998" fill="white">
                <path d="M336 960H432V1056H336V960Z" />
              </mask>
              <path d="M336 960H432V1056H336V960Z" fill="#F2F4F7" />
              <path
                d="M432 1056V1057H433V1056H432ZM431 960V1056H433V960H431ZM432 1055H336V1057H432V1055Z"
                fill="#D0D5DD"
                mask="url(#path-331-inside-165_7491_43998)"
              />
              <path
                d="M528 1056V1057H529V1056H528ZM527 960V1056H529V960H527ZM528 1055H432V1057H528V1055Z"
                fill="#D0D5DD"
                mask="url(#path-333-inside-166_7491_43998)"
              />
              <path
                d="M624 1056V1057H625V1056H624ZM623 960V1056H625V960H623ZM624 1055H528V1057H624V1055Z"
                fill="#D0D5DD"
                mask="url(#path-335-inside-167_7491_43998)"
              />
              <path
                d="M720 1056V1057H721V1056H720ZM719 960V1056H721V960H719ZM720 1055H624V1057H720V1055Z"
                fill="#D0D5DD"
                mask="url(#path-337-inside-168_7491_43998)"
              />
              <mask id="path-339-inside-169_7491_43998" fill="white">
                <path d="M720 960H816V1056H720V960Z" />
              </mask>
              <path d="M720 960H816V1056H720V960Z" fill="#F2F4F7" />
              <path
                d="M816 1056V1057H817V1056H816ZM815 960V1056H817V960H815ZM816 1055H720V1057H816V1055Z"
                fill="#D0D5DD"
                mask="url(#path-339-inside-169_7491_43998)"
              />
              <path
                d="M912 1056V1057H913V1056H912ZM911 960V1056H913V960H911ZM912 1055H816V1057H912V1055Z"
                fill="#D0D5DD"
                mask="url(#path-341-inside-170_7491_43998)"
              />
              <path
                d="M1008 1056V1057H1009V1056H1008ZM1007 960V1056H1009V960H1007ZM1008 1055H912V1057H1008V1055Z"
                fill="#D0D5DD"
                mask="url(#path-343-inside-171_7491_43998)"
              />
              <path
                d="M1104 1056V1057H1105V1056H1104ZM1103 960V1056H1105V960H1103ZM1104 1055H1008V1057H1104V1055Z"
                fill="#D0D5DD"
                mask="url(#path-345-inside-172_7491_43998)"
              />
              <path
                d="M1200 1056V1057H1201V1056H1200ZM1199 960V1056H1201V960H1199ZM1200 1055H1104V1057H1200V1055Z"
                fill="#D0D5DD"
                mask="url(#path-347-inside-173_7491_43998)"
              />
              <path
                d="M1296 1056V1057H1297V1056H1296ZM1295 960V1056H1297V960H1295ZM1296 1055H1200V1057H1296V1055Z"
                fill="#D0D5DD"
                mask="url(#path-349-inside-174_7491_43998)"
              />
              <path
                d="M1392 1056V1057H1393V1056H1392ZM1391 960V1056H1393V960H1391ZM1392 1055H1296V1057H1392V1055Z"
                fill="#D0D5DD"
                mask="url(#path-351-inside-175_7491_43998)"
              />
              <path
                d="M1488 1056V1057H1489V1056H1488ZM1487 960V1056H1489V960H1487ZM1488 1055H1392V1057H1488V1055Z"
                fill="#D0D5DD"
                mask="url(#path-353-inside-176_7491_43998)"
              />
            </g>
            <rect
              x="-239.5"
              y="0.5"
              width="1919"
              height="1439"
              stroke="#D0D5DD"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_7491_43998"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(720 -0.000171661) rotate(90) scale(1440 751.588)"
            >
              <stop />
              <stop offset="0.953125" stop-opacity="0" />
            </radialGradient>
            <clipPath id="clip0_7491_43998">
              <rect x="-240" width="1920" height="1440" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
