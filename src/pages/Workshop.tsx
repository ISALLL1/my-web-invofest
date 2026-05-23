import Button from "../components/ui/Button";
import SpeakerCard from "../components/ui/SpeakerCard";
import Collapse from "../components/ui/Collapse";
import { Calendar, Clock, Building } from "lucide-react";

const Workshop = () => {
  const mentors = [
    {
      name: "Lhuqita Fazry",
      role: "Mobile Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
    {
      name: "M. Dendi Purwanto",
      role: "Artificial Intelligence Engineer, PT. Mayar Kernel Supernova",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
    },
    {
      name: "Danang Avan M",
      role: "Cyber Security Analyst, Founder | Contributor TegalSec",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
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

  const workshopSchedules = [
    {
      icon: <Calendar className="w-6 h-6" />,
      topic: "Mobile Development",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      room: "Lab Kom D.1",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      topic: "Artificial Intelligence (Day 1)",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      room: "Lab Kom D.2",
    },
    {
      icon: <Building className="w-6 h-6" />,
      topic: "Artificial Intelligence (Day 2)",
      date: "Rabu, 26 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      room: "Lab Kom D.2",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-1 order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-black text-red-950 mb-4 tracking-tight">
            IT Workshop
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-red-800 mb-6 italic leading-snug">
            "AI for a Sustainable Future: The Role of Z Generation in the
            Digital Era"
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed mb-8 max-w-2xl">
            Menjembatani potensi Generasi Z dan kekuatan AI untuk menciptakan
            solusi lingkungan yang nyata dan terukur di era digital.
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
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
            alt="Workshop Mascot"
            className="w-64 md:w-full max-w-sm drop-shadow-2xl animate-bounce-slow"
          />
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-24 bg-zinc-50 rounded-[3rem] mx-4 md:mx-6 px-6 text-center shadow-sm">
        <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-6">
          Tentang IT Workshop
        </h2>
        <div className="h-1.5 w-24 bg-red-900 mx-auto rounded-full mb-10"></div>
        <p className="max-w-4xl mx-auto text-zinc-600 text-lg leading-relaxed font-medium">
          Didesain khusus untuk Generasi Z sebagai digital natives. Melalui sesi
          hands-on, workshop ini bertujuan memberdayakan peserta untuk
          menggunakan AI sebagai alat ampuh menciptakan solusi nyata bagi
          isu-isu lingkungan demi masa depan bumi yang lebih baik.
        </p>
      </section>

      {/* --- MENTORS --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-4">
            Mentor Ahli
          </h2>
          <div className="h-1.5 w-24 bg-red-900 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex justify-center">
              <SpeakerCard {...mentor} />
            </div>
          ))}
        </div>
      </section>

      {/* --- SCHEDULE --- */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-black text-center text-red-950 mb-16">
          Jadwal Pelaksanaan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshopSchedules.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 shadow-xl shadow-zinc-200/40 hover:scale-[1.02] transition-transform flex flex-col items-center text-center"
            >
              <div className="p-5 bg-red-50 text-red-900 rounded-[1.5rem] mb-6 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-red-950 mb-4 leading-tight">
                {item.topic}
              </h3>
              <div className="space-y-3 text-zinc-500 font-bold w-full">
                <div className="py-2 border-y border-zinc-50">
                  <p className="text-sm tracking-wide">{item.date}</p>
                  <p className="text-xs text-red-800 opacity-70">{item.time}</p>
                </div>
                <div className="pt-2">
                  <span className="px-4 py-1.5 bg-zinc-100 rounded-full text-zinc-800 text-xs">
                    {item.room}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-4">
            Informasi Tambahan
          </h2>
          <p className="text-zinc-500 font-medium">
            Hal-hal yang sering ditanyakan mengenai kegiatan workshop.
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

export default Workshop;
