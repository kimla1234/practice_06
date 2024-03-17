"use client";

import { Card } from "flowbite-react";

export default function ITCard() {
  return (
    <Card
      className="max-w-xs" // Adjusted the max width to max-w-xs
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://api.istad.co/media/image/665bb2ec-bd8b-4dc0-bbc0-c652aacc422b.png"
    >
      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {" "}
        {/* Adjusted the text size */}
        WebEssentials Announces Software Developer and Senior Software Developer
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        {" "}
        {/* Adjusted the text size */}
        17 Mar 2024
      </p>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        {" "}
        {/* Adjusted the text size */}
        Good job opportunities for students or those who want to find new work
        experience as Software Developers and Senior Software Developer.
      </p>
    </Card>
  );
}
