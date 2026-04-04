import Link from "next/link";

export const metadata = {
  title: "Egenkontroll i borettslag | Brannklar",
  description:
    "Les mer om hvordan borettslag og sameier kan gjennomføre enkel og strukturert egenkontroll av brann- og elsikkerhet.",
};

export default function EgenkontrollPage() {
  return (
    <main className="bg-white text-slate-900">
        <div className="mx-auto max-w-4xl px-6 pt-6">
        <Link
          href="/"
           className="text-sm text-slate-500 hover:text-red-600 transition"
          >
      ← Tilbake til forsiden
         </Link>
        </div>
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-red-600">Brannklar</p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
            Egenkontroll av brannvern i borettslag
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Egenkontroll gjør det enklere for styret å følge opp brann- og
            elsikkerhet i boligmassen på en strukturert måte. Brannklar er
            utviklet for å gjøre denne prosessen enklere, mer oversiktlig og
            bedre dokumentert.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-semibold">Enklere gjennomføring</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Beboere kan gjennomføre kontrollen enkelt på mobil eller PC,
                uten unødvendig administrasjon.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-semibold">Bedre oversikt</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Styret får samlet oversikt over hvem som har svart og hva som
                eventuelt må følges opp videre.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-semibold">Trygg dokumentasjon</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Løsningen bidrar til tydelig dokumentasjon av gjennomført
                egenkontroll og anbefalte tiltak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Hvorfor er dette nyttig?
          </h2>

          <div className="mt-6 space-y-5 leading-7 text-slate-600">
            <p>
              Borettslag og sameier har ansvar for å jobbe systematisk med
              sikkerhet. En årlig egenkontroll kan være et nyttig supplement til
              autoriserte kontroller og faste rutiner.
            </p>

            <p>
              Med en digital løsning blir det enklere å følge opp beboere,
              dokumentere status og identifisere forhold som bør vurderes
              nærmere.
            </p>

            <p>
              Brannklar er laget for å støtte styret i dette arbeidet på en
              enkel og praktisk måte.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/#kontakt"
              className="rounded-2xl bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-700"
            >
              Be om demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}