import { Button,  } from '@material-ui/core';
import React from 'react';

import { SupportCardBasicSchema } from '../../types/SupportCardTypes';
import styles from './styles/SupportCard.module.css';
import ssrImage from '../../../assets/image/ssr.webp';
import srImage from '../../../assets/image/sr.webp';
import vocalImage from '../../../assets/image/vocal.webp';
import danceImage from '../../../assets/image/dance.webp';
import visualImage from '../../../assets/image/visual.webp';

interface SupportCardContainerProps {
    supportCard: SupportCardBasicSchema;
  }
  
  const SupportCardContainer: React.FC<SupportCardContainerProps> = ({ supportCard }) => {

const getImage = () => {
    switch (supportCard.type_name) {
        case "Vocal":
        return vocalImage;
        case "Dance":
        return danceImage;
        case "Visual":
        return visualImage;
        default:
        return ''; // デフォルトの画像または空
    }
    };
  
  return (
    <div className={styles.card_container}>
      <div className={styles.card_name}>
        <div>{supportCard.name}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.card_left}>
            <div className={styles.image_container}>
                <div className={styles.icon_image_container}>
                    <img src={getImage()} alt={supportCard.name} className={styles.icon_image}/>
                </div>
                <div className={styles.card_body}>
                    <img src={supportCard.image} alt={supportCard.name} className={styles.support_card_image} />
                </div>
                <div className={styles.rarity_image_container}>
                    {supportCard.rarity_name === "SSR" ? <img src={ssrImage} alt="SSR" className={styles.rarity_image} /> : <img src={srImage} alt="SR" className={styles.rarity_image}/>}
                </div>
            </div>
        </div>
        <div className={styles.card_right}>
        <div className={styles.mozi}>所持状況</div>
        <div className={styles.dropdown_container}>
            <select className={styles.dropdown}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        <table className={styles.status_table}>
        <thead>
          <tr className={styles.status_label}>
            <th></th>
            <th>0凸</th>
            <th>1凸</th>
            <th>2凸</th>
            <th>3凸</th>
            <th>4凸</th>
            <th>max</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.status_value}>
            <td>メイン</td>
            <td>{supportCard.main?.state_0}</td>
            <td>{supportCard.main?.state_1}</td>
            <td>{supportCard.main?.state_2}</td>
            <td>{supportCard.main?.state_3}</td>
            <td>{supportCard.main?.state_4}</td>
            <td>{supportCard.main?.state_max}</td>
          </tr>
          <tr className={styles.status_value}>
            <td>サブ</td>
            <td>{supportCard.sub?.state_0}</td>
            <td>{supportCard.sub?.state_1}</td>
            <td>{supportCard.sub?.state_2}</td>
            <td>{supportCard.sub?.state_3}</td>
            <td>{supportCard.sub?.state_4}</td>
            <td>{supportCard.sub?.state_max}</td>
          </tr>
        </tbody>
      </table>
        </div>


      </div>
    </div>
  );
  };

export default SupportCardContainer
