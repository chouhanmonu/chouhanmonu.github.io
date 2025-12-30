"use client";

import ButtonSecondary from "@/components/ButtonSecondary";
import SectionSubtitle from "@/components/SectionSubtitle";
import SectionTitle from "@/components/SectionTitle";
import { ArrowRightIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { JSX_SOCIAL_LINKS } from "@/app/contact/consts";
import { contactFormAction } from "@/lib/actions";
import { useActionState, useState } from "react";

export default function Contact() {
  const [state, action, pending] = useActionState(contactFormAction, null);
  const [messageLength, setMessageLength] = useState(0);

  return (
    <>
      <div>
        <SectionTitle>Let&apos;s Connect</SectionTitle>
        <SectionSubtitle>
          If there&apos;s anything you want to discuss, feel free to contact me,
          and I&apos;ll get back to you in a day
        </SectionSubtitle>
      </div>
      <form
        action={action}
        className="border border-gray-700 rounded-md p-4 bg-gray-900/50 space-y-4"
      >
        <div className="flex gap-4">
          <label className="basis-1/2">
            <div className="required leading-10">Name</div>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              className="border border-gray-700 rounded-md px-2 py-1.5 w-full placeholder:text-gray-400!"
              required
            />
          </label>
          <label className="basis-1/2">
            <div className="required leading-10">Email</div>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="john@gmail.com"
              className="border border-gray-700 rounded-md px-2 py-1.5 w-full placeholder:text-gray-400!"
              required
            />
          </label>
        </div>
        <div>
          <div className="flex gap-4 justify-between items-center">
            <label className="required leading-10" htmlFor="inputMessage">
              Message
            </label>
            <div className="text-gray-400 text-sm">
              {messageLength}/512 characters
            </div>
          </div>
          <textarea
            name="message"
            placeholder="Enter message"
            className="border border-gray-700 rounded-md px-2 py-1.5 w-full placeholder:text-gray-400!"
            rows={4}
            maxLength={512}
            required
            onChange={(e) => setMessageLength(e.target.value.length)}
            id="inputMessage"
          ></textarea>
        </div>
        <div>
          <ButtonSecondary disabled={pending}>
            <span>{!pending ? "Send" : "Sending ..."}</span>
            <PaperAirplaneIcon className="w-5 transform -rotate-12" />
          </ButtonSecondary>
          {state?.success && (
            <div className="mt-2 text-green-600 text-xs leading-3.5">
              Message sent successfully!
            </div>
          )}
        </div>
      </form>

      <div>
        <div>Or get in touch using...</div>
        <ul className="flex gap-4 flex-wrap mt-4">
          {JSX_SOCIAL_LINKS.map((link, i) => (
            <li key={i}>
              <Link
                href={link.link || "#"}
                className="flex gap-2 border py-1 px-2 border-gray-700 rounded-md items-center text-gray-400 transition-colors hover:text-primary-500 hover:border-primary-500"
              >
                {link.icon}
                {link.label}
                <ArrowRightIcon className="w-4 ml-2" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
