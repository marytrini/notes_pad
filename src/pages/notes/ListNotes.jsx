import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NotesItem from "../../components/notesItems/NoteItem";
import ButtonHome from "../../components/button/ButtonHome";
import Modal from "../../components/modal/Modal";
import Footer from "../../components/footer/Footer";

const NotesList = () => {
  const [noteList, setNotesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getNotes = async () => {
      console.log('JAJAJAJAJJAJAJAJ');
      
      try {
        const response = await axios.get(
          "http://localhost:4000/notes"
        );
        setNotesList(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getNotes();
  }, []);

  const handleEdit = (note) => {
    navigate(`/edit/${note.id}`);
    setIsModalOpen(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/notes/${id}`);
      setNotesList(noteList.filter((note) => note.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleArchive = async (id) => {
    try {
      const note = noteList.find((note) => note.id === id);

      const { title, content } = note;
      const updatedNote = { ...note, archive: !note.archive };
      const updateNoteList = noteList.map((n) =>
        n.id === id ? updatedNote : n
      );
      setNotesList(updateNoteList);
      setSelectedNote(updatedNote);

      await axios.put(`http://localhost:4000/notes/${id}`, {
        title,
        content,
        archive: !note.archive,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleActive = async (id) => {
    try {
      const note = noteList.find((note) => note.id === id);

      const { title, content, archive } = note;
      const updatedNote = { ...note, active: !note.active };
      const activeNotes = noteList.map((n) => (n.id === id ? updatedNote : n));
      setNotesList(activeNotes);
      setSelectedNote(updatedNote);

      await axios.put(`http://localhost:4000/notes/${id}`, {
        title,
        content,
        archive,
        active: !note.active,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-start ml-5">
        <ButtonHome />
      </div>
      <div className="w-full h-fit mt-20 mb-10">
        <h1 className="font-merienda font-black lg:text-3xl sm:text-xl">
          <span className="text-rose-600">All</span> Notes
        </h1>
      </div>
      <div>
        <div>
          {noteList.map((note) => (
            <NotesItem
              key={note.id}
              note={note}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onArchive={handleArchive}
              onActive={handleActive}
              onNoteClick={handleNoteClick}
            />
          ))}
        </div>
      </div>
      {selectedNote && (
        <Modal
          openModal={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          note={selectedNote}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onArchive={handleArchive}
          onActive={handleActive}
        />
      )}
      <Footer />
    </div>
  );
};

export default NotesList;