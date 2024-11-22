import Image from "next/image";
import localFont from "next/font/local";
import { useRouter } from "next/router";
import Link from "next/link";

const castoro = localFont({
  src: "./fonts/Castoro.woff2",
  variable: "--font-castoro",
  weight: "400",
});
const montserrat = localFont({
  src: "./fonts/Montserrat.woff2",
  variable: "--font-montserrat",
  weight: "100 900",
});

function Mobile() {
  return (
    <main className="md:hidden">
      <div className="text-center flex flex-col justify-center">
        <div className="font-[family-name:var(--font-castoro)] mb-5">
          <h1 className="text-4xl lg:text-5xl mb-2 text-gold-400 tracking-wide">
            ABDURRAHMAN GAZİ
          </h1>
          <h2 className="text-xl lg:text-2xl tracking-wider text-gray-600 mb-10">
            İSLAMİ İLİMLER EĞİTİM MERKEZİ
          </h2>
        </div>

        <Image
          src="/hero.png"
          alt="Medrese Talebeleri ve Medresemiz"
          className="self-center mb-10"
          width={360}
          height={600}
          priority
        />

        <p className="text-gray-700 max-w-2xl leading-7 mb-5 text-sm lg:text-base">
          Kur'an-ı Kerim ve Sünnet-i Seniyye ışığında ilim, amel ve ihlas ile
          bezenmiş ümmetin geleceğini yetiştiriyoruz
        </p>

        <div>
          <Link
            href="https://wa.me/+905414426525?text=Selamun Aleyküm Hocam, ben kurumunuza destek olmak istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-400 px-4 py-2 text-white font-medium mr-4 hover:bg-gold-500  active:bg-gold-600 ease-out duration-200 text-sm md:text-base"
          >
            DESTEK OL
          </Link>
          <Link
            href="https://wa.me/+905414426525?text=Selamun Aleyküm Hocam, "
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderWidth: 1 }}
            className="px-4 py-2 border-gray-500 hover:bg-gray-200 active:bg-gray-400 ease-out duration-200 "
          >
            İLETİŞİM
          </Link>
        </div>
      </div>
    </main>
  );
}

function Desktop() {
  return (
    <main className="hidden md:grid grid-cols-12">
      <div className="col-span-7 lg:col-span-6 self-center">
        <div className="font-[family-name:var(--font-castoro)] mb-5">
          <h1 className="text-4xl lg:text-5xl mb-2 text-gold-400 tracking-wide">
            ABDURRAHMAN GAZİ
          </h1>
          <h2 className="text-xl lg:text-2xl tracking-wider text-gray-600">
            İSLAMİ İLİMLER EĞİTİM MERKEZİ
          </h2>
        </div>

        <div
          className="bg-gradient-to-r from-gold-400 to-transparent w-64 mb-5"
          style={{ height: 1 }}
        ></div>

        <p className="text-gray-700 max-w-2xl leading-7 mb-5 text-sm lg:text-base">
          Kur'an-ı Kerim ve Sünnet-i Seniyye ışığında ilim, amel ve ihlas ile
          bezenmiş ümmetin geleceğini yetiştiriyoruz
        </p>

        <div>
          <Link
            href="https://wa.me/+905414426525?text=Selamun Aleyküm Hocam, ben kurumunuza destek olmak istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-400 px-4 py-2 text-white font-medium mr-4 hover:bg-gold-500  active:bg-gold-600 ease-out duration-200 text-sm md:text-base"
          >
            DESTEK OL
          </Link>
          <Link
            href="https://wa.me/+905414426525?text=Selamun Aleyküm Hocam, "
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderWidth: 1 }}
            className="px-4 py-2 border-gray-500 hover:bg-gray-200 active:bg-gray-400 ease-out duration-200 "
          >
            İLETİŞİM
          </Link>
        </div>
      </div>

      <Image
        className="col-start-9 col-span-4  lg:col-start-8 lg:col-span-5"
        src="/hero.png"
        alt="Medrese Talebeleri ve Medresemiz"
        width={360}
        height={600}
        priority
      />
    </main>
  );
}

export default function Home() {
  const router = useRouter();

  return (
    <div
      className={`${castoro.variable} ${montserrat.variable} min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-montserrat)] flex flex-col content-between h-full min-h-screen`}
    >
      <Link
        href="https://wa.me/+905414426525?text=Selamun Aleyküm Hocam, "
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="fixed right-8 bottom-8 cursor-pointer hover:opacity-90 motion-safe:animate-bounce"
          src="/icon-whatsapp.png"
          alt="Abdurrahman Gazi Erkek Yurdu binası"
          quality={100}
          height={64}
          width={64}
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </Link>
      <Image
        className="col-span-5 -z-10"
        src="/hero_bg.png"
        alt="Abdurrahman Gazi Erkek Yurdu binası"
        quality={100}
        fill
        sizes="100vw"
      />
      <Mobile />
      <Desktop />
      <div className="text-center text-sm text-gray-500">
        SİTEMİZ YAPIM AŞAMASINDADIR
      </div>
    </div>
  );
}
