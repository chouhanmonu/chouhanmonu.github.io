import DiscordIcon from "@/assets/icons/DiscordIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import { AtSymbolIcon } from "@heroicons/react/24/outline";

export const JSX_SOCIAL_LINKS = [
  {
    icon: <AtSymbolIcon className="w-5" />,
    label: <span>Email</span>,
  },
  {
    icon: <LinkedInIcon isColored={true} className="w-6" />,
    label: <span>LinkedIn</span>,
  },
  {
    icon: <TwitterIcon className="w-4" />,
    label: <span>Twitter</span>,
  },
  {
    icon: <InstagramIcon isColored={true} className="w-5" />,
    label: <span>Instagram</span>,
  },
  {
    icon: <DiscordIcon className="w-5" isColored={true} />,
    label: <span>Discord</span>,
  },
];
