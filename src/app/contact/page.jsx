import { getSectionClasses } from "@/utils/helpers";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import { EMAIL } from "@/utils/consts";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <div className={getSectionClasses()}>
        <div className="space-y-8">
          <Contact />

          <div className="space-y-4 mt-14">
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <MapPinIcon className="w-5" />
                <span>Address:</span>
              </div>
              <div>
                <span className="text-gray-400 light:text-gray-600">
                  Virar, Maharashtra, India - 401305
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="w-4.5" />
                <span>Email:</span>
              </div>
              <div>
                <a
                  className="text-gray-400 transition-colors hover:text-primary-500! light:text-gray-600"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
