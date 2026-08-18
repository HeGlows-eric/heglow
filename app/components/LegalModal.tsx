"use client";

import { useEffect } from "react";

type LegalModalProps = {
  type: "privacy" | "terms";
  onClose: () => void;
};

export default function LegalModal({
  type,
  onClose,
}: LegalModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const isPrivacy = type === "privacy";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#f5a623]/15 bg-[#17130f] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#f5a623]/10 bg-[#211a14] text-xl text-[#d8ccc0]/60 transition hover:text-[#fff8f0]"
          aria-label="Close"
        >
          ×
        </button>

        <div className="pr-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f5a623]/80">
            HeGlows
          </p>

          <h2
            id="legal-modal-title"
            className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#fff8f0]"
          >
            {isPrivacy ? "Privacy Policy" : "Terms of Service"}
          </h2>

          <p className="mt-1 text-xs text-[#d8ccc0]/40">
            Last updated: August 18, 2026
          </p>

          {isPrivacy ? (
            <div className="mt-7 space-y-6 text-sm leading-6 text-[#d8ccc0]/75">
              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  1. Overview
                </h3>
                <p>
                  HeGlows is an appearance-improvement service that provides
                  personalized recommendations based on information you
                  choose to provide, including questionnaire responses and
                  an uploaded selfie.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  2. Information We Collect
                </h3>
                <p>
                  HeGlows may process information that you voluntarily provide
                  when using the service. This may include your uploaded
                  selfie, questionnaire responses, appearance-related
                  preferences, goals, and other information required to
                  generate your results.
                </p>
                <p className="mt-2">
                  HeGlows does not currently require you to create an account
                  or provide an email address to use the core experience.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  3. Selfie and Image Data
                </h3>
                <p>
                  When you upload a selfie, the image is stored using
                  Supabase Storage in order to provide the requested
                  HeGlows experience and generate your results.
                </p>
                <p className="mt-2">
                  Uploaded selfies are intended to be retained for no longer
                  than 72 hours and are manually deleted within that period.
                  Once an object is permanently deleted from Supabase
                  Storage, it is no longer available through the storage
                  service.
                </p>
                <p className="mt-2">
                  Please do not upload photographs of another person unless
                  you have the legal right and appropriate permission to do
                  so.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  4. How We Use Information
                </h3>
                <p>
                  Information you provide may be used to operate HeGlows,
                  generate personalized results, maintain and improve the
                  service, troubleshoot technical problems, and protect the
                  security and integrity of the service.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  5. Analytics
                </h3>
                <p>
                  HeGlows uses Vercel Analytics to understand how visitors
                  interact with the service, measure usage, identify
                  performance issues, and improve the product.
                </p>
                <p className="mt-2">
                  Analytics and hosting infrastructure may process technical
                  information such as device, browser, usage, network,
                  diagnostic, and similar information as described by the
                  relevant service providers.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  6. Third-Party Service Providers
                </h3>
                <p>
                  HeGlows relies on third-party infrastructure providers,
                  including Supabase for storage and Vercel for hosting and
                  analytics. These providers may process information as
                  necessary to provide their services.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  7. Data Security
                </h3>
                <p>
                  We use reasonable technical and organizational measures
                  intended to protect information processed through HeGlows.
                  However, no internet transmission or storage system can be
                  guaranteed to be completely secure.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  8. Data Retention
                </h3>
                <p>
                  Uploaded selfies are intended to be deleted within 72
                  hours. Other information may be retained for as long as
                  reasonably necessary to operate, maintain, secure, and
                  improve the service, or as required by applicable law.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  9. Your Choices and Requests
                </h3>
                <p>
                  If you have a privacy question or believe information
                  associated with your use of HeGlows requires correction or
                  deletion, contact us at{" "}
                  <span className="text-[#f5b544]">
                    [YOUR HEGLOWS EMAIL]
                  </span>
                  .
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  10. Age Restrictions
                </h3>
                <p>
                  HeGlows is not intended for children. If you are below the
                  minimum age required to use online services in your
                  jurisdiction, you should not use HeGlows without any
                  consent required by applicable law.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  11. Changes to This Policy
                </h3>
                <p>
                  We may update this Privacy Policy from time to time. When
                  material changes are made, we may update the date shown at
                  the beginning of this policy. Your continued use of HeGlows
                  after an update means that you acknowledge the updated
                  policy.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  12. Contact
                </h3>
                <p>
                  For privacy-related questions or requests, contact:
                </p>
                <p className="mt-2 text-[#f5b544]">
                  [YOUR HEGLOWS EMAIL]
                </p>
              </section>
            </div>
          ) : (
            <div className="mt-7 space-y-6 text-sm leading-6 text-[#d8ccc0]/75">
              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  1. Acceptance of These Terms
                </h3>
                <p>
                  By accessing or using HeGlows, you agree to these Terms of
                  Service. If you do not agree with these Terms, you should
                  not use the service.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  2. What HeGlows Provides
                </h3>
                <p>
                  HeGlows provides personalized appearance-improvement
                  information and recommendations based on information
                  submitted by the user. The service may provide guidance
                  relating to areas such as hair, skin, style, grooming,
                  presentation, and daily habits.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  3. Informational Purpose
                </h3>
                <p>
                  HeGlows provides general informational and appearance-related
                  guidance. Results and recommendations are not guarantees of
                  a particular physical appearance, outcome, or improvement.
                </p>
                <p className="mt-2">
                  HeGlows is not a medical service and its recommendations
                  should not be treated as medical diagnosis, treatment, or
                  professional medical advice.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  4. User-Provided Information
                </h3>
                <p>
                  You are responsible for the accuracy and appropriateness of
                  information you provide to HeGlows. You should not submit
                  information that you do not have the right or permission to
                  submit.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  5. Selfie Uploads
                </h3>
                <p>
                  You are responsible for ensuring that you have the necessary
                  rights and permissions for any image you upload. You should
                  not upload another person's image without appropriate
                  permission.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  6. Acceptable Use
                </h3>
                <p>
                  You agree not to misuse HeGlows, interfere with its
                  operation, attempt to gain unauthorized access, upload
                  malicious content, abuse the service, or use the service
                  for unlawful purposes.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  7. Availability and Changes
                </h3>
                <p>
                  We may modify, suspend, or discontinue features of HeGlows
                  at any time. We do not guarantee that the service will
                  always be available, uninterrupted, secure, or error-free.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  8. Third-Party Services
                </h3>
                <p>
                  HeGlows uses third-party services and infrastructure,
                  including Supabase and Vercel. The availability and operation
                  of those services may affect HeGlows.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  9. Intellectual Property
                </h3>
                <p>
                  The HeGlows name, branding, software, interface, original
                  content, and other materials provided by HeGlows are owned
                  by or licensed to HeGlows unless otherwise stated.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  10. Limitation of Liability
                </h3>
                <p>
                  To the maximum extent permitted by applicable law, HeGlows
                  will not be responsible for indirect, incidental,
                  consequential, special, or similar losses arising from your
                  use of, or inability to use, the service.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  11. Termination
                </h3>
                <p>
                  We may restrict or terminate access to HeGlows where
                  reasonably necessary, including where a user violates these
                  Terms, abuses the service, or creates security or legal
                  risks.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  12. Changes to These Terms
                </h3>
                <p>
                  We may update these Terms from time to time. Updated Terms
                  will be reflected by changing the date shown in this
                  document. Continued use of HeGlows after changes means you
                  accept the updated Terms.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  13. Contact
                </h3>
                <p>
                  Questions about these Terms can be sent to:
                </p>
                <p className="mt-2 text-[#f5b544]">
                  [YOUR HEGLOWS EMAIL]
                </p>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}