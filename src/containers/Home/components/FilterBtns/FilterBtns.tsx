import FilterBtn from "../FilterBtn/FilterBtn";
import { filterBtnData } from "../../data/filterBtnsData";
import { Wrapper } from "./filterBtnsStyes";

const FilterBtns = () => {
  return (
    <Wrapper>
      {filterBtnData.map((item) => (
        <FilterBtn key={item.id} text={item.text} />
      ))}
    </Wrapper>
  );
};

export default FilterBtns;
