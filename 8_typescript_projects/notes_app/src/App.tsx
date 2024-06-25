import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Note, NoteData, Tag } from "./types";
import { v4 } from "uuid";

const App = () => {
  const [notes, setNotes] = useLocalStorage<Note[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  // etiket oluşturma fonk
  const createTag = (tag: Tag): void => {
    setTags([...tags, tag]);
  };

  // not oluşturma fonk
  const createNote = (noteData: NoteData): void => {
    // formdan gelen veriye id ekle
    const newNote: Note = {
      id: v4(),
      ...noteData,
    };

    setNotes([...notes, newNote]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" 
        element={<Main notes={notes} availableTags={tags} />} />

        <Route
          path="/new"
          element={
            <Create
              handleSubmit={createNote}
              createTag={createTag}
              availableTags={tags}
            />
          }
        />

        <Route path="/note/:id" element={<Detail />} />
        <Route path="/note/:id/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
