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
import GoIcon from "@/assets/icons/GoIcon";
import DokkuIcon from "@/assets/icons/DokkuIcon";
import GraphQLIcon from "@/assets/icons/GraphQLIcon";
import RedisIcon from "@/assets/icons/RedisIcon";
import SocketIoIcon from "@/assets/icons/SocketIoIcon";
import SupabaseIcon from "@/assets/icons/SupabaseIcon";
import RocketChatIcon from "@/assets/icons/RocketChatIcon";
import RemixIcon from "@/assets/icons/RemixIcon";
import RazorpayIcon from "@/assets/icons/RazorpayIcon";

// app
export const NAME = "Monu Chouhan";
export const NAME_SHORT = "Monu";
export const EMAIL = "chouhan.monu07@gmail.com";

export const SOCIAL_LINKS = {
  linkedIn: "https://www.linkedin.com/in/monu-chouhan-5887991b3/",
  twitter: "https://x.com/_monu_chouhan",
  instagram: "https://www.instagram.com/__monu__chouhan____/",
  discord: "https://discord.com/users/monuchouhan_58246",
};

export const CONTACT_PAGE = {
  label: "Contact",
  href: "/contact",
};
export const HOME_PAGE = {
  label: "Home",
  href: "/",
};
export const PROJECTS_PAGE = {
  label: "Projects",
  href: "/projects",
};
export const ABOUT_PAGE = {
  label: "About",
  href: "/about",
};

export const MAIN_NAV = [HOME_PAGE, PROJECTS_PAGE, ABOUT_PAGE, CONTACT_PAGE];

// icons
const techIconProps = {
  className: "w-5",
};
const techTextProps = {
  className: "text-gray-400",
};
export const HTML = {
  name: "html",
  element: (
    <>
      <HtmlIcon {...techIconProps} />
      <span {...techTextProps}>HTML</span>
    </>
  ),
};

export const CSS = {
  name: "css",
  element: (
    <>
      <CssIcon {...techIconProps} />
      <span {...techTextProps}>CSS</span>
    </>
  ),
};

export const JAVASCRIPT = {
  name: "javascript",
  element: (
    <>
      <JsIcon className="w-5 rounded-xl" />
      <span {...techTextProps}>JavaScript</span>
    </>
  ),
};

export const TYPESCRIPT = {
  name: "typescript",
  element: (
    <>
      <TsIcon className="w-5 rounded-md" />
      <span {...techTextProps}>TypeScript</span>
    </>
  ),
};

export const TAILWIND = {
  name: "tailwind css",
  element: (
    <>
      <TailwindIcon {...techIconProps} />
      <span {...techTextProps}>Tailwind CSS</span>
    </>
  ),
};

export const REACT = {
  name: "react",
  element: (
    <>
      <ReactIcon {...techIconProps} />
      <span {...techTextProps}>React</span>
    </>
  ),
};

export const NEXTJS = {
  name: "next.js",
  element: (
    <>
      <NextJsIcon className="w-[22px] h-[21px] bg-gray-100 rounded-full" />
      <span {...techTextProps}>Next.js</span>
    </>
  ),
};

export const NODEJS = {
  name: "node.js",
  element: (
    <>
      <NodeIcon {...techIconProps} />
      <span {...techTextProps}>Node.js</span>
    </>
  ),
};

export const EXPRESS = {
  name: "express.js",
  element: (
    <>
      <ExpressJsIcon {...techIconProps} />
      <span {...techTextProps}>Express.js</span>
    </>
  ),
};

export const GRAPHQL = {
  name: "graphql",
  element: (
    <>
      <GraphQLIcon {...techIconProps} />
      <span {...techTextProps}>GraphQL</span>
    </>
  ),
};

export const REDIS = {
  name: "redis",
  element: (
    <>
      <RedisIcon {...techIconProps} />
      <span {...techTextProps}>Redis</span>
    </>
  ),
};

export const NESTJS = {
  name: "nestjs",
  element: (
    <>
      <NestJsIcon {...techIconProps} />
      <span {...techTextProps}>NestJS</span>
    </>
  ),
};

