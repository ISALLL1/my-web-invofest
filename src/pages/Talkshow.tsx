import Button from "../components/ui/Button";
import SpeakerCard from "../components/ui/SpeakerCard";
import Collapse from "../components/ui/Collapse";
import { Calendar, Clock, MapPin, Building } from "lucide-react";

const Talkshow = () => {
  const speakers = [
    {
      name: "Moh. Ichsan Maulana",
      role: "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png",
    },
    {
      name: "M. Zaim Zamzami",
      role: "Programmer, PT. Pertamina Drilling Service Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png",
    },
    {
      name: "Daffa Zuhdan Muhtar",
      role: "Android Developer, PT. Astra Internasional",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png",
    },
    {
      name: "Bayu Adi Prasetiyo",
      role: "Software Engineer, KOMPAS.ID",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png",
    },
  ];

  const faqItems = [
    {
      title: "Mengenal Platform Invofest 2026",
      description:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diadakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Jadwal & Lokasi Pelaksanaan Event",
      description:
        "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online.",
    },
    {
      title: "Informasi Kebijakan Registrasi & Biaya",
      description:
        "Semua kegiatan dipastikan berbayar ya teman-teman sesuai kategori masing-masing.",
    },
  ];

  const scheduleDetails = [
    { icon: <Calendar />, label: "Tanggal", value: "Senin, 24 November 2025" },
    { icon: <Clock />, label: "Waktu", value: "08.00 WIB - 12.00 WIB" },
    { icon: <MapPin />, label: "Lokasi", value: "Aula Gedung C" },
    {
      icon: <Building />,
      label: "Tempat",
      value: "Kampus 1 (Mataram) Universitas Harkat Negeri",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-1 order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-black text-red-950 mb-4 tracking-tight">
            IT Talkshow
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-red-800 mb-6 italic leading-snug">
            "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan"
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed mb-8 max-w-2xl">
            Diskusi interaktif yang mengeksplorasi cara mengintegrasikan
            nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke
            dalam pengembangan kecerdasan buatan.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
              label="Daftar Sekarang"
              variant="primary"
              className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold shadow-xl shadow-red-900/20"
            />
          </div>
        </div>

        <div className="flex-1 flex justify-center order-1 md:order-2">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
            alt="Talkshow Mascot"
            className="w-64 md:w-full max-w-sm drop-shadow-2xl animate-bounce-slow"
          />
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-24 bg-zinc-50 rounded-[3rem] mx-4 md:mx-6 px-6 text-center shadow-sm">
        <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-6">
          Tentang IT Talkshow
        </h2>
        <div className="h-1.5 w-24 bg-red-900 mx-auto rounded-full mb-10"></div>
        <p className="max-w-4xl mx-auto text-zinc-600 text-lg leading-relaxed">
          Acara ini dirancang untuk menggali bagaimana kita dapat menanamkan
          nilai-nilai kemanusiaan ke dalam inti pengembangan AI. Kami akan
          mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing,
          tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia.
        </p>
      </section>

      {/* --- PANELISTS --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-4">
            Para Panelis
          </h2>
          <div className="h-1.5 w-24 bg-red-900 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex justify-center">
              <SpeakerCard {...speaker} />
            </div>
          ))}
        </div>
      </section>

      {/* --- SCHEDULE DETAILS --- */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-black text-center text-red-950 mb-16">
          Detail Pelaksanaan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {scheduleDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-zinc-100 rounded-[2rem] p-8 flex items-center gap-6 shadow-xl shadow-zinc-200/50 hover:scale-[1.02] transition-transform"
            >
              <div className="p-4 bg-red-50 text-red-900 rounded-2xl shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-red-950 leading-tight">
                  {item.value}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-4">
            Punya Pertanyaan?
          </h2>
          <p className="text-zinc-500 font-medium">
            Temukan jawaban cepat seputar pelaksanaan talkshow di bawah ini.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 border-t border-zinc-100 text-center">
        <p className="text-zinc-400 font-medium tracking-wide">
          &copy; 2026 Invofest Platform &bull; Crafted with pride by{" "}
          <span className="text-red-900 font-bold">Faizal</span>
        </p>
      </footer>
    </div>
  );
};

export default Talkshow;
