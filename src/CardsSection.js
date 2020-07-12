import React from 'react';
import {Card} from '@uifabric/react-cards';
import {Text, initializeIcons, HighContrastSelectorWhite, disableBodyScroll} from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

import Navigation from './Navigation';

const container = {
    display: 'flex',
    justifyContent:'center',
    margin: '10vh 0',
}

const icon = {
    fontSize:24,
    padding: 15,
    verticalAlign: 'middle',
    paddingLeft:0,
    color: '#0078d4',
}

const styles ={
    cardStyles: {
        root: {
            backgroundColor: HighContrastSelectorWhite,
            padding: 20,
            borderTop: '5px solid #0078d4',
            width: '90%',
            maxWidth:'90%',
            margin: 'auto'
        }
    },
    header: {
        root: {
            fontSize: 20,
            fontWeight: 'bold',
        }
    },
    amount : {
        root: {
            fontSize: 26,
            paddingBottom: 20,
            paddingTop: 30,
        }
    },
    percentage: {
        root: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#0078d4',
        }
    }
}

const cards = [
    {
        title: 'Current Balance',
        amount: '$10 000',
        icon:'Money',
        percentage: '2.3'
    },
    {
        title: 'Current Expanses',
        amount: '$50 000',
        icon:'PaymentCard',
        percentage: '0.6'
    },
    {
        title: 'Current Income',
        amount: '$666000',
        icon:'Savings',
        percentage: '20.0'
    },

]


const CardsSection = () => {
    initializeIcons();
    return(
        <div style={container}>
            {cards.map((card) => (
                <div className="s-Grid-col ms-sm3 ms-xl3">
                  <Card styles = {styles.cardStyles}>
                      <Card.Section>
                          <Card.Item>
                              <i style={icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
                              <Text styles={styles.header}>{card.title}</Text>
                          </Card.Item>
                          <Card.Item>
                              <Text styles={styles.amount}>{card.amount}</Text>
                          </Card.Item>
                          <Card.Item>
                                <Text styles={styles.percentage}>{card.percentage}</Text>
                          </Card.Item>
                      </Card.Section>
                  </Card>
                </div>
            ))}
        </div>
    )
}

export default CardsSection;