export const POSTGRESQL = {
  name: "postgresql",
  element: (
    <>
      <PostgresqlIcon {...techIconProps} />
      <span {...techTextProps}>PostgreSQL</span>
    </>
  ),
};

export const MONGODB = {
  name: "mongodb",
  element: (
    <>
      <MongoDbIcon {...techIconProps} />
      <span {...techTextProps}>MongoDB</span>
    </>
  ),
};

export const MYSQL = {
  name: "mysql",
  element: (
    <>
      <MysqlIcon {...techIconProps} />
      <span {...techTextProps}>MySQL</span>
    </>
  ),
};

export const DOCKER = {
  name: "docker",
  element: (
    <>
      <DockerIcon {...techIconProps} />
      <span {...techTextProps}>Docker</span>
    </>
  ),
};

export const AWS = {
  name: "aws",
  element: (
    <>
      <AwsIcon {...techIconProps} />
      <span {...techTextProps}>AWS</span>
    </>
  ),
};

export const GIT = {
  name: "git",
  element: (
    <>
      <GitIcon {...techIconProps} />
      <span {...techTextProps}>Git</span>
    </>
  ),
};

export const GITHUB = {
  name: "github",
  element: (
    <>
      <GithubIcon {...techIconProps} />
      <span {...techTextProps}>GitHub</span>
    </>
  ),
};

export const REMIX = {
  name: "remix",
  element: (
    <>
      <RemixIcon className="w-4" />
      <span {...techTextProps}>Remix</span>
    </>
  ),
};

export const FIGMA = {
  name: "figma",
  element: (
    <>
      <FigmaIcon {...techIconProps} />
      <span {...techTextProps}>Figma</span>
    </>
  ),
};

export const TRELLO = {
  name: "trello",
  element: (
    <>
      <TrelloIcon {...techIconProps} />
      <span {...techTextProps}>Trello</span>
    </>
  ),
};

export const VERCEL = {
  name: "vercel",
  element: (
    <>
      <VercelIcon {...techIconProps} />
      <span {...techTextProps}>Vercel</span>
    </>
  ),
};

export const SHOPIFY = {
  name: "shopify",
  element: (
    <>
      <ShopifyIcon {...techIconProps} />
      <span {...techTextProps}>Shopify</span>
    </>
  ),
};

export const GO = {
  name: "go",
  element: (
    <>
      <GoIcon className="w-8" />
      <span {...techTextProps}>Go</span>
    </>
  ),
};

export const DOKKU = {
  name: "Dokku",
  element: (
    <>
      <DokkuIcon className="w-6" />
      <span {...techTextProps}>Dokku</span>
    </>
  ),
};

export const SOCKETIO = {
  name: "socket.io",
  element: (
    <>
      <SocketIoIcon {...techIconProps} />
      <span {...techTextProps}>Sokcet.IO</span>
    </>
  ),
};

export const SUPABASE = {
  name: "supabase",
  element: (
    <>
      <SupabaseIcon {...techIconProps} />
      <span {...techTextProps}>Supabase</span>
    </>
  ),
};

export const ROCKETCHAT = {
  name: "rocket.chat",
  element: (
    <>
      <RocketChatIcon className="w-6" />
      <span {...techTextProps}>Rocket.Chat</span>
    </>
  ),
};

export const RAZORPAY = {
  name: "razorpay",
  element: (
    <>
      <RazorpayIcon {...techIconProps} />
      <span {...techTextProps}>Razorpay</span>
    </>
  ),
};

export const TECHNOLOGIES = [
  HTML,
  CSS,
  JAVASCRIPT,
  TYPESCRIPT,
  TAILWIND,
  REACT,
  NEXTJS,
  REMIX,
  NODEJS,
  GO,
  EXPRESS,
  NESTJS,
  POSTGRESQL,
  MONGODB,
  MYSQL,
  DOCKER,
  AWS,
  DOKKU,
  GRAPHQL,
  REDIS,
  SOCKETIO,
  RAZORPAY,
  SUPABASE,
  ROCKETCHAT,
  SHOPIFY,
  GIT,
  GITHUB,
  FIGMA,
  TRELLO,
  VERCEL,
];
