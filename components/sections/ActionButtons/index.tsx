import ActionCard from "../../ui/ActionCard";
import Container from "../../ui/Container";
import { IconFace, IconGift, IconPeople } from "../../ui/Icons";

import styles from "./style.module.scss";

const ACTION_CARDS = [
  {
    id: 1,
    subtitle: "Loyalty Program",
    title: "For Happy Skin",
    buttonText: "Join the program",
    icon: IconGift,
  },
  {
    id: 2,
    subtitle: "Organic beauty is shared,",
    title: "Sponsor those you love!",
    buttonText: "Refer a Friend",
    icon: IconPeople,
  },
  {
    id: 3,
    subtitle: "Treat yourself to good weather",
    title: "at Maison Absolution",
    buttonText: "Try Our Treatments",
    icon: IconFace,
  },
];

const ActionButtonsSection: React.FC = () => {
  return (
    <section className={styles.actionButtons}>
      <Container>
        <ul className={styles.actionButtonsList}>
          {ACTION_CARDS.map((card) => (
            <li key={card.id} className={styles.actionButtonsItem}>
              <ActionCard
                className={styles.actionButtonsCard}
                Icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
                buttonText={card.buttonText}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ActionButtonsSection;
