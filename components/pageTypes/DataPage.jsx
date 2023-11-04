import NotePadPage from "../NotePadPage"

const DataPage = (props) => {
    
    return (
        <NotePadPage
            dataList={props.rows}
            scrollLock={false}
            backgroundMode={false}
            pages={props.pages || []}
            pageNames={props.pageNames || []}
        />
    )
}

export default DataPage;