import { IonButton, IonCol, IonGrid, IonIcon, IonInput, IonRow } from "@ionic/react";
import { arrowDownCircleOutline, arrowDownCircleSharp } from 'ionicons/icons';
import { downloadFirearmRar } from '../external/firebase';
import './Firearms.css'
import { useState } from "react";

interface Firearm {
    name: string,
    caliber: string[]
}

const Firearms: React.FC = () => {
    const [fileSearchText, setFileSearchText] = useState("");
    const [firearms, setFirearms] = useState<Firearm[]>([
        { name: 'Ruger KMKIII6', caliber: ['.22 LR'] },
        { name: 'Colt 1911', caliber: ['.45 ACP'] },
        { name: 'Sig Sauer P250', caliber: ['9×19mm Parabellum', '.45 ACP'] }
    ]);
    const [filteredFirearms, setFilteredFirearms] = useState<Firearm[]>(firearms);

    const filterFirearms = (firearm: Firearm, query: string) => {
        const gunName = firearm.name.toLowerCase().includes(query.toLowerCase())
        const gunCaliber = firearm.caliber.some((cal: string) => cal.toLowerCase().includes(query.toLowerCase()))
        return gunName || gunCaliber
    }

    const handleInputChange = (value: string) => {
        const query = value.trim().toLowerCase();
        setFileSearchText(value);
        setFilteredFirearms(
            firearms.filter(firearm => filterFirearms(firearm, query))
        );
    };

    const handleBlur = () => {
        setFilteredFirearms(
            firearms.filter(firearm => filterFirearms(firearm, fileSearchText))
        );
    };

    return (
        <div>
            <IonInput
                id="file-search"
                label="File Search"
                placeholder="Search files..."
                value={fileSearchText}
                onIonInput={(e) => handleInputChange(e.detail.value || "")}
                onIonBlur={handleBlur}
            ></IonInput>
            <IonGrid id="file-grid">
                {filteredFirearms.map((firearm, index) => (
                    <IonRow key={index}>
                        <IonCol>
                            <p className="file-name">{firearm.name}</p>
                        </IonCol>
                        <IonCol>
                            <IonButton className="ion-float-right" onClick={() => downloadFirearmRar(firearm.name)}>
                                <IonIcon ios={arrowDownCircleOutline} md={arrowDownCircleSharp} size="large"></IonIcon>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                ))}
            </IonGrid>
        </div>
    )
}

export default Firearms;
