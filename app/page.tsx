import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
  <a href="#" className="flex items-center gap-8">
    <Image
      src="/logo.png"
      alt="Brannklar logo"
      width={300}
      height={300}
      className="h-60 w-auto"
      priority
    />

    <span className="text-5xl font-bold text-red-600">
      Brannklar
    </span>
  </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#hvordan"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Slik fungerer det
          </a>

          <a
            href="#kontakt"
            className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium hover:bg-slate-50"
          >
            Be om demo
          </a>

          <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm">
            🇳🇴 NO
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold sm:text-6xl">
            Egenkontroll av <br />
            brann- og elsikkerhet for borettslag
          </h1>

          <p className="mt-8 text-lg text-slate-600">
            Brannklar hjelper borettslag med å sende ut egenkontroll til
            beboere, samle dokumentasjon og få oversikt over hvilke enheter som
            har svart.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#kontakt"
              className="rounded-2xl bg-red-600 px-8 py-4 text-white font-semibold hover:bg-red-700"
            >
              Be om demo
            </a>

            <a
              href="#hvordan"
              className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-50"
            >
              Slik fungerer det
            </a>
          </div>
        </div>
      </section>

      {/* Hvordan */}
      <section id="hvordan" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-semibold">
            Slik fungerer det
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                <span className="text-red-600">1.</span> Beboer får lenke
              </h3>
              <p className="mt-4 text-slate-600">
                Beboeren mottar en enkel digital egenkontroll på mobil eller PC.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                <span className="text-red-600">2.</span> Styret får oversikt
              </h3>
              <p className="mt-4 text-slate-600">
                Styret ser hvilke enheter som har svart, og hvilke som mangler.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                <span className="text-red-600">3.</span> Dokumentasjon samles
              </h3>
              <p className="mt-4 text-slate-600">
                All dokumentasjon ligger samlet og klart til oppfølging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hvorfor */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-semibold">
            Hvorfor Brannklar
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                Mindre manuelt arbeid
              </h3>
              <p className="mt-4 text-slate-600">
                Borettslaget slipper manuelle lister og spredt dokumentasjon.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                Bedre oversikt
              </h3>
              <p className="mt-4 text-slate-600">
                Én enkel løsning for utsendelse og dokumentert egenkontroll.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold">Kontakt</h2>

          <p className="mt-6 text-lg text-slate-700">
            Vil du teste Brannklar i ditt borettslag eller høre mer om
            løsningen?
          </p>

          <p className="mt-4 text-xl font-semibold text-red-600">
            kontakt@brannklar.no
          </p>
        </div>
      </section>
    </main>
  );
}