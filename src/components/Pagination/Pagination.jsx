import ReactPaginate from 'react-paginate';

const Pagination = ({totalPages, onPageChange}) => {
  return (
    <div><ReactPaginate
    containerClassName={"pagination"}
    pageClassName={"page-item"}
    activeClassName={"active"}
    onPageChange={onPageChange}
    pageCount={totalPages}
    breakLabel="..."
  /></div>
  )
}

export default Pagination