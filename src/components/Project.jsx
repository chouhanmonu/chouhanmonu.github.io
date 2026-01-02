"use client";

import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-responsive-modal";
import { TECHNOLOGIES } from "@/utils/consts";
import { getTechFromList } from "@/utils/helpers";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { motion } from "motion/react";

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
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className={classNames(
          "relative border border-gray-700 rounded p-5 space-y-6 hover:cursor-pointer transition-all hover:border-primary-950 hover:bg-primary-950/15 group"
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
        <div>
          <div className="text-2xl tracking-tight leading-10 font-heading font-medium group-hover:text-primary-500 transition-colors">
            {title}
          </div>
          <div className="text-gray-400 light:text-gray-600">{summary}</div>
        </div>
        <ul className="flex gap-3 flex-wrap mb-0 max-md:hidden">
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
        <div className="hidden max-md:block">
          <div
            tabIndex={0}
            className="inline-block underline underline-offset-4 text-gray-400 cursor-pointer hover:cursor-pointer transition-colors hover:text-primary-500 light:text-gray-600"
          >
            <span>View details</span>
          </div>
        </div>
      </motion.li>
      <Modal
        classNames={{
          overlay: "bg-black/80! backdrop-blur-sm light:bg-white/20!",
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
