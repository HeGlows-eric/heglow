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
            HeGlow
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
                  HeGlow is an appearance-improvement service that provides
                  personalized recommendations based on information you choose
                  to provide, including questionnaire responses and an uploaded
                  selfie.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  2. Information We Collect
                </h3>

                <p>
                  HeGlow may process information that you voluntarily provide
                  when using the service. This may include your uploaded selfie,
                  questionnaire responses, appearance-related preferences,
                  goals, and other information required to generate your
                  results.
                </p>

                <p className="mt-2">
                  HeGlow does not currently require you to create an account or
                  provide an email address to use the core experience.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  3. Selfie and Image Data
                </h3>

                <p>
                  When you upload a selfie, the image is stored using Supabase
                  Storage as part of the HeGlow analysis experience.
                </p>

                <p className="mt-2">
                  The current HeGlow MVP does not send uploaded selfies to an
                  AI model or AI provider for analysis. The current personalized
                  report is generated using information provided through the
                  questionnaire.
                </p>

                <p className="mt-2">
                  Uploaded selfies are intended to be retained for no longer
                  than 72 hours and are automatically deleted within that
                  period.
                </p>

                <p className="mt-2">
                  Please do not upload photographs of another person unless you
                  have the legal right and appropriate permission to do so.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  4. How We Use Information
                </h3>

                <p>
                  Information you provide may be used to operate HeGlow,
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
                  HeGlow uses Vercel Analytics to understand how visitors
                  interact with the service, measure usage, identify performance
                  issues, and improve the product.
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
                  HeGlow relies on third-party infrastructure providers,
                  including Supabase for storage and Vercel for hosting and
                  analytics. These providers may process information as
                  necessary to provide their services.
                </p>

                <p className="mt-2">
                  HeGlow does not currently send uploaded selfies to an AI
                  provider.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  7. Data Security
                </h3>

                <p>
                  We use reasonable technical and organizational measures
                  intended to protect information processed through HeGlow.
                  However, no internet transmission or storage system can be
                  guaranteed to be completely secure.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  8. Data Retention
                </h3>

                <p>
                  Uploaded selfies are intended to be deleted within 72 hours.
                </p>

                <p className="mt-2">
                  Questionnaire and results data may be retained for as long as
                  reasonably necessary to provide, maintain, secure,
                  troubleshoot, and improve the service, or as required by
                  applicable law.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  9. Your Choices and Requests
                </h3>

                <p>
                  If you have a privacy question or believe information
                  associated with your use of HeGlow requires correction or
                  deletion, contact us at{" "}
                  <span className="text-[#f5b544]">
                    heglows.support@gmail.com
                  </span>
                  .
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  10. Age Restrictions
                </h3>

                <p>
                  HeGlow is not intended for children. If you are below the
                  minimum age required to use online services in your
                  jurisdiction, you should not use HeGlow without any consent
                  required by applicable law.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  11. Changes to This Policy
                </h3>

                <p>
                  We may update this Privacy Policy from time to time. When
                  material changes are made, we may update the date shown at the
                  beginning of this policy. Your continued use of HeGlow after
                  an update means that you acknowledge the updated policy.
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
                  heglows.support@gmail.com
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
                  By accessing or using HeGlow, you agree to these Terms of
                  Service. If you do not agree with these Terms, you should not
                  use the service.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  2. What HeGlow Provides
                </h3>

                <p>
                  HeGlow provides personalized appearance-improvement
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
                  HeGlow provides general informational and
                  appearance-related guidance. Results and recommendations are
                  not guarantees of a particular physical appearance, outcome,
                  or improvement.
                </p>

                <p className="mt-2">
                  HeGlow is not a medical service and its recommendations
                  should not be treated as medical diagnosis, treatment, or
                  professional medical advice. HeGlow should not be relied on
                  to diagnose or treat skin conditions or other health
                  conditions.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  4. User-Provided Information
                </h3>

                <p>
                  You are responsible for the accuracy and appropriateness of
                  information you provide to HeGlow. You should not submit
                  information that you do not have the right or permission to
                  submit.
                </p>

                <p className="mt-2">
                  HeGlow currently does not require users to create accounts.
                  You are responsible for keeping control of your browser,
                  device, and any information associated with your use of the
                  service.
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

                <p className="mt-2">
                  Uploads must comply with the technical and usage restrictions
                  displayed by HeGlow. You must not upload unlawful, malicious,
                  or abusive content.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  6. Acceptable Use
                </h3>

                <p>
                  You agree not to misuse HeGlow, interfere with its operation,
                  attempt to gain unauthorized access, upload malicious content,
                  abuse the service, circumvent reasonable usage or security
                  controls, or use the service for unlawful purposes.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  7. Service Availability and Changes
                </h3>

                <p>
                  We may modify, suspend, or discontinue features of HeGlow at
                  any time. We do not guarantee that the service will always be
                  available, uninterrupted, secure, accurate, or error-free.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  8. Third-Party Services
                </h3>

                <p>
                  HeGlow uses third-party services and infrastructure,
                  including Supabase and Vercel for storage, hosting, and
                  analytics. The availability and operation of those services
                  may affect HeGlow. Your use of third-party services may also
                  be subject to their own terms and policies.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  9. Intellectual Property
                </h3>

                <p>
                  The HeGlow name, branding, software, interface, original
                  content, and other materials provided by HeGlow are owned by
                  or licensed to HeGlow unless otherwise stated.
                </p>

                <p className="mt-2">
                  You retain your rights in content that you submit to
                  HeGlow, subject to the rights needed for HeGlow to operate
                  the service as described in the Privacy Policy.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  10. Your Responsibility for Recommendations
                </h3>

                <p>
                  You are responsible for how you use information and
                  recommendations provided by HeGlow. Consider your own
                  circumstances and seek qualified professional advice when
                  appropriate before making decisions involving health,
                  skincare, fitness, or other areas where professional guidance
                  may be necessary.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  11. Limitation of Liability
                </h3>

                <p>
                  To the maximum extent permitted by applicable law, HeGlow
                  will not be responsible for indirect, incidental,
                  consequential, special, or similar losses arising from your
                  use of, or inability to use, the service.
                </p>

                <p className="mt-2">
                  Nothing in these Terms is intended to exclude or limit
                  liability that cannot legally be excluded or limited under
                  applicable law.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  12. Termination or Restriction
                </h3>

                <p>
                  We may restrict or terminate access to HeGlow where
                  reasonably necessary, including where a user violates these
                  Terms, abuses the service, attempts to compromise security,
                  or creates legal or operational risks.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  13. Governing Law and Jurisdiction
                </h3>

                <p>
                  These Terms are intended to be governed by the laws
                  applicable in India, subject to any mandatory consumer or
                  other rights that cannot be waived under applicable law.
                  Subject to those mandatory rights, disputes arising from or
                  relating to these Terms or the use of HeGlow will be subject
                  to the jurisdiction of the courts applicable in India.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  14. Changes to These Terms
                </h3>

                <p>
                  We may update these Terms from time to time. Updated Terms
                  will be reflected by changing the date shown in this
                  document. Continued use of HeGlow after changes means you
                  accept the updated Terms.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-semibold text-[#fff8f0]">
                  15. Contact
                </h3>

                <p>
                  Questions about these Terms can be sent to:
                </p>

                <p className="mt-2 text-[#f5b544]">
                  heglows.support@gmail.com
                </p>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}