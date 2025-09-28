import { dehydrate, QueryClient } from "@tanstack/react-query";
import { fetchNoteById } from "../../../lib/api";
import NoteDetailsClient from "./NoteDetails.client";

interface NotePageProps {
  params: { id: string };
}

export default async function NoteDetailsPage({ params }: NotePageProps) {
  const { id } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["note", id], () => fetchNoteById(id));

  return (
    <NoteDetailsClient noteId={id} dehydratedState={dehydrate(queryClient)} />
  );
}
