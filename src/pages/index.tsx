import About from "@/sections/about";
import Projects from "@/sections/projects";
import { title, subtitle } from "@/components/primitives.ts";
import DefaultLayout from "@/layouts/default.tsx";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 md:mt-5">
        <div className="inline-block max-w-3xl text-center justify-center">
          <h1 className={title()}>Who am I?</h1>
          <h1 className={subtitle({ color: "green" })}>about me!</h1>
          <br />
        </div>
      </section>
      <About />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-5">
        <div className="inline-block max-w-3xl text-center justify-center">
        <h1 className={subtitle({ color: "green" })}>
            a few
          </h1>
          <h1 className={title()}>Projects</h1>
          <br />
        </div>
      </section>
      <Projects />
    </DefaultLayout>
  );
}
