"use client";
import React, { useEffect } from "react";
import Container from "../Container";
import { reviews } from "@/data";

// Function to chunk array into groups of n
const chunkArray = (array: typeof reviews, size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const reviewChunks = chunkArray(reviews, 10);

const Reviews = () => {
  useEffect(() => {
    console.log({ reviewChunks }, reviews.length);
  }, []);

  return (
    <section className="mt-8 p-6 py-8 bg-mandylight">
        <Container>
            <h2 className="text-4xl font-bold mb-8">Reviews</h2>
        </Container>
        <div className="-mx-6 space-y-4 overflow-scroll px-6">
          {reviewChunks.map((chunk, i) => {
            let className = "flex items-center gap-4";
            if (i % 3 === 0) className = "-ml-2 " + className;
            else if (i % 3 === 1) className = "-ml-24 " + className;
            else if (i % 3 === 2) className = "ml-12 " + className;

            return (
              <div key={i} className={className}>
                {chunk.map((review, reviewIndex) => (
                  <div
                    key={reviewIndex}
                    className="group rounded-2xl bg-base-300 p-6 min-w-80 max-w-80"
                  >
                    <div className="text-orange-400 text-lg">★★★★★</div>
                    <h3 className="text-lg font-semibold">{review.title}</h3>
                    <p className="text-base">{review.description}</p>
                    <h4 className="text-lg italic font-normal">{review.name}, {review.occupation}</h4>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default Reviews;
