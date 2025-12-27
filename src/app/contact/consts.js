import DiscordIcon from "@/assets/icons/DiscordIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import { EMAIL, SOCIAL_LINKS } from "@/utils/consts";
import { AtSymbolIcon } from "@heroicons/react/24/outline";

export const JSX_SOCIAL_LINKS = [
  {
    icon: <AtSymbolIcon className="w-5" />,
    label: <span>Email</span>,
    link: `mailto:${EMAIL}`,
  },
  {
    icon: <LinkedInIcon isColored={true} className="w-6" />,
    label: <span>LinkedIn</span>,
    link: SOCIAL_LINKS.linkedIn,
  },
  {
    icon: <TwitterIcon className="w-4" />,
    label: <span>Twitter</span>,
    link: SOCIAL_LINKS.twitter,
  },
  {
    icon: <InstagramIcon isColored={true} className="w-5" />,
    label: <span>Instagram</span>,
    link: SOCIAL_LINKS.instagram,
  },
  {
    icon: <DiscordIcon className="w-5" isColored={true} />,
    label: <span>Discord</span>,
    link: SOCIAL_LINKS.discord,
  },
];
