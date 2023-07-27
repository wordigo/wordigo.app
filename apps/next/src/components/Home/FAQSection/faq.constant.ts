import { ArrowLeftRight, Gift, Languages, type LucideIcon, Wallet, WifiOff, XCircle } from "lucide-react";

export interface Question {
  question: string;
  answer: string;
  Icon: LucideIcon;
}

const FAQ: Question[] = [
  {
    question: "What is the pricing for the language learning app?",
    answer:
      "The pricing for our language learning app varies based on the subscription plan you choose. We offer monthly and yearly plans with different levels of access to courses and features.",
    Icon: Wallet,
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "You can easily cancel your subscription by logging into your account, navigating to the 'Billing' section, and selecting the 'Cancel Subscription' option. Please note that cancellation may take effect at the end of your current billing period.",
    Icon: XCircle,
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 7-day free trial for new users. During the trial period, you'll have access to all features and courses to explore our app and see if it fits your language learning needs.",
    Icon: Gift,
  },
  {
    question: "How can I change my language preferences?",
    answer:
      "To change your language preferences, go to the 'Settings' menu in your account. There, you can select the target language you want to learn and adjust other language-related settings.",
    Icon: Languages,
  },
  {
    question: "Is offline learning available?",
    answer:
      "Yes, offline learning is available for our subscribers. You can download course materials and lessons in advance to access them offline when you don't have an internet connection.",
    Icon: WifiOff,
  },
  {
    question: "Can I switch my subscription plan?",
    answer:
      "Certainly! You can switch your subscription plan anytime by visiting the 'Billing' section in your account. Choose the new plan you'd like to subscribe to, and any remaining credit from your current plan will be prorated to the new one.",
    Icon: ArrowLeftRight,
  },
];

export default FAQ;
