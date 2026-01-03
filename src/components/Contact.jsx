"use client";

import ButtonSecondary from "@/components/ButtonSecondary";
import SectionSubtitle from "@/components/SectionSubtitle";
import SectionTitle from "@/components/SectionTitle";
import { ArrowRightIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { JSX_SOCIAL_LINKS } from "@/app/contact/consts";
import { useEffect, useRef, useState } from "react";
import { useThemeContext } from "@/contexts/ThemeProvider";

export default function Contact() {
  const [messageLength, setMessageLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const turnstileToken = useRef(null);
  const { isLightMode, isCurrentStateRead } = useThemeContext();
  const widgetIdRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!turnstileToken.current) {
      alert("Verification failed. Please retry.");
      return;
    }

    try {
      setLoading(true);
      setSuccess(false);
      setError("");

      const formData = new FormData(e.target);
      const { name, email, message, subject } = Object.fromEntries(
        formData.entries()
      );
      if (!name || !email || !message) throw new Error("Bad request");

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const res = await fetch("https://send-mail-chi.vercel.app/api/sendMail", {
        // const res = await fetch("http://localhost:3001/api/sendMail", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          name,
          email,
          message,
          subject,
          turnstileToken: turnstileToken.current,
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      e.target.reset();
      setMessageLength(0);
      setSuccess(true);
      turnstileToken.current = null;
      turnstile.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isCurrentStateRead || !window.turnstile) return;

    if (widgetIdRef.current) turnstile.remove(widgetIdRef.current);
    widgetIdRef.current = turnstile.render("#turnstile-container", {
      sitekey: "0x4AAAAAACJ4j6mGWsUP5S23",
      callback: function (token) {
        turnstileToken.current = token;
      },
      theme: isLightMode ? "light" : "dark",
    });
  }, [isCurrentStateRead, isLightMode]);

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
        className="border border-gray-700 rounded-md p-4 bg-gray-900/50 space-y-4 light:bg-white"
        onSubmit={handleSubmit}
      >
        <input type="text" name="subject" style={{ display: "none" }} />
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
          <ButtonSecondary disabled={loading}>
            {!loading ? (
              <>
                <span>Send</span>
                <PaperAirplaneIcon className="w-5 transform -rotate-12" />
              </>
            ) : (
              <div className="progress-spinner w-6 h-6"> </div>
            )}
          </ButtonSecondary>
          {success && (
            <div className="mt-2 text-green-600 text-xs leading-3.5">
              Message sent successfully!
            </div>
          )}
          {error && (
            <div className="mt-2 text-red-600 text-xs leading-3.5">{error}</div>
          )}
        </div>
        <div data-size="normal" id="turnstile-container"></div>
      </form>

      <div>
        <div>Or get in touch using...</div>
        <ul className="flex gap-4 flex-wrap mt-4">
          {JSX_SOCIAL_LINKS.map((link, i) => (
            <li key={i}>
              <Link
                href={link.link || "#"}
                className="flex gap-2 border py-1 px-2 border-gray-700 rounded-md items-center text-gray-400 transition-colors hover:text-primary-500! hover:border-primary-500 light:text-gray-600"
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
