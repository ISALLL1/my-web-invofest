import Button from "../components/ui/Button";
import Collapse from "../components/ui/Collapse";

export default function Competition() {
  const competitions = [
    {
      title: "Poster Design Competition",
      desc: "Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif.",
      image:
        "https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png",
    },
    {
      title: "UI/UX Design Competition",
      desc: "UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital.",
      image:
        "https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png",
    },
    {
      title: "Web Design Competition",
      desc: "Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menarik dan responsif.",
      image:
        "https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png",
    },
  ];

  const collapseItems = [
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
        "Semua kegiatan dipastikan berbayar ya teman-teman sesuai dengan kategori masing-masing.",
    },
  ];

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-1 order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-black text-red-950 mb-4 tracking-tight">
            IT Competition
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-6 italic leading-snug">
            "From Creation to Innovation"
          </h2>

          <p className="text-zinc-600 text-lg leading-relaxed mb-8 max-w-2xl">
            Kompetisi dalam INVOFEST ini mengusung tema{" "}
            <span className="font-bold text-red-900">
              "From Creation to Innovation"
            </span>
            , yang bertujuan mengajak generasi muda untuk mengembangkan inovasi
            dan kreativitas guna membentuk kelompok yang memiliki potensi luar
            biasa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              label="INFO SELENGKAPNYA"
              variant="primary"
              className="px-8 py-4 rounded-2xl shadow-xl shadow-red-900/20 font-bold"
            />
            <Button
              label="HUBUNGI PANITIA"
              variant="outline"
              className="px-8 py-4 rounded-2xl font-bold"
            />
          </div>
        </div>

        <div className="flex-1 flex justify-center order-1 md:order-2">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt="Invofest Mascot"
            className="w-64 md:w-full max-w-sm drop-shadow-2xl animate-bounce-slow"
          />
        </div>
      </section>

      {/* --- DESKRIPSI --- */}
      <section className="py-24 bg-zinc-50 rounded-[3rem] mx-4 md:mx-6 px-6 text-center shadow-sm">
        <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-6">
          Deskripsi Kompetisi
        </h2>
        <div className="h-1.5 w-24 bg-red-900 mx-auto rounded-full mb-10"></div>

        <p className="max-w-4xl mx-auto text-zinc-700 text-lg leading-relaxed">
          Kompetisi dalam kegiatan{" "}
          <strong className="text-red-900">
            INVOFEST (Informatics Vocational Festival)
          </strong>{" "}
          terdiri dari berbagai kategori seperti Poster Design, UI/UX Design,
          dan Web Design Competition. Dengan tema{" "}
          <strong className="text-red-900">
            “From Creation to Innovation”
          </strong>
          , kami mengajak generasi muda untuk mengembangkan inovasi dan
          kreativitas guna membentuk kelompok yang memiliki potensi luar biasa
          untuk mewujudkan masa depan yang berkelanjutan.
        </p>
      </section>

      {/* --- DAFTAR KOMPETISI --- */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-4">
            Daftar Kompetisi
          </h2>
          <div className="h-1.5 w-24 bg-red-900 mx-auto rounded-full mb-4"></div>
          <p className="text-zinc-500 font-medium">
            Pilih kategori yang sesuai dengan keahlian tim kamu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {competitions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/50 overflow-hidden hover:scale-[1.02] transition-all duration-300 border border-zinc-100 flex flex-col"
            >
              <div className="p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-[2rem] shadow-md"
                />
              </div>

              <div className="p-8 pt-4 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-red-950 mb-4">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                <Button
                  label="Info Selengkapnya"
                  variant="primary"
                  className="w-full py-4 rounded-xl font-bold"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-3">
            Pertanyaan Umum
          </h2>
          <p className="text-zinc-500 font-medium">
            Informasi tambahan mengenai teknis kompetisi.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {collapseItems.map((item, index) => (
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
}
