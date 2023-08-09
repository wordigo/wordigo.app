import { UploadCloud, type LucideIcon } from "lucide-react"

export interface ISettings {
    page_title: string | null,
    page_description: string | null,
}

export interface IImage {
    Icon: LucideIcon,
    color_title: string,
    title: string,
    description: string,
    label?: string
}

const SettingsData: ISettings = {
    page_title: "Dictionaries Settings",
    page_description: "Allows you to update the information of the dictionary you selected",
}

const Images: IImage = {
    color_title: "Click to upload",
    title: "or drag and drop",
    description: "SVG, PNG or JPG (max. 675x480px)",
    Icon: UploadCloud,
    label: "Image"
}

export {SettingsData, Images}