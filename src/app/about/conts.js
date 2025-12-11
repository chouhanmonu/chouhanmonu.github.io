import GitIcon from "@/assets/icons/GitIcon";
import HtmlIcon from "@/assets/icons/HtmlIcon";
import JsIcon from "@/assets/icons/JsIcon";
import MongoDbIcon from "@/assets/icons/MongoDbIcon";
import MysqlIcon from "@/assets/icons/MysqlIcon";
import NestJsIcon from "@/assets/icons/NestJsIcon";
import NextJsIcon from "@/assets/icons/NextJsIcon";
import NodeIcon from "@/assets/icons/NodeIcon";
import PostgresqlIcon from "@/assets/icons/PostgresqlIcon";
import ReactIcon from "@/assets/icons/ReactIcon";
import ShopifyIcon from "@/assets/icons/ShopifyIcon";
import TailwindIcon from "@/assets/icons/TailwindIcon";
import TrelloIcon from "@/assets/icons/TrelloIcon";
import TsIcon from "@/assets/icons/TsIcon";
import VercelIcon from "@/assets/icons/VercelIcon";
import AwsIcon from "@/assets/icons/AwsIcon";
import CssIcon from "@/assets/icons/CssIcon";
import DockerIcon from "@/assets/icons/DockerIcon";
import ExpressJsIcon from "@/assets/icons/ExpressJsIcon";
import FigmaIcon from "@/assets/icons/FigmaIcon";
import GithubIcon from "@/assets/icons/GithubIcon";

const techIconProps = {
  className: "w-5",
};
const techTextProps = {
  className: "text-gray-400",
};

export const TECHNOLOGIES = [
  <>
    <HtmlIcon {...techIconProps} />
    <span {...techTextProps}>HTML</span>
  </>,
  <>
    <CssIcon {...techIconProps} />
    <span {...techTextProps}>CSS</span>
  </>,
  <>
    <JsIcon className="w-5 rounded-xl" />
    <span {...techTextProps}>JavaScript</span>
  </>,
  <>
    <TsIcon className="w-5 rounded-md" />
    <span {...techTextProps}>TypeScript</span>
  </>,
  <>
    <TailwindIcon {...techIconProps} />
    <span {...techTextProps}>Tailwind CSS</span>
  </>,
  <>
    <ReactIcon {...techIconProps} />
    <span {...techTextProps}>React</span>
  </>,
  <>
    <NextJsIcon className="w-[22px] h-[21px] bg-gray-100 rounded-full" />
    <span {...techTextProps}>Next.js</span>
  </>,
  <>
    <NodeIcon {...techIconProps} />
    <span {...techTextProps}>Node.js</span>
  </>,
  <>
    <ExpressJsIcon {...techIconProps} />
    <span {...techTextProps}>Express.js</span>
  </>,
  <>
    <NestJsIcon {...techIconProps} />
    <span {...techTextProps}>NestJS</span>
  </>,
  <>
    <PostgresqlIcon {...techIconProps} />
    <span {...techTextProps}>PostgreSQL</span>
  </>,
  <>
    <MongoDbIcon {...techIconProps} />
    <span {...techTextProps}>MongoDB</span>
  </>,
  <>
    <MysqlIcon {...techIconProps} />
    <span {...techTextProps}>MySQL</span>
  </>,
  <>
    <DockerIcon {...techIconProps} />
    <span {...techTextProps}>Docker</span>
  </>,
  <>
    <AwsIcon {...techIconProps} />
    <span {...techTextProps}>AWS</span>
  </>,
  <>
    <GitIcon {...techIconProps} />
    <span {...techTextProps}>Git</span>
  </>,
  <>
    <GithubIcon {...techIconProps} />
    <span {...techTextProps}>GitHub</span>
  </>,
  <>
    <FigmaIcon {...techIconProps} />
    <span {...techTextProps}>Figma</span>
  </>,
  <>
    <TrelloIcon {...techIconProps} />
    <span {...techTextProps}>Trello</span>
  </>,
  <>
    <VercelIcon {...techIconProps} />
    <span {...techTextProps}>Vercel</span>
  </>,
  <>
    <ShopifyIcon {...techIconProps} />
    <span {...techTextProps}>Shopify</span>
  </>,
];
