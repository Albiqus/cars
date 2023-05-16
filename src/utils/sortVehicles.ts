export const sortVehicles = (vehicles: any, sortMode: string, gradation: string) => {
    return vehicles.sort((curVeh: any, nextVeh: any) => {
        if (sortMode === 'all') {
            return curVeh.id - nextVeh.id
        }
        if (gradation === 'increase') {
            return curVeh[sortMode] - nextVeh[sortMode]
        }
        return nextVeh[sortMode] - curVeh[sortMode]
    })
}