import Link from "next/link";
import { useTranslation } from "next-i18next";

import useContactsList, { type IContact } from "./contact.constant";

const ContactSection = () => {
  const { t } = useTranslation();

  const contactList = useContactsList();

  return (
    <section className="px-20 py-24 w-full flex flex-col items-center">
      <span className="px-32 flex flex-col">
        <h2 className="text-4xl font-semibold text-center">{t("contact.title")}</h2>
        <p className="mt-6 text-xl text-muted-foreground text-center">{t("contact.subtitle")}</p>
      </span>
      <div className="grid grid-cols-3 gap-x-8 mt-24 w-full px-8">
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
