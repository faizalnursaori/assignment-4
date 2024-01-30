import { Todolist } from "@/components/Todolist";
import { FormTodo } from "@/components/FormTodo";

async function getData() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/o9TtrvRNlt4N");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getData();
  return (
    <main>
      <Todolist data={data} />
      <FormTodo />
    </main>
  );
}
