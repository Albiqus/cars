import { RootState } from "../../../store/store";
import { Color, Div, Name, Year, VehicleItem, ColorWrapper, Price, ColorName, EditingPanel, DeleteButton, EditButton, PriceInput, AcceptButton, Model, NameInput, ModelInput, Location } from "./Content-styles"
import { useDispatch, useSelector } from 'react-redux'
import { sortVehicles } from "../../../utils/sortVehicles";
import { useState } from "react";
import { changeVehicle } from "../../../actionCreators/content/changeVehicle";
import { deleteVehicle } from "../../../actionCreators/content/deleteVehicle";
import { YandexMap } from "../Map/YandexMap";
import { Vehicle } from "../../../types/Vehicle";


export const Content = () => {

    const disptach = useDispatch()
    let { vehicles } = useSelector((state: RootState) => state.content);
    const { sortMode, gradation } = useSelector((state: RootState) => state.sorting);

    const [mapVehicleId, setMapVehicleId] = useState(0)
    const [editVehicleId, setEditVehicleId] = useState(0)
    const [editableName, setEditableName] = useState('')
    const [editableModel, setEditableModel] = useState('')
    const [editablePrice, setEditablePrice] = useState('')

    if (vehicles) {
        vehicles = sortVehicles(vehicles, sortMode, gradation)
    }

    const onEditButtonClick = (e: React.MouseEvent) => {
        const id = +e.currentTarget.getAttribute('id')!
        const editableVehicle = vehicles.find((vehicle: Vehicle) => vehicle.id === id)

        setEditVehicleId(id)
        setEditableName(editableVehicle.name)
        setEditableModel(editableVehicle.model)
        setEditablePrice(editableVehicle.price)
    }

    const onNameChange = (e: React.ChangeEvent) => {
        setEditableName((e.target as HTMLInputElement).value)
    }

    const onModelChange = (e: React.ChangeEvent) => {
        setEditableModel((e.target as HTMLInputElement).value)
    }

    const onPriceChange = (e: React.ChangeEvent) => {
        setEditablePrice((e.target as HTMLInputElement).value)
    }

    const onAcceptButtonClick = () => {
        disptach(changeVehicle(editableName, editableModel, editablePrice, editVehicleId))
        setEditVehicleId(0)
    }

    const onDeleteButtonClick = (e: React.MouseEvent) => {
        const id = +e.currentTarget.getAttribute('id')!
        disptach(deleteVehicle(id))
    }

    const onLocationClick = (e: React.MouseEvent) => {
        const id = +e.currentTarget.getAttribute('id')!
        setMapVehicleId(id)
    }

    const onCloseLocationClick = () => {
        setMapVehicleId(0)
    }

    const vehicleItems = vehicles?.map((vehicle: any) => {
        return (
            <VehicleItem key={vehicle.id}>
                {mapVehicleId === vehicle.id && <YandexMap latitude={vehicle.latitude} longitude={vehicle.longitude} onCloseClick={onCloseLocationClick} />}
                <EditingPanel>
                    {editVehicleId === vehicle.id && <AcceptButton onClick={onAcceptButtonClick} />}
                    {editVehicleId !== vehicle.id && <EditButton id={vehicle.id} onClick={onEditButtonClick} />}
                    <DeleteButton id={vehicle.id} onClick={onDeleteButtonClick} />
                </EditingPanel>

                {editVehicleId !== vehicle.id && <Name>{vehicle.name} </Name>}
                {editVehicleId === vehicle.id && <NameInput onChange={onNameChange} value={editableName} />}

                {editVehicleId !== vehicle.id && <Model>{vehicle.model}</Model>}
                {editVehicleId === vehicle.id && <ModelInput onChange={onModelChange} value={editableModel} />}

                <Year>год: {vehicle.year}</Year>
                <ColorWrapper>
                    <ColorName>цвет: {vehicle.color}</ColorName>
                    <Color color={vehicle.color} />
                </ColorWrapper>
                <Location id={vehicle.id} onClick={onLocationClick}>местоположение</Location>

                {editVehicleId !== vehicle.id && <Price>{vehicle.price}</Price>}
                {editVehicleId === vehicle.id && <PriceInput onChange={onPriceChange} value={editablePrice} />}
            </VehicleItem>
        )
    })


    return (
        <Div>
            {vehicleItems}
        </Div>
    )
}