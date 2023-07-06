import Footer from "@/components/home/Footers/Footer";
import Section_1 from "@/components/home/Section1/Section1_Container";
import Section2_Container from "@/components/home/Section2/Section2_Container";
import Section3_Container from "@/components/home/Section3/Section3_Container";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export default function index() {
  const { t } = useTranslation("common");
  console.log(t("welcome"));

  return (
    <div>
      <div className="flex flex-col gap-y-10">
        <div>{t("welcome")}</div>
        <div>
          <Section_1></Section_1>
        </div>
        <Section2_Container></Section2_Container>
        <Section3_Container></Section3_Container>
        <Footer></Footer>
      </div>
    </div>
  );
}

// export async function getStaticProps({ locale }) {
//   console.log(locale);
//   const test = await serverSideTranslations(locale, ["common"]);
//   console.log(test);

//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//       // Will be passed to the page component as props
//     },
//   };
// }
