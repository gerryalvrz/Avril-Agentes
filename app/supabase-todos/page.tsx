import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

type Todo = {
  id: number | string;
  name: string;
};

export default async function SupabaseTodosPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: todos, error } = await supabase.from("todos").select("id,name");

  if (error) {
    return (
      <main className="mx-auto max-w-3xl p-8">
        <h1 className="text-2xl font-semibold">Supabase Connection Check</h1>
        <p className="mt-4 text-red-600">
          Query failed: {error.message}
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-2xl font-semibold">Supabase Connection Check</h1>
      <ul className="mt-4 list-inside list-disc space-y-2">
        {(todos as Todo[] | null)?.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </main>
  );
}
