import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import { Button, Icons } from "ui";
import styles from "./index.module.scss";
import "./mapStyle.scss";

const url =
  "https://yandex.ru/maps/54/yekaterinburg/?from=api-maps&ll=60.524639%2C56.815690&mode=routes&origin=jsapi_2_1_79&rtext=~56.815690%2C60.524639&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjEzNTI4NTA5ErwB0KDQvtGB0YHQuNGPLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINC80YPQvdC40YbQuNC%2F0LDQu9GM0L3QvtC1INC%2B0LHRgNCw0LfQvtCy0LDQvdC40LUg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQnNC%2B0YHQutC%2B0LLRgdC60LjQuSDRgtGA0LDQutGCLCA3LdC5INC60LjQu9C%2B0LzQtdGC0YAsIDIiCg07GXJCFURDY0I%3D&z=15";
const CarServiceMap = () => {
  const handleClick = () => {
    window.open(url, "_blank")?.focus();
  };
  return (
    <div className={styles.container}>
      <div className={styles.desktopContainer}>
        <YMaps>
          <Map
            width="100%"
            className={styles.map}
            defaultState={{ center: [56.81569, 60.524639], zoom: 15 }}
          >
            <Placemark
              geometry={[56.81569, 60.524639]}
              options={{
                iconLayout: "default#image",
                iconImageHref: "/img/pin.png",
                iconImageSize: [80, 80],
              }}
            />
            <ZoomControl
              options={{
                size: "small",
                position: { right: 20, bottom: 20 },
              }}
            />
          </Map>
        </YMaps>
        <div className={styles.contactsContainer}>
          <img src="/img/SliderImage1.jpg" alt="contactsImg" />
          <div className={styles.contacts}>
            <div className={styles.info}>
              <div>
                <p>Екатеринбург, ул. Московский тракт 7 км</p>
                <p>Телефон: +7 (999) 123-45-67</p>
              </div>
              <div>
                <div>
                  <span>
                    Сервис:{" "}
                    <a className={styles.link} href="mailto:service@example.ru">
                      service@example.ru
                    </a>
                  </span>
                </div>
                <span>
                  Отдел запасных частей:{" "}
                  <a className={styles.link} href="mailto:parts@example.ruu">
                    parts@example.ru
                  </a>
                </span>
              </div>
            </div>
            <Button
              onClick={handleClick}
              className={styles.button}
              type="filled-light"
              icon={<Icons.ChevronRight />}
            >
              Построить маршрут
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarServiceMap;
