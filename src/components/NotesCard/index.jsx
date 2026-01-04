import { useNotes } from "../../context/notes-context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { findNotesInBin } from "../../utils/findNotesInBin";

export const NotesCard = ({ id, title, text, isPinned }) => {
  const { archive, bin, notesDispatch } = useNotes();

  const isNotesInArchive = findNotesInArchive(archive, id);

  const isNotesInBin = findNotesInBin(bin, id);

  const onPinClick = (id) => {
    notesDispatch({
      type: "PIN_UNPIN",
      payload: { id },
    });
  };

  const onArchiveClick = (id) => {
    !isNotesInArchive
      ? notesDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_ARCHIVE",
          payload: { id },
        });
  };

  const onDeleteClick = (id) => {
    !isNotesInBin
      ? notesDispatch({
          type: "ADD_TO_BIN",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_BIN",
          payload: { id },
        });
  };

  console.log(bin);

  return (
    <div
      key={id}
      className="w-[300px] border border-neutral-800 p-2 rounded-md"
    >
      <div className="flex justify-between border-b-2">
        <p>{title}</p>
        {!isNotesInArchive && !isNotesInBin ? (
          <button onClick={() => onPinClick(id)}>
            <span
              className={`${
                isPinned ? "material-icons" : "material-icons-outlined"
              }`}
            >
              push_pin
            </span>
          </button>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          {!isNotesInBin ? (
            <button onClick={() => onArchiveClick(id)}>
              <span
                className={
                  isNotesInArchive
                    ? "material-icons"
                    : "material-icons-outlined"
                }
              >
                archive
              </span>
            </button>
          ) : (
            <></>
          )}

          <button onClick={() => onDeleteClick(id)}>
            <span
              className={
                isNotesInBin ? "material-icons" : "material-icons-outlined"
              }
            >
              delete
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
