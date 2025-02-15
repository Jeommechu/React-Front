import React from 'react';
import { Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { color } from '../../styles/color';
import fontSize from '../../styles/fontSize';
import { NoDataText } from './NoDataText';

const { medium, big } = fontSize;

const { jmt } = color;

const Menu = styled.div`
  width: 100%;
  word-break: keep-all;
  font-size: ${medium};

  dl {
    padding: 10px 10px;

    dt {
      width: 100%;
      font-size: 1.1em;
      font-weight: normal;
      letter-spacing: 3px;
    }

    dd {
      width: calc(100% - 120px);
      color: ${jmt};
      font-weight: bold;
      margin-top: 10px;
    }
  }

  dl + dl {
    border-top: 1px solid #e5e5e5;
  }
`;

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const TabMenu = ({ item }) => {
  const { t } = useTranslation();

  const hasMenu = item.foods && item.foods.length > 0;
  return (
    <Tab.Pane eventKey="menu">
      {hasMenu ? (
        <Menu>
          {item.foods &&
            item.foods.map((food) => (
              <dl key={food.menuId}>
                <dt>{food.menuNm}</dt>
                <dd>
                  {formatPrice(food.menuPrice)}
                  {t('원')}
                </dd>
              </dl>
            ))}
        </Menu>
      ) : (
        <NoDataText>{t('메뉴 정보가 없습니다')}</NoDataText>
      )}
    </Tab.Pane>
  );
};

export default React.memo(TabMenu);
