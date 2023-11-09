'use client';
import {
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import ArrowUpIcon from '@/components/Icons/ArrowUpIcon';
import ArrowDownIcon from '@/components/Icons/ArrowDownIcon';
import { accordionItems } from '@/common/mocks/about';
import styles from './Accordion.module.css';

const Accordion = () => {
  return (
    <AccordionComponent>
      {accordionItems.map((item, index) => (
        <AccordionItem key={item.heading + index} uuid={`${index}`}>
          <AccordionItemState>
            {({ expanded }) => (
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordionButton}>
                  {item.heading}
                  <button
                    className={`${styles.iconWrapper} ${
                      expanded && styles.expanded
                    }`}
                  >
                    {expanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  </button>
                </AccordionItemButton>
              </AccordionItemHeading>
            )}
          </AccordionItemState>
          <AccordionItemPanel className={styles.accordionPanel}>
            <p className={styles.innerAccordionPanel}>{item.content}</p>
          </AccordionItemPanel>
          <div className={styles.border} />
        </AccordionItem>
      ))}
    </AccordionComponent>
  );
};

export default Accordion;
