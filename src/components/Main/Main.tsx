import { Content } from "./Content/Content";
import { Div } from "./Main-styles"
import { SortingPanel } from "./SortingPanel/SortingPanel";


export const Main = () => {

    return (
        <Div>
            <SortingPanel />
            <Content/>
        </Div>
    )
}