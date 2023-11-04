const NoteBook = ({pageList, currPage, ...props}) => {
    return (
        <>
            {pageList[currPage]}
        </>
    )
}

export default NoteBook;