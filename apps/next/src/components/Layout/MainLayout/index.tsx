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
      <div
        className="h-screen w-full absolute top-0 left-0 -z-10"
        style={{
          background:
            "radial-gradient(137.05% 100% at 50% 0%, #FFD9E7 3.59%, #ECFCFF 34.79%, #FFFFFF 100%)",
        }}
      >
        <svg
          className="opacity-60 dark:opacity-[0.15] dark:!bg-none"
          width="100%"
          height="100%"
          viewBox="0 0 1440 820"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_343_6630"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="820"
          >
            <rect
              width="1440"
              height="820"
              fill="url(#paint0_radial_343_6630)"
            />
          </mask>
          <g mask="url(#mask0_343_6630)">
            <mask id="path-2-inside-1_343_6630" fill="white">
              <path d="M0 0H160V160H0V0Z" />
            </mask>
            <path d="M0 0H160V160H0V0Z" fill="white" />
            <path
              d="M160 160V161H161V160H160ZM159 0V160H161V0H159ZM160 159H0V161H160V159Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-2-inside-1_343_6630)"
            />
            <mask id="path-4-inside-2_343_6630" fill="white">
              <path d="M160 0H320V160H160V0Z" />
            </mask>
            <path d="M160 0H320V160H160V0Z" fill="white" />
            <path
              d="M320 160V161H321V160H320ZM319 0V160H321V0H319ZM320 159H160V161H320V159Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-4-inside-2_343_6630)"
            />
            <mask id="path-6-inside-3_343_6630" fill="white">
              <path d="M320 0H480V160H320V0Z" />
            </mask>
            <path d="M320 0H480V160H320V0Z" fill="white" />
            <path
              d="M480 160V161H481V160H480ZM479 0V160H481V0H479ZM480 159H320V161H480V159Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-6-inside-3_343_6630)"
            />
            <mask id="path-8-inside-4_343_6630" fill="white">
              <path d="M480 0H640V160H480V0Z" />
            </mask>
            <path d="M480 0H640V160H480V0Z" fill="white" />
            <path
              d="M640 160V161H641V160H640ZM639 0V160H641V0H639ZM640 159H480V161H640V159Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-8-inside-4_343_6630)"
            />
            <mask id="path-10-inside-5_343_6630" fill="white">
              <path d="M640 0H800V160H640V0Z" />
            </mask>
            <path d="M640 0H800V160H640V0Z" fill="white" />
            <path
              d="M800 160V161H801V160H800ZM799 0V160H801V0H799ZM800 159H640V161H800V159Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-10-inside-5_343_6630)"
            />
            <mask id="path-12-inside-6_343_6630" fill="white">
              <path d="M800 0H960V160H800V0Z" />
            </mask>
            <path d="M800 0H960V160H800V0Z" fill="#F6F6F8" />
            <path
              d="M960 160V161H961V160H960ZM959 0V160H961V0H959ZM960 159H800V161H960V159Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-12-inside-6_343_6630)"
            />
            <mask id="path-14-inside-7_343_6630" fill="white">
              <path d="M960 0H1120V160H960V0Z" />
            </mask>
            <path d="M960 0H1120V160H960V0Z" fill="white" />
            <path
              d="M1120 160V161H1121V160H1120ZM1119 0V160H1121V0H1119ZM1120 159H960V161H1120V159Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-14-inside-7_343_6630)"
            />
            <mask id="path-16-inside-8_343_6630" fill="white">
              <path d="M1120 0H1280V160H1120V0Z" />
            </mask>
            <path d="M1120 0H1280V160H1120V0Z" fill="white" />
            <path
              d="M1280 160V161H1281V160H1280ZM1279 0V160H1281V0H1279ZM1280 159H1120V161H1280V159Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-16-inside-8_343_6630)"
            />
            <mask id="path-18-inside-9_343_6630" fill="white">
              <path d="M1280 0H1440V160H1280V0Z" />
            </mask>
            <path d="M1280 0H1440V160H1280V0Z" fill="white" />
            <path
              d="M1440 159H1280V161H1440V159Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-18-inside-9_343_6630)"
            />
            <mask id="path-20-inside-10_343_6630" fill="white">
              <path d="M0 160H160V320H0V160Z" />
            </mask>
            <path d="M0 160H160V320H0V160Z" fill="white" />
            <path
              d="M160 320V321H161V320H160ZM159 160V320H161V160H159ZM160 319H0V321H160V319Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-20-inside-10_343_6630)"
            />
            <mask id="path-22-inside-11_343_6630" fill="white">
              <path d="M160 160H320V320H160V160Z" />
            </mask>
            <path d="M160 160H320V320H160V160Z" fill="white" />
            <path
              d="M320 320V321H321V320H320ZM319 160V320H321V160H319ZM320 319H160V321H320V319Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-22-inside-11_343_6630)"
            />
            <mask id="path-24-inside-12_343_6630" fill="white">
              <path d="M320 160H480V320H320V160Z" />
            </mask>
            <path d="M320 160H480V320H320V160Z" fill="white" />
            <path
              d="M480 320V321H481V320H480ZM479 160V320H481V160H479ZM480 319H320V321H480V319Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-24-inside-12_343_6630)"
            />
            <mask id="path-26-inside-13_343_6630" fill="white">
              <path d="M480 160H640V320H480V160Z" />
            </mask>
            <path d="M480 160H640V320H480V160Z" fill="white" />
            <path
              d="M640 320V321H641V320H640ZM639 160V320H641V160H639ZM640 319H480V321H640V319Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-26-inside-13_343_6630)"
            />
            <mask id="path-28-inside-14_343_6630" fill="white">
              <path d="M640 160H800V320H640V160Z" />
            </mask>
            <path d="M640 160H800V320H640V160Z" fill="white" />
            <path
              d="M800 320V321H801V320H800ZM799 160V320H801V160H799ZM800 319H640V321H800V319Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-28-inside-14_343_6630)"
            />
            <mask id="path-30-inside-15_343_6630" fill="white">
              <path d="M800 160H960V320H800V160Z" />
            </mask>
            <path d="M800 160H960V320H800V160Z" fill="white" />
            <path
              d="M960 320V321H961V320H960ZM959 160V320H961V160H959ZM960 319H800V321H960V319Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-30-inside-15_343_6630)"
            />
            <mask id="path-32-inside-16_343_6630" fill="white">
              <path d="M960 160H1120V320H960V160Z" />
            </mask>
            <path d="M960 160H1120V320H960V160Z" fill="white" />
            <path
              d="M1120 320V321H1121V320H1120ZM1119 160V320H1121V160H1119ZM1120 319H960V321H1120V319Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-32-inside-16_343_6630)"
            />
            <mask id="path-34-inside-17_343_6630" fill="white">
              <path d="M1120 160H1280V320H1120V160Z" />
            </mask>
            <path d="M1120 160H1280V320H1120V160Z" fill="white" />
            <path
              d="M1280 320V321H1281V320H1280ZM1279 160V320H1281V160H1279ZM1280 319H1120V321H1280V319Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-34-inside-17_343_6630)"
            />
            <mask id="path-36-inside-18_343_6630" fill="white">
              <path d="M1280 160H1440V320H1280V160Z" />
            </mask>
            <path d="M1280 160H1440V320H1280V160Z" fill="white" />
            <path
              d="M1440 319H1280V321H1440V319Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-36-inside-18_343_6630)"
            />
            <mask id="path-38-inside-19_343_6630" fill="white">
              <path d="M0 320H160V480H0V320Z" />
            </mask>
            <path d="M0 320H160V480H0V320Z" fill="white" />
            <path
              d="M160 480V481H161V480H160ZM159 320V480H161V320H159ZM160 479H0V481H160V479Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-38-inside-19_343_6630)"
            />
            <mask id="path-40-inside-20_343_6630" fill="white">
              <path d="M160 320H320V480H160V320Z" />
            </mask>
            <path d="M160 320H320V480H160V320Z" fill="white" />
            <path
              d="M320 480V481H321V480H320ZM319 320V480H321V320H319ZM320 479H160V481H320V479Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-40-inside-20_343_6630)"
            />
            <mask id="path-42-inside-21_343_6630" fill="white">
              <path d="M320 320H480V480H320V320Z" />
            </mask>
            <path d="M320 320H480V480H320V320Z" fill="#F6F6F8" />
            <path
              d="M480 480V481H481V480H480ZM479 320V480H481V320H479ZM480 479H320V481H480V479Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-42-inside-21_343_6630)"
            />
            <mask id="path-44-inside-22_343_6630" fill="white">
              <path d="M480 320H640V480H480V320Z" />
            </mask>
            <path d="M480 320H640V480H480V320Z" fill="white" />
            <path
              d="M640 480V481H641V480H640ZM639 320V480H641V320H639ZM640 479H480V481H640V479Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-44-inside-22_343_6630)"
            />
            <mask id="path-46-inside-23_343_6630" fill="white">
              <path d="M640 320H800V480H640V320Z" />
            </mask>
            <path d="M640 320H800V480H640V320Z" fill="white" />
            <path
              d="M800 480V481H801V480H800ZM799 320V480H801V320H799ZM800 479H640V481H800V479Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-46-inside-23_343_6630)"
            />
            <mask id="path-48-inside-24_343_6630" fill="white">
              <path d="M800 320H960V480H800V320Z" />
            </mask>
            <path d="M800 320H960V480H800V320Z" fill="white" />
            <path
              d="M960 480V481H961V480H960ZM959 320V480H961V320H959ZM960 479H800V481H960V479Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-48-inside-24_343_6630)"
            />
            <mask id="path-50-inside-25_343_6630" fill="white">
              <path d="M960 320H1120V480H960V320Z" />
            </mask>
            <path d="M960 320H1120V480H960V320Z" fill="white" />
            <path
              d="M1120 480V481H1121V480H1120ZM1119 320V480H1121V320H1119ZM1120 479H960V481H1120V479Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-50-inside-25_343_6630)"
            />
            <mask id="path-52-inside-26_343_6630" fill="white">
              <path d="M1120 320H1280V480H1120V320Z" />
            </mask>
            <path d="M1120 320H1280V480H1120V320Z" fill="white" />
            <path
              d="M1280 480V481H1281V480H1280ZM1279 320V480H1281V320H1279ZM1280 479H1120V481H1280V479Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-52-inside-26_343_6630)"
            />
            <mask id="path-54-inside-27_343_6630" fill="white">
              <path d="M1280 320H1440V480H1280V320Z" />
            </mask>
            <path d="M1280 320H1440V480H1280V320Z" fill="white" />
            <path
              d="M1440 479H1280V481H1440V479Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-54-inside-27_343_6630)"
            />
            <mask id="path-56-inside-28_343_6630" fill="white">
              <path d="M0 480H160V640H0V480Z" />
            </mask>
            <path d="M0 480H160V640H0V480Z" fill="white" />
            <path
              d="M160 640V641H161V640H160ZM159 480V640H161V480H159ZM160 639H0V641H160V639Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-56-inside-28_343_6630)"
            />
            <mask id="path-58-inside-29_343_6630" fill="white">
              <path d="M160 480H320V640H160V480Z" />
            </mask>
            <path d="M160 480H320V640H160V480Z" fill="white" />
            <path
              d="M320 640V641H321V640H320ZM319 480V640H321V480H319ZM320 639H160V641H320V639Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-58-inside-29_343_6630)"
            />
            <mask id="path-60-inside-30_343_6630" fill="white">
              <path d="M320 480H480V640H320V480Z" />
            </mask>
            <path d="M320 480H480V640H320V480Z" fill="white" />
            <path
              d="M480 640V641H481V640H480ZM479 480V640H481V480H479ZM480 639H320V641H480V639Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-60-inside-30_343_6630)"
            />
            <mask id="path-62-inside-31_343_6630" fill="white">
              <path d="M480 480H640V640H480V480Z" />
            </mask>
            <path d="M480 480H640V640H480V480Z" fill="white" />
            <path
              d="M640 640V641H641V640H640ZM639 480V640H641V480H639ZM640 639H480V641H640V639Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-62-inside-31_343_6630)"
            />
            <mask id="path-64-inside-32_343_6630" fill="white">
              <path d="M640 480H800V640H640V480Z" />
            </mask>
            <path d="M640 480H800V640H640V480Z" fill="white" />
            <path
              d="M800 640V641H801V640H800ZM799 480V640H801V480H799ZM800 639H640V641H800V639Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-64-inside-32_343_6630)"
            />
            <mask id="path-66-inside-33_343_6630" fill="white">
              <path d="M800 480H960V640H800V480Z" />
            </mask>
            <path d="M800 480H960V640H800V480Z" fill="white" />
            <path
              d="M960 640V641H961V640H960ZM959 480V640H961V480H959ZM960 639H800V641H960V639Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-66-inside-33_343_6630)"
            />
            <mask id="path-68-inside-34_343_6630" fill="white">
              <path d="M960 480H1120V640H960V480Z" />
            </mask>
            <path d="M960 480H1120V640H960V480Z" fill="#F6F6F8" />
            <path
              d="M1120 640V641H1121V640H1120ZM1119 480V640H1121V480H1119ZM1120 639H960V641H1120V639Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-68-inside-34_343_6630)"
            />
            <mask id="path-70-inside-35_343_6630" fill="white">
              <path d="M1120 480H1280V640H1120V480Z" />
            </mask>
            <path d="M1120 480H1280V640H1120V480Z" fill="white" />
            <path
              d="M1280 640V641H1281V640H1280ZM1279 480V640H1281V480H1279ZM1280 639H1120V641H1280V639Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-70-inside-35_343_6630)"
            />
            <mask id="path-72-inside-36_343_6630" fill="white">
              <path d="M1280 480H1440V640H1280V480Z" />
            </mask>
            <path d="M1280 480H1440V640H1280V480Z" fill="white" />
            <path
              d="M1440 639H1280V641H1440V639Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-72-inside-36_343_6630)"
            />
            <mask id="path-74-inside-37_343_6630" fill="white">
              <path d="M0 640H160V800H0V640Z" />
            </mask>
            <path d="M0 640H160V800H0V640Z" fill="white" />
            <path
              d="M160 800V801H161V800H160ZM159 640V800H161V640H159ZM160 799H0V801H160V799Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-74-inside-37_343_6630)"
            />
            <mask id="path-76-inside-38_343_6630" fill="white">
              <path d="M160 640H320V800H160V640Z" />
            </mask>
            <path d="M160 640H320V800H160V640Z" fill="white" />
            <path
              d="M320 800V801H321V800H320ZM319 640V800H321V640H319ZM320 799H160V801H320V799Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-76-inside-38_343_6630)"
            />
            <mask id="path-78-inside-39_343_6630" fill="white">
              <path d="M320 640H480V800H320V640Z" />
            </mask>
            <path d="M320 640H480V800H320V640Z" fill="white" />
            <path
              d="M480 800V801H481V800H480ZM479 640V800H481V640H479ZM480 799H320V801H480V799Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-78-inside-39_343_6630)"
            />
            <mask id="path-80-inside-40_343_6630" fill="white">
              <path d="M480 640H640V800H480V640Z" />
            </mask>
            <path d="M480 640H640V800H480V640Z" fill="white" />
            <path
              d="M640 800V801H641V800H640ZM639 640V800H641V640H639ZM640 799H480V801H640V799Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-80-inside-40_343_6630)"
            />
            <mask id="path-82-inside-41_343_6630" fill="white">
              <path d="M640 640H800V800H640V640Z" />
            </mask>
            <path d="M640 640H800V800H640V640Z" fill="white" />
            <path
              d="M800 800V801H801V800H800ZM799 640V800H801V640H799ZM800 799H640V801H800V799Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-82-inside-41_343_6630)"
            />
            <mask id="path-84-inside-42_343_6630" fill="white">
              <path d="M800 640H960V800H800V640Z" />
            </mask>
            <path d="M800 640H960V800H800V640Z" fill="white" />
            <path
              d="M960 800V801H961V800H960ZM959 640V800H961V640H959ZM960 799H800V801H960V799Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-84-inside-42_343_6630)"
            />
            <mask id="path-86-inside-43_343_6630" fill="white">
              <path d="M960 640H1120V800H960V640Z" />
            </mask>
            <path d="M960 640H1120V800H960V640Z" fill="white" />
            <path
              d="M1120 800V801H1121V800H1120ZM1119 640V800H1121V640H1119ZM1120 799H960V801H1120V799Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-86-inside-43_343_6630)"
            />
            <mask id="path-88-inside-44_343_6630" fill="white">
              <path d="M1120 640H1280V800H1120V640Z" />
            </mask>
            <path d="M1120 640H1280V800H1120V640Z" fill="#F6F6F8" />
            <path
              d="M1280 800V801H1281V800H1280ZM1279 640V800H1281V640H1279ZM1280 799H1120V801H1280V799Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-88-inside-44_343_6630)"
            />
            <mask id="path-90-inside-45_343_6630" fill="white">
              <path d="M1280 640H1440V800H1280V640Z" />
            </mask>
            <path d="M1280 640H1440V800H1280V640Z" fill="white" />
            <path
              d="M1440 799H1280V801H1440V799Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-90-inside-45_343_6630)"
            />
            <mask id="path-92-inside-46_343_6630" fill="white">
              <path d="M0 800H160V960H0V800Z" />
            </mask>
            <path d="M0 800H160V960H0V800Z" fill="white" />
            <path
              d="M160 960V961H161V960H160ZM159 800V960H161V800H159ZM160 959H0V961H160V959Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-92-inside-46_343_6630)"
            />
            <mask id="path-94-inside-47_343_6630" fill="white">
              <path d="M160 800H320V960H160V800Z" />
            </mask>
            <path d="M160 800H320V960H160V800Z" fill="white" />
            <path
              d="M320 960V961H321V960H320ZM319 800V960H321V800H319ZM320 959H160V961H320V959Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-94-inside-47_343_6630)"
            />
            <mask id="path-96-inside-48_343_6630" fill="white">
              <path d="M320 800H480V960H320V800Z" />
            </mask>
            <path d="M320 800H480V960H320V800Z" fill="white" />
            <path
              d="M480 960V961H481V960H480ZM479 800V960H481V800H479ZM480 959H320V961H480V959Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-96-inside-48_343_6630)"
            />
            <mask id="path-98-inside-49_343_6630" fill="white">
              <path d="M480 800H640V960H480V800Z" />
            </mask>
            <path d="M480 800H640V960H480V800Z" fill="white" />
            <path
              d="M640 960V961H641V960H640ZM639 800V960H641V800H639ZM640 959H480V961H640V959Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-98-inside-49_343_6630)"
            />
            <mask id="path-100-inside-50_343_6630" fill="white">
              <path d="M640 800H800V960H640V800Z" />
            </mask>
            <path d="M640 800H800V960H640V800Z" fill="white" />
            <path
              d="M800 960V961H801V960H800ZM799 800V960H801V800H799ZM800 959H640V961H800V959Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-100-inside-50_343_6630)"
            />
            <mask id="path-102-inside-51_343_6630" fill="white">
              <path d="M800 800H960V960H800V800Z" />
            </mask>
            <path d="M800 800H960V960H800V800Z" fill="white" />
            <path
              d="M960 960V961H961V960H960ZM959 800V960H961V800H959ZM960 959H800V961H960V959Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-102-inside-51_343_6630)"
            />
            <mask id="path-104-inside-52_343_6630" fill="white">
              <path d="M960 800H1120V960H960V800Z" />
            </mask>
            <path d="M960 800H1120V960H960V800Z" fill="white" />
            <path
              d="M1120 960V961H1121V960H1120ZM1119 800V960H1121V800H1119ZM1120 959H960V961H1120V959Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-104-inside-52_343_6630)"
            />
            <mask id="path-106-inside-53_343_6630" fill="white">
              <path d="M1120 800H1280V960H1120V800Z" />
            </mask>
            <path d="M1120 800H1280V960H1120V800Z" fill="white" />
            <path
              d="M1280 960V961H1281V960H1280ZM1279 800V960H1281V800H1279ZM1280 959H1120V961H1280V959Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-106-inside-53_343_6630)"
            />
            <mask id="path-108-inside-54_343_6630" fill="white">
              <path d="M1280 800H1440V960H1280V800Z" />
            </mask>
            <path d="M1280 800H1440V960H1280V800Z" fill="white" />
            <path
              d="M1440 959H1280V961H1440V959Z"
              fill="#2F2B43"
              fill-opacity="0.2"
              mask="url(#path-108-inside-54_343_6630)"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_343_6630"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(720 -7.94571e-05) rotate(90) scale(666.535 689.488)"
            >
              <stop stop-color="white" />
              <stop offset="0.991144" stop-color="white" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {showBanner && <Banner />}
      <HomeHeader />

      <main className="container flex flex-col gap-y-16 sm:gap-y-20 md:gap-y-24 lg:gap-y-28 xl:gap-y-32 pt-6 sm:pt-10 md:pt-14 lg:pt-[72px] xl:pt-[88px] pb-[72px] sm:pb-24 md:pb-[104px] lg:pb-28">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
