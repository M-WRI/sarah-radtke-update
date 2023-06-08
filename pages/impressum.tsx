import { MetaData } from "../components/MetaData.component";
import styles from "../styles/Impressum.module.scss";

const impressum = () => {
  const data = {
    address: {
      name: "Privatpraxis Sarah Radtke Physio-, Manualtherapeutin, Heilpraktikerin",
      street: "Waitzstraße 7",
      city: "22607 Hamburg",
    },
    contact: {
      phone: "040.88358553",
      web: "www.sarahradtke.de",
      mail: "praxis@sarahradtke.de",
    },
    authority: {
      address:
        "Gesundheitsamt Hamburg-Altona Bahrenfelder, Straße 245-260, 22765 Hamburg, Telefon 040 428 11-2139 Telefax 040 42790-2703",
      proof:
        "Erteilung der Erlaubnis zur Ausübung der Heilkunde ohne ärztliche Bestallung vom Gesundheitsamt Köln Neumarkt 15-21 50667 Köln Telefon 0221 22133500",
    },
    member:
      "Mitglied im Fachverband Deutscher Heilpraktiker, Landesverband Hamburg https://www.fdh-bw.de/",
    memberTwo:
      "Heilpraktiker/in (verliehen in der BR Deutschland Gesundheitsamt Köln am 28.1.2015 Erteilung der Erlaubnis zur Ausübung der Heilkunde ohne ärztliche Bestallung vom Gesundheitsamt Köln Neumarkt 15-21 50667 Köln Telefon 0221 22133500",
    memberThree:
      "Physiotherapeut/in (verliehen in der BR Deutschland, Rhein-Erft-Kreis)",
  };

  return (
    <main className={styles.container}>
      <MetaData
        title="Sarah Radtke | Impressum"
        description="Das Impressum"
        url="www.sarahradtke.de/impressum"
      />
      <address className={styles.adress}>
        <p className={styles.text}>{data.address.name}</p>
        <p className={styles.text}>{data.address.street}</p>
        <p className={styles.text}>{data.address.city}</p>
      </address>
      <div className={styles.contact}>
        <p className={styles.text}>{data.contact.phone}</p>
        <p className={styles.text}>{data.contact.web}</p>
        <p className={styles.text}>{data.contact.mail}</p>
      </div>
      <div className={styles.authority}>
        <p className={styles.text}>{data.authority.address}</p>
        <p className={styles.text}>{data.authority.proof}</p>
      </div>
      <div>
        <p className={styles.text}>{data.member}</p>
      </div>
      <div>
        <p className={styles.text}>{data.memberTwo}</p>
      </div>
      <div>
        <p className={styles.text}>{data.memberThree}</p>
      </div>
    </main>
  );
};

export default impressum;
