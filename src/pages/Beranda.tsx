import Button from "../components/ui/Button";
import Collapse from "../components/ui/Collapse";
import SpeakerCard from "../components/ui/SpeakerCard";
import Card from "../components/ui/Card";

const Beranda = () => {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
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

  const cardItems = [
    {
      title: "IT Seminar",
      description:
        'Seminar nasional ini membahas "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif".',
    },
    {
      title: "IT Talkshow",
      description:
        'Talkshow "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan".',
    },
    {
      title: "IT Competition",
      description:
        'Kompetisi "From Creation to Innovation" untuk generasi muda kreatif.',
    },
    {
      title: "IT Workshop",
      description:
        "Workshop AI untuk Gen Z dalam menciptakan solusi teknologi berkelanjutan.",
    },
  ];

  return (
    <div className="bg-white">
      <section
        id="hero"
        className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-10 justify-between items-center min-h-[80vh]"
      >
        <div className="w-full md:w-2/3 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            alt="Invofest 2026"
            className="w-full max-w-sm"
          />
          <p className="text-gray-700 leading-relaxed text-lg max-w-2xl">
            Invofest (Informatics Vocational Festival) adalah festival tahunan
            yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
            Indonesia dalam menghadapi era digital. Dengan mengusung tema{" "}
            <strong className="text-red-900">
              "Beyond Limits, Beyond Intelligence: Innovate for a Smarter
              Tomorrow"
            </strong>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
            <Button
              label="Pelajari Lebih Lanjut"
              variant="primary"
              className="px-8 py-4 rounded-2xl shadow-xl shadow-red-900/20 font-bold"
            />
            <Button
              label="Hubungi Kami"
              variant="outline"
              className="px-8 py-4 rounded-2xl font-bold"
            />
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt="Mascot"
            className="w-64 md:w-full max-w-xs md:max-w-sm drop-shadow-2xl animate-bounce-slow"
          />
        </div>
      </section>

      <section id="speaker" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-center text-red-950 mb-3">
            Narasumber Ahli
          </h2>
          <div className="h-1.5 w-24 bg-red-900 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} />
          ))}
        </div>
      </section>

      <section
        id="cards"
        className="py-24 bg-zinc-50 rounded-[3rem] mx-4 md:mx-6 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-center text-red-950 mb-3">
              Eksplorasi Program
            </h2>
            <div className="h-1.5 w-24 bg-red-900 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {cardItems.map((item, index) => (
              <Card
                key={index}
                className="w-full bg-white border-none p-8 rounded-[2.5rem] shadow-xl shadow-zinc-200/50 hover:scale-[1.02] transition-transform flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-red-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed mb-8 text-lg">
                    {item.description}
                  </p>
                </div>
                <Button
                  label="Detail Acara"
                  variant="primary"
                  className="w-full md:w-fit px-10 py-3 rounded-xl font-bold"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-3">
            Informasi Penting
          </h2>
          <p className="text-zinc-500 font-medium">
            Temukan jawaban atas pertanyaan seputar pelaksanaan Invofest 2026.
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

      <footer className="py-16 border-t border-zinc-100 text-center">
        <p className="text-zinc-400 font-medium tracking-wide">
          &copy; 2026 Invofest Platform &bull; Crafted with pride by{" "}
          <span className="text-red-900 font-bold">Faizal</span>
        </p>
      </footer>
    </div>
  );
};

export default Beranda;
