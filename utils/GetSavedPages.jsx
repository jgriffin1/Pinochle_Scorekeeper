//eventually this file will use some kind of file-saving capibilities.
//but rn it'll just return dummy data

import { getDummyPageData } from "./DummyData";

export default function getSavedPages () {
    return getDummyPageData(10);
}
