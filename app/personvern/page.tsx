export default function PersonvernPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-slate-800">
      <h1 className="text-3xl font-semibold">Personvernerklæring</h1>

      <p className="mt-6">
        Denne personvernerklæringen forklarer hvordan Brannklar.no behandler
        personopplysninger.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Hvem vi er</h2>
      <p className="mt-2">
        Brannklar.no er en tjeneste for egenkontroll av brann- og elsikkerhet i
        borettslag og sameier.
      </p>

      <h2 className="mt-10 text-xl font-semibold">
        Hvilke opplysninger vi samler inn
      </h2>
      <p className="mt-2">
        Vi samler kun inn opplysninger som du selv gir til oss, for eksempel når
        du tar kontakt via e-post.
      </p>

      <h2 className="mt-10 text-xl font-semibold">
        Hva opplysningene brukes til
      </h2>
      <p className="mt-2">
        Opplysningene brukes kun til å svare på henvendelser og følge opp
        forespørsler.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Kontakt</h2>
      <p className="mt-2">
        Kontakt oss på{" "}
        <a
          href="mailto:kontakt@brannklar.no"
          className="text-red-600 hover:underline"
        >
          kontakt@brannklar.no
        </a>
      </p>
    </main>
  );
}