export const Filter = ({ filter, handleChangeInput }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input
        value={filter}
        onChange={handleChangeInput}
        type="text"
        name="filter"
      />
    </label>
  );
};
