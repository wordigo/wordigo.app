import Link from "next/link";
import { useTranslation } from "next-i18next";

import useContactsList, { type IContact } from "./contact.constant";

const ContactSection = () => {
  const { t } = useTranslation();

  const contactList = useContactsList();

  return (
    <section className="px-20 py-24 w-full flex flex-col items-center max-lg:px-9 max-lg:py-12 max-md:px-0">
      <span className="px-32 flex flex-col max-lg:px-20 max-md:px-4">
        <h2 className="text-4xl font-semibold text-center max-lg:text-3xl">{t("contact.title")}</h2>
        <p className="mt-6 text-xl text-muted-foreground text-center max-lg:text-lg">{t("contact.subtitle")}</p>
      </span>
      <div className="grid grid-cols-3 gap-x-8 mt-24 w-full px-8 max-md:grid-cols-1 max-lg:grid-cols-2">
        {contactList.map((item) => (
          <ContactSection.Item key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

ContactSection.Item = ({ description, href, link_name, title, Icon }: IContact) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="p-3 w-6 h-6 box-content border rounded-[0.625rem]" />
      <h3 className="mt-5 text-xl font-semibold text-center">{title}</h3>
      <p className="mt-2 text-center text-muted-foreground text-base">{description}</p>
      <Link href={href} className="mt-5 text-base font-semibold text-center">
        {link_name}
      </Link>
    </div>
  );
};

export default ContactSection;
