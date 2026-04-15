import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

type SearchParams = Promise<{
  status?: string;
  message?: string;
}>;

async function submitFormulario(formData: FormData) {
  "use server";

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const payload = {
    nombre: String(formData.get("nombre") ?? ""),
    dedicacion: String(formData.get("dedicacion") ?? ""),
    negocio: String(formData.get("negocio") ?? ""),
    tarea_ayuda: String(formData.get("tarea_ayuda") ?? ""),
    tarea_tiempo: String(formData.get("tarea_tiempo") ?? ""),
    frustracion_proceso: String(formData.get("frustracion_proceso") ?? ""),
    proceso_actual: String(formData.get("proceso_actual") ?? ""),
    herramientas: formData.getAll("herramientas").map(String),
    herramientas_other: String(formData.get("herramientas_other") ?? ""),
    automatizacion_deseada: String(formData.get("automatizacion_deseada") ?? ""),
    funcionamiento_ideal: String(formData.get("funcionamiento_ideal") ?? ""),
    decisiones_automaticas: String(formData.get("decisiones_automaticas") ?? ""),
    frecuencia_diaria: String(formData.get("frecuencia_diaria") ?? ""),
    volumen_clientes_datos: String(formData.get("volumen_clientes_datos") ?? ""),
    notificaciones_preferidas: formData.getAll("notificaciones_preferidas").map(String),
    notificaciones_other: String(formData.get("notificaciones_other") ?? ""),
    presupuesto_inversion: String(formData.get("presupuesto_inversion") ?? ""),
    integrar_ia: String(formData.get("integrar_ia") ?? ""),
  };

  const { error } = await supabase.from("formulario_respuestas").insert(payload);

  if (error) {
    redirect(`/formulario?status=error&message=${encodeURIComponent(error.message)}`);
  }

  redirect("/formulario?status=success");
}

