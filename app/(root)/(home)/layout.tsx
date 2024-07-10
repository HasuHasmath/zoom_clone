import React from "react";

const HomeLayout = ({ children }: { children: string }) => {
  return (
    <main className="relative">
      navabar
      <div className="flex ">
        sidebar
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14  ">
          <div className="w-full ">
          {children}
          </div>
        </section>
      </div>

      footer
    </main>
  );
};

export default HomeLayout;
