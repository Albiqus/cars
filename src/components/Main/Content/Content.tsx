import { RootState } from "../../../store/store";
import { Color, Div, Name, Year, VehicleItem, ColorWrapper, Price, ColorName, EditingPanel, DeleteButton, EditButton, PriceInput, AcceptButton, Model, NameInput, ModelInput } from "./Content-styles"
import { useDispatch, useSelector } from 'react-redux'
import { sortVehicles } from "../../../utils/sortVehicles";
import { useState } from "react";
import { changeVehicle } from "../../../actionCreators/content/changeVehicle";
import { deleteVehicle } from "../../../actionCreators/content/deleteVehicle";


export const Content = () => {

    const disptach = useDispatch()
    let { vehicles } = useSelector((state: RootState) => state.content);
    const { sortMode, gradation } = useSelector((state: RootState) => state.sorting);

    const [editVehicleId, setEditVehicleId] = useState(0)
    const [editableName, setEditableName] = useState('')
    const [editableModel, setEditableModel] = useState('')
    const [editablePrice, setEditablePrice] = useState('')

    if (vehicles) {
        vehicles = sortVehicles(vehicles, sortMode, gradation)
    }

    const onEditButtonClick = (e: any) => {
        const id = +e.currentTarget.getAttribute('id')
        const editableVehicle = vehicles.find((vehicle: any) => vehicle.id === id)

        setEditVehicleId(id)
        setEditableName(editableVehicle.name)
        setEditableModel(editableVehicle.model)
        setEditablePrice(editableVehicle.price)
    }
  
    const onNameChange = (e: any) => {
        setEditableName(e.target.value)
    }

    const onModelChange = (e: any) => {
        setEditableModel(e.target.value)
    }

    const onPriceChange = (e: any) => {
        setEditablePrice(e.target.value)
    }

    const onAcceptButtonClick = (e: any) => {
        disptach(changeVehicle(editableName, editableModel, editablePrice, editVehicleId))
        setEditVehicleId(0)
    }

    const onDeleteButtonClick = (e: any) => {
        const id = +e.currentTarget.getAttribute('id')
        disptach(deleteVehicle(id))
    }

    const vehicleItems = vehicles?.map((vehicle: any) => {
        return (
            <VehicleItem key={vehicle.id}>

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