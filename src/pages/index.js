import Image from "next/image";
import localFont from "next/font/local";

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

export default function Home() {
  return (
    <div
      className={`${castoro.variable} ${montserrat.variable} min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-montserrat)] flex flex-col content-between h-full min-h-screen`}
    >
      <Image
        className="col-span-5 -z-10"
        src="/hero_bg.png"
        alt="Abdurrahman Gazi Erkek Yurdu binası"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        priority
      />
      <main className="grid grid-cols-12">
        <div className="col-span-7 self-center">
          <div className="font-[family-name:var(--font-castoro)] mb-5">
            <h1 className="text-5xl mb-2 text-gold-400 tracking-wide">
              ABDURRAHMAN GAZİ
            </h1>
            <h2 className="text-2xl tracking-wider text-gray-600">
              İSLAMİ İLİMLER EĞİTİM MERKEZİ
            </h2>
          </div>

          <div
            className="bg-gradient-to-r from-gold-400 to-transparent w-64 mb-5"
            style={{ height: 1 }}
          ></div>

          <p className="text-gray-700 max-w-2xl leading-7 mb-5">
            Kur'an-ı Kerim ve Sünnet-i Seniyye ışığında ilim, amel ve ihlas ile
            bezenmiş ümmetin geleceğini yetiştiriyoruz
          </p>

          <div>
            <button className="bg-gold-400 px-4 py-2 text-white font-medium mr-4 hover:bg-gold-500  active:bg-gold-600 ease-out duration-200">
              DESTEK OL
            </button>
            <button
              style={{ borderWidth: 1 }}
              className="px-4 py-2 border-gray-500 hover:bg-gray-200 active:bg-gray-400 ease-out duration-200"
            >
              İLETİŞİM
            </button>
          </div>
        </div>

        <Image
          className="col-span-5"
          src="/hero.png"
          alt="Medrese Talebeleri ve Medresemiz"
          width={360}
          height={600}
          priority
        />
      </main>
      <div className="text-center text-sm text-gray-500">
        SİTEMİZ YAPIM AŞAMASINDADIR
      </div>
    </div>
  );
}
