import About from "@/sections/about";
import Projects from "@/sections/projects";
import { title, subtitle } from "@/components/primitives.ts";
import DefaultLayout from "@/layouts/default.tsx";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-5">
        <div className="inline-block max-w-3xl text-center justify-center">
          <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: "green" })}>
            beautiful websites&nbsp;
          </h1>
          <br />
          <h1 className={title()}>regardless of your design experience.</h1>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>
      </section>
      <About />
      <Projects />
    </DefaultLayout>
  );
}
