import { useState } from "react";

export const SingleFilter = ({ name, subBrands }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedSubBrands, setCheckedSubBrands] = useState([]);

  const handleOpenChange = () => {
    setIsOpen((prev) => !prev);
  };

  const handleBrandCheck = (e) => {
    e.stopPropagation();
    if (e.target.checked) {
      setCheckedSubBrands(subBrands);
    } else {
      setCheckedSubBrands([]);
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleSubBrandCheck = (e) => {
    const { name, checked } = e.target;
    setCheckedSubBrands((prev) => {
      if (checked) {
        return [...prev, name];
      }
      return prev.filter((brand) => brand !== name);
    });
  };

  const isPartial =
    checkedSubBrands.length > 0 && checkedSubBrands.length < subBrands.length;

  const areAllBrandsSelected = checkedSubBrands.length === subBrands.length;

  return (
    <div onClick={handleOpenChange}>
      <input
        id={name}
        type="checkbox"
        checked={areAllBrandsSelected}
        onClick={handleClick}
        onChange={handleBrandCheck}
      />
      <label htmlFor={name} onClick={handleClick}>
        {name} {isPartial ? "(Partially checked)" : ""}
      </label>
      {isOpen && (
        <div style={{ paddingLeft: "5rem" }}>
          {subBrands.map((subBrand) => {
            return (
              <div key={subBrand} onClick={handleClick}>
                <input
                  id={subBrand}
                  name={subBrand}
                  type="checkbox"
                  checked={checkedSubBrands.includes(subBrand)}
                  onChange={handleSubBrandCheck}
                />
                <label htmlFor={subBrand}>{subBrand}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
