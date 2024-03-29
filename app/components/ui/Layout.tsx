import React from "react";

type Props = {};

{/*mx-auto max-w-5xl*/}

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      <main className="px-4 max-w-4xl mx-auto md:px-10">
        <div className="space-y-20 py-1">{children}</div>
      </main>
    </div>
  );
};
