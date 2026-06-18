"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraHero } from "@/components/ui/hero-2";
import Link from "next/link";

export default function AuroraHeroDemo() {
  return (
    <AuroraHero>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl"
      >
        Experience the Aurora
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mx-auto mt-4 max-w-lg text-center text-base text-muted-foreground"
      >
        A stunning, animated background that brings your hero sections to
        life, adapting beautifully to both light and dark themes.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
      >
        <Link
          href="/"
          className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
        >
          Back to Home
        </Link>
      </motion.div>
    </AuroraHero>
  );
}