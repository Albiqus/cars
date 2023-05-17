
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { CloseButton, Div } from './YandexMap-styles';
import { YandexMapProps } from '../../../../types/props/YandexMapProps';


export const YandexMap = ({ latitude, longitude, onCloseClick }: YandexMapProps) => {

    return (
        <Div>
            <CloseButton onClick={onCloseClick}/>
            <YMaps>
                <Map  defaultState={{
                    center: [
                        latitude, longitude], zoom: 13
                }}>
                    <Placemark geometry={[latitude, longitude]} />
                </Map>
            </YMaps>
        </Div>

    )
}