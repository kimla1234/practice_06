"use client";

import { Card } from "flowbite-react";

export default function ITCard() {
  return (
    <Card
      className="max-w-xs" // Adjusted the max width to max-w-xs
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://api.istad.co/media/image/e4a4d369-72c3-441c-9df1-23cc6e2ce3f7.jpg"
    >
      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"> {/* Adjusted the text size */}
        Play Hide and Seek with Searching Algorithm
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400"> {/* Adjusted the text size */}
        17 Mar 2024
      </p>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400"> {/* Adjusted the text size */}
        The following is an example of using a searching algorithm to find one or more occurrences of an item within a dataset.
      </p>
    </Card>
  );
}
