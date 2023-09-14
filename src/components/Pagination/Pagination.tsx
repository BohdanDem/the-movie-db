import React from 'react';
import {TablePagination} from "@mui/material";
import {useAppSelector} from "../../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";
import css from "./Pagination.module.css"

const Pagination = () => {

    const {total_pages} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1', size: '20'});
    const handleChangePage = (e: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        setQuery(prev => {
            prev.set('page',(page+1).toString())
            return prev
        })
    };

    return (
        <div className={css.pagination}>
            <TablePagination
                component="div"
                count={total_pages}
                page={+query.get('page')-1}
                onPageChange={handleChangePage}
                rowsPerPage={+query.get('size')}
                rowsPerPageOptions={[10, 20, 30]}
            />
        </div>
    );
};

export default Pagination;