import { useNotes } from "../../context/notes-context";

export const NotesCard = ({ id, title, text, isPinned }) => {
  const { notesDispatch } = useNotes();

  const onPinClick = (id) => {
    notesDispatch({
      type: "PIN_UNPIN",
      payload: { id },
    });
  };

  return (
    <div
      key={id}
      className="w-[300px] border border-neutral-800 p-2 rounded-md"
    >
      <div className="flex justify-between border-b-2">
        <p>{title}</p>
        <button onClick={() => onPinClick(id)}>
          <span
            className={`${
              isPinned ? "material-icons" : "material-icons-outlined"
            }`}
          >
            push_pin
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          <button>
            <span className="material-icons-outlined">archive</span>
          </button>
          <button>
            <span className="material-icons-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
