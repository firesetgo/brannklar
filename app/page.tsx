<footer className="bg-slate-950 text-slate-300">
  <div className="mx-auto max-w-6xl px-6 py-12">
    
    <div className="grid gap-10 md:grid-cols-3">
      
      {/* Brand */}
      <div>
        <h3 className="text-lg font-semibold text-white">Brannklar.no</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          En moderne løsning for enkel og trygg egenkontroll av brann- og elsikkerhet i borettslag og sameier.
        </p>
      </div>

      {/* Navigasjon */}
      <div>
        <h4 className="text-sm font-semibold text-white">Navigasjon</h4>
        <div className="mt-3 flex flex-col gap-2 text-sm">
          <a href="#hvordan" className="hover:text-white transition">
            Slik fungerer det
          </a>
          <a href="#kontakt" className="hover:text-white transition">
            Kontakt
          </a>
          <a href="/egenkontroll-brannvern-borettslag" className="hover:text-white transition">
            Les mer
          </a>
        </div>
      </div>

      {/* Kontakt */}
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

    {/* Bottom */}
    <div className="mt-10 border-t border-slate-800 pt-6">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} Brannklar.no. Alle rettigheter forbeholdt.
      </p>
      <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-600">
        Informasjonen på nettsiden er ment som veiledning og erstatter ikke gjeldende lover, forskrifter eller krav til kontroll utført av autorisert fagpersonell der dette er påkrevd.
      </p>
    </div>

  </div>
</footer>