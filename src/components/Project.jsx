"use client";

import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-responsive-modal";
import { TECHNOLOGIES } from "@/utils/consts";
import { getTechFromList } from "@/utils/helpers";
import ProjectDetailsModal from "./ProjectDetailsModal";

export default function Project({ project }) {
  const { title, summary, technologies, imageUrl } = project;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [techStack] = useState(() =>
    technologies.list
      .map((techName) => getTechFromList(techName, TECHNOLOGIES))
      .filter(Boolean)
  );
  const onModalClose = () => setIsModalOpen(false);

  return (
    <>
      <li
        className={classNames(
          "relative border border-gray-700 rounded p-5 space-y-6 hover:cursor-pointer hover:scale-105 transition-all hover:border-primary-950 hover:bg-primary-950/15 group"
        )}
        tabIndex={0}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-video rounded-md overflow-hidden relative">
          <Image
            fill
            src={imageUrl}
            alt={`${title} UI`}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 368px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="max-md:mb-0">
          <div className="text-2xl tracking-tight leading-10 font-heading font-medium group-hover:text-primary-500 transition-colors">
            {title}
          </div>
          <div className="text-gray-400">{summary}</div>
        </div>
        <ul className="flex gap-3 flex-wrap max-md:hidden">
          {techStack.slice(0, 4).map((tech, i) => (
            <li
              key={i}
              className="flex gap-2 border py-1 px-2 border-gray-700 rounded-md items-center"
            >
              {tech.element}
            </li>
          ))}
          {techStack.length > 4 && <li>...</li>}
        </ul>
      </li>
      <Modal
        classNames={{
          overlay: "bg-black/80! backdrop-blur-sm",
          modal:
            "bg-gray-950! max-w-[880px]! my-10! p-0! border border-gray-700 rounded-md",
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
