"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import { Drawer } from "@/components/ui/drawer";
import { cn } from "@/lib/cn";

type FieldName = "email" | "title" | "firstName" | "lastName";
type FieldErrors = Partial<Record<FieldName, string>>;

const FIELD_CLASS =
  "h-12 w-full border-0 border-b border-brand-text bg-transparent px-0 text-[15px] text-brand-text outline-none focus:border-b-2";
const LABEL_CLASS =
  "mb-1 block text-[12px] tracking-[0.04em] text-brand-text/70";

/**
 * Newsletter drawer opened from the footer. No mailing-list backend is
 * configured, so the form validates locally and explicitly reports that
 * nothing was stored.
 */
export function NewsletterSignup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const triggerRef = useRef<HTMLButtonElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => emailRef.current?.focus(), 50);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function close() {
    setOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }

  function openDrawer() {
    setSubmitted(false);
    setErrors({});
    setOpen(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FieldErrors = {};

    if (!email.trim()) {
      nextErrors.email = "This field is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email =
        "Enter a valid email address, for example yourname@domain.com.";
    }

    if (!title) {
      nextErrors.title = "This field is required.";
    }

    if (!firstName.trim()) {
      nextErrors.firstName = "This field is required.";
    }

    if (!lastName.trim()) {
      nextErrors.lastName = "This field is required.";
    }

    setErrors(nextErrors);

    const firstInvalid = (
      ["email", "title", "firstName", "lastName"] as FieldName[]
    ).find((field) => nextErrors[field]);

    if (firstInvalid) {
      document.getElementById(`newsletter-${firstInvalid}`)?.focus();
      return;
    }

    setSubmitted(true);
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        onClick={openDrawer}
        className="mt-4 border-b border-current pb-3 text-[12px] font-medium tracking-[0.1em] uppercase transition-opacity hover:opacity-70"
      >
        Subscribe
      </button>

      <Drawer
        open={open}
        onClose={close}
        title="Newsletter"
        titleId="newsletter-dialog-title"
      >
        {submitted ? (
          <div className="pt-24 text-center">
            <p className="text-[15px]">Thank you.</p>
            <p className="mt-3 text-[14px] text-brand-text/70">
              Newsletter signup is not connected yet, so nothing was stored or
              sent.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-8 inline-flex h-11 items-center justify-center rounded-[2px] bg-brand-text px-8 text-[12px] font-medium tracking-[0.1em] text-brand-background uppercase hover:opacity-85"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="pt-10">
            <p className="text-[14px]">
              Provide the information below to subscribe to the Orikee
              newsletter.
            </p>
            <p className="mt-3 mb-4 text-right text-[12px]">
              * Required information
            </p>

            <div className="mb-5">
              <label htmlFor="newsletter-email" className={LABEL_CLASS}>
                Email *
              </label>
              <input
                ref={emailRef}
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={
                  errors.email ? "newsletter-email-error" : "newsletter-email-hint"
                }
                className={cn(FIELD_CLASS, errors.email && "border-error")}
              />
              {errors.email ? (
                <p
                  id="newsletter-email-error"
                  role="alert"
                  className="mt-1 text-[12px] text-error"
                >
                  {errors.email}
                </p>
              ) : (
                <p
                  id="newsletter-email-hint"
                  className="mt-1 text-[12px] text-brand-text/70"
                >
                  Expected format: yourname@domain.com
                </p>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="newsletter-title" className={LABEL_CLASS}>
                Title *
              </label>
              <select
                id="newsletter-title"
                name="title"
                autoComplete="honorific-prefix"
                required
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                aria-invalid={errors.title ? true : undefined}
                aria-describedby={
                  errors.title ? "newsletter-title-error" : undefined
                }
                className={cn(FIELD_CLASS, errors.title && "border-error")}
              >
                <option value="" />
                <option>Ms.</option>
                <option>Mrs.</option>
                <option>Mr.</option>
                <option>Mx.</option>
              </select>
              {errors.title ? (
                <p
                  id="newsletter-title-error"
                  role="alert"
                  className="mt-1 text-[12px] text-error"
                >
                  {errors.title}
                </p>
              ) : null}
            </div>

            <div className="mb-5">
              <label htmlFor="newsletter-firstName" className={LABEL_CLASS}>
                First name *
              </label>
              <input
                id="newsletter-firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                aria-invalid={errors.firstName ? true : undefined}
                aria-describedby={
                  errors.firstName ? "newsletter-firstName-error" : undefined
                }
                className={cn(
                  FIELD_CLASS,
                  errors.firstName && "border-error",
                )}
              />
              {errors.firstName ? (
                <p
                  id="newsletter-firstName-error"
                  role="alert"
                  className="mt-1 text-[12px] text-error"
                >
                  {errors.firstName}
                </p>
              ) : null}
            </div>

            <div className="mb-5">
              <label htmlFor="newsletter-lastName" className={LABEL_CLASS}>
                Last name *
              </label>
              <input
                id="newsletter-lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                aria-invalid={errors.lastName ? true : undefined}
                aria-describedby={
                  errors.lastName ? "newsletter-lastName-error" : undefined
                }
                className={cn(FIELD_CLASS, errors.lastName && "border-error")}
              />
              {errors.lastName ? (
                <p
                  id="newsletter-lastName-error"
                  role="alert"
                  className="mt-1 text-[12px] text-error"
                >
                  {errors.lastName}
                </p>
              ) : null}
            </div>

            <p className="mt-2 mb-7 text-[12px] leading-[1.45]">
              By subscribing you agree to receive information by email about
              offers, new arrivals, collections or events from Orikee. You can
              unsubscribe at any time. No mailing-list connection is configured
              in this preview.
            </p>

            <button
              type="submit"
              className="mx-auto block h-11 rounded-[2px] bg-brand-text px-8 text-[12px] font-medium tracking-[0.1em] text-brand-background uppercase hover:opacity-85"
            >
              Subscribe
            </button>
          </form>
        )}
      </Drawer>
    </>
  );
}
