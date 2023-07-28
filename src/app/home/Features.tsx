import Image from "next/image";
import featureFreeSrc from "public/assets/feature-free.svg";
import featureUSSrc from "public/assets/feature-us.svg";
import featurePrivacySrc from "public/assets/feature-privacy.svg";
import featureOpenSourceSrc from "public/assets/feature-open-source.svg";
import { Link } from "components/documentation";

const FEATURES = [
  {
    src: featureFreeSrc,
    title: "GRATIS!!!",
    text: "ResumeHQ dibuat karena kami berkeyakinan bahwa setiap calon kandidat berhak memiliki akses gratis dan tentunya mempermudah mereka membuat desain resume profesional yang modern.",
  },
  {
    src: featureUSSrc,
    title: "Go International",
    text: "ResumeHQ telah dilengkapi dengan fitur terbaik yang sesuai dengan standar kerja Internasional, seperti Amerika dan Eropa, sehingga lebih mudah terintegrasi dengan platform ATS terkemuka seperti Greenhouse dan Lever.",
  },
  {
    src: featurePrivacySrc,
    title: "Privasi Terjamin",
    text: "ResumeHQ menyimpan data di perangkat kamu sehingga memudahkan kamu untuk mengakses kembali guna keperluan pribadimu.",
  },
  {
    src: featureOpenSourceSrc,
    title: "User-Friendly",
    text: (
      <>
        ResumeHQ dibuat untuk memudahkan kamu membuat dan mengedit resume secara online, baik via mobile maupun desktop.
        {/* {" "}
        <Link href="https://github.com/xitanggg/open-resume">
          GitHub repository
        </Link> */}
      </>
    ),
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-36">
      <div className="mx-auto lg:max-w-4xl">
        <dl className="grid grid-cols-1 justify-items-center gap-y-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-16">
          {FEATURES.map(({ src, title, text }) => (
            <div className="px-2" key={title}>
              <div className="relative w-96 self-center pl-16">
                <dt className="text-2xl font-bold">
                  <Image
                    src={src}
                    className="absolute left-0 top-1 h-12 w-12"
                    alt="Feature icon"
                  />
                  {title}
                </dt>
                <dd className="mt-2">{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
