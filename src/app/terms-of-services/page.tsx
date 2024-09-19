"use client";
import ArrowDown from "@/components/icons/ArrowDown";
import ArrowUp from "@/components/icons/ArrowUp";
import { useState } from "react";

export default function TermsOfService() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By using PhotoRecipe.me, creating an account, or subscribing to our paid plans, you agree to be bound by these Terms. If you are using our Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.",
    },
    {
      title: "2. Accounts and Registration",
      content:
        "To access certain features of the Service, such as saving content or subscribing to paid features, you may be required to create an account. You can sign up via your Google account or email address and password. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. We are not liable for any unauthorized use of your account.",
    },
    {
      title: "3. Eligibility",
      content:
        "To use PhotoRecipe.me, you must be at least 18 years old, or have parental consent if you are younger. You must provide accurate and up-to-date information during the registration process.",
    },
    {
      title: "4. Subscriptions and Payments",
      content:
        "PhotoRecipe.me offers subscription plans that provide users with premium features. Subscription details, including fees, renewal, and cancellation policies, will be clearly displayed during the purchase process. All payments for subscription services must be made through the payment methods provided on our platform. Payments are non-refundable unless otherwise stated. You can cancel your subscription at any time, and your access to paid features will continue until the end of the current billing cycle.",
    },
    {
      title: "5. Content and Intellectual Property",
      content:
        "By uploading or creating content on PhotoRecipe.me, you grant us a worldwide, royalty-free, non-exclusive license to use, modify, publicly display, and distribute your content as part of providing our Service. You represent that you own or have the necessary rights to all content you upload. All intellectual property rights in the Service and its content are owned by PhotoRecipe.me.",
    },
    {
      title: "6. Privacy",
      content:
        "Your use of PhotoRecipe.me is subject to our Privacy Policy, which outlines how we collect, use, and protect your information. By using the Service, you consent to the collection and use of your information as described in our Privacy Policy.",
    },
    {
      title: "7. Prohibited Activities",
      content:
        "You agree not to use the Service for illegal purposes, attempt to hack or disrupt the Service, share your account credentials with others, use bots or automated tools to access the Service, or post any harmful or malicious software.",
    },
    {
      title: "8. Termination",
      content:
        "We reserve the right to suspend or terminate your account at any time if we believe you have violated these Terms or engaged in inappropriate activity. Upon termination, your right to use the Service will immediately cease.",
    },
    {
      title: "9. Disclaimers and Limitation of Liability",
      content:
        "The Service is provided &apos;as is&apos; without any warranties of any kind. To the maximum extent permitted by law, PhotoRecipe.me will not be liable for any damages arising out of your use or inability to use the Service.",
    },
    {
      title: "10. Indemnification",
      content:
        "You agree to indemnify, defend, and hold harmless PhotoRecipe.me, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of or related to your use of the Service, your violation of these Terms, or your violation of any third-party rights.",
    },
    {
      title: "11. Changes to Terms of Service",
      content:
        "We may update these Terms from time to time. If we make significant changes, we will notify you by email or by posting a notice on the Service. Your continued use of PhotoRecipe.me after such changes means that you accept the new Terms.",
    },
    {
      title: "12. Governing Law",
      content:
        "These Terms will be governed by and construed in accordance with the laws of [your jurisdiction], without regard to its conflict of law principles.",
    },
    {
      title: "13. Contact Information",
      content:
        "If you have any questions or concerns about these Terms, please contact us at: Email: boolfunc@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Last updated: 10.9.2024
        </p>
        <p className="mb-8">
          Welcome to PhotoRecipe.me (&quot;Website,&quot; &quot;Service,&quot; &quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;). By accessing or using our Service, you agree to these Terms of
          Service (&quot;Terms&quot;). Please read them carefully. If you do not agree
          with these Terms, do not use PhotoRecipe.me.
        </p>
        <p className="mb-8">
          If you have any questions or concerns regarding these Terms, you can
          contact us at boolfunc@gmail.com.
        </p>
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white shadow overflow-hidden rounded-lg"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-4 py-5 border-b border-gray-200 text-left text-sm font-medium text-gray-900 uppercase tracking-wider flex justify-between items-center"
              >
                {section.title}
                {expandedSection === index ? (
                  <ArrowUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ArrowDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSection === index && (
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-sm text-gray-500">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
