import { useTheme } from "next-themes";

export default function ProductHunt({ height, width }: any) {
  const { theme, systemTheme } = useTheme();

  const themes =
    theme === "system" ? systemTheme : theme === "dark" ? "ligth" : "dark";

  return (
    <a
      href="https://www.producthunt.com/products/devsozluk/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-devsozluk"
      target="_blank"
    >
      <img
        src={
          "https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=549647&theme=" +
          themes
        }
        alt="DevS&#0246;zl&#0252;k - Open&#0032;source&#0032;social&#0032;platform&#0032;for&#0032;developers&#0046; | Product Hunt"
        className="width: 250px; height: 54px;"
        width={width}
        height={height}
      />
    </a>
  );
}
