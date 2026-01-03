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
export const APP_URL = "https://chouhanmonu.github.io";
export const MY_GITHUB_LINK = "https://github.com/chouhanmonu";
export const CURRENT_COMPANY_NAME = "GreyAxis";

export const SOCIAL_LINKS = {
  linkedIn: "https://www.linkedin.com/in/chouhanmonu07",
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
  className: "text-gray-400 transition-colors light:text-gray-600 child",
};
export const HTML = {
  name: "html",
  element: (
    <>
      <HtmlIcon {...techIconProps} />
      <span {...techTextProps}>HTML</span>
    </>
  ),
  link: "https://html.spec.whatwg.org",
};

export const CSS = {
  name: "css",
  element: (
    <>
      <CssIcon {...techIconProps} />
      <span {...techTextProps}>CSS</span>
    </>
  ),
  link: "https://www.w3.org/Style/CSS/",
};

export const JAVASCRIPT = {
  name: "javascript",
  element: (
    <>
      <JsIcon className="w-5 rounded-xl" />
      <span {...techTextProps}>JavaScript</span>
    </>
  ),
  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
};

export const TYPESCRIPT = {
  name: "typescript",
  element: (
    <>
      <TsIcon className="w-5 rounded-md" />
      <span {...techTextProps}>TypeScript</span>
    </>
  ),
  link: "https://www.typescriptlang.org/",
};

export const TAILWIND = {
  name: "tailwind css",
  element: (
    <>
      <TailwindIcon {...techIconProps} />
      <span {...techTextProps}>Tailwind CSS</span>
    </>
  ),
  link: "https://tailwindcss.com/",
};

export const REACT = {
  name: "react",
  element: (
    <>
      <ReactIcon {...techIconProps} />
      <span {...techTextProps}>React</span>
    </>
  ),
  link: "https://react.dev/",
};

export const NEXTJS = {
  name: "next.js",
  element: (
    <>
      <NextJsIcon className="w-[22px] h-[21px] bg-gray-100 rounded-full" />
      <span {...techTextProps}>Next.js</span>
    </>
  ),
  link: "https://nextjs.org/",
};

export const NODEJS = {
  name: "node.js",
  element: (
    <>
      <NodeIcon {...techIconProps} />
      <span {...techTextProps}>Node.js</span>
    </>
  ),
  link: "https://nodejs.org/",
};

export const EXPRESS = {
  name: "express.js",
  element: (
    <>
      <ExpressJsIcon {...techIconProps} />
      <span {...techTextProps}>Express.js</span>
    </>
  ),
  link: "https://expressjs.com/",
};

export const GRAPHQL = {
  name: "graphql",
  element: (
    <>
      <GraphQLIcon {...techIconProps} />
      <span {...techTextProps}>GraphQL</span>
    </>
  ),
  link: "https://graphql.org/",
};

export const REDIS = {
  name: "redis",
  element: (
    <>
      <RedisIcon {...techIconProps} />
      <span {...techTextProps}>Redis</span>
    </>
  ),
  link: "https://redis.io/",
};

export const NESTJS = {
  name: "nestjs",
  element: (
    <>
      <NestJsIcon {...techIconProps} />
      <span {...techTextProps}>NestJS</span>
    </>
  ),
  link: "https://nestjs.com/",
};

export const POSTGRESQL = {
  name: "postgresql",
  element: (
    <>
      <PostgresqlIcon {...techIconProps} />
      <span {...techTextProps}>PostgreSQL</span>
    </>
  ),
  link: "https://www.postgresql.org/",
};

export const MONGODB = {
  name: "mongodb",
  element: (
    <>
      <MongoDbIcon {...techIconProps} />
      <span {...techTextProps}>MongoDB</span>
    </>
  ),
  link: "https://www.mongodb.com/",
};

export const MYSQL = {
  name: "mysql",
  element: (
    <>
      <MysqlIcon {...techIconProps} />
      <span {...techTextProps}>MySQL</span>
    </>
  ),
  link: "https://www.mysql.com/",
};

export const DOCKER = {
  name: "docker",
  element: (
    <>
      <DockerIcon {...techIconProps} />
      <span {...techTextProps}>Docker</span>
    </>
  ),
  link: "https://www.docker.com/",
};

export const AWS = {
  name: "aws",
  element: (
    <>
      <AwsIcon {...techIconProps} />
      <span {...techTextProps}>AWS</span>
    </>
  ),
  link: "https://aws.amazon.com/",
};

export const GIT = {
  name: "git",
  element: (
    <>
      <GitIcon {...techIconProps} />
      <span {...techTextProps}>Git</span>
    </>
  ),
  link: "https://git-scm.com/",
};

export const GITHUB = {
  name: "github",
  element: (
    <>
      <GithubIcon {...techIconProps} />
      <span {...techTextProps}>GitHub</span>
    </>
  ),
  link: "https://github.com/",
};

export const REMIX = {
  name: "remix",
  element: (
    <>
      <RemixIcon className="w-4 max-md:w-3" />
      <span {...techTextProps}>Remix</span>
    </>
  ),
  link: "https://remix.run/",
};

export const FIGMA = {
  name: "figma",
  element: (
    <>
      <FigmaIcon {...techIconProps} />
      <span {...techTextProps}>Figma</span>
    </>
  ),
  link: "https://www.figma.com/",
};

export const TRELLO = {
  name: "trello",
  element: (
    <>
      <TrelloIcon className="w-5 max-md:w-4" />
      <span {...techTextProps}>Trello</span>
    </>
  ),
  link: "https://trello.com/",
};

export const VERCEL = {
  name: "vercel",
  element: (
    <>
      <VercelIcon className="w-5 max-md:w-4" />
      <span {...techTextProps}>Vercel</span>
    </>
  ),
  link: "https://vercel.com/",
};

export const SHOPIFY = {
  name: "shopify",
  element: (
    <>
      <ShopifyIcon {...techIconProps} />
      <span {...techTextProps}>Shopify</span>
    </>
  ),
  link: "https://www.shopify.com/",
};

export const GO = {
  name: "go",
  element: (
    <>
      <GoIcon className="w-8" />
      <span {...techTextProps}>Go</span>
    </>
  ),
  link: "https://go.dev/",
};

export const DOKKU = {
  name: "Dokku",
  element: (
    <>
      <DokkuIcon className="w-6" />
      <span {...techTextProps}>Dokku</span>
    </>
  ),
  link: "https://dokku.com/",
};

export const SOCKETIO = {
  name: "socket.io",
  element: (
    <>
      <SocketIoIcon {...techIconProps} />
      <span {...techTextProps}>Sokcet.IO</span>
    </>
  ),
  link: "https://socket.io/",
};

export const SUPABASE = {
  name: "supabase",
  element: (
    <>
      <SupabaseIcon {...techIconProps} />
      <span {...techTextProps}>Supabase</span>
    </>
  ),
  link: "https://supabase.com/",
};

export const ROCKETCHAT = {
  name: "rocket.chat",
  element: (
    <>
      <RocketChatIcon className="w-6" />
      <span {...techTextProps}>Rocket.Chat</span>
    </>
  ),
  link: "https://www.rocket.chat/",
};

export const RAZORPAY = {
  name: "razorpay",
  element: (
    <>
      <RazorpayIcon className="w-5 max-md:w-4" />
      <span {...techTextProps}>Razorpay</span>
    </>
  ),
  link: "https://razorpay.com/",
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
