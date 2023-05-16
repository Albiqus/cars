import { RootState } from "../../../store/store";
import { Color, Description, Div, H1, P, VehicleItem, ColorWrapper, Price } from "./Content-styles"
import { useSelector } from 'react-redux'

export const Content = () => {

    const { vehicles } = useSelector((state: RootState) => state.vehicles);
    console.log(vehicles)
    const vehicleItems = vehicles?.map((vehicle: any) => {
        return (
            <VehicleItem key={vehicle.id}>
                <H1>{vehicle.name} {vehicle.model}</H1>
                <Description>
                    <P>год: {vehicle.year}</P>
                    <ColorWrapper>
                        <P>цвет: {vehicle.color}</P>
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