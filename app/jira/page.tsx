const PORTAL_URL =
  "https://santacruzoyg.atlassian.net/servicedesk/customer/portal/2/create/10017";

export default function JiraTestPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md text-center space-y-6">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Prueba widget Jira</h1>
          <p className="text-neutral-500 text-sm">
            Página de prueba, sin enlaces desde el sitio.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-[var(--brand-gray)] p-8 space-y-4">
          <h2 className="text-lg font-semibold text-[var(--brand-dark)]">
            ¿Tenés una queja o solicitud?
          </h2>
          <p className="text-sm text-neutral-600">
            Contanos tu experiencia y te vamos a responder a la brevedad.
          </p>
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm uppercase tracking-[0.16em] font-medium bg-brand text-white transition-colors hover:bg-[var(--brand-dark)]"
          >
            Enviar solicitud
          </a>
        </div>
      </div>
    </main>
  );
}
