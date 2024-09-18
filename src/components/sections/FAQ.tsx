import React from "react";

const faqs = [
  {
    question: "How does the 'image with ingredients to recipe' feature work?",
    answer:
      "First, upload a photo containing the ingredients. Then, select your cooking skill level (beginner, intermediate, or expert) and specify the desired cooking time. You can either enter the time manually in minutes or choose from the available options. If any ingredients are missing from the photo, you can add them manually by typing them in.",
  },
  {
    question: "How does the 'dish image to recipe' feature work?",
    answer:
      "First, upload a photo of the dish, and you will receive the recipe for that dish.",
  },
  {
    question: "Can I save my favorite recipes?",
    answer: "Yes, this is available with the 'All-in' plan.",
  },
  {
    question: "What if the app doesn’t recognize the dish correctly?",
    answer:
      "If the app doesn't recognize the dish correctly, try taking a clearer, well-lit photo, or adjust the angle. If it doesn't help, contact support for assistance.",
  },
  {
    question: "Is the app available on Google Play or the App Store?",
    answer: "The app is currently available only on Google Play.",
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "You can cancel your subscription in the 'Profile' section within the 'Settings' block.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes! You can request a refund within 7 days of your purchase. Reach out by email.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-mandylight">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content mb-8">
            Frequently Asked Questions
          </p>
          <div className="text-base-content/80">
            Have another question? Contact me on{" "}
            <a
              className="link text-base-content"
              target="_blank"
              href="https://twitter.com/nurbek_yelesh"
            >
              Twitter
            </a>{" "}
            or by{" "}
            <a
              href="mailto:boolfunc@gmail.com"
              target="_blank"
              className="link text-base-content"
            >
              email
            </a>
            .
          </div>
        </div>
        <ul className="basis-1/2">
          {faqs.map((faq, i) => (
            <li key={i} className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-bold">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
