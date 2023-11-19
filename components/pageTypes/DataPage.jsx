import NotePadPage from "../NotePadPage"

const DataPage = (props) => {
    
    return (
        <NotePadPage
            dataList={props.rows}
            scrollLock={false}
            backgroundMode={false}
            pages={props.pages || []}
            pageNames={props.pageNames || []}
            setPageNumber={props.setPageNumber}
            setShowWelcome = {props.setShowWelcome}
        />
    )
}

export default DataPage;