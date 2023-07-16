export interface IContact {
    title: string,
    description: string,
    link_name: string,
    href: string,
}

const Contact: IContact[] = [{
    href: "mailto:noreply@wordigo.com",
    title: "E - posta üzerinden iletişim",
    description: "Sorunuz veya farklı konular için bize e - posta gönderebilirsiniz.",
    link_name: "E - posta gönderin < ArrowRight/>"
}]

export default Contact