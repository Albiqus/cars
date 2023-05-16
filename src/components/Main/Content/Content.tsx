import { RootState } from "../../../store/store";
import { Color, Description, Div, Name, Year, VehicleItem, ColorWrapper, Price, ColorName } from "./Content-styles"
import { useSelector } from 'react-redux'
import { sortVehicles } from "../../../utils/sortVehicles";


export const Content = () => {

    let { vehicles } = useSelector((state: RootState) => state.content);
    const { sortMode, gradation } = useSelector((state: RootState) => state.sorting);
    
    if (vehicles) {
        vehicles = sortVehicles(vehicles, sortMode, gradation)
    }

    const vehicleItems = vehicles?.map((vehicle: any) => {
        return (
            <VehicleItem key={vehicle.id}>
                <Name>{vehicle.name} {vehicle.model}</Name>
                <Description>
                    <Year>год: {vehicle.year}</Year>
                    <ColorWrapper>
                        <ColorName>цвет: {vehicle.color}</ColorName>
                        <Color color={vehicle.color} />
                    </ColorWrapper>
                </Description>
                <Price>{vehicle.price} $</Price>
            </VehicleItem>
        )
    })


    return (
        <Div>
            {vehicleItems}
        </Div>
    )
}