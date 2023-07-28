import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className="text-primary pb-2 text-4xl font-bold lg:text-5xl">
          Buat resume profesional
          <br />
          dengan mudah!
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl">
          Bikin Resume Profesional standard ATS jadi makin mudah. Kesempatan lolos screening ATS semakin besar!
        </p>
        <Link href="/resume-import" className="btn-primary mt-6 lg:mt-14">
          Mulai bikin resume <span aria-hidden="true">→</span>
        </Link>
        <Link href="/resume-screener" className="btn-secondary lg:ml-5 mt-6 lg:mt-14">
          Screening Resume <span aria-hidden="true">→</span>
        </Link>
        {/* <p className="ml-6 mt-3 text-sm text-gray-600 text-center">No sign up required</p> */}
        <p className="mt-1 text-lg text-sky-700 lg:mt-36">
          Sudah punya resume?
          <br /> 
          Screening resume kamu dengan tools{" "}
          <Link href="/resume-screener" className="underline underline-offset-2">
            ATS Screening!
          </Link>
        </p>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow">
        <AutoTypingResume />
      </div>
    </section>
  );
};
