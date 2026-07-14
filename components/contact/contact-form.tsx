"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

type SubmitState =
  | { kind: "idle"; message: string }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: ""
};

const initialSubmitState: SubmitState = {
  kind: "idle",
  message: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const handledStatusRef = useRef<string | null>(null);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [fieldError, setFieldError] = useState<string>("");
  const [submitState, setSubmitState] = useState<SubmitState>(initialSubmitState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    if (!status) {
      handledStatusRef.current = null;
      return;
    }

    if (handledStatusRef.current === status) {
      return;
    }

    handledStatusRef.current = status;

    if (status === "success") {
      setSubmitState({
        kind: "success",
        message: "Thanks. Your inquiry has been sent."
      });
      setShowSuccessToast(true);
      setFieldError("");
      const nextParams = new URLSearchParams(searchParams.toString());
      nextParams.delete("status");
      const nextQuery = nextParams.toString();
      const nextUrl = nextQuery ? `${pathname}?${nextQuery}` : pathname;
      window.history.replaceState(null, "", nextUrl);
      return;
    }

    if (status === "error") {
      setSubmitState({
        kind: "error",
        message: "Something went wrong while sending your inquiry. Please try again in a moment or email directly."
      });
      setShowSuccessToast(false);
      const nextParams = new URLSearchParams(searchParams.toString());
      nextParams.delete("status");
      const nextQuery = nextParams.toString();
      const nextUrl = nextQuery ? `${pathname}?${nextQuery}` : pathname;
      window.history.replaceState(null, "", nextUrl);
      return;
    }
  }, [pathname, searchParams, status]);

  useEffect(() => {
    if (!showSuccessToast) return;

    const timeout = window.setTimeout(() => {
      setShowSuccessToast(false);
    }, 4000);

    return () => window.clearTimeout(timeout);
  }, [showSuccessToast]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value
    }));
  }

  function validateForm() {
    if (!values.name.trim()) return "Please enter your name.";
    if (!values.email.trim()) return "Please enter your email.";
    if (!emailPattern.test(values.email.trim())) return "Please enter a valid email address.";
    if (!values.subject.trim()) return "Please add a subject.";
    if (!values.message.trim()) return "Please share a short message.";

    return "";
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (values.website.trim()) {
      setSubmitState({
        kind: "success",
        message: "Thanks. Your inquiry has been received."
      });
      setFieldError("");
      setValues(initialValues);
      return;
    }

    const validationMessage = validateForm();

    if (validationMessage) {
      setFieldError(validationMessage);
      setSubmitState(initialSubmitState);
      return;
    }

    setFieldError("");
    setSubmitState(initialSubmitState);
    setIsSubmitting(true);
    event.currentTarget.submit();
  }

  const statusMessage =
    fieldError || (submitState.kind === "error" ? submitState.message : "");
  const statusClassName =
    submitState.kind === "success"
      ? "text-emerald-700"
      : "text-rose-700";

  return (
    <>
      <AnimatePresence>
        {showSuccessToast ? (
          <motion.div
            key="contact-success-toast"
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="fixed right-4 top-24 z-50 w-[min(calc(100vw-2rem),24rem)] rounded-2xl border border-emerald-200 bg-white p-4 text-graphite shadow-soft sm:right-6"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full bg-emerald-100 p-2 text-emerald-700">
                <CheckCircle2 size={18} aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-graphite">Inquiry sent successfully</p>
                <p className="mt-1 text-sm leading-6 text-graphite/70">
                  Thanks. Your message has been sent and we&apos;ll get back to you soon.
                </p>
              </div>
              <button
                type="button"
                className="grid size-8 shrink-0 place-items-center rounded-full text-graphite/55 transition hover:bg-ocean/10 hover:text-graphite"
                onClick={() => setShowSuccessToast(false)}
                aria-label="Dismiss notification"
              >
                <X size={16} aria-hidden />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <form
        className="grid gap-5 border border-ocean/15 bg-white p-7 shadow-soft md:p-10"
        action="/contact.php"
        method="POST"
        onSubmit={handleSubmit}
        noValidate
      >
        <label className="grid gap-2 text-sm text-graphite">
          Name
          <input
            className="h-12 border border-ocean/15 bg-white px-4 text-graphite focus:border-ocean focus:outline-none"
            name="name"
            autoComplete="name"
            maxLength={120}
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 text-sm text-graphite">
          Email
          <input
            className="h-12 border border-ocean/15 bg-white px-4 text-graphite focus:border-ocean focus:outline-none"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={160}
            value={values.email}
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 text-sm text-graphite">
          Subject
          <input
            className="h-12 border border-ocean/15 bg-white px-4 text-graphite focus:border-ocean focus:outline-none"
            name="subject"
            maxLength={180}
            value={values.subject}
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 text-sm text-graphite">
          Message
          <textarea
            className="min-h-40 resize-y border border-ocean/15 bg-white p-4 text-graphite focus:border-ocean focus:outline-none"
            name="message"
            maxLength={5000}
            value={values.message}
            onChange={handleChange}
          />
        </label>
        <input type="hidden" name="redirect" value="/contact/" />
        <label className="hidden" aria-hidden="true">
          Website
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={handleChange}
          />
        </label>
        {statusMessage ? (
          <p className={`text-sm ${statusClassName}`} role="status" aria-live="polite">
            {statusMessage}
          </p>
        ) : null}
        <button
          type="submit"
          className="min-h-12 rounded-full bg-ocean px-6 text-sm text-paper transition hover:bg-graphite focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Inquiry"}
        </button>
      </form>
    </>
  );
}
