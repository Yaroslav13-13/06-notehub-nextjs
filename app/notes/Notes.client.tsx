"use client";

import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fetchNotes } from "../../lib/api";
import NoteList from "../../components/NoteList/NoteList";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import Pagination from "../../components/Pagination/Pagination";
import NoteForm from "../../components/NoteForm/NoteForm";
import Modal from "../../components/Modal/Modal";
import Notification from "../../components/Notification/Notification";
import { useDebounce } from "use-debounce";
import type { Note } from "../../types/note";

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

type NotificationType = "success" | "error";

const NotesClient: React.FC = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [notificationType, setNotificationType] =
    useState<NotificationType>("success");

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NotesContent
        page={page}
        setPage={setPage}
        search={search}
        setSearch={setSearch}
        debouncedSearch={debouncedSearch}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        notification={notification}
        setNotification={setNotification}
        notificationType={notificationType}
        setNotificationType={setNotificationType}
      />
    </QueryClientProvider>
  );
};

// Виніс всю логіку SPA в NotesContent
interface NotesContentProps {
  page: number;
  setPage: (n: number) => void;
  search: string;
  setSearch: (v: string) => void;
  debouncedSearch: string;
  isModalOpen: boolean;
  setIsModalOpen: (b: boolean) => void;
  notification: string | null;
  setNotification: (s: string | null) => void;
  notificationType: NotificationType;
  setNotificationType: (t: NotificationType) => void;
}

const NotesContent: React.FC<NotesContentProps> = ({
  page,
  setPage,
  search,
  setSearch,
  debouncedSearch,
  isModalOpen,
  setIsModalOpen,
  notification,
  setNotification,
  notificationType,
  setNotificationType,
}) => {
  const { data, isLoading, isError } = useQuery<FetchNotesResponse, Error>({
    queryKey: ["notes", page, debouncedSearch],
    queryFn: () => fetchNotes({ page, perPage: 12, search: debouncedSearch }),
    placeholderData: (previousData) => previousData,
  });

  const notes: Note[] = data?.notes ?? [];
  const totalPages: number = data?.totalPages ?? 0;

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(null), 2500);
    return () => clearTimeout(timer);
  }, [notification]);

  useEffect(() => {
    if (!isLoading && !isError && debouncedSearch && notes.length === 0) {
      setNotification("No notes found");
      setNotificationType("error");
    }
  }, [isLoading, isError, notes.length, debouncedSearch]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <SearchBox value={search} onChange={setSearch} />
        <button onClick={() => setIsModalOpen(true)}>+ Create note</button>
      </div>

      {isLoading && <Loader />}
      {!isLoading && notes.length > 0 && <NoteList notes={notes} />}
      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <NoteForm onCancel={() => setIsModalOpen(false)} />
        </Modal>
      )}
      {notification && (
        <Notification
          message={notification}
          type={notificationType}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default NotesClient;
