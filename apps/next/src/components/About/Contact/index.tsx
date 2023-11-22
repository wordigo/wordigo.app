import useContactsList, { type IContact } from "./contact.constant";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const ContactSection = () => {
  const { t } = useTranslation();

  const contactList = useContactsList();

  return (
    <section className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20">
      <span className="text-center px-32 flex flex-col max-lg:px-20 max-md:px-4">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
          {t("contact.title")}
        </h2>
        <p className="sm:text-lg mt-4 sm:mt-5 md:mt-6 text-muted-foreground">
          {t("contact.subtitle")}
        </p>
      </span>
      <div className="grid grid-cols-3 gap-x-8 w-full max-md:grid-cols-1 max-lg:grid-cols-2">
        {contactList.map((item) => (
          <ContactSection.Item key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

ContactSection.Item = ({
  description,
  href,
  link_name,
  title,
  Icon,
}: IContact) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="p-3 w-6 h-6 box-content border rounded-[0.625rem]" />
      <h3 className="mt-5 text-xl font-semibold text-center">{title}</h3>
      <p className="mt-2 text-center text-muted-foreground text-base">
        {description}
      </p>
      <Link href={href} className="mt-5 text-base font-semibold text-center">
        {link_name}
      </Link>
    </div>
  );
};

export default ContactSection;
