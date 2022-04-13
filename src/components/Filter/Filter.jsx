import s from './Filter.module.css';

const Filter = ({ onFilterChange, filter }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        onChange={onFilterChange}
        value={filter}
      />
    </label>
  );
};

export default Filter;
