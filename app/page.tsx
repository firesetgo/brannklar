import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 sm:py-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Brannklar logo"
            width={300}
            height={300}
            className="h-12 w-auto sm:h-20"
            priority
          />
          <span className="text-2xl font-bold text-red-600 sm:text-3xl">
            Brannklar
          </span>
        </Link>

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
          <a
             href="/lovpagt-brannvern-borettslag"
              className="rounded-2xl border border-red-300 px-5 py-3 text-sm font-medium hover:bg-slate-50"
          >
              Anbefalt brannvern for borettslag
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
            Enkel og riktig egenkontroll av brannvern og elsikkerhet
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Brannklar gjør det enkelt for borettslag å gjennomføre årlig
            egenkontroll – og sikrer at den er oppdatert i tråd med dagens
            anbefalinger.
          </p>

          <p className="mt-4 text-slate-600">
            Utviklet for å gi styret trygg dokumentasjon der det ikke kreves
            autorisert firma.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#kontakt"
              className="rounded-2xl bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-700"
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
      <section id="hvordan" className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">
            Slik fungerer det
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">
                <span className="text-red-600">1.</span> Beboer utfører
              </h3>
              <p className="mt-3 text-slate-600">
                Egenkontrollen gjennomføres enkelt på mobil eller PC.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">
                <span className="text-red-600">2.</span> Styret får oversikt
              </h3>
              <p className="mt-3 text-slate-600">
                Full oversikt over hvilke enheter som har utført.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">
                <span className="text-red-600">3.</span> Kontinuerlig dokumentasjon
              </h3>
              <p className="mt-3 text-slate-600">
                ..Gir grobunn for godt brannvern!  
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hvorfor */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">
            Hvorfor Brannklar
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Fleksibelt</h3>
              <p className="mt-3 text-slate-600">
                 Beboerne mottar en link og gjennomgår sitt brannvern og generell brann- og elsikkerhet; på det tidspunktet som passer dem.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">
                God oversikt og kontroll </h3>
              <p className="mt-3 text-slate-600">
                Én samlet løsning for gjennomføring og dokumentasjon. 
                Styret kan fokusere på tiltak.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Kostnadseffektivt</h3>
              <p className="mt-3 text-slate-600">
                Oppnå kontinuerlig og bedre brannsikkerhet med lavere kostnad.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-12 sm:py-16">
       <div className="mx-auto max-w-4xl px-6 text-center">
         <h2 className="text-2xl font-semibold sm:text-3xl">
                Tetninger i søppelsjakt – en skjult brannrisiko
         </h2>

        <p className="mt-6 text-lg text-slate-600">
      Slitte eller manglende tetninger i søppelsjakt kan bidra til spredning av røyk og brann mellom etasjer.
        </p>

        <p className="mt-4 text-slate-600">
      Dette er en kjent utfordring i mange eldre borettslag og sameier – men blir ofte ikke fulgt opp.
       </p>

        <p className="mt-4 text-slate-600">
      Brannklar kan bidra med utskifting av tetninger og nøkler som en del av arbeidet med brannsikkerhet i bygget.
       </p>

        <p className="mt-4 text-sm text-slate-500">
      Dårlig tetning av lukene i søppelsjakten kan også gi lukt og trekk.
      </p>

    <a
      href="#kontakt"
      className="mt-6 inline-block rounded-2xl bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-700"
    >
      Ta kontakt om søppelsjakt
    </a>
  </div>
</section>
      {/* Autorisert kontroll */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Et godt supplement til autorisert kontroll
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Det anbefales at brannvernrunde av boenheter i et borettslag
            gjennomføres av autorisert firma med jevne mellomrom, og gjerne
            hvert 5. år.
          </p>

          <p className="mt-6 text-slate-600">
            Brannklar er utviklet for å gjøre den årlige egenkontrollen smidig
            og korrekt mellom disse kontrollene.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Kontakt</h2>

          <p className="mt-6 text-lg text-slate-700">
            Vil du teste Brannklar i ditt borettslag eller høre mer om
            løsningen?
          </p>

          <a
            href="mailto:kontakt@brannklar.no"
            className="mt-4 inline-block text-xl font-semibold text-red-600 hover:underline"
          >
            kontakt@brannklar.no
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-white">Brannklar.no</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                En moderne løsning for enkel og trygg egenkontroll av brann- og
                elsikkerhet i borettslag og sameier.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Navigasjon</h4>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a href="/personvern" className="hover:text-white transition">
                   Personvern
               </a>
                <a href="#hvordan" className="transition hover:text-white">
                  Slik fungerer det
                </a>
                <a href="#kontakt" className="transition hover:text-white">
                  Kontakt
                </a>
                <Link
                  href="/egenkontroll-brannvern-borettslag"
                  className="transition hover:text-white"
                >
                  Les mer
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Kontakt</h4>
              <p className="mt-3 text-sm text-slate-400">
                Har du spørsmål eller ønsker demo?
              </p>
              <a
                href="mailto:kontakt@brannklar.no"
                className="mt-2 inline-block text-sm font-medium text-red-500 hover:text-red-400"
              >
                kontakt@brannklar.no
              </a>
              
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Brannklar.no. Alle rettigheter forbeholdt.
            </p>
            <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-600">
              Informasjonen på nettsiden er ment som veiledning og erstatter
              ikke gjeldende lover, forskrifter eller krav til kontroll utført
              av autorisert fagpersonell der dette er påkrevd.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}