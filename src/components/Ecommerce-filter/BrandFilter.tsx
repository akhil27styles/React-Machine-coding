import { useEffect, useState } from "react";
import { SingleFilter } from "./SingleFiler";

export const BrandFilter = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getBrands = async () => {
      // Hardcoded brand data instead of fetching from a fake API
      const data = [
        {
          display: "Brand A",
          children: ["SubBrand A1", "SubBrand A2"],
        },
        {
          display: "Brand B",
          children: ["SubBrand B1", "SubBrand B2"],
        },
        {
          display: "Brand C",
          children: ["SubBrand C1", "SubBrand C2"],
        },
        {
          display: "Brand D",
          children: ["SubBrand D1", "SubBrand D2"],
        },
      ];
      setBrands(data);
    };

    getBrands();
  }, []);


  return (
    <div>
      {brands.map((brand) => {
        return (
          <SingleFilter
            key={brand.display}
            name={brand.display}
            subBrands={brand.children}
          />
        );
      })}
    </div>
  );
};
