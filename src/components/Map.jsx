
const Map = () => {
    return (
        <div className="map-container">
            <a
                href="https://yandex.kz/maps/ru/29575/aktau/?utm_medium=mapframe&utm_source=maps"
                className="map-link top"
            >
                Актау
            </a>
            <a
                href="https://yandex.kz/maps/ru/profile?ll=51.232156%2C43.654544&utm_medium=mapframe&utm_source=maps&z=16"
                className="map-link bottom"
            >
                Яндекс Карты — транспорт, навигация, поиск мест
            </a>
            <iframe
                src="https://yandex.kz/map-widget/v1/profile?ll=51.232156%2C43.654544&z=16"
                className="map-iframe"
                frameBorder="1"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Map;
