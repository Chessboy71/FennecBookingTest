import { motion } from "framer-motion";
import { categories, Category } from "../utils";

const FilterList = ({
  filter,
  setFilter,
}: {
  filter: Category;
  setFilter: (filter: Category) => void;
}) => {
  return (
    <div className="flex flex-row gap-0 pt-4 overflow-x-auto no-scrollbar [scrollbar-width:none] px-4">
      {categories.map((category: Category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className="relative px-4 py-2 shrink-0 text-xs font-bold w-auto rounded-full border-4 bg-white border-white"
        >
          {category === filter && (
            <motion.span
              layoutId="active-filter"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />
          )}
          <span className="relative -left-0.5  z-10">{category}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterList;
