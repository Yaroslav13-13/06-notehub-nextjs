import { dehydrate, QueryClient } from "@tanstack/react-query";
import { fetchNotes } from "../../lib/api";
import NotesClient from "./Notes.client";

export const dynamic = "force-dynamic"; // щоб перезавантажувалося при кожному запиті

export default async function NotesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["notes", 1, ""], () =>
    fetchNotes({ page: 1, perPage: 12, search: "" })
  );

  return <NotesClient dehydratedState={dehydrate(queryClient)} />;
}
