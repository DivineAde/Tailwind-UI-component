"use client";

import React from "react";
import { Layout } from "./ui/Layout";
import { FrameWorkLink } from "./library/Card";
import { SiBigbluebutton } from "react-icons/si";
import { Section } from "./ui/Section";
import { LuContainer, LuLayout, LuKeyboard } from "react-icons/lu";


type Props = {
  title?: string;
  children?: React.ReactNode;
};

export default function Main({ title }: Props) {
  return (
    <Layout>
      <section id='components' className="space-y-20">
        <div className="flex flex-col items-center justify-center py-12 md:py-20">
          <h1 className="text-4xl text-center font-extrabold dark:text-slate-50">
            Tailwind CSS Components
          </h1>
          <p className="max-w-xs md:max-w-2xl text-center text-slate-800 dark:text-slate-50 font-medium">
            Explore the whole collection of open-source UI components
            and interactive elements built with the utility classes from
            Tailwind CSS and React.
          </p>
        </div>

        <Section  title="Button Component" description="">
          <FrameWorkLink
            text="Button component"
            url="/button"
            widthLimit="none"
          >
            <LuContainer size={30} color="" />
          </FrameWorkLink>
        </Section>

        <Section title="Card Component" description="">
          <FrameWorkLink
            text="Card component"
            url="/card"
            widthLimit="none"
          >
            <LuLayout size={30} color=""  />
          </FrameWorkLink>
        </Section>

        <Section title="Input Component" description="">
          <FrameWorkLink
            text="Input component"
            url="/input"
            widthLimit="none"
          >
            <LuKeyboard size={30} color="" />
          </FrameWorkLink>
        </Section>
      </section>

     
    </Layout>
  );
}


