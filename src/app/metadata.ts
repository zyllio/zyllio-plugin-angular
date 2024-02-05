import { ComponentMetadataModel } from "@zyllio/zy-sdk";

const Icon = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24" fill="#cccccc">    
  <path fill="#6bd5fc" d="M4 2V8H2V2H4M2 22H4V16H2V22M5 12C5 10.9 4.11 10 3 10C1.9 10 1 10.9 1 12C1 13.11 1.9 14 3 14C4.11 14 5 13.11 5 12M24 6V18C24 19.11 23.11 20 22 20H10C8.9 20 8 19.11 8 18V14L6 12L8 10V6C8 4.89 8.9 4 10 4H22C23.11 4 24 4.89 24 6M19 13H11V15H19V13M21 9H11V11H21V9Z" />
</svg>
`;

export const TimelineMetadata: ComponentMetadataModel = {
  metadataVersion: 2,
  id: 'plugin-timeline',
  icon: Icon,
  label: 'Timeline',
  category: 'Components',
  subCategory: 'Lists',
  hidden: false,
  properties: [{
    id: 'selection',
    name: 'Selection',
    type: 'row-variable',
    tootip: '',
    default: '',
    write: true
  }, {
    id: 'data',
    name: 'Table',
    type: 'table',
    tootip: 'The table being used to populate',
    default: '',
    main: true
  }, {
    id: 'date',
    name: 'Date',
    type: 'column',
    tootip: '',
    default: ''
  }, {
    id: 'label',
    name: 'Label',
    type: 'column',
    tootip: '',
    default: ''
  }, {
    id: 'description',
    name: 'Description',
    type: 'column',
    tootip: '',
    default: ''
  }, {
    id: 'filter',
    name: 'Filter',
    type: 'filter',
    tootip: 'Filter the table rows',
    default: ''
  }, {
    id: 'sort',
    name: 'Sort',
    type: 'sort',
    tootip: 'Sort the table rows',
    default: ''
  }],
  styles: []
}
