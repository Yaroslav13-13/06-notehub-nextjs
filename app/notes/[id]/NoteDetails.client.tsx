// "use client";

// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchNoteById } from "../../../lib/api";
// import type { Note } from "../../../types/note";
// import Loader from "../../../components/Loader/Loader";
// import css from "./NoteDetails.module.css";

// const NoteDetailsContent: React.FC<{ noteId: string }> = ({ noteId }) => {
//   const {
//     data: note,
//     isLoading,
//     isError,
//   } = useQuery<Note, Error>({
//     queryKey: ["note", noteId],
//     queryFn: () => fetchNoteById(noteId),
//   });

//   if (isLoading) return <Loader />;
//   if (isError || !note) return <p>Something went wrong.</p>;

//   return (
//     <div className={css.container}>
//       <div className={css.item}>
//         <div className={css.header}>
//           <h2>{note.title}</h2>
//         </div>
//         <p className={css.content}>{note.content}</p>
//         <div className={css.boxtext}>
//           {note.tag && <span className={css.tag}>{note.tag}</span>}
//           <p className={css.date}>
//             Created at: {new Date(note.createdAt).toLocaleString()}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoteDetailsContent;

"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "../../../lib/api";
import type { Note } from "../../../types/note";
import Loader from "../../../components/Loader/Loader";
import { FiTag, FiCalendar } from "react-icons/fi";
import css from "./NoteDetails.module.css";

const NoteDetailsContent: React.FC<{ noteId: string }> = ({ noteId }) => {
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery<Note, Error>({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  if (isLoading) return <Loader />;
  if (isError || !note) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>

        <p className={css.content}>{note.content}</p>

        <div className={css.boxtext}>
          {note.tag && (
            <span className={css.tag}>
              <FiTag style={{ marginRight: "6px" }} />
              {note.tag}
            </span>
          )}
          <p className={css.date}>
            <FiCalendar style={{ marginRight: "6px" }} />
            {new Date(note.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailsContent;
