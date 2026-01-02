"use client";

import { TECHNOLOGIES } from "@/utils/consts";
import { getTechFromList, joinArrayWithAnd } from "@/utils/helpers";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-responsive-modal";
import ProjectDetailsModal from "./ProjectDetailsModal";
import Link from "next/link";

export default function HeroProject({ project, stopAutoPlay }) {
  const { imageUrl, title, summary, technologies, overview, keyFeatures } =
    project;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [techStack] = useState(() =>
    technologies.list
      .map((techName) => getTechFromList(techName, TECHNOLOGIES))
      .filter(Boolean)
  );

  const onModalClose = () => setIsModalOpen(false);
  const onModalOpen = () => {
    stopAutoPlay();
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="border border-gray-700 rounded-md p-4">
        <div className="flex gap-6">
          <div className="basis-1/2 space-y-6 max-lg:basis-full">
            <div
              onClick={onModalOpen}
              className="aspect-video rounded-md overflow-hidden relative hover:cursor-pointer"
            >
              <Image
                fill
                src={imageUrl}
                quality={100}
                alt={`${title} UI`}
                sizes="(max-width: 768px) 100vw, 468px"
                style={{ objectFit: "cover", objectPosition: "center" }}
                loading="eager"
                className="-z-1"
              />
            </div>
            <div className="min-h-60 max-md:min-h-40">
              <div className="text-2xl tracking-tight leading-10 font-heading font-medium group-hover:text-primary-500 transition-colors flex gap-4 items-center">
                <div>{title}</div>
              </div>
              <div className="text-gray-400 light:text-gray-600">{summary}</div>
              <ul className="flex gap-3 flex-wrap mt-4 max-md:hidden">
                {techStack.slice(0, 5).map((tech, i) => (
                  <li key={i}>
                    <Link
                      href={tech.link || "#"}
                      className="flex gap-2 border py-1 px-2 border-gray-700 rounded-md items-center hover:border-primary-500 transition-colors hover:[&_.child]:text-primary-500!"
                    >
                      {tech.element}
                    </Link>
                  </li>
                ))}
                {techStack.length > 5 && <li>...</li>}
              </ul>
            </div>
          </div>
          <div className="basis-1/2 space-y-6 max-lg:hidden">
            <div className="space-y-3">
              <div className="text-xl font-medium">Project Overview</div>
              <div className="text-gray-400 light:text-gray-600">
                {overview}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xl font-medium">Key Features</div>
              <div className="text-gray-400 light:text-gray-600">
                {joinArrayWithAnd(keyFeatures.map((feature) => feature.label))}
              </div>
            </div>
          </div>
        </div>
        <div className="basis-full mt-6 max-md:pb-8">
          <div
            tabIndex={0}
            className="inline-block underline underline-offset-4 text-gray-400 cursor-pointer hover:cursor-pointer transition-colors hover:text-primary-500 light:text-gray-600"
            onClick={onModalOpen}
          >
            <span>View details</span>
          </div>
        </div>
      </div>
      <Modal
        classNames={{
          overlay: "bg-black/80! backdrop-blur-sm light:bg-black/20!",
          modal:
            "bg-gray-950! max-w-[880px]! my-10! p-0! border border-gray-700 rounded-md light:bg-white!",
        }}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        showCloseIcon={false}
      >
        <ProjectDetailsModal project={project} onClose={onModalClose} />
      </Modal>
    </>
  );
}
