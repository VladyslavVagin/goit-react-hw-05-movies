import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; 
import { IconContext } from "react-icons"; 

const ContainerPagination = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Pagination = ({totalPages, onPageChange}) => {
  return (
    <ContainerPagination><ReactPaginate
    containerClassName={"pagination"}
    pageClassName={"page-item"}
    activeClassName={"active-page"}
    onPageChange={onPageChange}
    pageRangeDisplayed={3}
    pageCount={totalPages}
    breakLabel="..."
    previousLabel={
        <IconContext.Provider value={{ color: "#cf9d13", size: "36px" }}>
          <AiFillLeftCircle />
        </IconContext.Provider>
      }
      nextLabel={
        <IconContext.Provider value={{ color: "#cf9d13", size: "36px" }}>
          <AiFillRightCircle />
        </IconContext.Provider>
      }
  /></ContainerPagination>
  )
}

export default Pagination