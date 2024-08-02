import React from "react";

const Searchbar = ({
  onChangeFilter,
}: {
  onChangeFilter: (filter: string) => void;
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <div className="search-bar w-50">
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Search hobbies"
          className="form-control form-control-lg"
        />
      </div>
    </div>
  );
};

export default Searchbar;
