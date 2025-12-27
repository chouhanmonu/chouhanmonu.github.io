"use client";

import {
  ArrowUpRightIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Button } from "primereact/button";
import React, { Fragment, useState } from "react";
import Btn from "@/components/Button";
import ButtonSecondary from "./ButtonSecondary";
import GithubIcon from "@/assets/icons/GithubIcon";
import Tag from "./Tag";
import { TECHNOLOGIES } from "@/utils/consts";
import { getTechFromList } from "@/utils/helpers";

const mapTagToEl = (tag, isShort = true) => {
  switch (tag.toLowerCase()) {
    case "confidential":
      return <Tag color="orange">{isShort ? "CONF" : "Confidential"}</Tag>;
    case "work-in-progress":
      return <Tag color="sky">{isShort ? "WIP" : "Work-in-Progress"}</Tag>;
    default:
      return <></>;
  }
};

export default function ProjectDetailsModal({ project, onClose }) {
  const {
    title,
    summary,
    technologies,
    tags,
    imageUrl,
    overview,
    keyFeatures,
    role,
    outcomes,
    websiteLink,
    gitHub,
  } = project;
  const [techStack] = useState(() =>
    technologies.list
      .map((techName) => getTechFromList(techName, TECHNOLOGIES))
      .filter(Boolean)
  );

  const parsedTags = tags && JSON.parse(JSON.stringify(tags));

  return (
    <>
      <div className="sticky top-0 left-0 p-5 bg-black/85 backdrop-blur-sm border-b border-gray-700">
        <div>
          <div className="text-2xl tracking-tight leading-10 font-heading font-medium group-hover:text-primary-500 transition-colors flex gap-4 items-center">
            <div>{title}</div>
            {!!parsedTags?.length && (
              <div className="flex gap-2">
                {parsedTags.map((tag, i) => (
                  <Fragment key={i}>{mapTagToEl(tag, false)}</Fragment>
                ))}
              </div>
            )}
          </div>
          <div className="text-gray-400 mt-3">{summary}</div>
          <Button
            text
            className="p-2! absolute! top-4 right-4"
            onClick={onClose}
          >
            <XMarkIcon strokeWidth={3} className="w-5 text-gray-100" />
          </Button>
        </div>
      </div>
      <div className="p-5 space-y-10">
        <div className="aspect-video rounded-md overflow-hidden relative">
          <Image
            fill
            src={imageUrl}
            quality={100}
            alt={`${title} UI`}
            sizes="(max-width: 768px) 100vw, 880px"
            style={{ objectFit: "cover", objectPosition: "center" }}
            loading="lazy"
            className="-z-1"
          />
        </div>

        <div className="space-y-3">
          <div className="text-xl font-medium">Project Overview</div>
          <div className="text-gray-400">{overview}</div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-medium">Key Features</div>
          <div className="text-gray-400">
            <ul className="space-y-2">
              {keyFeatures.map((feature, i) => (
                <li key={i}>
                  <p>
                    <strong className="text-gray-100 font-normal">
                      {feature.label}:
                    </strong>
                    <span> {feature.description}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-medium">
            Technologies & Implementation
          </div>
          <div className="text-gray-400">{technologies.description}</div>

          <ul className="space-y-2">
            {technologies.stacks.map((stack, i) => (
              <li key={i} className="text-gray-400">
                <p>
                  <strong className="text-gray-100 font-normal">
                    {stack.category}:
                  </strong>
                  <span> {stack.technologies.join(", ")}</span>
                </p>
              </li>
            ))}
          </ul>

          <ul className="flex gap-3 flex-wrap">
            {techStack.map((tech, i) => (
              <li
                key={i}
                className="flex gap-2 border py-1 px-2 border-gray-700 rounded-md items-center"
              >
                {tech.element}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-medium">My Role & Contributions</div>
          <div className="text-gray-400">{role.summary}</div>
          <ul className="space-y-2">
            {role.contributions.map((contribution, i) => (
              <li key={i} className="text-gray-400">
                <p>
                  <b className="text-gray-100 font-normal">
                    {contribution.label}:
                  </b>
                  <span> {contribution.description}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {outcomes && (
          <div className="space-y-3">
            <div className="text-xl font-medium">Outcomes & Impact</div>
            <div className="text-gray-400">{outcomes}</div>
          </div>
        )}

        {(websiteLink || gitHub) && (
          <div className="flex gap-3 items-start">
            {websiteLink && (
              <Btn
                onClick={() =>
                  window.open(websiteLink, "_blank", "noopener,noreferrer")
                }
              >
                <CodeBracketIcon className="w-5" />
                <span>View Site</span>
                <ArrowUpRightIcon strokeWidth={2} className="w-4" />
              </Btn>
            )}
            {gitHub && (
              <div className="space-y-1">
                <ButtonSecondary
                  onClick={() =>
                    window.open(gitHub.link, "_blank", "noopener,noreferrer")
                  }
                >
                  <GithubIcon className="w-5" />
                  <span>Check Code</span>
                  <ArrowUpRightIcon strokeWidth={2} className="w-4" />
                </ButtonSecondary>
                {gitHub.private && (
                  <small className="text-gray-400 text-xs">
                    Private — request access
                  </small>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