export default async function FormularioPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const status = searchParams?.status;
  const message = searchParams?.message;

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl p-6 md:p-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Bienvenido a Avril, dinos cómo podemos ayudarte.
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Responder este formulario nos permite:</p>
      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
        <li>✔ Entender tu situación real</li>
        <li>✔ Diseñar una solución a tu medida</li>
        <li>✔ Ahorrarte tiempo y dinero</li>
        <li>✔ Entregarte mejores resultados</li>
      </ul>

      {status === "success" ? (
        <p className="mt-4 rounded-md border border-green-600/40 bg-green-500/10 p-3 text-sm text-green-700">
          Formulario enviado correctamente.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 rounded-md border border-red-600/40 bg-red-500/10 p-3 text-sm text-red-700">
          Error al guardar: {message ?? "No se pudo enviar el formulario."}
        </p>
      ) : null}

      <form action={submitFormulario} className="mt-8 space-y-6">
        <section className="space-y-4 rounded-lg border p-5">
          <label className="space-y-1 text-sm">
            <span>Nombre completo *</span>
            <input name="nombre" required className="w-full rounded-md border bg-background px-3 py-2" />
          </label>
          <label className="space-y-1 text-sm">
            <span>¿A qué te dedicas? *</span>
            <input name="dedicacion" required className="w-full rounded-md border bg-background px-3 py-2" />
          </label>
          <label className="space-y-1 text-sm">
            <span>Nombre de tu negocio (opcional)</span>
            <input name="negocio" className="w-full rounded-md border bg-background px-3 py-2" />
          </label>
          <label className="space-y-1 text-sm">
            <span>¿En qué tarea te gustaría que te ayudemos? *</span>
            <input name="tarea_ayuda" required className="w-full rounded-md border bg-background px-3 py-2" />
          </label>
          <label className="space-y-1 text-sm">
            <span>¿Qué es lo que más tiempo te quita en tu día? *</span>
            <input name="tarea_tiempo" required className="w-full rounded-md border bg-background px-3 py-2" />
          </label>
          <label className="space-y-1 text-sm">
            <span>¿Qué es lo que más te frustra de ese proceso? *</span>
            <textarea
              name="frustracion_proceso"
              required
              rows={3}
              className="w-full rounded-md border bg-background px-3 py-2"
            />
          </label>
          <label className="space-y-1 text-sm">
            <span>Describe paso a paso cómo haces actualmente esa tarea</span>
            <textarea name="proceso_actual" rows={4} className="w-full rounded-md border bg-background px-3 py-2" />
          </label>

          <fieldset className="space-y-2 text-sm">
            <legend className="font-medium">¿Qué herramientas utilizas? *</legend>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="herramientas" value="WhatsApp" />
              <span>WhatsApp</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="herramientas" value="Excel" />
              <span>Excel</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="herramientas" value="Google Sheets" />
              <span>Google Sheets</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="herramientas" value="Correo electrónico" />
              <span>Correo electrónico</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="herramientas" value="Redes sociales" />
              <span>Redes sociales</span>
            </label>
            <label className="space-y-1 text-sm">
              <span>Other:</span>
              <input name="herramientas_other" className="w-full rounded-md border bg-background px-3 py-2" />
            </label>
          </fieldset>

          <label className="space-y-1 text-sm">
            <span>¿Qué te gustaría que sucediera automáticamente? *</span>
            <textarea
              name="automatizacion_deseada"
              required
              rows={4}
              className="w-full rounded-md border bg-background px-3 py-2"
              placeholder="Por ejemplo: “Que cuando me escriban, se registre el cliente y se le responda automáticamente”"
            />
          </label>
          <label className="space-y-1 text-sm">
            <span>¿Como te gustaría que te funcionara? *</span>
            <textarea
              name="funcionamiento_ideal"
              required
              rows={4}
              className="w-full rounded-md border bg-background px-3 py-2"
            />
          </label>

          <fieldset className="space-y-2 text-sm">
            <legend className="font-medium">¿Quieres que el sistema tome decisiones automáticamente?</legend>
            <label className="flex items-center gap-2">
              <input type="radio" name="decisiones_automaticas" value="Si" required />
              <span>Si</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="decisiones_automaticas" value="No" required />
              <span>No</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="decisiones_automaticas" value="No estoy seguro" required />
              <span>No estoy seguro</span>
            </label>
          </fieldset>

          <fieldset className="space-y-2 text-sm">
            <legend className="font-medium">¿Cuántas veces realizas esta tarea al día? *</legend>
            <label className="flex items-center gap-2">
              <input type="radio" name="frecuencia_diaria" value="1-5" required />
              <span>1-5</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="frecuencia_diaria" value="5-20" required />
              <span>5-20</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="frecuencia_diaria" value="3" required />
              <span>3</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="frecuencia_diaria" value="20-50" required />
              <span>20-50</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="frecuencia_diaria" value="50+" required />
              <span>50+</span>
            </label>
          </fieldset>

          <label className="space-y-1 text-sm">
            <span>¿Cuántos clientes o datos manejas aproximadamente?</span>
            <input name="volumen_clientes_datos" className="w-full rounded-md border bg-background px-3 py-2" />
          </label>

          <fieldset className="space-y-2 text-sm">
            <legend className="font-medium">¿Cómo te gustaría recibir notificaciones?</legend>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="notificaciones_preferidas" value="WhatsApp" />
              <span>WhatsApp</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="notificaciones_preferidas" value="Correo electronico" />
              <span>Correo electronico</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="notificaciones_preferidas"
                value="Panel web donde puedas ver tus notifiaciones"
              />
              <span>Panel web donde puedas ver tus notifiaciones</span>
            </label>
            <label className="space-y-1 text-sm">
              <span>Other:</span>
              <input name="notificaciones_other" className="w-full rounded-md border bg-background px-3 py-2" />
            </label>
          </fieldset>

          <fieldset className="space-y-2 text-sm">
            <legend className="font-medium">¿Cuánto estarías dispuesto a invertir?</legend>
            <label className="flex items-center gap-2">
              <input type="radio" name="presupuesto_inversion" value="Menos de $1,000 MXN" required />
              <span>Menos de $1,000 MXN</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="presupuesto_inversion" value="$1,000 – $5,000 MXN" required />
              <span>$1,000 – $5,000 MXN</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="presupuesto_inversion" value="$5,000 – $15,000 MXN" required />
              <span>$5,000 – $15,000 MXN</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="presupuesto_inversion" value="Más de $15,000 MXN" required />
              <span>Más de $15,000 MXN</span>
            </label>
          </fieldset>

          <fieldset className="space-y-2 text-sm">
            <legend className="font-medium">¿Te interesa integrar inteligencia artificial? *</legend>
            <label className="flex items-center gap-2">
              <input type="radio" name="integrar_ia" value="Si" required />
              <span>Si</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="integrar_ia" value="No" required />
              <span>No</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="integrar_ia" value="No lo sé" required />
              <span>No lo sé</span>
            </label>
          </fieldset>
        </section>

        <button
          type="submit"
          className="inline-flex rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background"
        >
          Enviar formulario
        </button>
      </form>
    </main>
  );
}
