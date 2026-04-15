create table if not exists public.formulario_respuestas (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  nombre text not null,
  dedicacion text not null,
  negocio text,
  tarea_ayuda text not null,
  tarea_tiempo text not null,
  frustracion_proceso text not null,
  proceso_actual text,
  herramientas text[] not null default '{}',
  herramientas_other text,
  automatizacion_deseada text not null,
  funcionamiento_ideal text not null,
  decisiones_automaticas text not null,
  frecuencia_diaria text not null,
  volumen_clientes_datos text,
  notificaciones_preferidas text[] not null default '{}',
  notificaciones_other text,
  presupuesto_inversion text not null,
  integrar_ia text not null
);

alter table public.formulario_respuestas enable row level security;

drop policy if exists "Allow anonymous insert formulario respuestas" on public.formulario_respuestas;
create policy "Allow anonymous insert formulario respuestas"
  on public.formulario_respuestas
  for insert
  to anon
  with check (true);
