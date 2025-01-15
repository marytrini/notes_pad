import PropTypes from 'prop-types';
const NotesItem = ({
  note,
  onEdit,
  onDelete,
  onActive,
  onNoteClick,
}) => {
  return (
    <div>
      <div
        onClick={() => onNoteClick(note)}
        className="font-pop font-semibold cursor-pointer hover:text-rose-600 text-center max-w-xs mx-auto truncate whitespace-no-wrap"
      >
        {note.title}
      </div>
    </div>
  );
};


NotesItem.propTypes = {
  note: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onActive: PropTypes.func.isRequired,
  onNoteClick: PropTypes.func.isRequired,
};

export default NotesItem;