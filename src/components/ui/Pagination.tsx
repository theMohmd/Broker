import ReactPaginate from "react-paginate";
import { LeftIcon, RightIcon } from "src/assets/Icons";
const Pagination = () => {
    return (
        <ReactPaginate
            previousLabel={<LeftIcon />}
            nextLabel={<RightIcon />}
            pageClassName="page-item p-2 rounded-full size-10 flex items-center justify-center"
            breakLabel="..."
            pageCount={100}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            containerClassName="font-iranSans flex [&>*]:shrink-0 gap-2 p-5 items-center justify-center"
            activeClassName="bg-primary text-white"
        />
    );
};

export default Pagination;
