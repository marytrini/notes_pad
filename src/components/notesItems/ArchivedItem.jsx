import PropTypes from 'prop-types';

const ArchivedItem = ({note, onEdit, onDelete, onArchive, onActive, onNoteClick}) => {
  return (
    <div>
        <div onClick={() => onNoteClick(note)} className='font-pop font-semibold cursor-pointer hover:text-rose-600'>
            {note.title}
        </div>
    </div>
  )
}
ArchivedItem.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  onActive: PropTypes.func,
  onNoteClick: PropTypes.func.isRequired,
};

export default ArchivedItem;
