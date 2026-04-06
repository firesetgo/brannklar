export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-slate-900">
     <div className="mb-6">
  <a
    href="/"
    className="text-sm text-slate-500 hover:text-red-600 hover:underline"
  >
    ← Tilbake til forsiden
  </a>
</div>
      <h1 className="text-3xl font-semibold sm:text-4xl">
        Lovpålagt brannvern i borettslag og sameier
      </h1>
      

      <p className="mt-6 text-lg text-slate-600">
        Styret i borettslag og sameier har ansvar for å følge opp
        brannsikkerhet i byggmassen. Dette innebærer både jevnlig kontroll,
        vedlikehold og dokumentasjon.
      </p>

      <p className="mt-4 text-slate-600">
        Det er flere lovpålagte anbefalinger som skal utføres av autorisert personell med intervaller for kontroll og utskifting av utstyr.
      </p>

      {/* Brannslukker */}
      <h2 className="mt-10 text-2xl font-semibold">
        Brannslukkerapparat
      </h2>

      <ul className="mt-4 space-y-2 text-slate-600">
        <li>• Kontroll skal bør minst hvert 5. år</li>
        <li>• Service eller utskifting bør skje hvert 10. år</li>
      </ul>

      {/* Røykvarsler */}
      <h2 className="mt-10 text-2xl font-semibold">
        Røykvarsler
      </h2>

      <ul className="mt-4 space-y-2 text-slate-600">
        <li>• Røykvarslere bør testes jevnlig og byttes hvert 10. år</li>
        <li>• Batteri bør byttes hvert år</li>
      </ul>

      {/* Fellesareal */}
      <h2 className="mt-10 text-2xl font-semibold">
        Fellesareal
      </h2>

      <ul className="mt-4 space-y-2 text-slate-600">
        <li>• Brannvernrunde bør gjennomføres årlig av autorisert personell, og jevnlig av vaktmester/styret</li>
        <li>• Kontroll av rømningsveier, utstyr og merking</li>
      </ul>

      {/* Boenheter */}
      <h2 className="mt-10 text-2xl font-semibold">
        Boenheter
      </h2>

    <ul className="mt-4 space-y-2 text-slate-600">
        <li>• Det anbefales å sende ut infobrev til beboere om egenkontroll årlig.</li>
        <li>• En mer omfattende kontroll bør utføres av autorisert personell i alle boenheter med jevne mellomrom,
        for eksempel hvert 5. år. Dette er en god rytme som passer med kontroll av brannslukkerapparat.</li>
    </ul>

      {/* Brannklar */}
      <h2 className="mt-10 text-2xl font-semibold">
        Hvordan Brannklar passer inn
      </h2>

      <p className="mt-4 text-slate-600">
        Brannklar gjør den årlige oppfølgingen enkelt og
        strukturert. Løsningen hjelper styret med å gjennomføre
        egenkontroll, oppdatere beboere, samle dokumentasjon og utføre tiltak.
      </p>

      <p className="mt-4 text-slate-600">
        Dette gir en god og anbefalt kontinuitet i brannvernsarbeidet.
      </p>

      <a
        href="/#kontakt"
        className="mt-8 inline-block rounded-2xl bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-700"
      >
        Ta kontakt
      </a>
      
    </main>
  );
}