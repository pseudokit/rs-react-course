import styles from "./Pagination.module.scss";

interface PaginationProps {
    currentPage: number;
    total: number;
    onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    total,
    onChangePage,
}: PaginationProps) => {
    const handleClick = (page: number) => {
        if (page > 0 && page <= total) {
            onChangePage(page);
        }
    };

    return (
        <div className={styles.pagination}>
            <button disabled={currentPage === 1} onClick={() => onChangePage(currentPage - 1)}>
                Previous
            </button>
            <span>
                Page {currentPage} of {total}
            </span>
            <button disabled={currentPage === total} onClick={() => handleClick(currentPage + 1)}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
