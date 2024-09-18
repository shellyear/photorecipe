import Image from "next/image";
import React from "react";

interface ISingleReview {
  className?: string,
  feedback: string,
  imgPath: string,
  name: string,
  occupation: string,
}

const SingleReview = ({ className, feedback, imgPath, name, occupation }: ISingleReview) => {
  return (
    <section className={`${className} py-12`}>
      <div className="space-y-4 max-w-md mx-auto">
        <Image
          src="/double-quotes.svg"
          alt="double-quotes"
          width={40}
          height={40}
        />
        <p className="md:text-lg leading-relaxed">
          {feedback}
        </p>
        <div className="flex items-center gap-2">
          <Image
            src={imgPath}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
            width={48}
            height={48}
          />
          <p>{name}</p>
          <span className="badge badge-neutral badge-outline">{occupation}</span>
        </div>
      </div>
    </section>
  );
};

export default SingleReview;
